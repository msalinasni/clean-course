interface Bird {
    eat(): void; //todas las aves comen
}

interface FlyingBird {
    fly(): number; //solo de aves voladoras
}

interface RuningBird {
    run(): void; //solo las aves corredoras
}

interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {

    public fly(){ return 100; }

    public eat(){}
}
    
class Hummingbird implements Bird, FlyingBird{

    public fly(){ return 200; }

    public eat(){}
}

class Ostrich implements Bird, RuningBird{

    public eat(){}

    public run(){}
}

class Penguin implements Bird, SwimmerBird{

    public eat(){}

    public swim(){}
}