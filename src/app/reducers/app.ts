import {AppActions} from '../actions/app';
import {Action} from '../actions';

export interface AppState {
  count: number;
}

const initialState: AppState = {
  count: 0
};


export function appReducer(state: AppState = initialState, action: Action,) {
  switch (action.type) {
    case AppActions.INCREASE_COUNT :
      let count1 = state.count;
      return {
        ...state,
        count: ++count1
      };
    case AppActions.DECREASE_COUNT:
      let count2 = state.count;
      return {
        ...state,
        count: --count2
      };
    case AppActions.ASSSIGN_COUNT:
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
}

export const _getCount = (state: AppState) => state.count;
