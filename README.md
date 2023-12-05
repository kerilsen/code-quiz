# Coding Quiz

## Description

This is a timed quiz on JavaScript fundamentals that stores high scores. 

One challenge I faced was getting the formatting of the JSON file right and figuring out how to load and parse it. I'm eager to learn more advanced database 

This is a simple password generator that offers the user the ability to set parameters for the password including its length and character types (lowercase letters, uppercase letters, special characters and/or numbers). It helps the user quickly come up with a random computer generated password to combat the security concerns that come with less complex passwords.

One challenge I faced is the password criteria of having at least one character from each required parameter (for instance if you needed an 8 character password with only uppercase, lowercase and numbers and randomly generated a password with no numbers). I solved it by "seeding" my password with one character from each character sets then shuffling it to randomize.

## Installation

N/A

## Usage

Live URL: (https://kerilsen.github.io/code-quiz)

Load the page and click on the "Generate Password" button. You will be prompted to enter the number of characters you want (between 8 and 128) and which parameters you would like to select (uppercase letters, lowercase letters, special characters and/or numbers).

![Screenshot of prompt for lowercase letters](assets/images/screenshot_lowercase-prompt.png)

Press 'OK' to include the parameters you want to include or 'Cancel' to skip. (Please note that you must select at least one parameter).

A password will be generated back to the password text box. If you would like to generate another, click the "Generate Password" button again to make your specifications.

![Screenshot of generated password](assets/images/screenshot_generated-password.png)


## Credits

![How to shuffle characters of a string in JavaScript](https://www.codespeedy.com/shuffle-characters-of-a-string-in-javascript/)

## License

Please refer to the LICENSE in the repo.
