// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
// loops through tweets
  for (tweet in tweets) {
    // calls createTweetElement for each tweet
      $('#tweets').append(createTweetElement(tweets[tweet]));
  }
  // takes return value and appends it to the tweets container
}

const createTweetElement = function(tweet) {
  const time = moment(tweet['created_at']).fromNow();
  const newElement = `
    <article class='tweet-container'>
      <header class='tweet-header'>
        <div id='tweet-profile'>
          <img id='profile-img' src='${tweet['user']['avatars']}'>
          <span>${tweet['user']['name']}</span>
        </div>
        <span id='tweet-username'>${tweet['user']['handle']}</span>
      </header>
      <span id='tweet-text'>${tweet['content']['text']}</span>
        <footer>
        <span id='timestamp'>${time}</span> 
        <span id='tweet-icons'>
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </span>
      </footer>
    </article>
  `
  return newElement;
}


$(document).ready(function() {
  renderTweets(data);
})