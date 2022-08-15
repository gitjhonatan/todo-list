import { Component, OnInit, Inject } from '@angular/core';
import { TarefaInterface } from 'src/app/views/home.view/home.view.component';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-shared',
  templateUrl: './modal-shared.component.html',
  styleUrls: ['./modal-shared.component.scss']
})
export class ModalSharedComponent implements OnInit {
  element?: TarefaInterface;
  editing?: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: TarefaInterface,
    public dialogRef: MatDialogRef<ModalSharedComponent>
  ) {}


  ngOnInit(): void {
    this.editing = false

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
