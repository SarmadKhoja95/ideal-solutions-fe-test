import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/dashboard/routes').then((m) => m.routes),
      },
      {
        path: 'add-user',
        loadComponent: () =>
          import('./views/add-user/add-user.component').then(
            (m) => m.AddUserComponent
          ),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
