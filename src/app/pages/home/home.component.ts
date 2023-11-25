import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Funcionario } from '../../models/Funcionarios';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ExcluirComponent } from '../../componentes/excluir/excluir.component';

// Angular Material
import {MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers:[FuncionarioService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
element: any;

  funcionarios: Funcionario[] = [];

  // busca de funcionários
  funcionariosGeral: Funcionario[] = [];

  colunas = ['Situação', 'Nome', 'Sobrenome', 'Departamento', ' Ações', 'Excluir']

  constructor(
    private FuncionarioService: FuncionarioService,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {

    this.FuncionarioService.GetFuncionarios().subscribe(data => {
      const dados = data.dados;

        dados.map((item) => {
          item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR')
          item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR')
        })

        this.funcionarios = data.dados;
        this.funcionariosGeral = data.dados;

    });

  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.funcionarios = this.funcionariosGeral.filter(funcionario => {
      return funcionario.nome.toLowerCase().includes(value);
    })
  }

  // abrir dialog sem angular material?
  OpenDialog(id: number) {
    this.dialog.open(ExcluirComponent, {
      width: '450px',
      height: '450px',
      data: { id: id }
    });
  }

}
