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






}
