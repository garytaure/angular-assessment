import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostStateService, Post } from '../post.state.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: any | undefined;
  posts: any = [];
  postsState$: Observable<Array<Post>>;
  constructor(private route: ActivatedRoute, private postStateService: PostStateService) {
    this.postsState$ = this.postStateService.postState;
    this.postsState$.subscribe(d => {
      this.posts = d;
    });
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = String(routeParams.get('postId'));
    this.post = this.posts.find((p: any) => p.id === postIdFromRoute);
    console.log(this.post)
  }

  prettifyContent(content: string = '') {
    return content.replace(/(?:\r\n|\r|\n)/g, '<br/><br/>');
  }
}
