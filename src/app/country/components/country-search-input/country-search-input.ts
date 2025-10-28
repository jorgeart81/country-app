import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
  host: { class: 'flex flex-row gap-2 mt-2' }
})
export class CountrySearchInput {
  public debounceTime = input<number>(500);
  public initialValue = input<string>();
  public placeholder = input<string>('Buscar');
  public value = output<string>();
  public inputValue = linkedSignal<string>(() => this.initialValue() ?? '')

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue()

    const timeout = setTimeout(() => {
      this.value.emit(value)
    }, this.debounceTime());

    onCleanup(() => {
      clearTimeout(timeout)
    })
  })

  onSearch(value: string) {
    this.value.emit(value.trim())
  }
}
