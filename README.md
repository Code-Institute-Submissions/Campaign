# Campaign Project

### Project 2 with Code Institute 
#### Rebecca Manning

My second project involves large amounts of backend work, but most importantly... it involves a very realistic website where I will be running for presidency of USA.

----------------
### Campaign
#### What the project does, needs it fulfills & functionality

As I mentioned, I am currently running for presidency of USA. I created a simplistic campaign website where potential voters can quickly look through and get straight to viewing my main aims. It has a very smart and slick design to suit the level of presidency. I used large visual images for each main aim to make the site more powerful, as every part of the page has meaning for the campaign.

The website is highly interactive to make the politics and information more interesting for potential voters who may not find the information interesting. When you hover over the aims (or click on a phone) it shows some rough information about what I aim to do about it. The navbar header grows when hovered so the user can see it more clearly and then on the Education page the graphs are highly interactive. 

I produced a similar sectioned layout on the Education page with the interactivity continuing. Users can click the 'more' button to receive a guided tour explaining what I am going to do to fix each issue shown on the graph. Alternatively, users can click the 'reset' button to reset all of the graphs.

Lastly there is also a loading page gif to display while the page is loading because with all the large image backgrounds, the page doesn't look complete whilst waiting for the main parts of the design to load.

----------------
### TECHNOLOGIES

Alot more technologies were used in this project compared to the other to get the interactivity of the graphs as well as store large amounts of data.

* Bootstrap
* FlexBox
* CSS
* HTML
* JavaScript
* jQuery
* [Flask](flask.pocoo.org) -*Microframework for Python*
* [Mongo DB](https://www.mongodb.com/) - *NoSQL Database storing and presenting the data in JSON format*
* [D3.js](https://d3js.org/)
* Dc.js
* Crossfilter.js
* Queue.js

----------------
### DEMO

**Heroku** - https://gentle-everglades-57779.herokuapp.com/

----------------
### TESTING

* https://validator.w3.org/ - checked errors and went back and fixed if needed

* I frequently asked friends, family and peers to have a look through my website and give feedback on code, functionality or aesthetics that could be improved.

* I constantly tested the website on different browsers as well as different size screens (Explained more below).

* Manual testing:
  * I used the Google Chrome developer tools to test my website on various different screen sizes. I then confirmed this by testing it on my Iphone6, friends' Iphone5, Ipads and Laptops. I made sure the graphs wrapped correctly and displayed on mobile screen sizes. I produced an option to scroll across when the long charts do not fit the width.
  * I downloaded different browsers; Firefox, Chrome and Internet Explorer to test my site on. I also viewed the site from a macbook to test safari.
  * The graphs were tested thoroughly by clicking on various areas and seeing if it responded or jammed. I realised that certain graphs where you can pick a certain area of time made the whole system lag, so decided to remove these.
  * I tested the jQuery on the navbar and the aim titles by hovering over different areas and seeing if it responded correctly.
  * The links were tested to see that they guide the user to the right area.
  * The social media icons on the footer were clicked to see that they don't take the user anywhere (as no account), but do not produce errors.

----------------
### CREDIT

* Credit to Code Institute as it is the course I am taking - I have showed in my annotation that I understand it all and also personalised it a lot to my needs. I used it as a base for my site and to follow methods on how to build up a site using Flask.
* Images were sourced from Pixabay (a free royalty-free images site) or created myself.

----------------
### CHALLENGES
#### What was kept/changed to fit my need

* One of my greatest challenges was getting the hang of the new technologies and how they worked with crossfilter. I spent a lot of time messing around and playing with it all so that I understood it. 
* If you add too much data or too many crossfilter then the page runs very slowly. I quickly found this out the hard way and made sure I set a limit of 20000 results as well as limiting the crossfilters I used.
* It was a challenge thinking of a new layout that would be smart enough for presidency but attractive enough for users of all backgrounds. I came up with the idea of seperating pages into sections with easy scroll throughs and only 2 pages. This allowed me to get straight to the point and keep it simplistic so that users wouldn't get bored by all the politics. 
* Due to the graphs size and the crossfilter design, I focused on a laptop first design. I used the large screen to create a visual story for the users with simplistic commentary that follows.
* Great challenge designing an average donation number display. I kept adjusting the code, and after some time I got it working!
* I aimed to make the website interactive to make the experience enjoyable and fit with the interactive crossfilter design. The header grows when hovered over so the user can see it clearly (because it's quite small). The titles for each aim have a feature that when hovered over, shows more information (and also on a phone when clicked).
* To make sure the graphs were visible on mobile or Ipad display, I created an option for horizontal scrolling. I made sure to hide the scroll bar when displayed on larger screen sizes so it looks more clean.
* I did think about taking away the transparency on the header to make it clearer when the user scrolls, but I preferred the design without. I felt the transparency on the header kept a more smart look to the site.
* Lastly, getting a nice photoshop of my face on to the president... it's harder than it looks!

----------------
### PROJECT BRIEF
#### Code Institute

**Get Yourself Elected**
* You (the student) are running for office as the governor of the US state of Arkansas (this state was randomly chosen just for you :D). As part of your campaign you would like to tell your potential voters about how bad the funding for education is in your state and what you would do to change it.

* In order to achieve this, you will use the school donations data to inform them of the lack of funding in the state. This information should be based on true data from the school donations database, but it doesn’t have to include all of the data.

* Choose the pieces of data that will help you tell your story in the most effective manner.

* Make sure to include additional pages to describe your platform and promote your plans regarding education. Feel free to include (or invent) any additional data or detail that would support your campaign.

**Create Your Own Project (Recommended)**
* If you choose to create your own project, the scope should be similar to that of the example brief above. If you want some ideas, please ask your mentor for advice and direction.

-----------------
### PROJECT GUIDELINES
#### Code Institute

* The data that you choose to work with, should be stored in either an SQL database (preferably MySQL), or a noSQL database (preferably MongoDB)

* The project must use Flask to retrieve the data from the database and return it to the browser.

* The dashboard should include, at the minimum a line/bar graph and a pie graph. Add any additional graph types that may be relevant to your dataset.

* The front end must use D3.js to display the data and there must be some way of interacting and filtering the data in the charts using 

* DC.js and crossfilter.js, or another equivalent.

* Use as much functionality as you deem necessary from the lessons

* Use Github for version control

* You should deploy the final working version of your code to Heroku (or an alternative hosting platform that you are familiar with)

* Make sure your site is as responsive as possible. Use appropriate testing sites to test your web sites in several different environments

* Write a README.md file for your project that explains what the project does and the need that it fulfills. It should also describe the functionality of the project, as well as the technologies used. Detail how the project was deployed and tested and if some of the work was based off other code, explain what was kept and/or how it was changed to fit your need. A project submitted without a README.md file will FAIL.

-----------------
### FINAL NOTES

I would just like to mention that the reason the github uploads are not spread out more evenly is because I've also been in my final year at Universtiy so have been working on this course when I haven't had exams or coursework.
