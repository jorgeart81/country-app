export interface ApiResponse<T> {
  data: T;
}

export interface RESTCountry {
  meta: Meta;
  objects: CountryClass[];
}

interface Meta {
  total: number;
  count: number;
  limit: number;
  offset: number;
  more: boolean;
  request_id: string;
  duration: number;
}

export interface CountryClass {
  names: Names;
  codes: Codes;
  capitals: Capital[];
  flag: Flag;
  region: string;
  subregion: string;
  area: Area;
  assets: unknown[];
  borders: string[];
  calling_codes: string[];
  cars: Cars;
  classification: Classification;
  continents: string[];
  coordinates: Coordinates;
  currencies: Currency[];
  date: DateClass;
  demonyms: Demonyms;
  descriptions: Descriptions;
  economy: Economy;
  government_type: string;
  landlocked: boolean;
  languages: Language[];
  leaders: Leader[];
  links: Links;
  memberships: { [key: string]: boolean };
  number_format: NumberFormat;
  parent: Parent;
  population: number;
  postal_code: PostalCode;
  timezones: string[];
  tlds: unknown[];
  units: Units;
  uuid: string;
  _match: Match[];
  _meta: MetaClass;
}

export interface Match {
  path: string;
  value: string;
}

export interface MetaClass {
  lastUpdatedTimestamp: number;
}

export interface Area {
  kilometers: number;
  miles: number;
}

export interface Capital {
  attributes: Attributes;
  coordinates: Coordinates;
  name: string;
}

export interface Attributes {
  administrative: boolean;
  constitutional: boolean;
  executive: boolean;
  judicial: boolean;
  legislative: boolean;
  primary: boolean;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Cars {
  driving_side: string;
  signs: unknown[];
}

export interface Classification {
  dependency: boolean;
  dependency_type: string;
  disputed: boolean;
  iso_status: string;
  sovereign: boolean;
  un_member: boolean;
  un_observer: boolean;
}

export interface Codes {
  alpha_2: string;
  alpha_3: string;
  ccn3: string;
  cioc: string;
  fifa: string;
  fips: string;
  gec: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface DateClass {
  academic_year_start: AcademicYearStart;
  fiscal_year_start: FiscalYearStart;
  start_of_week: string;
}

export interface AcademicYearStart {
  day: number;
  month: number;
}

export interface FiscalYearStart {
  corporate: Corporate;
  government: AcademicYearStart;
  personal: AcademicYearStart;
}

export interface Corporate {
  basis: string;
  day: number;
  month: number;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Descriptions {
  long: string;
  short: string;
}

export interface Economy {
  gini_coefficient: GiniCoefficient;
}

export interface GiniCoefficient {}

export interface Flag {
  colors: Colors;
  description: string;
  emoji: string;
  html_entity: string;
  unicode: string;
  url_png: string;
  url_svg: string;
}

export interface Colors {
  dominant: string;
  palette: unknown[];
  prominent: string;
  swatches: Swatches;
}

export interface Swatches {
  dark_muted: null;
  dark_vibrant: null;
  light_muted: null;
  light_vibrant: null;
  muted: null;
  vibrant: null;
}

export interface Language {
  bcp47: string;
  iso639_1: string;
  iso639_2b: string;
  iso639_2t: string;
  iso639_3: string;
  name: string;
  native_name: string;
}

export interface Leader {
  message: string;
  sample: string;
}

export interface Links {
  google_maps: string;
  official: string;
  open_street_maps: string;
  wikipedia: string;
}

export interface Names {
  alternates: string[];
  common: string;
  native: Native;
  official: string;
  translations: { [key: string]: Abk };
}

export interface Native {
  abk: Abk;
  rus: Abk;
}

export interface Abk {
  common: string;
  official: string;
}

export interface NumberFormat {
  decimal_separator: string;
  thousands_separator: string;
}

export interface Parent {
  alpha_2: string;
  alpha_3: string;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface Units {
  measurement_system: string;
  temperature_scale: string;
}
