import { createAction, props } from '@ngrx/store';
import { IStats } from '../../models';

const CALC_STATS = '[Statistics] Calculate';
const START_STATS = '[Statistics] Starting';

/**
 * Action to start calcs for statistics
 */
export const startingStats = createAction(START_STATS);

/**
 * Action to calculate statistics
 */
export const calcStatsAction = createAction(CALC_STATS, props<Readonly<IStats>>());
