import { Component } from '@angular/core';
import { CountrySearchInput } from "../../components/country-search-input/country-search-input";
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-region-page',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  handleSearch(value: string) {
    console.log(value)
  }
}
