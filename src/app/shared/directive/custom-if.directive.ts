import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective implements OnDestroy {

  @Input() set appCustomIf(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef
  ) {
    console.log('appCustomIf');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
