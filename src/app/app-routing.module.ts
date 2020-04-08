import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'consultorio',
    loadChildren: './consultorio/consultorio.module#ConsultorioModule'    
  },
  {
    path: 'security',
    loadChildren: './security/security.module#SecurityModule'    
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'consultorio/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
