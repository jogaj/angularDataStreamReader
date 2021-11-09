import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from '../../stores/app.state';
import { calcStatsAction } from '../../stores/actions';
import { StatsModel } from '../../models';
import { postsFilter, statsCalcSelector } from '../../stores/selectors';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-post-statistics',
  templateUrl: './post-statistics.component.html',
  styleUrls: ['./post-statistics.component.scss']
})
export class PostStatisticsComponent implements OnInit, OnDestroy {

  constructor(private store: Store<AppState>) { 
  }

  /**
   * Model for component
   */
  public statsModel = new StatsModel();

  /**
   * Subscription to postsFilter selector
   */
  public postsFilterSub: Subscription;

  /**
   * Subscription to statsCalc selector
   */
  public statsCalcSubs: Subscription;

  /**
   * Post per second bind
   */
  public postPerSecond = 0;

  /**
   * Angular life-cycle hook
   */
  ngOnInit(): void {
    this.startStatistics();
    this.calculatePostPerSecond();
  }

  /**
   * Angular life-cycle hook
   */
  ngOnDestroy(): void {
    this.statsCalcSubs?.unsubscribe();
    this.postsFilterSub?.unsubscribe();
  }

  /**
   * Start subscriptions to update the statistics
   */
  startStatistics(): void {
    this.postsFilterSub = this.store.pipe(select(postsFilter)).subscribe((x)=> {
      this.store.dispatch(calcStatsAction(Object.assign({}, this.statsModel)));
    });

    this.statsCalcSubs = this.store.pipe(select(statsCalcSelector)).subscribe((model)=>{
      this.statsModel = model;
    })
  }

  /**
   * Calculates the number of post per second
   */
  calculatePostPerSecond(): void {
    this.postPerSecond = Math.floor(environment.itemsPerPage / (environment.timeInterval / 1000));
  }

}
