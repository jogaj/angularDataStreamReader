import { createReducer, on } from "@ngrx/store";

import { calcStatsAction } from "../actions";
import { IStats, StatsModel } from "../../models";

/**
 * Initial state for Statistics
 */
export const initialStatsState: Readonly<IStats> = new StatsModel();

/**
 * Reducer for Statistics
 */
export const statsReducer = createReducer(
    initialStatsState,

    on(calcStatsAction, (state, stats) => {
        const clone: IStats = Object.assign({}, stats);
        return clone;
    })
);