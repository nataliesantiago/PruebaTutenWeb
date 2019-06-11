import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './../components/login/login.component';
import { ListDataComponent } from './../components/list-data/list-data.component';
import { AuthGuard } from './../guards/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'listado-datos', component: ListDataComponent,  canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
