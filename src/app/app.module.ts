import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, } from '@angular/platform-browser';

// Rotas
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EditarComponent } from './pages/editar/editar.component';
import { FuncionarioFormComponent } from './componentes/funcionario-form/funcionario-form.component';
import { ExcluirComponent } from './componentes/excluir/excluir.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ExcluirComponent
  ],

  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AppComponent,
    HomeComponent,
    DetalhesComponent,
    CadastroComponent,
    EditarComponent,
    FuncionarioFormComponent,
    ExcluirComponent,
  ],

  providers: [
    provideClientHydration()
  ],

  // bootstrap: [ AppComponent ]
})

export class AppModule { }
