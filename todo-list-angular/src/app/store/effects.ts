import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TarefaService } from "../services/TarefaService";
import { switchMap, map, mergeMap } from "rxjs/operators";
import { getPosts, getPostsSuccess } from './actions'
import { TarefaInterface } from "../interfaces/TarefaInterface";
import { of } from "rxjs";
@Injectable()
export class Effects {
  constructor(private actions$: Actions, private tarefa_service: TarefaService) { }

  carregaTarefas$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPosts),
      // withLatestFrom(this.store.select(getPosts)),
      mergeMap((action) => {
          return this.tarefa_service.getTarefas().pipe(
            map((posts: any) => {
              return getPostsSuccess({ posts: posts });
            })
          );
      })
    );
  });


}
