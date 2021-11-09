import { createReducer, on, State } from "@ngrx/store";

import { FilterModel, IFilter } from "../../models";
import { setFilterAction } from "../actions";

/**
 * Initial state for Filter
 */
export const initialFilterState: Readonly<IFilter> = new FilterModel() ;

/**
 * Reducer for filter
 */
export const filterReducer = createReducer(
    initialFilterState,

    on(setFilterAction, (state, filter) => {
        const clone: IFilter = Object.assign({}, filter);
        return clone;
    }),

);
