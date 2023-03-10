# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React but should also be an exercise in creating good user experiences.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. App.js controls of all the data in state, renders the other components, and performs the game logic.

### 📚 User Stories

- As a user, I can see a three by three grid game board on the page.
    Branch: game-grid
    - Create a 3x3 grid by mapping through the array
    - Centered the boxes in the viewable window 
    - Centered the title as well


- As a user, I can click on a square to mark it.
    - Branch: clickable-square
    - Add an onClick to the square component so that it passes to each square in the gameboard
    - Created a handleGamePlay function that passed through an index of the gameboard and updated state to our mark when user clicked (onClick)



- As a user, my partner can click on a square after me and see their mark.
    Branch: opponent-marker
    - Create a new state variable nextTurn using a Boolean value true as the default state
    - Created conditional logic using if/else statement to update state based on whether the last click returned an X or O
    


- As a user, I can't click on a square that has already been marked.
    Branch: no-repeat-clicks
    - Created an if statement to check to if there is already an X or O in that square before it tries to update state and then returns the index of the clicked square
    - If there is already something in the square, it will not allow you to click on it to update state to change the marker


- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
-Branch: winner
- Set conditions for winning the game. (8 potential options) 
  - hold each winning option in an array. 
    - These winning options will be the indexes of the matched 3 markers
- These values will be iterated through usingg a for loop to see if the clicked squares have meet a winning condition.
- If the have met a winning condition, then they will be passed through a conditoinal statement to very that the winning markers all match.
- Passes through a conditional statement to notify the players if the game has been won or if the game will continue.
- Passed the variable for the currenCondition into the App.js return statement, within the reach fragments to dynamically display where the game is currently at. 

- As a user, I can't continue playing the game after the game has been won.
- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
- As a user, I can click on a restart button that will clear the game board.

### 🏔 Stretch Goals

- As a user, I can see a pleasant stylings on the application.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)

