import { AfterContentInit, ContentChild, Directive, ElementRef, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';

export type SortDirection = 'asc' | 'desc' | '';

export interface AppSortEvent {
  column: string;
  direction: SortDirection;
}

@Directive({
  selector: 'th[appSortableDirective]',
  standalone: false
})
export class SortableDirective implements AfterContentInit {
  readonly ASC_ICON = 'bi bi-arrow-down';
  readonly DESC_ICON = 'bi bi-arrow-up';

  @ContentChild('sortIcon') sortIcon!: ElementRef;

  @Input() defaultSortDirection: SortDirection = '';

  @Output() sortChange = new EventEmitter<AppSortEvent>()

  private elementRef = inject(ElementRef);

  ngAfterContentInit(): void {
    this.setDefaultSortIcon();
  }

  setDefaultSortIcon(): void {
    if(!this.sortIcon || !this.defaultSortDirection) return;

    if(this.defaultSortDirection == 'asc') {
      this.sortIcon.nativeElement.className = this.ASC_ICON;
    } else {
      this.sortIcon.nativeElement.className = this.DESC_ICON;
    }
  }

  @HostListener('mouseenter') showSortIcon(): void {
    this.sortIcon.nativeElement.classList.remove('invisible');
    this.sortIcon.nativeElement.classList.add('visible');
  }

  @HostListener('mouseleave') hideSortIcon(): void {
    if(!this.defaultSortDirection) {
      this.sortIcon.nativeElement.classList.add('invisible');
    }
  }

  @HostListener('click') rotate(): void {
    const column = this.elementRef.nativeElement.headers;
    const sortIcon = this.sortIcon.nativeElement;
    sortIcon.className = sortIcon.className == this.ASC_ICON ? this.DESC_ICON : this.ASC_ICON;
    const direction = sortIcon.className == this.ASC_ICON ? 'desc' : 'asc';
    this.sortChange.emit({ column: column, direction: direction } as AppSortEvent);
  }
}
