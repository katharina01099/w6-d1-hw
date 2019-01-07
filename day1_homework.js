//Episode 1

/*
output will be "The murderer is Miss Scarlet" because const is mutable
*/


// Episode 3


/*
output:
The First Verdict: The murderer is Mrs. Peacock.
The Second Verdict: The murderer is Professor Plum.
--> because let has a lexical scope within the const declareMurderer
so when declareMurderer is called it uses the let from within the block.
const secondVerdict is outside the const declareMurderer and so it uses let murderer
*/

// Episode 4

/*
1. output: 'Miss Scarlet', 'Professor Plum', Colonel Mustard
2. output: 'Mrs Peacock'
because when printing the suspects it uses the let variable from with the variable declareAllSuspects
and then the other lets declared outside.
when suspect three is called it uses the first suspectThree variable because it
cant look inside const declareAllSuspects
*/

// Episode 5


/*
output: The weapon is the Revolver.
because: all constants are mutable in this example and
changeWeapon defines the weapon as Revolver.
*/


// Episode 6


/*
output:
'The murderer is Mrs White'
varibale plottwist is called, which changes changeMurderer
from Mr Green to Mrs White
*/

// Episode 7


/*
within changeMurderer the variable murderer is not defined so it is
added to the global scope
*/

// Episode 8


/*
The weapon is candle stick because all const are mutable
*/

// Episode 9


/*
The murderer is Professor Plum because the first let declares the global scope.

*/
