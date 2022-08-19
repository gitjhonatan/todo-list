import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoNovaTarefaComponent } from './botao-nova-tarefa.component';

describe('BotaoNovaTarefaComponent', () => {
  let component: BotaoNovaTarefaComponent;
  let fixture: ComponentFixture<BotaoNovaTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoNovaTarefaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoNovaTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
