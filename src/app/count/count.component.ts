import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootState} from '../reducers';
import {AssignCount, DecreaseCount, IncreaseCount} from '../actions/app';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  constructor(private store: Store<RootState>) {
  }

  ngOnInit() {
  }

  increase() {
    this.store.dispatch(new IncreaseCount());
  }

  decrease() {
    this.store.dispatch(new DecreaseCount());

  }

  assign() {
    this.store.dispatch(new AssignCount(10));
  }

}
