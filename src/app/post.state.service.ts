import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const INITIAL_STATE: Array<Post> = [];/*{
  id: '',
  guid: '',
  isActive: false,
  picture: '',
  title: '',
  content: '',
  created_at: '',
  tags: []
};*/

@Injectable({
  providedIn: 'root'
})
export class PostStateService {

  private _postsState = new BehaviorSubject<Array<Post>>(INITIAL_STATE);

  postState = this._postsState.asObservable();

  changePosts(posts: Array<Post>) {
    this._postsState.next(posts);
  }

}

export interface Post {
  id: string,
  guid: string,
  isActive: boolean,
  picture: string,
  title: string,
  content: string,
  created_at: string,
  tags: Array<string>
}