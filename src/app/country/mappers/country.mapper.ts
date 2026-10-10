import type { Country } from '../interfaces/country.inteface';
import type { CountryClass } from '../interfaces/res-countries.interface';

export class CountryMapper {
  // static RestCountry => Country
  static mapRestCountryToCountry(restCountry: CountryClass): Country {
    return {
      capital: restCountry.capitals?.map((c) => c.name).join(', ') ?? '-',
      cca2: restCountry.codes?.alpha_2 ?? '',
      flag: restCountry.flag?.emoji ?? '',
      flagSvg: restCountry.flag?.url_svg ?? '',
      name:
        restCountry.names?.translations?.['spa']?.common ??
        restCountry.names?.common ??
        'No Spanish Name',
      population: restCountry.population ?? 0,

      region: restCountry.region ?? '',
      subRegion: restCountry.subregion ?? '',
    };
  }

  // static RestCountry[] => Country[]
  static mapRestCountryArrayToCountryArray(restCountries: CountryClass[]): Country[] {
    return restCountries.map(CountryMapper.mapRestCountryToCountry);
  }
}
