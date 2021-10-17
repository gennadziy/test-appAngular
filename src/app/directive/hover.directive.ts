import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class HoverDirective {
  constructor(private el: ElementRef, private  r: Renderer2) {
  }


  @HostListener('mouseenter') onMouseEnter() {
    this.setFontSize(20)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontSize(14)
  }

  setFontSize(size: number | string): void {
    this.el.nativeElement.style.fontSize = `${size}px`
  }
}
