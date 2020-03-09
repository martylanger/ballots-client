# Vote Betterly: A platform for group decision-making

Vote Betterly allows the user to create "elections", each with a name, voting
method, and up to 9 options.

This is a component of the larger project. I conceived of Vote Betterly
intending it both to introduce people to the concept of alternative voting
methods and to be a useful tool for people to use for group decision-making.

## Important Links

- [VB API Repo](https://github.com/martylanger/ballots-API)
- [Deployed API](https://rocky-lake-61968.herokuapp.com/elections)
- [Deployed Client](https://martylanger.github.io/ballots-client/)

## Planning Story

I basically followed the schedule suggested by the GA instructors. I started
with my wireframes, user stories, and ERD. It very quickly became apparent that
I wouldn't be able to create the entire VB app in the timeframe provided for
this project, so I decided to just build the capability to create an election
and to save the actual voting mechanisms for a later date.

The next step was to set up the API, which was a mostly hitchless process. When
I began work on my client, I started by getting the authentication functions up
and running, and then I set about getting my election CRUD in place. I worked on
some features while I was still in this stage. With my debugging complete, I
finished up with some styling and this here README.

When I ran into trouble, I console.logged the heck out of the problem and called
for backup only when that failed - or when the problem was unwanted page
refreshings and I couldn't find the discrepancy without help.

Really, most of the stuff worth knowing is in the introduction to this doc and
the unsolved problems below.

### Technologies Used

- Javascript
- jQuery
- AJAX
- HTML/SCSS
- Bootstrap
- Handlebars

### Unsolved Problems

- I still need to make the center-column buttons centered.
- I would still like to implement a better interface for updating an election.
  - In particular, I'd like to have the current field values appear as place-holders.
- I'd like to restyle the app.
- I'd like to make the app mobile-friendly.
- I intend to restrict voting method options to particular methods.
  - The execution of which methods I intend to write into my program to produce results!
- Eventually, I'd like to create the whole VB app!

#### Wireframe

![Wireframe](https://i.imgur.com/ouxyWfd.jpg)

### User Stories

- As a user I want to sign in/up
- As a user I want to create a new election
- As a user I want to see all my elections
- As a user I want to view a single election
- As a user I want to update an election I own
- As a user I want to delete an election I own
