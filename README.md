# StudyBuilder
***
An app for studying efficiently, with every best study tool inside.
The use starts off on the Landing page, where they are greeted with a login page. Once the user has logged in, they are taken to the Dashboard where they can see all of the knowledge spaces they have
created. Once the user clicks on one, they are taken to that knowledge space where they can find their map of decks and cards, with each deck resembling a 'concept' and each card resembling an 'idea'.
Clicking on the deck brings up a sidebar where it gives the user the option to study the deck. Similar to Anki, the user goes through each deck and attempts to recall information on the spot, whilst
the spaced repetition algorithm is running.

# Specification
***

## 1. Authentication
- [ ] 1.1. On the register screen, there must be email, username, password and confirm password input fields. There must also be a button that says "Already a user?", which redirects the user to the Login page.
- [ ] 1.2. On the login screen, ther must be username and password input fields. There must also be a button that says "Register", which redirects the user to the Register page.

## 2. Dashboard
- [ ] 2.1. A button saying "Create KB" should exist on the dashboard at all times.
- [ ] 2.2. If no knowledge space exists, there should be a message saying "Your second brain seems to be looking a little empty, click the "Create KB" button to create a new Knowledge Base!".
- [ ] 2.3. Upon clicking "Create KB", a modal should appear with a button saying "Confirm", as well as fields where the user is able to enter:
  - [ ] 2.3.1. The name of the KB. (must be between 3 and 20 characters inclusive)
  - [ ] 2.3.2. A description of the KB. (must be between 3 and 100 characters inclusive)
  - [ ] 2.3.3. A thumbnail depicting the KB. 
- [ ] 2.4 - Clicking on "Confirm" in the modal specified in 2.3 should give a popup message saying "Your Knowledge Base has been created, redirecting you to it now!", and the Knowledge Base page should open up
            after the popup is closed. If at least one of the fields haven't been filled correctly as specified in 2.3, an alert/popup should show up in the modal, alerting the user to fill out the corresponding empty fields.
- [ ] 2.5 - Each KB is depicted as a 1x2 rectangle, with the majority of the rectangle taken up by the thumbnail. The rest of the space is taken up by the name, and hovering over the rectangle will display the
            decription.
- [ ] 2.6 - Each rectangle should have a settings icon displayed at the top right. Clicking this icon will display a modal with the following items:
  - [ ] 2.6.1. A text field allowing the user to change the name of the KB.
  - [ ] 2.6.2. A text field allowing the user to change the description of the KB.
  - [ ] 2.6.3. An image field allowing the user to change the thumbnail of the KB.
  - [ ] 2.6.4. A Save button, which will only be toggled on if any of the fields have been altered. Otherwise, it is disabled.
  - [ ] 2.6.5. An Exit button, which does not save any of the user's changes.
  - [ ] 2.6.6. A Delete button, which will delete the Knowledge Base. Clicking on this will display a popup to confirm if the user wants to delete the KB. If so, delete the KB and send the user back to the Dashboard.
               Otherwise, send the user back to the modal.

## 3. Knowledge Base View
- [ ] 3.1. TBC