import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { User } from "./user.model";


@Injectable({
  providedIn: "root"
})
export class UserService {
  private userUrl = "http://localhost:3000/api/users";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  getUserById(payload: number): Observable<User> {
    if(payload) {
      return this.http.get<User>(`${this.userUrl}/${payload}`);
    }
  }
}
