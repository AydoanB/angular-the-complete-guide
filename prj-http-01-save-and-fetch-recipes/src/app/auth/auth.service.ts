import {Injectable} from '@angular/core';
import {environment as env} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../shared/user.model";
import {catchError, tap} from "rxjs/operators";
import {BehaviorSubject, throwError} from "rxjs";
import {Router} from "@angular/router";

const signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${env.firebaseApiKey}`;
const signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${env.firebaseApiKey}`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);


  constructor(private http: HttpClient, private router: Router) {
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

    return this.http.post(signInUrl, signInUser).pipe(catchError(this.handleError), tap(respData => {
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

  logout() {
    this.user.next(null);
    this.router.navigate(['/sign-up']);
  }

  autoLogin(): User {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(userData['email'], userData['id'], userData['_token'], new Date(userData['_tokenExpDate']))

    if(loadedUser.token){
      this.user.next(loadedUser);
    }
  }

  private handleAuth(respData: {}) {
    const expirationDate = new Date(new Date().getDate() + +respData['expiresIn'] * 1000);
    const user =  new User(
      respData['email'],
      respData['localId'],
      respData['idToken'],
      expirationDate);

    localStorage.setItem('userData', JSON.stringify(user));

    this.user.next(user);
  }
}
