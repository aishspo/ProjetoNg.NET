import { FuncionarioService } from './../../services/funcionario.service';
import { Funcionario } from './../../models/Funcionarios';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioFormComponent } from "../../componentes/funcionario-form/funcionario-form.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastro',
    standalone: true,
    templateUrl: './cadastro.component.html',
    styleUrl: './cadastro.component.css',
    imports: [CommonModule, FuncionarioFormComponent]
})

export class CadastroComponent {

btnAcao = "Cadastrar"
btnTitulo = "Cadastrar funcionário"


  constructor(private FuncionarioService: FuncionarioService, private router: Router) {

  }

    createFuncionario(funcionario: Funcionario) {
      this.FuncionarioService.CreateFuncionario(funcionario).subscribe((data) => {
        this.router.navigate(['/'])
      });
    }
}
