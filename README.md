
# Mr Robo 

#### By Caroline Cerussi

#### 
A translator application that takes a user's input and outputs a different response.

## Technologies Used

* html
* css/boostrap
* Javascript/JQuery

## Description

This Webpage allows users to input a number to then get a result in the robotic language. Upon clicking submit, the number will be output a response from a robot, letting you know what the translation would be. There is then another button option that allows you to go back and resubmit a different number. 

## Tests

Describe : inputNumArray()
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

* Clone this repository onto your desktop
* Open repository folder named "Mr. Robo"
* Open index.html file in browser

## Known Bugs
 
 No known Issues

## License

MIT

Copyright (c) JUNE 10 2022 Authorized by Caroline Cerussi