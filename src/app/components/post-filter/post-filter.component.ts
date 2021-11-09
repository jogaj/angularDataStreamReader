import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { FilterModel, FilterType, IFilter } from '../../models';
import { AppState } from '../../stores/app.state';
import { postsFilter, selectUpdateFilterSelector } from '../../stores/selectors';
import { setFilterAction } from '../../stores';

@Component({
  selector: 'app-post-filter',
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PostFilterComponent implements OnInit, OnDestroy {

  constructor(private store: Store<AppState>, private render2: Renderer2) { 
    this.options = [];
  }

  @ViewChild('filterInput')
  filterTextBox: ElementRef;

  /**
   * Stores the options of the dropdown
   */
  public options: any[];

  /**
   * Model for component
   */
  public filterModel = new FilterModel();

  public postsFilterSub: Subscription;

  /**
   * Angular life-cycle hook
   */
  ngOnInit(): void {
    this.generateFilterByOptions();
    this.updateFilterSubs();
  }

  ngOnDestroy(): void {
    this.postsFilterSub?.unsubscribe();
  }

  /**
   * Generates the options for the dropdown
   */
  generateFilterByOptions(): void {
    const filterEnum = Object.keys(FilterType).filter(k => isNaN(Number(k)));
    filterEnum.forEach((value: string, index: number) => {
      this.options.push({val: index, text: value});
    });
  }

  /**
   * Click button handler
   */
  filterHandler(): void {
    this.setFilter(true);
  }

  /**
   * Starts filter action
   */
  setFilter(value: boolean): void {
    this.filterModel.filterNew = value;
    this.store.dispatch(setFilterAction(Object.assign({},this.filterModel)));
  }

  /**
   * Start subscription for post filtered
   */
  updateFilterSubs(): void {
    this.postsFilterSub = this.store.pipe(select(postsFilter)).subscribe((x)=> {
      // Updates the filter in the state
      if (this.filterModel.filterNew) {
        this.setFilter(false);
      }
    });

    // Updates the filter model in the component
    this.store.pipe(select(selectUpdateFilterSelector)).subscribe((model) => {
      this.filterModel = Object.assign({},model) as IFilter;
    });
  }

  onSelectionChange(event: any): void {
    if (event == FilterType.NoFilter) {
      this.render2.removeAttribute(this.filterTextBox.nativeElement, 'required');
    }
    else {
      this.render2.setAttribute(this.filterTextBox.nativeElement, 'required', 'true');
    }
  }

}
