# StudyBuilder
An app for studying efficiently, with every best study tool inside.
The use starts off on the Landing page, where they are greeted with a login page. Once the user has logged in, they are taken to the Dashboard where they can see all of the knowledge spaces they have
created. Once the user clicks on one, they are taken to that knowledge space where they can find their map of decks and cards, with each deck resembling a 'concept' and each card resembling an 'idea'.
Clicking on the deck brings up a sidebar where it gives the user the option to study the deck. Similar to Anki, the user goes through each deck and attempts to recall information on the spot, whilst
the spaced repetition algorithm is running.

# Specification
## 1. Landing Page

### 1.1. Register

- [ ] 1.1.1. On the register screen, there must be email, username, password and confirm password input fields.
- [ ] 1.1.2. If an email exists, a popup should appear with the message "Email already exists, please sign up with this email or try another email."
- [ ] 1.1.3. There must be a button that says "Already a user?", which redirects the user to the Login page when clicked.

### 1.2.1. Login

- [ ] 1.2.1. On the login screen, ther must be username and password input fields.
- [ ] 1.2.2. If either the username or password are incorrect, a popup should appear with the message "Invalid username/password".
- [ ] 1.2.3. There must be a button that says "Register", which redirects the user to the Register page when clicked.


## 2. Dashboard

### 2.1. Creating a Knowledge Base

- [ ] 2.1.1 A button saying "Create KB" should exist on the dashboard at all times.
- [ ] 2.1.2. If no knowledge space exists, there should be a message saying "Your second brain seems to be looking a little empty, click the "Create KB" button to create a new Knowledge Base!".
- [ ] 2.1.3. Upon clicking "Create KB", a modal should appear with a button saying "Confirm", as well as fields where the user is able to enter:
  - [ ] 2.1.3.1. The name of the KB. (must be between 3 and 20 characters inclusive)
  - [ ] 2.1.3.2. A description of the KB. (must be between 3 and 100 characters inclusive)
  - [ ] 2.1.3.3. A thumbnail depicting the KB. 
  - [ ] 2.1.3.4. 3 tabs displaying the three interval types: Semester, Trimester and Custom. The user should select one of the three (Further discussed in 3.7)
- [ ] 2.1.4. - Clicking on "Confirm" in the modal specified in 2.1.3 should give a popup message saying "Your Knowledge Base has been created, redirecting you to it now!", and the Knowledge Base page should open up
            after the popup is closed. If at least one of the fields haven't been filled correctly as specified in 2.1.3, an alert/popup should show up in the modal, alerting the user to fill out the corresponding empty fields.

### 2.2. Displaying Knowledge Bases on the Dashboard

- [ ] 2.2.1 - Each KB is depicted as a 1x2 rectangle, with the majority of the rectangle taken up by the thumbnail. The rest of the space is taken up by the name, and hovering over the rectangle will display the
            decription.
- [ ] 2.2.2 - Each rectangle should have a settings icon displayed at the top right. Clicking this icon will display a modal with the following items:
  - [ ] 2.2.2.1. A text field allowing the user to change the name of the KB.
  - [ ] 2.2.2.2. A text field allowing the user to change the description of the KB.
  - [ ] 2.2.2.3. An image field allowing the user to change the thumbnail of the KB.
  - [ ] 2.2.2.4. A Save button, which will only be toggled on if any of the fields have been altered. Otherwise, it is disabled.
  - [ ] 2.2.2.5. An Exit button, which does not save any of the user's changes.
  - [ ] 2.2.2.6. A Delete button, which will delete the Knowledge Base. Clicking on this will display a popup to confirm if the user wants to delete the KB. If so, delete the KB and send the user back to the Dashboard. Otherwise, send the user back to the modal.

## 3. Knowledge Base View

### 3.1. Creating a Deck

- [ ] 3.1.1. A button saying "Create Deck" should exist on the KB view at all times.
- [ ] 3.1.2. When the user creates a deck, a modal should appear with the following elements:
  - [ ] 3.1.2.1. An input field resembling the "Title" of the deck. (must be between 3 and 20 characters inclusive)
  - [ ] 3.1.2.2. A "Confirm" button to save the card.
  - [ ] 3.1.2.3. A "Cancel" button to exit the modal.
- [ ] 3.1.3. If the user presses Confirm while the title field has not fulfilled the requirement in 3.1.2.1, a popup should appear with the message "The title must be between 3 and 20 characters inclusive".

### 3.2. Creating a Card

- [ ] 3.2.1. A button saying "Create Card" should exist on the KB view at all times.
- [ ] 3.2.2. When the user creates a card, a modal should appear with the following elements:
  - [ ] 3.2.2.1. A dropdown which contains all the current decks in the KB.
  - [ ] 3.2.2.1. An input field resembling the "Question" side of the card. (must be between 3 and 100 characters inclusive)
  - [ ] 3.2.2.2. A <b>rich text</b> input field resembling the "Answer" side of the card. (must be between 3 and 100 characters inclusive)
  - [ ] 3.2.2.3. A "Confirm" button to save the card.
  - [ ] 3.2.2.4. A "Cancel" button to exit the modal.
