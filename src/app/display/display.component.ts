import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getCount, RootState} from '../reducers';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  count: number = 0;

  constructor(private store:Store<RootState>) {
    this.store.select(getCount).subscribe((count) => this.count = count);
    // this.store.select((state:RootState)=>state.count);
  }

  ngOnInit() {
  }

}
