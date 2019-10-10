const renderTweets = function(tweets) {
// loops through tweets
  for (tweet in tweets) {
    // calls createTweetElement for each tweet
      $('#tweets').prepend(createTweetElement(tweets[tweet]));
  }
  // takes return value and appends it to the tweets container
}

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
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
      <span id='tweet-text'>${escape(tweet['content']['text'])}</span>
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

//loads tweet data
const loadTweets = () => {
  $.ajax('/tweets')
  .then((data) => {
    renderTweets(data);
  })
}

//loads newest tweet
const postNewTweet = () => {
  $.ajax('/tweets').then((data) => {
    $('#tweets').prepend(createTweetElement(data[data.length - 1]));
  });
};

$(document).ready(function() {
  loadTweets();
  
  $('form').on('submit', (event) => {
    const inputText = $('#tweettext').val()
    event.preventDefault()
    const data = $('form').serialize();
    if (!inputText) {
      $('#empty-error').removeClass('error').slideDown();
    } else if (inputText.length > 140) {
      $('#count-error').removeClass('error').slideDown();
    } else {
      $.ajax({ 
        url: '/tweets', 
        method: 'POST', 
        data: data, 
        success: () => {
          postNewTweet();
        }
      })
      $('#empty-error').addClass('error')
      $('#count-error').addClass('error')
    }
  })

  $('#tweet-toggle').click(() => {
    $('#tweet-form').toggle();
  })

})
