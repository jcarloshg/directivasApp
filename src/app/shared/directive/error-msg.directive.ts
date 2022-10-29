import { Directive, ElementRef, Input, isDevMode, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[app-error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  public htmlElement: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _mensaje: string = 'Campo requerido';

  @Input() set mensaje(mensaje: string) {
    this._mensaje = mensaje;
    this.setMessage();
    // this.htmlElement.nativeElement.innerText = mensaje;
  }

  @Input() set color(color: string) {
    this._color = color;
    this.setColor();
    // this.htmlElement.nativeElement.style.color = color;
  }


  @Input() set isValid(isValid: boolean) {
    if (isValid == true) this.htmlElement.nativeElement.classList.remove('hidden');
    if (isValid == false) this.htmlElement.nativeElement.classList.add('hidden');
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.htmlElement = elementRef;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
    this.setStyle();
  }

  setStyle(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
