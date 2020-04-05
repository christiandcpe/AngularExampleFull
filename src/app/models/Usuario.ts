export class Usuario{

    /**private id: number;
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private email: string

    //constructor(id, nombrem apellidos, edad, email) 

    constructor(){
        this.id = 1
        this.nombre = 'Diego Antonio'
        this.apellidos = 'Quiroz Ramirez'
        this.edad = 26
        this.email = 'ingquirozramirez@gmail.com'
    } */

    /** EN TYPESCRIPT SE PUEDE REDUCIR Y MINIFICAR CODIGO */
    
    constructor(
        public id: number,
        public nombre: string,
        public apellidos: string,
        public edad: number,
        public email: string,
        public sexo: string
    ){}
}