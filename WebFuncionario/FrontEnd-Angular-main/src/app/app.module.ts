import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FuncionarioFormComponent } from './componentes/funcionario-form/funcionario-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { EditarComponent } from './pages/editar/editar.component';

/* Angular Material */
import{ MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ExcluirComponent } from './componentes/excluir/excluir.component'
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ExcluirComponent,
    HomeComponent,
    CadastroComponent,
    DetalhesComponent,
    EditarComponent,
    FuncionarioFormComponent,

    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    /* Material */
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
