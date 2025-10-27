import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
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
      catchError(error => {
        console.error('Error fetching', error)
        return throwError(() => new Error(`No se pudo obtener países con query: ${query}`))
      })
    )
  }
}
