import {useRef, useState} from 'react';
import "../index.css";

export default function GetTime() {

  const [enteredSeconds, setEnteredSeconds] = useState("");
  // creates a variable array of two storage value
  const [displaySeconds, setDisplaySeconds] = useState("");



  const [enteredMinutes, setEnteredMinutes ] = useState("");
  const [displayMinutes, setDisplayMinutes ] = useState("");
  // creates a const variable array of two values equal to the current useState


  // YouTube URL array storage
  const [enteredYouTubeURL, setEnteredYouTubeURL] = useState("");
  const [displayNewYouTubeURL, setNewYouTubeURL] = useState("");

// event handler for Minutes
  const minutesChangeHandler = (minutes) => {
    // event
    setEnteredMinutes(minutes.target.value);
    console.log("minutes.target.value from the minutesChangeHandler Event:");
    console.log(minutes.target.value);
    // automatically, as soon as it's typed. the console.log outputs the user input
  }; 


// event handler for Seconds
  const secondsChangeHandler = (seconds) => {
    // const variable secondsChangeHander is equal to...
    setEnteredSeconds(seconds.target.value);
    console.log("seconds.target.value from the secondsChangeHandler Event:");
    console.log(seconds.target.value);
    // automatically, as soon as it's typed. the console.log outputs the user input
  };


  // event handler for YouTube URL
  const youTubeChangeHandler = (youtubeURL) => {
    setEnteredYouTubeURL(youtubeURL.target.value);
    console.log("youtubeURL.target.value:")
    console.log(youtubeURL.target.value);
  }




  const SubmitHandler = (event) => {

    const newYouTube = enteredYouTubeURL;
    const minutes = enteredMinutes;
    const seconds = enteredSeconds;

    event.preventDefault();

    setDisplayMinutes(enteredMinutes);
    setDisplaySeconds(enteredSeconds);
   
  

    console.log("Minutes:", enteredMinutes);
    console.log("Seconds:", enteredSeconds);
      // the SubmitHandler is an event that is triggered once pressing the corresponding 
      // form element which has on onSubmit equal to it

    setEnteredSeconds("");
      // once Submit is clicked, the setEnteredSeconds changes the text input for seconds
      // back to nothing

    setEnteredMinutes("");

   const newYouTubeURL = newYouTube+"&t=" + minutes +"m"+ seconds +"s";

  //  HERE IT IS:
   setNewYouTubeURL(newYouTubeURL);

   const NewURL = newYouTubeURL.toString();
  };


return (
  <div className="GetTime">
    <form onSubmit={SubmitHandler}>


<p>Enter YouTube URL:</p>
{/* User-entered input for YouTube URL */}
  <input
        type="text"
        class="input-url"
        placeholder="youtubeURL"
        value={enteredYouTubeURL}
        onChange={youTubeChangeHandler}
      />


<br></br>
<br></br>


{/* User-entered input for MINUTES */}
    <input
        class="input-time"
        placeholder="minutes"
        type="text"
        value={enteredMinutes}
        onChange={minutesChangeHandler}
      />

:
{/* User-entered input for SECONDS */}
      <input
        class="input-time"
        placeholder="seconds"
        type="text"
        value={enteredSeconds}
        onChange={secondsChangeHandler}
      />

<br>
</br>
         <button type="submit" id="get-button">
          Get New YouTube Time
          </button>
    
    
    </form>



<p>NEW YouTube URL:</p>
{/* App-generated output for NEW YouTube URL */}


<p></p>
    <input 
      type="text"
      class="input-url"
      placeholder="new YouTube URL" 
      value = {displayNewYouTubeURL}
      onChange = {SubmitHandler}
    />


          <button id="copy-button" type="submit" 
          onClick={() =>  navigator.clipboard.writeText(displayNewYouTubeURL)}>
          Copy
          </button>

          {/* <button id="preview-button" type="submit">
          Preview
          </button> */}


 
       

   
  </div>
);
 
  }