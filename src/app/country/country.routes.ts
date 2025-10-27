import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { CountryLayout } from './layouts/country-layout/country-layout';
import { ByCountry } from './pages/by-country/by-country';

const countryRoutes: Routes = [
  {
    path: '', component: CountryLayout,
    children: [
      { path: '', component: ByCountry },
      { path: 'by-capital', component: ByCapitalPage },

      { path: '**', redirectTo: 'by-capital' },
    ]
  },
];

export default countryRoutes;
