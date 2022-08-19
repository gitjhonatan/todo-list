import { AppStateInterface } from '../interfaces/AppStateInterface';
import { createSelector } from "@ngrx/store";

export const selectFeature = (state: AppStateInterface) => {
  return state.posts
}
export const carregandoSelector = createSelector(selectFeature, (state) => {
  return state.posts})
