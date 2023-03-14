import {Component, OnInit} from '@angular/core';
import {HttpService} from "./http.service";
import {IPost} from "./PostModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: IPost[] = [];
  isFetching: boolean = false;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.httpService.error.subscribe(e=>console.log(e))

    this.httpService
      .addPost(postData);
    setTimeout(()=>{
      this.onFetchPosts();
    }, 35)
  }

  onFetchPosts() {
    this.isFetching = true;

    this.httpService
      .getPosts()
      .subscribe((posts: IPost[]) => {
          this.loadedPosts = posts;
          this.isFetching = false;
      }, error => {
        this.isFetching = false;
        console.log(error)
      });
  }

  onClearPosts() {
    this.loadedPosts = [];
    this.httpService
      .deletePosts()
      .subscribe(resp => console.log(resp));
  }
}
