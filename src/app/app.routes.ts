import { Routes } from '@angular/router';
import { HomePage } from './shared/components/home-page/home-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'country', loadChildren: () => import('./country/country.routes') },

  { path: '**', redirectTo: '' },
];
