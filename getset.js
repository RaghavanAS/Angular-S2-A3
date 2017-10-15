//Decalring a class
var EnquireDetails = /** @class */ (function () {
    function EnquireDetails() {
        //Declaring a private property
        this._personName = "";
    }
    Object.defineProperty(EnquireDetails.prototype, "NameOfPerson", {
        //Get method
        get: function () {
            //validating if given personName is not null
            if (this._personName != "")
                return "The UserName  " + this._personName + "  is a valid user";
            else
                return "The UserName  \"" + this._personName + "\"  is a invalid user";
        },
        //set method
        set: function (pName) {
            this._personName = pName;
        },
        enumerable: true,
        configurable: true
    });
    return EnquireDetails;
}());
//object Declaration
var EDetails = new EnquireDetails();
//displaying property without passing any value
alert("" + EDetails.NameOfPerson);
//passing value to property
EDetails.NameOfPerson = "Raghavan";
//displaying property after passing the value
alert("" + EDetails.NameOfPerson);
//# sourceMappingURL=getset.js.map