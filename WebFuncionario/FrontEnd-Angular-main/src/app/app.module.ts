import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FuncionarioFormComponent } from './componentes/funcionario-form/funcionario-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { EditarComponent } from './pages/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CadastroComponent,
    DetalhesComponent,
    FuncionarioFormComponent,
    EditarComponent,
    HomeComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
