

var adbook = {
book:[
     {
        name: {
            first:"Joe",
            lastName:"Michaels"
             },
        number: 555-555-5555,
        address: "1357 Ivory Way"
    },
    {
        firstName: "Mike",
        lastName: "McDonald",
        number: 555-555-5555,
        address: "1329 Ivory Way"
    },
    {
        firstName: "Seth",
        lastName: "Mayers",
        number: 555-555-5555,
        address: "1127 Ivory Way"
    },
    {
        firstName: "Zach",
        lastName: "Gaff",
        number: 555-555-5555,
        address: "327 Ivory Way"
    },
    {
        firstName: "David",
        lastName: "Bay",
        number: 555-555-5555,
        address: "27 Ivory Way"
    }
]
};
var a = window.prompt('Whitch contact would you like to access? (one, two, three)');

console.log(contact[a]['email']);
