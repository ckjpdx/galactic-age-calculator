# Galactic Age Calculator
_by Chris K Johnson_

## Setup

## Tech Used


## Description
This app is a calculator that determines a person's age in various ways: in seconds, or based on other planet's orbital years.

## Bugs

## Contact
[github](https://github.com/noodlebrains)

## Planning


1. Configuration/dependencies
  * Establish time table for completing phases of the project
  * Establish working Node/Gulp environment
  * Install npm Gulp, Bower, Jasmine, Karma, Babel, Watchify, etc (full list in package.json)
    * Jasmine: write test cases for app specs
    * Karma: GUI for displaying test cases
    * Babel: add ES6 support to export/import js objects
  * Test each gulp task cluster
  * Create README and specs

2. Specs
  * Take a birth date from the user and determine how many years old they are. Input is a date in the form of a string and output is a number in years.

| Spec Description |  Input | Output  |
|---|---|---|
| If a user enters a no information for their birthday an error will display | (na) | Enter your bday first |
| If a user enters a date in an incorrect format a message will display | 1990-244-44 | Enter your bday in the correct format |
| If a user enters a bday later than the current date an error will display | 1-1-2050 | You can't be born in the future! |
| If a user enters a correct date a number in seconds will be returned | 1-1-1984 | 34 |
| If a user enters a life expectancy less than their current age a message will appear telling them they may die at any moment. | 90 | 'Warning! You are over the age expectancy and may die at any moment. Computer recommends sending goodbyes to loved ones ASAP' |

  * Take an age from the user via form and convert it into seconds (backend logic). Input is a number in years and output is a number in seconds.
    * Return the age of the user in Mercury years
    * Return the age of the user in Venus years
    * Return the age of the user in Mars years
    * Return the age of the user in Jupiter years
  * Take a life expectancy from a user and compare it to their age. Input is a number in years (expectancy) which is compared to their age. The output is a number, the difference of the two numbers, in years.

| Spec Description |  Input | Output  |
|---|---|---|
| If a user without a calculated age enters a number they will receive an error message. | (na) | "Please first calculate your age" |
| If a 30 year old user enters anything other than a number they will receive an error message.  | fifty | "Enter a valid number" |
| If a 30 year old user enters a number less than 1, they will receive an error message. | 0 | "Enter a valid number" |
| If a 30 year old user enters '80', a number of '50' will be returned. | 80 | 50 |


3. Integration
  * JavaScript and Sass files are linked in the head of index.html and are accessed once build task has ran.

4. UX/UI
  * Simple, high contrast, large font design.

5. Polish
