import { Routes } from '@angular/router';

import { CountryLayout } from './layouts/country-layout/country-layout';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { ByCountryCode } from './pages/by-country-code/by-country-code';
import { ByCountry } from './pages/by-country/by-country';
import { ByRegionPage } from './pages/by-region-page/by-region-page';

const countryRoutes: Routes = [
  {
    path: '', component: CountryLayout,
    children: [
      { path: 'by-country', component: ByCountry },
      { path: 'by-capital', component: ByCapitalPage },
      { path: 'by-region', component: ByRegionPage },

      { path: 'by/:code', component: ByCountryCode },

      { path: '**', redirectTo: 'by-capital' },
    ]
  },
];

export default countryRoutes;
