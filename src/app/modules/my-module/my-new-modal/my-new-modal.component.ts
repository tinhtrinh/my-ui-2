import { Component, OnInit } from '@angular/core';
import { AbstractModal } from '../../../shared/modal/abstract-modal';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-new-modal',
  standalone: false,
  
  templateUrl: './my-new-modal.component.html',
  styleUrl: './my-new-modal.component.css'
})
export class MyNewModalComponent extends AbstractModal implements OnInit {
  override title: string = 'My New Modal';
  override formGroup: FormGroup<any> = new FormGroup({
    userName: new FormControl('')
  });

  ngOnInit(): void {
    this.formGroup.controls['userName'].setValue('test');
  }

  onSubmit(): void {}
}
