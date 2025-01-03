import { AppSortEvent } from "../sortable-directive/sortable.directive";

export interface ICell {
    name: string;
    content: string | number | boolean | any;
    type: number;
    link?: string;
    rowspan?: number;
}

export abstract class AbstractTable {
    readonly TEXT = 1;
    readonly DATE = 2;
    readonly DATE_TIME = 3;
    readonly CHECKBOX = 4;
    readonly SELECT = 5;

    displayedColumns: Array<string> = [];
    rowData: Array<Array<ICell>> = [];

    sortChange(event: AppSortEvent): void {}
}