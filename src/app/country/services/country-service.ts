import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Country } from '../interfaces/country.inteface';
import { RESTCountry } from '../interfaces/res-countries.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { type CountryStorageKey, CountryStorageService } from './country-storage-service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient)
  private storageService = inject(CountryStorageService)

  private saveCountries(query: string, key: CountryStorageKey, data: Country[]) {
    if (data.length == 0) return
    this.storageService.saveQuery(key, { [query]: data })
  }

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase()
    const prevData = this.storageService.loadCountries('by-capytal')[query]

    if (prevData) return of(prevData)

    return this.http.get<RESTCountry[]>(`${environment.rescountriesApiUrl}/capital/${query}`).pipe(
      map(CountryMapper.mapRestCountryArrayToCountryArray),
      tap(countries => this.saveCountries(query, 'by-capytal', countries)),
      catchError((error) => {
        console.error('Error fetching', error)
        return throwError(() => new Error(`No se pudo obtener países con query: ${query}`))
      })
    )
  }

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase()
    const prevData = this.storageService.loadCountries('by-country')[query]

    if (prevData) return of(prevData)

    return this.http.get<RESTCountry[]>(`${environment.rescountriesApiUrl}/name/${query}`).pipe(
      map(CountryMapper.mapRestCountryArrayToCountryArray),
      tap(countries => this.saveCountries(query, 'by-country', countries)),
      catchError((error) => {
        console.error('Error fetching', error)
        return throwError(() => new Error(`No se pudo obtener países con query: ${query}`))
      })
    )
  }

  searchByRegion(query: string): Observable<Country[]> {
    query = query.toLowerCase()
    const prevData = this.storageService.loadCountries('by-region')[query]

    if (prevData) return of(prevData)

    return this.http.get<RESTCountry[]>(`${environment.rescountriesApiUrl}/region/${query}`).pipe(
      map(CountryMapper.mapRestCountryArrayToCountryArray),
      tap(countries => this.saveCountries(query, 'by-region', countries)),
      catchError((error) => {
        console.error('Error fetching', error)
        return throwError(() => new Error(`No se pudo obtener países con query: ${query}`))
      })
    )
  }
  searchByAlphaCode(code: string): Observable<Country | undefined> {
    code = code.toLowerCase()
    const prevData = this.storageService.loadCountry('by-code')[code]

    if (prevData) return of(prevData)

      return this.http.get<RESTCountry[]>(`${environment.rescountriesApiUrl}/alpha/${code}`).pipe(
      map(CountryMapper.mapRestCountryArrayToCountryArray),
      map(countries => countries.at(0)),
      tap(country => {
        if (country == undefined) return
        this.storageService.saveQuery('by-code', { [code]: country })
      }),
      catchError((error) => {
        console.error('Error fetching', error)
        return throwError(() => new Error(`No se pudo obtener países con código: ${code}`))
      })
    )
  }
}
