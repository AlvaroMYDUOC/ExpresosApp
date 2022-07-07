import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('src/app/home/home.module').then( m => m.HomePageModule),
    //canActivate:[NoIngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'usuario',
    loadChildren: () => import('src/app/usuario/usuario.module').then( m => m.UsuarioPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    //canActivate: [NoIngresadoGuard]
  },
  {
    path: 'recorrido',
    loadChildren: () => import('./recorrido/recorrido.module').then( m => m.RecorridoPageModule),
    //canActivate: [IngresadoGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
