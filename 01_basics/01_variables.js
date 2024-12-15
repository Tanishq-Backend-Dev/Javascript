const accountId = 144553; //Immutable
let accountEmail = `tanishq@google.com`; //Mutable
var accountPassword = `Google@123`; // Mutable
accountCity = `Mumbai`;
let accountState;
// accountId = 2; // Not allowed
accountEmail = `thakur@google.com`;
accountPassword = `Fb@123`;
accountCity = `Pune`;

/*
Prefer not to use var because of issue in functional and block scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState ]);