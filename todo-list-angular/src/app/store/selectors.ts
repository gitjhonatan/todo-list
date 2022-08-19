import { AppStateInterface } from '../interfaces/AppStateInterface';
import { createSelector } from "@ngrx/store";

export const selectFeature = (state: AppStateInterface) => {
  console.log("por")
  console.log(state)
  return state.posts
}
export const carregandoSelector = createSelector(selectFeature, (state) => {
  console.log('kh')
  console.log(state);
  console.log('khs')

  return state.posts})
