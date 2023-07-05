import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { User } from '../user/user.model';
import { Store } from '@ngrx/store';
import * as fromUser from "../user/state/user.reducer";
import { UserService } from '../user/user.service';
// import { Observable } from 'rxjs';

// import * as userActions from "../user/state/user.actions";


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id = ''
  user: User = null
  constructor(private store: Store<fromUser.AppState>,private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.userService.getUserById(parseInt(this.id)).subscribe(user => {
        if(user) {
          this.user = user
        } 
        user = null;
        
      })
      // console.log(this.id)
      // this.store.dispatch(new userActions.LoadUser(parseInt(this.id)));
      // const user$: Observable<User> = this.store.select(
      //   fromUser.getCurrentUser
      // )
      // user$.subscribe(currentUser => {
      //   console.log(currentUser)
      //   if (currentUser) {
      //    console.log(currentUser)
      //   }
      // })
  });
  }

  backToMainPage() {
    this.router.navigate([''])
  }

}
