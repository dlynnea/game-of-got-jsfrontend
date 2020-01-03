# The Game of Game of Thrones
- Back-end: https://github.com/deadnettle90/mod2-project
- Front-end: https://github.com/deadnettle90/mod2-project-frontend

# Introduction
Welcome to The Game of Game of Thrones, and welcome to Westeros, a land of ice, fire, fickle politics. The continent is in a state of war, with many claimants to the title of king of Westeros. Beneath each king are the houses, families, and lords of Westeros, pledging loyalty and service to the king they believe has the greatest right and claim to rule... or they are simply sworn to whoever is left. Kings come and go, and houses shift allegiance as often as the wind changes, but if one king was able to eliminate all others, perhaps that would quell the chaos and flux.

# Technology Stack
The back-end is using Ruby on Rails and a PostgreSQL database, and is using a MVC framework to model a King having many Houses, and Houses belonging to a King.

The front-end is HTML, with Javascript used for DOM manipulation and communicating with the back-end, and CSS used for styling.

# How to Start
1. Clone each of the GitHub repositories listed above
2. In the back-end repository, run the following terminal commands for set-up:
- `bundle install`
- `rails db:create`
- `rails db:migrate`
- `rails db:seed`
- And then `rails s` to start the Rails server, which will run on localhost:3000
3. In the front-end repository, run `lite-server`, which will run on localhost:3001

# How to Use
The home page will display each of the current kings and current number of houses that belong to them.

## Creation
Below the king cards will be an entry field to create a new King. To create a new king, enter the full name of the new king into the text field, and then click the "Create" button. This will send a POST request to the back-end and create a new King record with the name provided. The newly created king will appear as a new card on the home page, and with a house count of zero.

## Updating
To add houses to a king, newly created or existing, click on any of the king cards to navigate to their show page. The page will show cards for each of the houses loyal to that king. Below the cards will be a dropdown listing all the available houses, and a button to enlist them to the currently viewed king. And if available, a list of houses without a king will be listed below the dropdown. When the button is pressed, it will check the dropdown for the selected house, and then send an PUT request to the back-end to update that house to the king that is currently being viewed. This will also optimistically render the newly updated house to the page, and remove it from the king-less list, if it was there.

## Deleting
Below the king creation field is the option to send a king a wedding invitation. The dropdown will list all current kings, and the invite button next to the dropdown will send the invitation to the selected king. This will the navigate to the wedding page, informing you that the wedding was a ruse, that the king was killed, and their houses have been orphaned and left without a king. On the back-end, the invite button is sending a DELETE request to the king, and the King controller is updating each of houses that belong to it to a null value, and then destroying itself.

## Battle
At the bottom of the page, there is a "Let's Battle" link, which will navigate to the battle page. On this page, two houses can be selected from the dropdowns to fight each other, with the fight starting once the "Fight" button is pressed. For battle, a random house is selected from each of the combatant kings, and the military power of that house is compared to other. When the "Fight" button is pressed, the random houses and their military power will be displayed, with the house with the greater military power being declared the winner.

# Coming Soon / Possible Future Additions
- Limit house enlistment to only houses that are without kings
- Battle plays like a game of War, where the losing house would be transferred to the winning king
- If a king loses all their houses in battle, they would be killed in that final battle
