import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { TarefaInterface } from 'src/app/interfaces/TarefaInterface';
import { TarefaService } from 'src/app/services/TarefaService';
import { select, Store } from '@ngrx/store'
import * as PostActions from '../../store/actions'
import { carregandoSelector } from 'src/app/store/selectors';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/interfaces/AppStateInterface';

@Component({
  selector: 'app-tabela-lista',
  templateUrl: './tabela-lista.component.html',
  styleUrls: ['./tabela-lista.component.scss']
})
export class TabelaListaComponent implements OnInit {

  table?: MatTable<any>;
  colunas: string[] = ['status', 'desc', 'actions'];
  tarefas$: Observable<TarefaInterface[]>;

  constructor(public tarefa_service: TarefaService, private _snackBar: MatSnackBar, private store: Store<AppStateInterface>) {
    this.tarefas$ = this.store.pipe(select(carregandoSelector))
    // this.store.dispatch(PostActions.getPosts())
  }

  ngOnInit(): void {
    this.tarefa_service.getTarefas()
      .subscribe((data: TarefaInterface[]) => {
        this.store.dispatch(PostActions.getPosts())
        this.table?.renderRows()
      })
  }

  deletarTarefa(element: TarefaInterface): void {
    this.tarefa_service.deleteTarefa(element)
      .subscribe((data: TarefaInterface[]) => {
        this.carregarLista()
      }
      )
  }

  carregarLista() {
    this.store.dispatch(PostActions.getPosts())
  }

  editarTarefa(element: TarefaInterface): void {
  }



}
