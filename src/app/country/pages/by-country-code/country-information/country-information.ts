import { Component, computed, input } from '@angular/core';
import { Country } from '../../../interfaces/country.inteface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-information-page',
  imports: [DecimalPipe],
  templateUrl: './country-information.html',
  host: { class: 'flex flex-col' }
})
export class CountryInformation {
  country = input.required<Country>();

  currentYear = computed(() => {
    return new Date().getFullYear();
  });
}
