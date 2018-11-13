# Overview
MyReads provides an interactive book reading web application. The user can place a book into one of three states: "Currently Reading", "Want to Read", and "Read". The current state of the user's library is stored in an external database accessible via an API. The database also provides a list of books that the user can select from.

# Design
This application uses the abstraction of a "Shelf" to hold a collection of books that are in one of the states noted above, e.g., there is a "Currently Reading" "Shelf". Accordingly, "Shelf" and "Book" are components within this web app. Additionally, a "Search" component is defined to provide the ability to add new books into the user's library and exists at a distinct route from the index path for the application. Finally, "SelectShelf" is a component used to set the shelf for individual books both already in the library and not yet in the user's library and "MainPage" is a component to define the home page view of the application.

# Source Files
*     index.js - Entry point for the web application, sets up React-Router management of the pages in the application.
*     App.js - Defines the BooksApp React Component. App.js manages the state of the user's library including retrieving the initial state at launch, changing the shelf of a given book already in the user's library, and adding a new book to one of the user's shelves. Defines the route for the search page and for the home page and displays content according to the active page. App.js has dependencies on MainPage.js, Search.js, and BooksAPI.js.
*     MainPage.js - Defines the view for the user's home page. Displays each of the shelves in the application with all of the books belonging to each shelf. Provides the user with the ability to change the shelf assigned to an individual book. For example, the user may change the state of a book from 'Currently Reading" to "Read". MainPage.js has a dependency upon the Book.js.
*     Search.js - Defines the view for the search page where users may look for new books and add them to their library. Search.js has a dependency upon Book.js and BooksAPI.js.
*     Book.js - Defines the view for an individual book in the library - thumbnail, title, and author. Book.js has a dependency upon SelectShelf.js.
*     SelectShelf.js - Defines the view for the user to select the shelf for a book within or without the library.
*     App.css - Styling for the MyReads web application

# Installation
npm install

# Launching
npm start
     

