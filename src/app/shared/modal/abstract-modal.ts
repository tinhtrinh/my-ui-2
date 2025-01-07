import { inject } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

export abstract class AbstractModal {
    title: string = '';
    inputData: any;
    formGroup: FormGroup = new FormGroup({});

    activeModal = inject(NgbActiveModal);
}