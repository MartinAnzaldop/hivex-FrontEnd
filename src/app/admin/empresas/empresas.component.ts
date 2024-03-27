import { Component, Input, OnInit } from '@angular/core';

interface Company {
  name: string;
  address: string;
  contact: string;
  documents: string[];
}

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  companies: Company[] = [
    {
      name: 'Empresa ABC',
      address: 'Calle Principal, Ciudad XYZ',
      contact: 'John Doe - johndoe@example.com',
      documents: ['Contrato de Constitución', 'Estados Financieros']
    },
    {
      name: 'Empresa XYZ',
      address: 'Avenida Principal, Ciudad ABC',
      contact: 'Jane Smith - janesmith@example.com',
      documents: ['Declaración de Impuestos', 'Registro Comercial']
    },
    // Agrega más empresas según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.companies); // Mostrar el arreglo de empresas en consola
  }

  aprobarEmpresa(company: Company) {
    console.log('Empresa aprobada:', company);
    // Lógica para aprobar la empresa
  }

  rechazarEmpresa(company: Company) {
    console.log('Empresa rechazada:', company);
    // Lógica para rechazar la empresa
  }

  
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  get getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
