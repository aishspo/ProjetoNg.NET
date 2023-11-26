import { FuncionarioService } from './../../services/funcionario.service';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { CommonModule, NgFor, NgIf, NgIfContext } from '@angular/common';
import { Funcionario } from '../../models/Funcionarios';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';
import { ExcluirComponent } from '../../componentes/excluir/excluir.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, NgIf, NgFor],
  providers:[FuncionarioService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  // busca de funcionários
  funcionariosGeral: Funcionario[] = [];

  colunas = ['Situação', 'Nome', 'Sobrenome', 'Departamento', ' Ações', 'Excluir']
  funcionario: any;

  constructor(
    private FuncionarioService: FuncionarioService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.FuncionarioService.GetFuncionarios().subscribe(data => {
      const dados = data.dados;

      dados.map((item) => {
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-br');
        item.dataDeAlteracao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-br');
      })

      this.funcionarios = data.dados;
      this.funcionariosGeral = data.dados;
    });
  }

  search(event: any) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.funcionarios = this.funcionariosGeral.filter(funcionario =>{
      return funcionario.nome.toLowerCase().includes(value);
    })
  }

  OpenDialog(id: number) {
    this.dialog.open(ExcluirComponent, {
      width: '450px',
      height: '450px',
      data: { id: id }
    });
  }
}
