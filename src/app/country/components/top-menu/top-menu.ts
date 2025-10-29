import { NgClass } from '@angular/common';
import { Component, ElementRef, signal, viewChild } from '@angular/core';

import { MenuItem } from "../menu-item/menu-item";

@Component({
  selector: 'nav[country-top-menu]',
  imports: [NgClass, MenuItem],
  templateUrl: './top-menu.html',
  host: {
    class: 'relative w-full flex justify-center min-h-12 z-10',
  }
})
export class TopMenu {
  public isOpen = signal(false)
  public menuChild = viewChild<ElementRef<HTMLUListElement>>('menu');
  public menuButtonChild = viewChild<ElementRef<HTMLButtonElement>>('menuButton');
  menuButtonClick() {
    const menu = this.menuChild()?.nativeElement
    if (menu == undefined) return

    const isOpenAttr = menu.getAttribute('is-open') === 'true'
    this.isOpen.set(!isOpenAttr)
  }
}
