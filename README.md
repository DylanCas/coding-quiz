# coding-quiz
Creating a timed quiz in a webpage using JS/Web-API
## Description
A rather dynamically generated coding quiz using javascript and webapi functions. Will test basic javascript knowledge and provide a ending score based on how much time is left, and keep user scores/initials in local storage
<!-- TODO remove following **** note -->
**** In progress, not yet completed. Submitting to put on board

## Usage
Upon loading, you are greeted by the starting page and a begin button. Once pressed the menu disappears, questions start and so does the timer, counting down from 60s. For every incorrect answer, 5s is subtracted from the timer, and therefore your score. 
Once the timer reaches 0, or you answer all questions, you reach the quiz end screen where you can store your initials alongside the score.
You will have the option to clear the scores or go back to the main menu. 

## Screenshot and link
<!-- TODO include screenshot and link -->
![screenshot](./assets/images/)
Link:

## user story
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

## Acceptance Criteria 
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score