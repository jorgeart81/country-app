import { DecimalPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from "@angular/router";

import { Country } from '../../interfaces/country.inteface';

@Component({
  selector: 'country-list',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './country-list.html',
})
export class CountryList {
  countries = input.required<Country[]>()
  errorMessage = input<string | undefined>()
  isLoading = input<boolean>(false)
  isEmpty = computed(() => this.countries().length == 0 && !this.errorMessage())
}
