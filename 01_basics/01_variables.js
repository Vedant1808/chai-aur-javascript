const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*
🧠 Summary Table
Feature        	var	        let     	const
Scope	        Function	Block	    Block
Redeclaration	✅ Yes	  ❌ No	    ❌ No
Reassignment	✅ Yes	  ✅ Yes	    ❌ No
Hoisted	        ✅ Yes	  ✅ Yes	    ✅ Yes
Initialization	undefined  Not initialized	Not initialized

Hoisting : JavaScript moves declarations to the top of the current scope (function or block) before the code is executed.

But only the declaration is hoisted — not the initialization.


| Keyword | Hoisted? | Initialized?        | Access before declaration   |
| ------- | -------- | ------------------- | --------------------------- |
| var   | ✅ Yes    | ✅ Yes (`undefined`) | ✅ Allowed (but `undefined`) |
| let  | ✅ Yes    | ❌ No                | ❌ ReferenceError            |
| const | ✅ Yes    | ❌ No                | ❌ ReferenceError            |

*/
