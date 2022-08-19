import { TarefaInterface } from "../interfaces/TarefaInterface"
import { createReducer, on } from "@ngrx/store";
import * as PostsActions from './actions'

export const initiaState: TarefaInterface[] = [{
  status: false,
  desc: 'string'
}]

export const reducers = createReducer(initiaState,

  on(PostsActions.getPostsSuccess, (state, action) => {
    return { ...state, posts: action.posts }
  })

)
