# Description
This exercise recreates a reduced version of Twitter interface functionality as part of my Bootcamp course at Constructor Labs. 

The purpose of this exercise was  implementing Javascript in order to create interactive web applications.When a user submits a tweet, this would appear in the tweet history from the most recent to the oldest.

#Tasks

* Create an HTML page in index.html which contains a form with a textarea and submit button & added a div underneath which will contain our tweets timeline. 
 
* When a submit event is detected on the form element, takes the Tweet from the text area and places it at the top of the timeline underneath, clearing the area once the tweet is posted.

* Added a character counter underneath the textarea which updates every time the content of textarea changes.

* When textarea content goes over 20 characters, display the counter in red. When under 20, back to default color, as a reference for the user to know if the post is too long.

#Nice to Have
* Prevent tweets from being posted when character limit is over 280 characters.

* Adding a delete icon to each tweet, so that on click, it would remove the corresponding tweet from the timeline.

* When posting a new tweet to the timeline, turn handles into links. for example if a tweet contains @enpep it should be turned into <a href="/enpep">@enpep</a>.
