// Interfaces, Classs or Model Classes through-out the project are going to be added here and all the properties wull be available to be imported : 

export interface userDetails {
    firstName: string;
        lastName: string;
        age: number;
        address: {
            street : string,
            city : string, 
            state : string
        },
    isActive? : boolean 
}