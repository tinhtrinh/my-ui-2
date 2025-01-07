import { ContentChild, Directive, ElementRef, HostBinding, AfterContentInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appUndoDirective]',
  standalone: false
})
export class UndoDirective implements AfterContentInit {
  @ContentChild(NgControl) formControl!: NgControl;
  @ContentChild('undoIcon') undoIcon!: ElementRef;

  originalValue: any;

  ngAfterContentInit(): void {
    this.originalValue = this.formControl?.control?.value;
    this.undoIcon.nativeElement.addEventListener('click', () => this.undo());
  }

  @HostBinding('class.bg-warning-subtle') get isInvalid(): boolean {
    const control = this.formControl.control;
    if(control?.dirty) {
      this.undoIcon.nativeElement.classList.remove('invisible');
      this.undoIcon.nativeElement.classList.add('visible');
    }
    return control ? control.dirty : false;
  }

  undo(): any {
    this.undoIcon.nativeElement.classList.add('invisible');
    this.formControl.control?.setValue(this.originalValue);
    this.formControl.control?.markAsPristine();
  }
}
