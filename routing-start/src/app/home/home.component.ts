import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, Observer, of, Subscription} from "rxjs";

import {AuthService} from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private observable: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnDestroy(): void {
    this.observable.unsubscribe();
  }

  ngOnInit() {
    //observable:
    const data = of(1);
    const customIntervalObservable = new Observable((observer: Observer<any>) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000)
    });

    customIntervalObservable
      .subscribe(data => {
        console.log(data);
      }, error => {
        alert(error)
      });
  }

  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {'allowEdit': '1'}, fragment: 'loading'})
  }

  onLogin() {
    this.authService.onLogin();
  }

  onLogout() {
    this.authService.onLogout();
  }
}
