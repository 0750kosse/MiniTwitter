const form = document.querySelector('form');
form.addEventListener('submit', submitHandler);
form.addEventListener('click', clearForm)

function submitHandler(e) {
  event.preventDefault();
}

function newTweet() {
  event.preventDefault();
  const tweet = document.getElementById('userInput').value;
  const newTweet = document.createElement('p');
  newTweet.setAttribute("id", "tweet-history")
  const parentNode = document.getElementById('tweets-container')
  parentNode.appendChild(newTweet)
  newTweet.textContent = tweet
}

function clearForm() {
  document.getElementById('userInput').value = ""
}