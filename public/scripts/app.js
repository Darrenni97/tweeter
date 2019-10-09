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

  const loadTweets = () => {
    $.ajax('/tweets')
    .then((data) => {
      renderTweets(data);
    })
  }
  loadTweets();
  
  $('form').on('submit', (event) => {
    const inputText = $('#tweettext').val()
    if (inputText === '') {
      alert('Empty Tweet')
    } else if (inputText.length > 140) {
      alert('Too much text')
    } else {
      event.preventDefault()
      const data = $('form').serialize();
      $.ajax({ url: '/tweets', method: 'POST', data: data })
      .then(() => {
  
      })
    }

  })

})
