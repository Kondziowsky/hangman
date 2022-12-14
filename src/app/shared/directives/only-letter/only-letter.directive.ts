import {Directive, HostListener, } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[onlyLetter]',
})
export class OnlyLetterDirective {

  @HostListener('paste', ['$event', ]) blockPaste(e) {
    const value = e.clipboardData.getData('text/plain');
    if (!this.isLetter(value)) {
      e.preventDefault();
    }
  }

  @HostListener('keydown', ['$event', ]) onKeyDown(event) {
    const e = event as KeyboardEvent;
    if (!this.isLetter(e.key)) {
      event.preventDefault();
    }
    console.log(e);
  }

  isLetter(val) {
    return RegExp(/^\p{L}/, 'u').test(val);
  }
}
