import { Component, OnInit } from '@angular/core';

// creating a decorator - 
// Decorator is a part of typescript and it allows us to add extra informations on to our class, on to our components.
@Component ({
    selector : 'app-user',
    /*
    'app-user' : 
    The reason of using "app-" is : when we generate a component with CLI,
    this is the format uses for "selectors". app- the name of component.
    */

    /* 
       // After creating a separate file for the User Components (User.Component.html)
       // we don't have any need of this 'template',

       template : '<h2> Arnab Chakraborty </h2>'

        // instead we can use -
    */
    templateUrl : './User.Component.html', // we are refering to the html file. 

    // We can add some custom css here - 
    styleUrls : ['./User.Components.css'],

    // We can add some css here as well, like the 'template' before -
    styles : [`
        h2{
            color : blue;
        }
    `
    ]
    // But this is advised to keep this file separated. 
})

/*
    To access a class from outside the file - 
    put "export" 
*/
export class UserComponent {

// => Diving into Components / (3) Properties & Methods : We are creating some user-properties, constructor and some custom methods here - 

    // Properties :
    firstName = 'Arnab';
    lastName = 'Chakraborty';
    age = 22;
    address = {
        street : " Gourbanga Road ",
        city : " Habra ",
        state : " West Bengal "
    };

    // Methods :
    /*
     => Constructor : A Constructor is a special type of method of a class and it will be automatically invoked when an instance of the class is created. A class may contain at least one constructor declaration.
                        If a class has no constructor, a constructor is provided automatically. A class can have any number of constructors.
    */
        constructor(){
        console.log("Hello user....");
        // using "this" keyword -
        this.sayHello();
        this.hasBirthDay();
    }

    sayHello(){
        // console.log("Hello" + " " + this.firstName); // Old method.
        console.log(`Hello ${this.firstName}`);
    }

    hasBirthDay(){
        this.age += 1;
    }



// => Diving into Components / (4) String Interpolation - There are different types to bind data to the template from our component. "String Interpolation" is one of them.
    // It allows you to have variables inside the template. 
    // ***** We can use 'string interpolation' with method return values - 
    yourAgeIs(){
        this.age;
    }
    // Now, check this out in "User.Components.html".



// => Diving into Components / (5) Using Types : setting types to your properties - 
    first_Name : string = 'Arnab';
    last_Name  : string = 'Chakraborty';
    age_ : number | undefined;
    numberArray : number[] | undefined;
    stringArray : string[] | undefined;
    mixedArray : any[] | undefined;

    /* ***** Tuple :
        Tuples are a sort of list but with a limited set of items. In JavaScript, tuples are created using arrays.
        In Flow you can create tuples using the [type, type, type] syntax.
        When you are getting a value from a tuple at a specific index, it will return the type at that index.
    */
    myTuple : [string, number, boolean] | undefined;
    address_ = {
        street : " Gourbanga Road ",
        city : " Habra ",
        state : " West Bengal "
    };
    //We can add all these methods into the 'constructor', using 'this' keyword. 'this' refers to an object. 
}

export class newUserComponent {
    // Properties : 
    user : {
        firstName: string;
        lastName: string;
        age: number;
        address: {
            street : string,
            city : string, 
            state : string
        };
    } | undefined; 
    /* ***** Now, instead of defining all the methods inside the 'user' method in the "newUserComponent" class,
             we can actually define the methods inside an 'interface' later and refer that interface for accessing the user details - 
    // user : userDetails;
    */
              

    // Methods : 
    constructor() {
        this.user = {
            firstName : "Arnab",
            lastName : "Chakraborty",
            age : 22,
            address : {
                street : "V.I.P Road",
                city : "Kolkata",
                state : "West Bengal"
            }
        }
    }
}

/* Interfaces : Interfaces are kind of a like models for your data. 
/? The same method has been created into the 'User.ts' file inside "Models" folder. 
interface userDetails {
        firstName: string;
        lastName: string;
        age: number;
        address: {
            street : string,
            city : string, 
            state : string
        }
} 
*/

// importing a file from an outside folder into a file inside another folder : 
import { userDetails } from'../../Models/User'

export class InterfaceUserComponent{
    User_Details : userDetails | undefined;
}


