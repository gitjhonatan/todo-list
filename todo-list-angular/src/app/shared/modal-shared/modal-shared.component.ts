import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TarefaInterface } from 'src/app/interfaces/TarefaInterface';
import { TarefaService } from 'src/app/services/TarefaService';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-modal-shared',
  templateUrl: './modal-shared.component.html',
  styleUrls: ['./modal-shared.component.scss'],
  providers: [TarefaService]
})


export class ModalSharedComponent implements OnInit {
  @Output() novaTarefaEvento: EventEmitter<any> = new EventEmitter();

  element?: TarefaInterface;
  editing?: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: TarefaInterface,
    public tarefa_service: TarefaService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  criarTarefa(descricao: string): void {
    const nova_Tarefa =
    {
      desc: descricao
    }
    const tasks = this.tarefa_service.postTarefa(nova_Tarefa)
      .subscribe((data: TarefaInterface[]) => {
        this._snackBar.open('Tarefa criada!', 'OK', {
          panelClass: ['mat-toolbar', 'mat-success']
        });
      })
  }

  editarTarefa(element: TarefaInterface, nova_descricao: string): void {
    const task = this.tarefa_service.putTarefa({ ...element, desc: nova_descricao })
      .subscribe((data: TarefaInterface[]) => {
        this._snackBar.open('Tarefa editada!', 'OK', {
          panelClass: ['mat-toolbar', 'mat-success']
        });
      })
  }
}
