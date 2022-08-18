import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  @Output() homeNovaTarefaEvento: EventEmitter<any> = new EventEmitter();
  colunas: string[] = ['status', 'desc', 'actions'];
  tarefas!: TarefaInterface[];

  constructor(
    public dialog: MatDialog,
    public tarefa_service: TarefaService,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

   abrirModal (element: TarefaInterface | null): void {
    const dialogRef = this.dialog.open(ModalSharedComponent, {

      width: '250px',
      data: element === null ? {
        name: null,
      } : { ...element },
    });
    this.homeNovaTarefaEvento.emit('fsdf')

    const sub = dialogRef.componentInstance.novaTarefaEvento.subscribe((tarefa) => {
      console.log(tarefa)
      console.log(this.homeNovaTarefaEvento)
      this.homeNovaTarefaEvento.emit(tarefa)
      // this.tarefas.push(da)
      // this.table?.renderRows()

      // do something
    });
  }

  renderTarefa(element: any): void {
    console.log(element)
    console.log("khp")
    // this.tarefas.push({desc: element})
  }

}
