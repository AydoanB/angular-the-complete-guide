import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {User} from "../shared/user.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isInLoginMode: boolean = false;
  isLoading: boolean = false;
  error: string = undefined;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onSwitchMode() {
    this.isInLoginMode = !this.isInLoginMode;
  }

  onSubmit(authForm: NgForm) {
    let user: User = authForm.value;

    let obs: Observable<any>;

    this.isLoading = true;
    if (this.isInLoginMode) {
      obs = this.authService.signIn(user);
    } else {
      obs = this.authService.signUp(user);
    }

    obs.subscribe((response) => {
      console.log(response);
      this.isLoading = false;

      this.router.navigate(['/recipes']);
    }, error => {
      this.error = error;

      this.isLoading = false;
    });

    authForm.reset();
  }
}
