const form = document.querySelector('form');

form.addEventListener('submit', submitHandler);
form.addEventListener('click', clearTextArea)
form.addEventListener('input', charCounter)

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

function clearTextArea() {
  document.getElementById('userInput').value = ""
  document.getElementById('counter').value = ""
  counter.innerHTML = `Tweet chars : 0`
}

function charCounter() {
  const len = event.target.value
  counter.innerHTML = `Tweet chars : ${len.length}`
}


