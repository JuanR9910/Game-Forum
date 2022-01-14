# Game review forum

Project 4 Pitch:

My plan is to finish my previous project 2 the Game Review Forum or it's new name Angry Gamers. It is a full-stack application using the tech stacks EJS, Postgres, Psql, Nodemon, Nodejs, and Express.
 It's an app that will allow the user to make an account so they can make a review for the game that they love or hate. 
They can favorite games they like and post, edit or delete their reviews for that game. 
The home page will display a list of games that players mostly favorited and a list of games that players least favorited and these games will have clickable links that will send them to the review page where they can see other people's
comments and see what they think about the game. 
The webpages will also provide a search bar to easyily find the games they are looking for. The user with a created account can also post their own reviews on it as well as have a profile to display a list of their favorite games.
I will be using the IGDB API to pull data from such as the game ids, genres and many more to be able to have users find the games they want to talk about. 
My database which has already been created will be using postgres and psql here is an ERD showing a graph of my database: 

https://lucid.app/lucidchart/63972c5b-9c2d-47fb-9db7-4d71e3b8ac9e/edit?invitationId=inv_cc147db1-3bf0-4581-b34b-e6d3c5c28a65

https://drive.google.com/file/d/1kGoTzGg58DqGeBVm-QWjDugXQfmGqKFg/view?usp=sharing

https://user-images.githubusercontent.com/91287414/141556923-1307e079-d9f1-499d-926a-ec18d623d35d.png


With this database I will be able to pull data from it to render my comments, games and users. 

My MVP Goals will be to create an app with basic functionality such as being able to create an account to access the apps features, having the user be able to search for the game they desire to comment on. 
Have the user be able to post, edit or delete their own comments they want, this will require me to create GET, POST, PUT, DELETE routes for the comments controllers with javascript.
 Have the games come with clickable links that will redirect the user to the review page where they can talk about the game they want however they please. 
Finally have a profile page where the user can have their own list of games. 


My Stretch Goal for the end of this is to well....make another project lol. Work in progress......



My project speech:

My project is a game FORUM that will allow the user to basically search up a game that they would like to talk about and comment on them. I used the Tech Stack Express, EJS, and Node. And to make my database I used Postgressql.  Just say u just got done playing a game and you're like "WOW...that game was fun ya know I wanna fanboy and talk about this game with someone but I'ma loser and I don't have any friends" or you're like "WOW...THAT GAME WAS TRASH I need to save the future generation and prevent them from spending their valueable 60 American Dollars on this terrible product!" That's what my project is for. So here's the home page layout, here we have the a layout list of random games people have played before, now first to use my app I would want the user to make an account first obviously so we go to the signup page and make an account or if you already have one then login. So now you can go ahead and try out my product. So basically what I wanted the user to do was that they can click on one of these games like "hey I've played this game before! I wanna talk about it" so u click on on the names and u get redirected to the review page where I would like the user to be able to post a comment under their game and if they don't like it they would be able to delete it or edit that comment. And they wouldn't even have to click the link they could potentially search for any game they want to talk about and it would also redirect them to the review page where the game they search will show up and comment under that game as well. Also the API I am using is the IGDB Video Game Database API which the title kinda explains itself, it gives me a database of games to pull from which is what I used to display my games on the homepage here. So here's the code, my index.js this is my home route the basis of operations, my about route which was scrapped due to time contraints but the original idea was that the user would search up a game and the game would pop up with an about link which will send them to the about page to know what the game is they interested in is about like the platforms it's on, who made it, how it's played etc. My results for the search bar, helps the users search for a game they desire and be brought to that page for the game. Mainly, my review.js ended up being my MEAT of the project because this is pretty much what everyone is gonna be doing on here, commenting and talking shit about games pretty much. My favorite line of code was Promise.all() I still lack the knowledge of knowing what it does(will need more practice) but from my definition it takes multiple promises, puts them into an array and the result is essently a super promise. Obviously, I coded it out cause when you're me you find 1 solution and u get 3 more problems but that's ok.



Biggest Win: Review.js Routes and overall learning experience. 

What I could improve on: 
Fixing the issues with my GET route and finishing the PUT and DELETE routes.
CSS the rest of my pages
and finish my Profile page.
HITTING MVP



Installation Instructions: 
Fork and Clone REPO
Run Nodemon or NPM I first if you don't have Nodemon


