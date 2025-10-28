import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.inteface';

export type CountryStorageKey = 'by-country' | 'by-capytal' | 'by-region' | 'by-code'

@Injectable({
  providedIn: 'root'
})
export class CountryStorageService {
  saveQuery(key: CountryStorageKey, data: Record<string, Country | Country[]>): void {
    const prevData = this.loadData(key)
    sessionStorage.setItem(key, JSON.stringify(prevData == undefined ? data : { ...prevData, ...data }))
  }

  private loadData(key: CountryStorageKey): Record<string, Country | Country[] | undefined> {
    const data = sessionStorage.getItem(key)
    if (!data) return {}

    return JSON.parse(data)
  }

  loadCountries(key: Exclude<CountryStorageKey, 'by-code'>): Record<string, Country[] | undefined> {
    const data = sessionStorage.getItem(key)
    if (!data || !Array.isArray(data)) return {}

    return JSON.parse(data)
  }

  loadCountry(key: Extract<CountryStorageKey, 'by-code'>): Record<string, Country | undefined> {
    const data = sessionStorage.getItem(key)
    if (!data || Array.isArray(data)) return {}

    return JSON.parse(data)
  }
}
