import { Directive, ElementRef, HostListener,  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { 
  }
 
  @HostListener("mouseenter")onMouseEnter(){
    this.textDeco("black")
  }

  @HostListener("mouseleave")onMouseLeave(){
    this.textDeco("")
  }
 
  private textDeco(action:string){
    this.elem.nativeElement.style.background=action;
  }
  // parentNode.parentNode.parentNode
 

}