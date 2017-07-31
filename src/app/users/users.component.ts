import { Component, OnInit } from '@angular/core';
import { UsersService } from "app/users.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ UsersService ]
})
export class UsersComponent implements OnInit {

  users$: Observable<{}[]>;

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this.users$ = this._usersService.users$;
    this._usersService.getUsers();
    //console.log(this.users$);

    this.users$.subscribe(res => console.log(res));

  }

}
