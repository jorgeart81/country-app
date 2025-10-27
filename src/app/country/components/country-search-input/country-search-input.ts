import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
  host: { class: 'flex flex-row gap-2 mt-2' }
})
export class CountrySearchInput {
  public placeholder = input<string>('Buscar');
  public value = output<string>();

  onSearch(value: string) {
    this.value.emit(value.trim())
  }
}
