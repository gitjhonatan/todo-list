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
import { MatDialog } from '@angular/material/dialog';
import { ModalSharedComponent } from 'src/app/shared/modal-shared/modal-shared.component';

@Component({
  selector: 'app-tabela-lista',
  templateUrl: './tabela-lista.component.html',
  styleUrls: ['./tabela-lista.component.scss']
})
export class TabelaListaComponent implements OnInit {

  table?: MatTable<any>;
  colunas: string[] = ['desc', 'actions'];
  tarefas$: Observable<TarefaInterface[]>;

  constructor(public tarefa_service: TarefaService, private store: Store<AppStateInterface>, public dialog: MatDialog) {
    this.tarefas$ = this.store.pipe(select(carregandoSelector))
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
    const dialogRef = this.dialog.open(ModalSharedComponent, {
      width: '250px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.carregarLista()
    });
  }



}
