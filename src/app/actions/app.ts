import {Action} from './index';

export enum AppActions {
  INCREASE_COUNT = '[App Action] increase count',
  DECREASE_COUNT = '[App Action] decrease count',
  ASSSIGN_COUNT = '[App Action] assign count'
}

export class IncreaseCount implements Action {
  readonly type = AppActions.INCREASE_COUNT;
}


export class DecreaseCount implements Action {
  readonly type = AppActions.DECREASE_COUNT;
}


export class AssignCount implements Action {
  readonly type = AppActions.ASSSIGN_COUNT;

  constructor(public payload: number) {
  }
}
