import { Component, inject, linkedSignal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { CountryList } from "../../components/country-list/country-list";
import type { Region } from '../../interfaces/region.type';
import { CountryService } from '../../services/country-service';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];
  readonly countryService = inject(CountryService)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? ''
  selectedRegion = linkedSignal<string>(() => this.queryParam)

  isSelected = (region: Region) => region === this.selectedRegion()

  // IMPORTANT: resource is experimental. It's ready for you to try, but it might change before it is stable.
  countryResource = rxResource({
    params: () => ({ query: this.selectedRegion() }),
    stream: ({ params }) => {
      const region = this.regions.find(r => r.toLocaleLowerCase() == params.query.toLowerCase())
      if (!params.query || region == undefined) return of([]);

      this.router.navigate(['/country/by-region'], {
        queryParams: { query: region }
      })

      return this.countryService.searchByRegion(params.query);
    },
  });
}
