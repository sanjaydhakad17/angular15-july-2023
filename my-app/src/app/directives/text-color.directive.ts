import { Directive, ElementRef, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  @Input() defaultTextColor: any;
  @Input() textColor: any;
  @HostBinding('style.color') color!: string;
  @HostBinding('style.backgroundColor') bgColor!: string;
  constructor(private ele : ElementRef) {
    console.log(this.textColor);
    //ele.nativeElement.style.color = this.textColor;   
  }

    @HostListener('mouseenter') onMouseEnter() {
      this.color = this.textColor;
    }

    @HostListener('mouseleave') onMouseleave() {
      this.color = this.defaultTextColor;
    }

    @HostListener('click') onClick() {
      this.bgColor = 'black';
    }
  


}
