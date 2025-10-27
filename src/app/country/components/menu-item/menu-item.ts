import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'li[menu-item]',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-item.html',
})
export class MenuItem {

  label = input.required<string>();
  route = input.required<string>();

}
