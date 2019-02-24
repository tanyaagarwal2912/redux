import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {rootReducer} from './reducers';
import {DisplayComponent} from './display/display.component';
import {CountComponent} from './count/count.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({maxAge: 50})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
