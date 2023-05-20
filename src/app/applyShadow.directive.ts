import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[applyShadow]'
})
export class ApplyShadowDirective {

  @Input() shadowText = '';

  constructor(private el: ElementRef) { 

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.shadow(this.shadowText);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.shadow('yellow');
  }
  private shadow(color: string) {
    this.el.nativeElement.style.color = color;
  }
  
  ngOnInit() {
    let css = `
    font: 1.5em Georgia, serif; text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;`;
    this.el.nativeElement.setAttribute("style", css);
  }
}