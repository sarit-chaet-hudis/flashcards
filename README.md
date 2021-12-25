# Flashcards app using react by sarit chaet hudis

Flashcards can be added, deleted, edited and are saved in local storage.
Train on the cards randomly. For each card if you guessed it, it will be removed from current training session.
Training session is saved in sessionStorage to keep training info across page refresh or moving between different pages in app.

## Components Diagram

// TODO add

Note: All components are class components for the sake of practice.

### Known issues and Todos

- If refresh is made on the train page, cards are not shown probably because local storage hasn't had the time to load.
  // TODO create loading buffer
