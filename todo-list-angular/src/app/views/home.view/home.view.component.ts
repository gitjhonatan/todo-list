import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TarefaInterface } from 'src/app/interfaces/TarefaInterface';
import { TarefaService } from 'src/app/services/TarefaService';
import { ModalSharedComponent } from 'src/app/shared/modal-shared/modal-shared.component';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store'
import { AppStateInterface } from 'src/app/interfaces/AppStateInterface';

@Component({
  selector: 'app-home.view',
  templateUrl: './home.view.component.html',
  styleUrls: ['./home.view.component.scss'],
  providers: [TarefaService]
})


export class HomeViewComponent implements OnInit {
  @Output() homeNovaTarefaEvento: EventEmitter<any> = new EventEmitter();
  colunas: string[] = ['status', 'desc', 'actions'];
  tarefas!: any;
  constructor(
    public dialog: MatDialog,
    public tarefa_service: TarefaService,
  ) {

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
    this.homeNovaTarefaEvento.emit('fsdf')

    const sub = dialogRef.componentInstance.novaTarefaEvento.subscribe((tarefa) => {

    });
  }

  renderTarefa(element: any): void {
    console.log(element)
    console.log("khp")
    // this.tarefas.push({desc: element})
  }

}
