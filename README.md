This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## TODO

- [x] Bootstrap the app
- [x] Setup git
- [x] Scaffold ui/layout
- [] Make some mock data
- [] Show Mock Data
- [] Dummy up remaining UI
- [] Setup API
- [] Create Routes
- [] Connect Routes to UI
- [] Style3
- []
- []
- []


## Assignment Requirements:
Book Reading List Application (React + TypeScript + Next.js) 
 
Overview 
Create a book reading list application where users can add books to a list, mark them as "read" or "to-read," rate them, and sort the list based on status. The application should use an in-memory API to store the list of books on the server. 
 
Requirements 
1. Frontend: 
* Build a simple UI in React using Next.js using a single route where users can: 
* View a list of all books in the app. 
* Add a new book with the following details: title, author, genre, and read status. 
* Edit the read status from to-read to read. 
* Delete a book from the list. 
* Sort the list by read status. 
* Make API calls from the client to create, read, update, and delete the book state on the server. 
2. Backend: 
* Use Next.js's built-in API routes to implement a simple in-memory REST API. 
* The API should provide the following endpoints: 
* GET /api/books 
* Retrieve the list of books. 
* POST /api/books 
* Add a new book. 
* GET /api/books/:id 
* Retrieve a single book. 
* PUT /api/books/:id 
* Update an existing book. 
* DELETE /api/books/:id 
* Remove a book. 
* Store the book data in-memory on the server (no database required). 
3. Tech Stack: 
* Use Next.js for both the frontend and backend. 
* TypeScript should be used across both the frontend and backend to enforce type safety. 
* For state management, feel free to use the approach or library of your choice. 
* Please do NOT use a UI component framework/library (MUI, Chakra, Bootstrap, etc) and instead use whatever styling approach you prefer to build your own components (CSS, CSS Modules, CSS-in-JS, TailwindCSS, etc). 
* You may use additional dependencies if they provide clear benefits but be judicious with your choices. 
 
Instructions 
* It’s recommended to use the Next.js automatic installer for project setup: 
* https://nextjs.org/docs/getting-started/installation 
* Expect to spend around 2 hours on the assignment. 
* Focus on the core requirements and avoid extra polish, optional features, or going over this time in an effort to create a "perfect" solution. 
* If something is incomplete feel free to explain your approach and decisions in the README.  
* The assignment will be evaluated with the following criteria in mind: 
* Does the application function as expected and meet the criteria? 
* Is the code well-organized? 
* Are typescript types used effectively? 
* Is the UX intuitive and user friendly? Visual polish is appreciated but secondary to usability. 
* How was the candidates’ time management and overall decision making? 
* Submission should be a public GitHub repository containing your solution’s source code and a short README file with clear instructions on how to setup and run the app along with which version of NodeJS should be used.  
* Feel free to include any relevant details about your approach, design decisions, etc. 