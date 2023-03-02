import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: {};
  constructor(private accountService: AccountService) {

  }
  ngOnInit() {
    this.accounts = this.accountService.accounts
  }
  onAccountAdded(newAccount: { name: string, status: string }) {
    this.accountService.addAccount(newAccount.name, newAccount.status);
  }
  
}
