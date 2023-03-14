import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "./PostModel";
import {Observable, Subject} from "rxjs";
import {map} from "rxjs/operators";

const base = 'https://angular-the-complete-gui-80dd1-default-rtdb.europe-west1.firebasedatabase.app/posts.json';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  error: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) {
  }

  addPost(post: IPost) {
    this.http.post(base,
      post)
      .subscribe(respData => {
        console.log(respData)
    }, error => this.error.next(error.message));
  };

  getPosts(): Observable<any> {
    return this.http.get(base).pipe(map((rawResponse) => Object.values(rawResponse)));
  }

  deletePosts(): Observable<any>{
    return this.http.delete(base);
  }
}
