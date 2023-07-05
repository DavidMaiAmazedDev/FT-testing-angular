import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { Store, select } from "@ngrx/store";
import * as userActions from "./state/user.actions";
import * as fromUser from "./state/user.reducer";
import { Router, ActivatedRoute } from '@angular/router'; 
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users$: Observable<User[]>;
  error$: Observable<String>;
  numOfUser: number = 0
  constructor(private store: Store<fromUser.AppState>,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.dispatch(new userActions.LoadUsers());
    this.users$ = this.store.pipe(select(fromUser.getUsers));
    this.error$ = this.store.pipe(select(fromUser.getError));
    this.users$.subscribe(data => {
      this.numOfUser = data.length
    })
    console.log(select(fromUser.getError))
  }

  navigateToUserDetail(id) {
    console.log(id)
    this.router.navigate(['../users', id], { relativeTo: this.route })
  }

  doSearch(name) {
    // console.log(name)
    this.users$ = this.store.pipe(select(fromUser.getUsers)).pipe(map(items => items.filter(item => item.username.includes(name))));
    this.users$.subscribe(data => {
      this.numOfUser = data.length
    })
  }
}
