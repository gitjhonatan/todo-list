import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ModalSharedComponent } from 'src/app/shared/modal-shared/modal-shared.component';


export interface TarefaInterface {
  status: boolean;
  desc: string;
  subtasks: TarefaInterface | {};
}

const tarefas: TarefaInterface[] = [
  { status: true, desc: 'fazer o backend', subtasks: {} },
  { status: false, desc: 'outra task', subtasks: {} },
  { status: true, desc: 'sdasdas', subtasks: {} },
  { status: true, desc: 'fazer o asasas', subtasks: {} },
];


@Component({
  selector: 'app-home.view',
  templateUrl: './home.view.component.html',
  styleUrls: ['./home.view.component.scss']
})
export class HomeViewComponent implements OnInit {
  @ViewChild(MatTable)
  table?: MatTable<any>;
  colunas: string[] = ['status', 'desc', 'actions'];
  tarefas = tarefas;

  constructor(public dialog: MatDialog) { }

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

  deletarTarefa(position: number): void {
  }

  editarTarefa(element: TarefaInterface): void {
  }
}
