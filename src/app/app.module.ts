import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

import { StoreModule } from '@ngrx/store';
import { usersReducer } from './reducer/user.reducer';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({ users: usersReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
