import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import {userReducer} from './state/user.reducer';
import {UserEffect} from './state/user.effects'

import { UserComponent } from "./user.component";
import { SearchUserComponent } from "../search-user/search-user.component";

import { UserDetailComponent } from "../user-detail/user-detail.component";

const userRoutes: Routes = [{ path: "", component: UserComponent } ,{ path: "users/:id", component: UserDetailComponent }];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature("users", userReducer),
    EffectsModule.forFeature([UserEffect])
  ],
  declarations: [
      UserComponent,
      SearchUserComponent,
      UserDetailComponent
  ]
})
export class UsersModule {}
