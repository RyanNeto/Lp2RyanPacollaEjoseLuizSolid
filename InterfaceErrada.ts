        //princípio de segregação de interface


interface Mamimefero {
     Mamar();
     caminhar();
    }


 class Boi implements Mamimefero{
    public Mamar() {}
    public caminhar(){
        //implements
    }
}
 class Baleia implements Mamimefero{
    public Mamar(){}
    public caminhar(){
        //implements
    }
}