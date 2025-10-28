import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { NotFound } from "../../../shared/components/not-found/not-found";
import { CountryService } from '../../services/country-service';
import { CountryInformation } from "./country-information/country-information";

@Component({
  selector: 'by-country-code',
  imports: [NotFound, CountryInformation],
  templateUrl: './by-country-code.html',
  host:{class:'flex-1 flex flex-col'}
})
export class ByCountryCode {
  countryService = inject(CountryService)

  // Gets the static value of the 'code' parameter of the URL at component load time.
  // It won't be automatically updated if the route changes.
  countryCode = inject(ActivatedRoute).snapshot.params['code']

  // IMPORTANT: resource is experimental. It's ready for you to try, but it might change before it is stable.
  countryResource = rxResource({
    params: () => ({ code: this.countryCode }),
    stream: ({ params }) => this.countryService.searchByAlphaCode(params.code)
  });


}
