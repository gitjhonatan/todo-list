import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
    public tarefa_service: TarefaService
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

  deletarTarefa(id: string): void {
    this.tarefa_service.deleteTarefa(id)
      .subscribe((data: TarefaInterface[]) => {
      })
  }

  editarTarefa(element: TarefaInterface): void {
  }
}
