import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from "../../components/top-menu/top-menu";

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, TopMenu],
  templateUrl: './country-layout.html',
})
export class CountryLayout {

}
