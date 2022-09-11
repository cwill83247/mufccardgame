![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Purpose
The purpose of this site, is to host a card matching game for Manchester United Fans.
It is intended to demonstrate some of the skills I have learnt, in HTML,CSS, and Javascript to meet the criteria of milestone 2
Live Site
Link here

# Match the Players.
The game is aimed at all fans, particularly the younger generation of fans. They will match pairs of player images based on the club. The players will be past and present stars.
The idea was inspired by my 10 year old son, who is a Manchester Untied Fan. He selected the players to be included in the game, and was my main tester from a User Experience perspective. 

# User Experience Design
First Time Visitor Goals
•	As a first time user I need to quickly and easily understand the purpose of the site.
•	As a first time user I need to be able to understand how to play the game.
•	As a first time user I need to be able to view the website clearly on both tablet and mobile, as well as desktop.
•	As a first time user I need to be able to easily play the game, through responsive design.
•	As a first time user I need to be able to find the game intuitive.
•	As a first time user I need to have feedback on how I have done in the game.
Returning Visitor Goals
•	As a returning visitor I want to be able to start the game quickly
•	As a returning visitor I want to find the game equally challenging

# Design
## Structure
The page will have the Manchester United crest at the top of the page in a header div, which will clearly show users the page is about Manchester United. Heading 1 will be under the crest, and display the name of the game.  The left hand block will contain instructions explaining the purpose of the game and how to play the game. It will also contain timer, score information, and buttons to start a new game, and restart the canvas. The right hand block will initially display with start game text, this is so the user has time to read instructions, rather than the game start once the page has loaded. On clicking start the card game area will display 12 cards and the timer countdown will begin. The score count will update as pairs of games are matched, and provide the user with an indication of how they are doing. 
## Initial design Experience
The page has been designed to initially ensure the focus is on what the game is about. By using the Manchester United crest clearly at the top of the page, and the theme uses the Manchester United colours. I hav einentionally not start the gam eon load, so the user is initially drawn to my left block, so they to read the instructions on game play, when they are happy they can click start on the right block, or below the left block. The cards display initially showing the Manchester United crest to further enhance the purpose of the game.
## Colour Scheme 
The colours used in my design were red #DA291C; black (rgba 0,0,0,0), and white rgb(255, 255, 255). These colours tie in with the Manchester United crest, and the teams identity.
## Typography 
The font used was from Google fonts - Bebas Neueu, I felt this reglected the brand clearly and matched the identity of Manchester United.
## Images
The images used in the site, are of Manchester United Players, past and present as selected by my 10 year old son. These are players young and old will recognise. The Main Logo is the Manchester United crest which is the identity of the club. The images used were under creative commons license.

# Responsiveness 
The game is intended to be quick ,and fun for all users, on desktop, Tablet or Mobile. The design responds to varying screen sizes, and devices, changing the layout appropriately to ensure its playable on all device formats. The blocks will stack on top of each other for tablet and mobile to ensure more user friendly when they don’t have suitable screen sizes. It has been tested manually, and by viewing via Google chrome > inspect option.
# Future developments
•	Rather than have 6 images, would like a bank of 50 images with 6 getting randomly  selected each time a game starts.
•	At the end of the game provide some fact or statistic about Manchester United.
•	Create levels of difficulty, either by having less time to match, or the images are harder to make a match.

# Wireframes
Desktop view  
Tablet view 
Mobile view 


# Technologies used
•	HTML
•	CSS
•	Javascript

# Frameworks and Libraries
•	Bootstrap v5.1.3: Bootstrap was used to assist with the responsiveness and styling of the website.
•	Google Fonts: Google fonts were used to import the Prompt font family into the style.css file which is used on all pages throughout the project.
•	Gitpod: Git add, commit and push commands were used to maintain version control.
•	GitHub: was used as my online repository to score code, commit messages and versioning
•	GitHub Pages: was used to deploy my live site, and host my site
•	Balsamiq: Balsamiq was used to create the wireframes during the design process.
•	Chrome developer tools: Was used to inspect code, use of console was used to debug code, screen options were used to test on different screen sizes, different devices.


# Deployment
## Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...
Log in to GitHub and locate the GitHub Repository. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button. You should now have a copy of the original repository in your GitHub account.
Making a Local Clone
Log in to GitHub and locate the GitHub Repository. Under the repository name, click "Clone or download". To clone the repository using HTTPS, under "Clone with HTTPS", copy the link. Open Git Bash. Change the current working directory to the location where you want the cloned directory to be made. Type git clone, and then paste the URL you copied.
## Github Pages
1.	Log in to GitHub and locate the GitHub Repository.
2.	At the top of the Repository locate the "Settings".
3.	Click on "Pages" will open "GitHub Pages" Section.
4.	Under "Source", click the dropdown called "None" and select "Main Branch".
5.	The page will automatically refresh.
6.	At the top near github header to locate the now published site link


# Testing Tools
The Lighthouse, W3C Markup Validator, JSHint and the Lighthouse report were used to determine whether there were any errors in the code.
•	W3C Markup Validator
•	W3C CSS Validator
•	Lighthouse report
•	JS Hint

# Testing User Stories from UX Section
•	First time visitor goals
•	As a first time user I need to quickly and easily understand the purpose of the site.
o	The theme of the site is easily identifiable, and the instructions are clearly displayed, the design is clean and simple with focus on the users experience.
•	As a first time user I need to be able to understand how to play the game.

o	The instructions are clearly displayed, and when the page initially loads the focus is on the instructions rather than the game.
•	As a first time user I need to be able to view the website clearly on both tablet and mobile, as well as desktop.

o	The game is easy to play on all screen sizes, and devices ensuring it is enjoyable to play.
•	As a first time user I need to be able to find the game intuitive.

o	The game is very intuitive, it is clear it is about Manchester United, and the aim of the game is to match players. Feedback is good from the game.

•	As a first time user I need to have feedback on how I have done in the game.

o	The game clearly shows the counter, counting down, the number of cards matched and at the end of the game provided information on how I have done.

•	Returning Visitor Goals
•	As a returning visitor I want to be able to start the game quickly

o	New game options, and restart options are clearly visible.

•	As a returning visitor I want to find the game equally challenging

o	The cards are always displayed in random positions, so its always equally challenging.


# Errors and Bugs
•	When the page loaded the game started straight away not giving the user time to read the instructions. I resolved this by adding a html element that loads initially, and then on clicking start game changes to display the cards.
•	My Son identified that he could double click on a card and it would then match, leaving us then with odd numbers, and not making game very enjoyable.  I resolved this by adding an if statement to check if the id’s matched then not allow the match to take place. 
•	During testing I also identified that if no match the 2nd card didn’t display the image, it effectively flipped back immediately. I used setTimout to briefly show both cards, before flipping back.
•	There is a bug in the game currently, where if you click on the cards too quickly, it breaks the game and the cards do not match anymore. In the future this will be something that I would need to look at and rectify.


# Further Testing
•	The Javascript was run through JSHint to ensure correct with no coding issues
•	CSS was run through W3C Validation, and sucesfulyl passed
•	HTML was run through W3C vlaidation, and passed with no errros 
•	Test script was created and run, using JEST to test some of the functionality as part of TDD principal.
•	Manual testing was carried out, against my user stories.
•	 Family members tested the game, and gave me feedback. 

alidation

HTML - Validator used - https://validator.w3.org/ Passes all test

Accessibility - Lighthouse Viewer chrome developer tools - https://developers.google.com/web/tools/lighthouse page achieve 91%

CSS - Jigsaw W3C Validator CSS - https://jigsaw.w3.org/css-validator/ This document validates as CSS level 3 + SVG !

JS Hint - https://jshint.com/ - only error is related to module.exports as part of JEST testing and doesnt effect game play.


# Credits
Reference materials  usee !!!!

Media


# Acknowledgements
•	


