import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { loadingPosts, saveFilterPostAction } from '../../stores/actions';
import { postsFilter } from '../../stores/selectors';
import { AppState } from '../../stores/app.state';
import { Subscription } from 'rxjs';
import { IPost } from '../../models';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store<AppState> ) {
  }

  /**
   * Subscription to the filterd posts via effect
   */
  postsRetriveSub: Subscription;

  /**
   * Observable to postFilter selector
   */
  postsRetrieved$ = this.store.pipe(select(postsFilter));

  /**
   * Angular life-cycle hoook
   */
  ngOnInit(): void {
    // Dispacth action
    this.store.dispatch(loadingPosts());

    // Saves the filtered posts in the state
    this.postsRetriveSub = this.postsRetrieved$.subscribe((data: IPost[]) => {
      this.store.dispatch(saveFilterPostAction(data));
    });
  }

  /**
   * Angular life-cycle hoook
   */
  ngOnDestroy(): void {
    this.postsRetriveSub?.unsubscribe();
  }

}
