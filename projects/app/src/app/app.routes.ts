import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./modules/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'todo',
    loadComponent: () => import('./modules/todo/todo.component').then(m => m.TodoComponent),
  },
];
