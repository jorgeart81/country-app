import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

import { CountryList } from "../../components/country-list/country-list";
import { CountrySearchInput } from "../../components/country-search-input/country-search-input";
import { CountryService } from '../../services/country-service';

@Component({
  selector: 'app-by-region-page',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  countryService = inject(CountryService)
  query = signal<string>('')
  // IMPORTANT: resource is experimental. It's ready for you to try, but it might change before it is stable.
  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);

      return this.countryService.searchByRegion(params.query);
    },
  });
}
