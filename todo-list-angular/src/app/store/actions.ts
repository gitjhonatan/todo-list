import { createAction, props } from '@ngrx/store'
import { TarefaInterface } from '../interfaces/TarefaInterface'

export const getPosts = createAction("[Posts] Get Posts")
export const getPostsSuccess = createAction("[Posts] Get Posts Success", props<{posts: TarefaInterface[]}>())
