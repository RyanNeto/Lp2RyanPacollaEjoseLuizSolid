class habilidade{
} 
class  animal{
    constructor (public name:string){}
    abstract fazerbarulho():void;
}

   
   class cachorro extends animal{
    fazerbarulho():void {
        console.log(`${this.name} está fazendo AU AU....`)
         }
    }
    export class gato extends animal{
        fazerbarulho():void{
            console.log(`${this.name} esta fazendo MIAU...`);
    } 
}