- [ ] 3.2.3. If the user single clicks on a deck, the dropdown in 3.2.2.1 should be prefilled.
- [ ] 3.2.3. If the user presses Confirm while the dropdown has not been filled OR any of the Question and Answer fields have not been filled, a popup should appear with the message "Please (Select a dropdown | Write a Question | Write an Answer)".

### 3.3. Editing a Deck

- [ ] 3.3.1. When the user double clicks on a deck, an editing modal should appear with the following editable and populated field, the input field resembling the "Title" of the deck.
- [ ] 3.3.2. There should also exist a Confirm button to save changes.
- [ ] 3.3.3. There should also exist a Cancel button to exit the modal.
- [ ] 3.3.4. There should also exist a way to delete the deck, with a confirmation popup.

### 3.4. Editing a Card

- [ ] 3.4.1. When the user double clicks on a card, an editing modal should appear with the following editable and populated fields:
  - [ ] 3.4.1.1. A dropdown which contains all the current decks in the KB.
  - [ ] 3.4.1.2. A <b>rich text</b> input field resembling the "Answer" side of the card. 
  - [ ] 3.4.1.4. An input field resembling the "Question" side of the card.
- [ ] 3.4.2. There should also exist a Confirm button to save changes.
- [ ] 3.4.3. There should also exist a Cancel button to exit the modal.
- [ ] 3.4.4. There should also exist a way to delete the card, with a confirmation popup.
 
### 3.5. Displaying Decks and Cards (Challenging Bits #1)

- [ ] 3.5.1. The Title of the KB is represented as an ellipse at the centre of the page. This is known as the KB node.
- [ ] 3.5.2. The Title of each deck is represented as a triangle, with thick arrows from the KB node to each triangle. This is known as the Deck node.
- [ ] 3.5.3. The Question of each card is represented as a rectangle, with thin dashed arrows from the Deck node to each rectangle. This is known as the Card node.
- [ ] 3.5.4. When the user drags each node, they should move smoothly with collision detection.

### 3.6. Card types

Each card can take one of 3 forms. Each form should be selected in a bar that shows up at the bottom of the screen. The forms are:

#### 3.6.1. Cloze Test

- [ ] 3.6.1.1. If the card contains a passage (i.e., 50+ words), then the "cloze test" option is highlighted for the user to select.
- [ ] 3.6.1.2. Upon selection, the user can choose one of two types of cloze tests:
  - [ ] 3.6.1.2.1. Classic Cloze testing: The test should be set out such that all the nouns are hidden in the passage.
  - [ ] 3.6.1.2.2. Progressive Cloze testing: The test starts off as the entire answer with no words missing. There should be a button "Next" to move onto the next phase. In each subsequent phase, one word is deleted, and the user has to fill out the passage with those empty words. Eventually, the entire passage will be empty, and the user has to fill out the whole passage from memory.
- [ ] 3.6.1.3. When the user finishes either of these tests, they click on a "Confirm" button to reveal the answers, and grade themselves on how they did on the grade scale.

#### 3.6.2. Image Test

- [ ] 3.6.2.1. If the card contains an image, then the "image test" option is highlighted for the user to select.
- [ ] 3.6.2.2. When the user is presented with the card in learning mode, the user is prompted with an input field where they have to describe an image (i.e., caption the image).
- [ ] 3.6.2.3. When the user finishes typing their answer, they click on a "Confirm" button to reveal the image, and grade themselves on how they did on the grade scale.

#### 3.6.3 Q/A Test

- [ ] 3.6.3.1. If the card contains only a handful of words (i.e., < 50 words>), then the "Q/A test" option is highlighted for the user to select.
- [ ] 3.6.3.2. When the user is presented with the card in learning mode, the user is prompted with the question, and then has to guess the answer. Clicking on the card reveals the answer and the grade scale which the user has to select from.
- [ ] 3.6.3.3. Clicking on one of the grade scale options progresses through to the next card in the deck.

### 3.7. Study interval settings

- [ ] 3.7.1. When the user double clicks on the KB node, a modal should show up that allows the user to select one of three tabs to manage intervals:
  - [ ] 3.7.1.1. Semester
  - [ ] 3.7.1.2. Trimester
  - [ ] 3.7.1.3. Custom
- [ ] 3.7.2. The intervals to incorporate include:
  - [ ] 3.7.2.1.
  - [ ] 3.7.2.2.
  - [ ] 3.7.2.3.
  - [ ] 3.7.2.4. 
- [ ] 3.7.3. There should also exist a Confirm button to save changes.
- [ ] 3.7.4. There should also exist a Cancel button to exit the modal.

### 3.8. Spaced Repetition Algorithm, implemented with the SM2 algorithm by SuperMemo (Challenging Bits #2)

- [ ] 3.8.1. Follow the <a href="https://github.com/thyagoluciano/sm2/tree/master?tab=readme-ov-file">link</a> to implement this algorithm.

### 3.9. Better SM2 algorithm, AKA, SM2+

- [ ] 3.9.1. Follow the <a href="https://www.blueraja.com/blog/477/a-better-spaced-repetition-learning-algorithm-sm2">link</a> to implement this algorithm.





