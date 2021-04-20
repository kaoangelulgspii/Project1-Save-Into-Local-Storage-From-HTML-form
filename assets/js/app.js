// Variable
const tweetList = document.getElementById('tweet-list');

//Event Listeners
eventListeners();
function eventListeners(){
    //Form Submission
    document.querySelector('#form').addEventListener('submit',newTweet);

    // Removed tweet from the list
    tweetList.addEventListener('click',removeTweet);

    //Document
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}

//Function
function newTweet(e){
    e.preventDefault();
    
    //Read the textarea value
    const tweet = document.getElementById('tweet').value;

    // Create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    //Create an <li> element 
    const li = document.createElement('li');
    li.textContent = tweet;
   
    //Add the remove button to each tweet
    li.appendChild(removeBtn);

    //Add to the list
    tweetList.appendChild(li);
    // Add to Local Storage
    addTweetLocalStorage(tweet);
}

// Removes the tweet from the DOM
function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
     e.target.parentElement.remove();
    }
    // Remove from storage 
    removeTweetLocalStorage(e.target.parentElement.textContent);
}
// Adds the tweets into the local storage
function addTweetLocalStorage(tweet){
    let tweets = getTweetsFromStorage();
   
    // Add the tweet into the array
    tweets.push(tweet);

    //convert tweet array into string
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

function getTweetsFromStorage(){
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    //Get the values, if null is returned then we create an empty array
    if(tweetsLS === null){
        tweets = [];
    }
    else {
        tweets =JSON.parse(tweetsLS);
    }
    return tweets;
}
// Prints local storage tweet on load

function localStorageOnLoad(){
    let tweets = getTweetsFromStorage();

    // loop throught storage and then print the value
    tweets.forEach(function(tweet){
     // Create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    //Create an <li> element 
    const li = document.createElement('li');
    li.textContent = tweet;
   
    //Add the remove button to each tweet
    li.appendChild(removeBtn);

    //Add to the list
    tweetList.appendChild(li);
    });
}

// Removes the Tweet from local storage
function removeTweetLocalStorage(tweet){
    // Get Tweets from storage
    let tweets = getTweetsFromStorage();

    // Remove X from the tweet
    
    const tweetDelete = tweet.substring(0, tweet.length -1);
   
    // Loop Throught the Tweets and remove the tweets that's equal
    tweets.forEach(function(tweetLS){
        if(tweetDelete === tweetLS){
            console.log('yes');
      }
    });
        
    
}