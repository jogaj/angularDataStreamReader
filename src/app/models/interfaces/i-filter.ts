import { FilterType } from "../filter-type.enum";

/**
 * Interface Filter
 */
export interface IFilter {
    filterType: FilterType,
    filterValue: string,
    filterNew: boolean
}
