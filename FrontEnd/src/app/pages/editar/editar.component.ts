import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioFormComponent } from "../../componentes/funcionario-form/funcionario-form.component";
import { Funcionario } from '../../models/Funcionarios';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-editar',
    standalone: true,
    templateUrl: './editar.component.html',
    styleUrl: './editar.component.css',
    imports: [CommonModule, FuncionarioFormComponent]
})

export class EditarComponent implements OnInit {

  btnAcao: string = "Editar"
  btnTitulo: string = "Editar funcionário"
  funcionario!: Funcionario;

  constructor(private FuncionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.FuncionarioService.GetFuncionario(id).subscribe((data) => {
      this.funcionario = data.dados;

    })
  }

  editarFuncionario(funcionario: Funcionario) {
    this.FuncionarioService.EditarFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/'])
    })
  }

}
