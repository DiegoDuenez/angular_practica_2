export class Persona{

    public id: number;
    public nombre: String;
    public apellidos: String;
    public edad: number;
    public ocupacion: String;
    public contacto: number;
  
   constructor(id: number, nombre: String, apellidos: String, edad: number, ocupacion: String, contacto: number){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.ocupacion = ocupacion;
        this.contacto = contacto;

   }

}

export const PERSONAS: Persona[] = [
    { id: 1, nombre: 'Diego',
    apellidos: 'Dueñez Villa',
    edad: 18,
    ocupacion: 'Estudiante UTT',
    contacto: 8711223529 },
    { id: 2, nombre: 'Juan',
    apellidos: 'Reyes Perez',
    edad: 25,
    ocupacion: 'Programador Web',
    contacto: 8714871291 },
    { id: 3, nombre: 'Alberto',
    apellidos: 'Gomez Castro',
    edad: 35,
    ocupacion: 'Contador',
    contacto: 8715909032 },
    { id: 4, nombre: 'Maria',
    apellidos: 'Torres Escobedo',
    edad: 23,
    ocupacion: 'Diseñadora grafica',
    contacto: 8712783430 },
    { id: 5, nombre: 'Arturo',
    apellidos: 'Ruiz Escobar',
    edad: 30,
    ocupacion: 'Ing. en mantenimiento',
    contacto: 8710103812 },
    
  ];

  
