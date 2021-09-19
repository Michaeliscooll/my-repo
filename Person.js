class Person{
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    jump(){
       console.log(this.name + " Jumps");
    }

    eat(foodEaten = 'Apples'){
       console.log(this.name + ' eats ' + foodEaten);
    }
}