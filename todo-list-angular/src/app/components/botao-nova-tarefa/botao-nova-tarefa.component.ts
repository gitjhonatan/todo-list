import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TarefaInterface } from 'src/app/interfaces/TarefaInterface';
import { ModalSharedComponent } from 'src/app/shared/modal-shared/modal-shared.component';
import { getPosts } from 'src/app/store/actions';

@Component({
  selector: 'app-botao-nova-tarefa',
  templateUrl: './botao-nova-tarefa.component.html',
  styleUrls: ['./botao-nova-tarefa.component.scss']
})
export class BotaoNovaTarefaComponent implements OnInit {

    constructor(
      public dialog: MatDialog,
      public store: Store
    ) { }

  ngOnInit(): void {
  }

  abrirModal(element: TarefaInterface | null): void {
    const dialogRef = this.dialog.open(ModalSharedComponent, {
      width: '250px',
      data: element === null ? {
        name: null,
      } : { ...element },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.store.dispatch(getPosts())
    });
  }
}
