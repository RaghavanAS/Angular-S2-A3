//Decalring a class
class EnquireDetails {
    //Declaring a private property
    private _personName : string="";
    //Get method
    get NameOfPerson(): string
    {
        //validating if given personName is not null
        if (this._personName != "")
            return `The UserName  ${this._personName}  is a valid user`;
        else
            return `The UserName  "${this._personName}"  is a invalid user`;
    }
    //set method
    set NameOfPerson(pName: string)
    {
        this._personName = pName;
    }
}

//object Declaration
let EDetails = new EnquireDetails();
//displaying property without passing any value
alert(`${EDetails.NameOfPerson}`);
//passing value to property
EDetails.NameOfPerson = "Raghavan";
//displaying property after passing the value
alert(`${EDetails.NameOfPerson}`);
