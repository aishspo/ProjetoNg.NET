import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Funcionario } from '../../models/Funcionarios';
import { MatCardModule } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatFormFieldModule, MatCardModule ],
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

funcionario?: Funcionario;
id!: number;

constructor(private FuncionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router) {

}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.FuncionarioService.GetFuncionario(this.id).subscribe((data) => {

      const dados = data.dados;
      dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString('pt-BR');
      dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString('pt-BR');

      this.funcionario = data.dados;
    })
  }

  InativaFuncionario() {
    this.FuncionarioService.InativaFuncionario(this.id).subscribe((data) => {
      this.router.navigate(['']);
    })
  }
}
