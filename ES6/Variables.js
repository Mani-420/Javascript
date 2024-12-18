const accountId = 7                     // when const is used it cannot be changed
let accountEmail = "mithu@google.com"
var accountPassword = "12345"
let accountCity = "Lahore"
let accountState = true;

// accountId = 2 // not allowed


accountEmail = "m@art.com"
accountPassword = "21212121"
accountCity = "Islamabad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// Wrong method 
// console.table(accountId, accountEmail, accountPassword, accountCity, accountState)

// Right Method 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])