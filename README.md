#### Preparation and Testing

After reading the wiki page about [Roman Numerals](http://wikipedia.org/wiki/Roman_numerals), it was quite straightforward to determine the right approach to solve the problem based on the basic rules of the Roman numeral system (including the Subtractive Notation).

After defining the action plan, I started to implement tests for valid and invalid inputs, with several decimal numbers and their respective Roman Numerals. I made use of [Jasmine](http://pivotal.github.io/jasmine/) as the testing framework.


#### Coding

I created a Generator class to support other future implementations of generators. For now it only includes a *romanNumeralGenerator(number)* function that receives 1 argument and returns its value in Roman format. The function also validates if the input is in the correct format and range (Roman numbers start from the decimal number 1).

This code has been tested on Google Chrome 31 and Mozilla Firefox 26.
