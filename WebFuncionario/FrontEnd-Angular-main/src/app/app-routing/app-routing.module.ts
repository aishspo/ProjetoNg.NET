import { NgModule } from '@angular/core';
import { HomeComponent } from '../pages/home/home.component';
import { CadastroComponent } from '../pages/cadastro/cadastro.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cadastro', component: CadastroComponent}
]

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
