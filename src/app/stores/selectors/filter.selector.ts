import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';
import { IFilter } from '../../models';

/**
 * Retrives the state of filter
 * @param state AppState
 * @returns The filter state
 */
export const filterSelector = (state: AppState)  => state.filter;

/**
 * Gets the latest filter state
 */
export const selectUpdateFilterSelector = createSelector(
    filterSelector,
    (filter: Readonly<IFilter>) => {
        return Object.assign(filter) as IFilter;
    }
)


