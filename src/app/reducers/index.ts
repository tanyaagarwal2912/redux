import {ActionReducerMap, createSelector} from '@ngrx/store';
import {_getCount, appReducer, AppState} from './app';

export interface RootState {
  app: AppState
}

export const rootReducer: ActionReducerMap<RootState> = {
  app: appReducer
};

const getAppState = (state:RootState) => state.app;

export const getCount =  createSelector(
  getAppState,
  _getCount
);
