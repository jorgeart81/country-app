import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Country } from '../interfaces/country.inteface';
import { RESTCountry } from '../interfaces/res-countries.interface';
import { CountryMapper } from '../mappers/country.mapper';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient)


  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase()

    return this.http.get<RESTCountry[]>(`${environment.rescountriesApiUrl}/capital/${query}`).pipe(
      map(CountryMapper.mapRestCountryArrayToCountryArray),
      catchError((error) => {
        console.error('Error fetching', error)
        return throwError(() => new Error(`No se pudo obtener países con query: ${query}`))
      })
    )
  }

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase()

    return this.http.get<RESTCountry[]>(`${environment.rescountriesApiUrl}/name/${query}`).pipe(
      map(CountryMapper.mapRestCountryArrayToCountryArray),
      catchError((error) => {
        console.error('Error fetching', error)
        return throwError(() => new Error(`No se pudo obtener países con query: ${query}`))
      })
    )
  }

  searchByRegion(query: string): Observable<Country[]> {
    query = query.toLowerCase()

    return this.http.get<RESTCountry[]>(`${environment.rescountriesApiUrl}/region/${query}`).pipe(
      map(CountryMapper.mapRestCountryArrayToCountryArray),
      catchError((error) => {
        console.error('Error fetching', error)
        return throwError(() => new Error(`No se pudo obtener países con query: ${query}`))
      })
    )
  }
  searchByAlphaCode(code: string): Observable<Country | undefined> {
    code = code.toLowerCase()

    return this.http.get<RESTCountry[]>(`${environment.rescountriesApiUrl}/alpha/${code}`).pipe(
      map(CountryMapper.mapRestCountryArrayToCountryArray),
      map(countries => countries.at(0)),
      catchError((error) => {
        console.error('Error fetching', error)
        return throwError(() => new Error(`No se pudo obtener países con código: ${code}`))
      })
    )
  }
}
