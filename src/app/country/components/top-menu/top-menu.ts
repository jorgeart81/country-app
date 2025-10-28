import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { MenuItem } from "../menu-item/menu-item";

@Component({
  selector: 'nav[country-top-menu]',
  imports: [MenuItem],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.css',
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
    menu.setAttribute('is-open', (!isOpenAttr).toString())
  }
}
