class  Game{   
  player = personagens
}

abstract class personagens{
    abstract pular():void;
    abstract correr():void;
}    

class Mario implements personagens{
 pular():void{}
 correr():void{}

}
