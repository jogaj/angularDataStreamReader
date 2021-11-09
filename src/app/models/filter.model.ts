import { IFilter } from "./interfaces/i-filter";
import { FilterType } from "./filter-type.enum";

/**
 * Filter model
 */
export class FilterModel implements IFilter {
    constructor(
        filterType?: FilterType,
        filterValue?: string,
        filterNew?: boolean) {
        this.filterType = filterType || FilterType.NoFilter;
        this.filterValue = filterValue || '';
        this.filterNew = this.filterNew || false;
    }

    filterType: FilterType;
    filterValue: string;
    filterNew: boolean;
}