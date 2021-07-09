        //princípio de segregação de interface

        //interfaces segregadas com funções especificas

 interface Mamimefero{
     Mamar(); 
}

 interface MamimeferoTerra extends Mamimefero{
      caminhar();
          
}


 class Boi implements MamimeferoTerra{
     public Mamar(){ }
     public caminhar(){
        //implementação
    }
}
 class Baleia implements Mamimefero{
   public Mamar() { }
}