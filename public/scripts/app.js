const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const createTweetElement = function(tweet) {
const newElement = `
  <article class='tweet-container'>
    <header class='tweet-header'>
      <div id='tweet-profile'>
        <img id='profile-img' src='${tweet.user.avatars}'>
        <span>${tweet.user.name}</span>
      </div>
      <span id='tweet-username'>${tweet.user.handle}</span>
    </header>
    <span id='tweet-text'>${tweet.content.text}</span>
      <footer>
      <span id='timestamp'>${tweet.created_at}</span> 
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

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet);
