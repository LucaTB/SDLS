import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WhoComponent } from './pages/who/who.component';
import { BandsComponent } from './pages/bands/bands.component';
import { AsociarseComponent } from './pages/asociarse/asociarse.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'bands',
    component: BandsComponent,
  },
  {
    path: 'who',
    component: WhoComponent,
  },
  {
    path: 'asociarse',
    component: AsociarseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
