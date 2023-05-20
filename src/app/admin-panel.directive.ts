import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdminPanel]'
})
export class AdminPanelDirective {

  private adminsArray: Array<string> = ['Scott', 'Smith', 'Robert', 'Mark'];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appAdminPanel(name: string) {
    if(this.adminsArray.includes(name)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
