import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FuncionarioService],
})
export class HomeComponent implements OnInit {
  funcionarios: Funcionario[] = [];

  // busca de funcionários
  funcionariosGeral: Funcionario[] = [];

  constructor( private FuncionarioService: FuncionarioService ) {}

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

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.funcionarios = this.funcionariosGeral.filter(funcionario =>{
      return funcionario.nome.toLowerCase().includes(value);
    })
  }
}
