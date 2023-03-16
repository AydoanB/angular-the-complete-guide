import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLogged: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onSwitchMode() {
    this.isLogged = !this.isLogged;
  }

  onSubmit(authForm: NgForm) {
    console.log(authForm.value)
  }
}
