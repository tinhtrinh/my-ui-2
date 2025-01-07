import { AbstractModal } from "../modal/abstract-modal";
import { AppSortEvent } from "../sortable-directive/sortable.directive";
import { inject, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

    private modalService = inject(NgbModal);

    sortChange(event: AppSortEvent): void {}

    openModal(modalComponent: Type<AbstractModal>, inputData?: any, callback?: Function): void {
        const modalRef = this.modalService.open(modalComponent);
        modalRef.componentInstance.inputData = inputData;

        modalRef.closed.subscribe((res) => {
            if(res && callback) callback(res);
        })
    }
}