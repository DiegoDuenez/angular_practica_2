import { Component, OnInit } from '@angular/core';
import { Persona, PERSONAS} from '../../Modelos/persona';

@Component({
  selector: 'app-personas-component',
  templateUrl: './personas-component.component.html',
  styleUrls: ['./personas-component.component.css']
})
export class PersonasComponentComponent implements OnInit {

  personas = PERSONAS;
  selectedPersona!: Persona;
  mostrar:Boolean = true;
  estado: String = "Ocultar";
  name: String = "";


  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(persona: Persona): void {
    this.selectedPersona = persona;
  }
  
  dataShow(){
    
    if(this.mostrar == true){
      
      this.estado = "Mostrar";
      this.mostrar = false;

      
    }else{
      
      this.estado = "Ocultar";
      this.mostrar = true;

      
  
    }
    
  }

  /*agregarUsuario(id: number, nombre: String, apellidos: String, edad: number, contacto: number, ocupacion: String){

    console.log(id, nombre, apellidos, edad, contacto, ocupacion)
    this.personas.push(new Persona(id, nombre, apellidos, edad, ocupacion, contacto));
    

  }*/

  agregarUsuario(id: number, nombre: string, ap: string, edad: number, contacto: number, ocupacion:string){
    this.personas.push(new Persona(id,nombre, ap, edad, ocupacion, contacto));
    console.log(PERSONAS)
  }


  

  






}
