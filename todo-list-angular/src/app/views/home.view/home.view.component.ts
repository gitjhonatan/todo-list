import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { TarefaService } from 'src/app/services/TarefaService';

@Component({
  selector: 'app-home.view',
  templateUrl: './home.view.component.html',
  styleUrls: ['./home.view.component.scss'],
  providers: [TarefaService]
})

export class HomeViewComponent implements OnInit {
  constructor(
  ) {
  }

  ngOnInit(): void {
  }
}
