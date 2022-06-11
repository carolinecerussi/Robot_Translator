
# Mr Robo

#### By Caroline Cerussi

#### 
A webpage where if you enter a number into the input space, the robot will translate it into it's own language using JS code parameters to come up with a string array of translated result.

## Technologies Used

* html
* css
* JS

## Description


describe : inputNumArray()
-------1-----------
test: It will return an array of each number between 0 and input. 
Code: inputNumArray(3);
Expected Output:[0, 1, 2, 3]

------2----------
Test: It will convert inputNum array into a string array and include punctuation.
code: inputNumArray(4)
expected output: ["0", "1", "2", "3", "4"]


Describe: WhatBotSees()
-------1---------
Test : It will return any number input that included a 3 as "Won't you be my neighbor?"
code: WhatBotSees(4)
expected output : ["0", "1", "2", "Won't you be my neighbor?", "4"]

------2--------
Test : As long as the input number doesn't include a 3, any number input that included a 2 will return as "Boop!";
code: WhatBotSees(4)
expected output : ["0", "1", "Boop!", "Won't you be my neighbor?", "4"]

------3--------
Test: As long as the input number doesn't include a 2 or a 3, any number input that included a 1 will return as "Beep!";
Code: whatBotSees(14)
expected output : ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"]



## Setup/Installation Requirements

* This is a great place
* to list setup instructions
* in a simple
* easy-to-understand
* format

{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}

## Known Bugs
 
none

## License

{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}

Copyright june 10 2022 Authorized by Caroline Cerussi