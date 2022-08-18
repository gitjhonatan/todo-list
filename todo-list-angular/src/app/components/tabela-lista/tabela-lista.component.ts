import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { TarefaInterface } from 'src/app/interfaces/TarefaInterface';
import { TarefaService } from 'src/app/services/TarefaService';

@Component({
  selector: 'app-tabela-lista',
  templateUrl: './tabela-lista.component.html',
  styleUrls: ['./tabela-lista.component.scss']
})
export class TabelaListaComponent implements OnInit {

  table?: MatTable<any>;
  colunas: string[] = ['status', 'desc', 'actions'];
  tarefas!: TarefaInterface[];


  constructor(public tarefa_service: TarefaService, private _snackBar: MatSnackBar) {
    this.tarefa_service.getTarefas()
      .subscribe((data: TarefaInterface[]) => {
        this.tarefas = data
      })
  }

  ngOnInit(): void {
  }

  deletarTarefa(element: TarefaInterface): void {
    this.tarefa_service.deleteTarefa(element)
      .subscribe((data: TarefaInterface[]) => {
        this.tarefas = this.tarefas.filter((task) => {
          return task._id !== element._id
        })
        this.table?.renderRows()
        // )
        this._snackBar.open('Tarefa Excluída!', 'OK', {
          panelClass: ['mat-toolbar', 'mat-success']
        });
      })
  }

  editarTarefa(element: TarefaInterface): void {
  }



}
