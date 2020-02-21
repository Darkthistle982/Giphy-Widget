# Giphy-Widget
A silly widget/app to gather gifs on various subjects and allowing the user to add additional subjects to the page at will.

## Table of Contents
* Application rules/Operation
* Tech used
* Details of application
* Link to live Project

## Application rules/Operation

This simple application is used to grab and display a sampling of gifs from the GIPHY website. The site includes a sampling of buttons of subjects I find interesting. There are also an 'Create New Button' and a 'Remove Button' button at the top of the page. When the user clicks on one of the topic buttons, it will query the GIPHY API and return the first 10 gifs from a search on the topic of the button pressed, including their title and rating. The gifs will display in a still state, and will animate if clicked. They can be paused again by clicking on the animated image. 

The user can also enter in a topic of their choosing into the input field, and if they click the 'Create New Button', a new button is added to the list of existing buttons on the screen. That button can then be clicked to grab 10 new gifs of the chosen topic. The 'Create New Button' will not function if there is no input in the box. 

The Remove button will delete the last button on the page. The user can remove all buttons, if they wish. 

## Tech Used

* HTML
* Bootstrap
* CSS
* Javascript
* JQuery
* GIPHY API

### Link to Live Project: https://darkthistle982.github.io/Giphy-Widget/
