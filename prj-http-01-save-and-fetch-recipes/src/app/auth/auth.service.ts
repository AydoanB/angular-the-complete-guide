import {Injectable} from '@angular/core';
import {environment as env} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../shared/user.model";
import {catchError, tap} from "rxjs/operators";
import {Subject, throwError} from "rxjs";

const signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${env.firebaseApiKey}`;
const signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${env.firebaseApiKey}`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new Subject<User>();

  constructor(private http: HttpClient) {
  }

  signUp(user: User) {
    let signUpUser = {
      returnSecureToken: true
    };

    Object.assign(signUpUser, user);

    return this.http.post(signUpUrl, signUpUser).pipe(catchError(this.handleError), tap(respData => {
      this.handleAuth(respData);
    }));
  }

  signIn(user: User) {
    let signInUser = {
      returnSecureToken: true
    };

    Object.assign(signInUser, user);

    return this.http.post(signInUrl, signInUser).pipe(catchError(this.handleError), tap(respData =>{
      this.handleAuth(respData);
    }));
  }

  private handleError(errorRes) {
    let message = 'Unknown error';
    switch (errorRes.error.error.message) {
      case 'INVALID_EMAIL':
        message = "Email is invalid";
        break;
      case 'INVALID_PASSWORD':
        message = "Password is invalid";
        break;
      case 'EMAIL_NOT_FOUND':
        message = "Email was not found";
        break;
      case 'EMAIL_EXISTS':
        message = "Email exists";
    }

    return throwError(message);
  }

  private handleAuth(respData: {}) {
    const expirationDate = new Date(new Date().getDate() + +respData['expiresIn'] * 1000);
    const user = new User(
      respData['email'],
      respData['localId'],
      respData['idToken'],
      expirationDate);

    this.user.next(user);
  }
}
