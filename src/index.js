function submitTweet() {
  event.preventDefault();
  newTweet();
  clearTextArea();
}

function newTweet() {
  const tweet = document.getElementById('userInput').value;
  const newTweet = document.createElement('p');
  newTweet.setAttribute("id", "tweet-history")
  const parentNode = document.getElementById('tweets-container')
  parentNode.insertAdjacentElement('afterend', newTweet)
  newTweet.textContent = tweet;
}

function clearTextArea() {
  document.getElementById('userInput').value = ""
  document.getElementById('counter').value = ""
  counter.innerHTML = '0'
}

function charCounter() {
  const len = event.target.value
  len.length <= 20 ?
    document.getElementById('counter').style.color = "#1DA1F2" :
    document.getElementById('counter').style.color = "red";
  counter.innerHTML = `Tweet chars: ${len.length}`
}


