import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { PostStateService } from '../post.state.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: any = [];
  constructor(private http: HttpClient, private postStateService: PostStateService) {
    this.getPosts('assets/posts.json').subscribe(results => {
      this.posts = results;
      postStateService.changePosts(this.posts);
    });
  }

  getPosts(filename: string) {
    return this.http.get(filename, { responseType: 'json' })
      .pipe(
        tap( // Log the result or error
          data => console.log(data),
          error => console.log(error)
        )
      );
  }

  ngOnInit(): void {
  }

}
