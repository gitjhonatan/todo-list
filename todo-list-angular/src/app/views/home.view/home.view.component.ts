import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { TarefaInterface } from 'src/app/interfaces/TarefaInterface';
import { TarefaService } from 'src/app/services/TarefaService';
import { ModalSharedComponent } from 'src/app/shared/modal-shared/modal-shared.component';

@Component({
  selector: 'app-home.view',
  templateUrl: './home.view.component.html',
  styleUrls: ['./home.view.component.scss'],
  providers: [TarefaService]
})

export class HomeViewComponent implements OnInit {
  @ViewChild(MatTable)
  table?: MatTable<any>;
  colunas: string[] = ['status', 'desc', 'actions'];
  tarefas!: TarefaInterface[];

  constructor(
    public dialog: MatDialog,
    public tarefa_service: TarefaService,
    private _snackBar: MatSnackBar
  ) {
    this.tarefa_service.getTarefas()
      .subscribe((data: TarefaInterface[]) => {
        this.tarefas = data
      })
  }

  ngOnInit(): void {
  }

  abrirModal(element: TarefaInterface | null): void {
    const dialogRef = this.dialog.open(ModalSharedComponent, {
      width: '250px',
      data: element === null ? {
        name: null,
      } : { ...element },
    });
  }

  deletarTarefa(element: TarefaInterface): void {
    this.tarefa_service.deleteTarefa(element)
      .subscribe((data: TarefaInterface[]) => {
        this.tarefas = this.tarefas.filter((task) => {
          console.log(task)
          console.log(element)
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

  renderTarefa(element: any): void {
    console.log(element)
    // this.tarefas.push({desc: element})
  }
}
