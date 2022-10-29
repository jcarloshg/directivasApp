import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[app-error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  public htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';

  constructor(
    private elementRef: ElementRef<HTMLElement>
  ) {
    this.htmlElement = elementRef;
  }
  ngOnInit(): void {
    this.setColor();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }

}
