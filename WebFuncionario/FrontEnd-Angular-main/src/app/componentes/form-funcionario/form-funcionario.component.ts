import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-funcionario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-funcionario.component.html',
  styleUrl: './form-funcionario.component.css'
})
export class FormFuncionarioComponent implements OnInit {

  funcionarioForm!: FormGroup

  constructor() {

  }

  ngOnInit(): void {
    
  }

}
