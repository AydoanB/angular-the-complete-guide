import {Injectable} from '@angular/core';
import {environment as env} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../shared/user.model";

const signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${env.firebaseApiKey}`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signUp(user: User) {
    this.http.post(signUpUrl, user);
  }

}
