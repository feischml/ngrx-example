import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { UsersState } from "app/reducer/user.reducer";
import 'rxjs/add/operator/map';
import * as usersActions from './actions/user.action';

@Injectable()
export class UsersService {

  users$: Observable<{}[]>;  

  constructor(private _http: Http, private _store: Store<UsersState>) {
      this.users$ = this._store.select('users');
  }

  getUsers(){
      this._http.get("https://jsonplaceholder.typicode.com/users")
      .map( users => users.json())
      .map( payload => ({ type: usersActions.GET_USERS, payload: payload}) )
      .subscribe( action => { 
        //console.log(action);
        this._store.dispatch(action)
       } );
  }

}
