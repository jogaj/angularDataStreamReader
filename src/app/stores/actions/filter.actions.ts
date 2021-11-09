import { createAction, props } from '@ngrx/store';
import { IFilter } from '../../models';

const SET_FILTER = '[Filter] Set Filter';

/**
 * Action to set the Filter
 */
 export const setFilterAction = createAction(SET_FILTER, props<Readonly<IFilter>>());

