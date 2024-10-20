/*
* Title: Whale Fun
* Program Summary: Whale Fun enables the user to type in some human text, and have it spoken/displayed on the screen to them. Animations add to the fun of the program.
* Key Program Elements Utilized: clearInterval(), continue, for ... each, objects, setInterval(), setTimeout(), performance.new(), document.location.reload(), charAt, do ... while loop, querySelector, addEventListener, arrays, loops, nested loops, .push(), .join(), target.value, SpeechSynthesisUtterance(), window.speechSynthesis.speak(),  use of document.getElementById with a variety of attributes (ex. the .disabled,  .style.display, etc.).  HTML/CSS  utilized includes a video which plays automatically, rotation whale facts, two text areas with live translation, and a sound button.
*/






// Function Declarations





/*
 * Summary: This function tranlates the user input to whale talk using a predefined formula.
 * Parameter(s): inputted 
 * Return(s): result
 */
function inputtovowels(inputted) {

    let resultarray = [];
    let input = inputted;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result;

    document.getElementById('originalPhrase').disabled = false;
    
    for (i = 0; i < input.length; i++) {
    
        for (j = 0; j < vowels.length; j++) {
      
            if (input[i] === vowels[j]) { // this is saying if each character of i includes each character of 2nd array - j
        
                if (input[i] === "e") {
                    
                    resultarray.push('ee'); // Pushes 'ee' to the resulting array.
                  
                    } else if (input[i] === "u") {
                    
                        resultarray.push('uu');
        
                    } else {
                        
                        resultarray.push(input[i]);
                  
                } // End of what would happen if the vowel entered by the user is not an 'e' or an 'i'.
              
        
            } // End of the if statement which determines which determines whether or not the 'studided' character is equal to the vowel which is being compared during the iteration nested for loop.
  
        } // End of the nested for loop which compares the character at 'i' to the elements in the vowels array.
  
        if (i >= input.length) {

            console.log('We have a problem!');
            document.location.reload();

            } else {
      
                continue;
      
        } // End of the else statement, which will run unless i is equal to or greater than input.length.

    } // End of the for loop which converts human text to whale talk.
    
    result = resultarray.join("").toUpperCase();
    return result;
  
} // End of the inputtovowels function.






/*
 * Summary: This eventListener adds text to the user's screen based upon the result of the inputtovowels function.
 * Parameter(s): events 
 * Return(s): None.
 */
document.querySelector("textarea").addEventListener("input", events => { 

    let getvalue = events.target.value.toLowerCase(); 
  
    if (inputtovowels(getvalue) === '') {
        
        document.getElementById('whaletalk').innerText = 'There are no vowels in your text, yet. Keep typing, and include some vowels!';
    
        } else {
      
            document.getElementById('whaletalk').innerText = inputtovowels(getvalue); // Obtains the translated whale text and displays it on screen.
      
    } // End of else statement that userinput will show the box
      
}); // End of the input addEventListener.






/*
 * Summary: This event listener determines the text-to-speech when the audio button is clicked.
 * Parameter(s): None. 
 * Return(s): None.
 */
document.getElementById('speakbtn').addEventListener("click", () => { 

    let synth = window.speechSynthesis;
    let msg;

    document.getElementById('thankYou').style.display = 'none'; // Sets the display of HTML elements with the ID of 'thankYou'.

    if (document.getElementById("whaletalk").innerHTML == '' || document.getElementById("whaletalk").innerHTML == 'There are no vowels in your text, yet. Keep typing, and include some vowels!') { 
        
        msg = new SpeechSynthesisUtterance("There is no translated whale text as yet!");
        
        msg.rate = 0.5;
        } else {
            
            msg = new SpeechSynthesisUtterance("Your whale text is as follows:         " + document.getElementById('whaletalk').innerText.toLowerCase());
              
    } // End of the else statement which runs if the whaleTalk text is not blank or does not include the vowel message.
    
    synth.speak(msg);


  
    msg.addEventListener('start', function () {
    
        document.getElementById('originalPhrase').disabled = true;
              
    }); // End of the start addEventListener.
              
    
  
    msg.addEventListener("end", () => {
          
        document.getElementById('originalPhrase').disabled = false;
        document.getElementById('thankYou').style.display = 'block';
   
    }); // End of the end addEventListener.


                       
}); // End of click addEventListener.






/*
 * Summary: This event listener will run once the HTML page has fully loaded for the user.
 * Parameter(s): None. 
 * Return(s): None.
 */
addEventListener("load", () => {
  
    newInterval();
    runFact();
    coolFunction(); // Calls the coolFunction().
  
}); // End of load addEventListener function.






/*
 * Summary: This function runs a do ... while loop which determines how long the website has taken to load. The loop only runs once, and illustrates how the do will run before the condition is evaluated.
 * Parameter(s): None.
 * Return(s): None.
 */
function coolFunction() {
  
    let nice = 1;
    
    do {
   
        console.log('About Session: The website has taken ' +(performance.now() / 1000) + ' seconds to load!'); // This logs how long the website took to load to the console.
        nice++;
        
    } while (nice < 1);  // This do ... while loop only runs once, showing how the loop will run first, then evaluate the condition to see if it should run again!
    
} // End of the coolFunction function.






/*
 * Summary: This function will display the whale and our website facts every 10 second. And repeats.
 * Parameter(s): None.
 * Return(s): None.
 */

function newInterval() {
  
    let idx = 1;
  
    let numberArray;
    let value = 'Did You Know?'; // Sets the variable 'value' to 'Did You Know?'.
    let hello;
    let coolcurrent = 0;

    setInterval(() => {
      
        if (idx === 10) {
          
            idx = 0;
            
        } // End of the if statement which sets the variable 'idx' to 0 when it equals 10.
    
        changeSlider(idx); 
      
        idx++;
    
    }, 10000); // End of the setInterval, which will run every 10 seconds until it is cleared.

    numberArray = [];
  
    for (let i = 0; i < value.length; i++) { 

        setTimeout(() => { hello = value; coolcurrent = hello.charAt(i); numberArray.push(coolcurrent); document.getElementById('Diy').innerText  = numberArray.join("");  }, i * 200);
    
    } // End of the for loop which displays text on-screen.
     


} // End of the newInterval function.






/*
 * Summary: This function will change the whale facts one by one.
 * Parameter(s): idxCheck.
 * Return(s): None.
 */
  
function changeSlider(idxCheck) {
  
    let checker = idxCheck; 
    
    console.log(checker); // Console.logs the variable 'checker'.
    console.log("done");
    unfade(slider, checker);
    
} // End of the changeSlider function.





  
/*
 * Summary: This function controls the opacity of the whale fact box displayed on the screen.
 * Parameter(s): element, checking
 * Return(s): None.
 */
function unfade(element, checking) {

    let checkedNew = checking;
  
    let sliderImage = document.getElementById("sliderImage");
    let sliderTitle = document.getElementById("sliderTextTitle");
    let sliderText = document.getElementById("sliderText");
    let copyright = document.getElementById("copyright-image");
    let slider = document.getElementById("slider");
 
    let whaleImages;
    let copyRights;
    let whaleTitles;
    let whaleTexts;
  
    let op = 0.1;  // Sets the 'op' variable to 0.1.
    
    let timer = setInterval(function () {
        
        if (op >= 1){
            
            clearInterval(timer);
        
        } // End of the if statement which determines if the interval should be cleared.
          
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
      
    }, 10); // end of the setInterval.

    whaleImages = [
      
        "https://www.wwf.org.uk/sites/default/files/styles/gallery_image/public/2019-04/humpback-whale.jpg?h=d0b527cd&itok=S_rQ-6bY",
        "https://www.wwf.org.uk/sites/default/files/styles/gallery_image/public/2018-08/Large_WW1113667%20%281%29_0.jpg?h=3e43625b&itok=o7_fPmFk",
        "https://www.wwf.org.uk/sites/default/files/styles/gallery_image/public/2020-02/sperm_whale.jpg?h=f7d9296c&itok=e7dLG249",
        "https://www.wwf.org.uk/sites/default/files/styles/gallery_image/public/2020-02/humpback_whales.jpg?h=82f92a78&itok=ue-c-6-I",
        "https://www.wwf.org.uk/sites/default/files/styles/gallery_image/public/2020-02/blue_whale.jpg?h=44b879e5&itok=oxnwlQkH",
        "https://www.wwf.org.uk/sites/default/files/styles/gallery_image/public/2020-02/humpback_whale.jpg?h=27f45369&itok=sW3z08l_",
        "https://www.wwf.org.uk/sites/default/files/styles/gallery_image/public/2019-04/A-pod-of-male-narwhals.jpg?h=82f92a78&itok=_ZbsxNPF",
        "https://www.wwf.org.uk/sites/default/files/styles/gallery_image/public/2019-04/narwhal-swimming-together.jpg?h=e5aec6c8&itok=X4CNRgZy",
        "https://www.wwf.org.uk/sites/default/files/styles/gallery_image/public/2020-02/pygmy_blue_whale.jpg?h=82f92a78&itok=k6onZ5T7",
        "https://www.wwf.org.uk/sites/default/files/styles/gallery_image/public/2020-02/killer_whales.jpg?h=82f92a78&itok=K50b9S7J"
    ];

    copyRights = [
      
        "© John Van Den Hende",
        "© Jeff Duerr",
        "© Brian J. Skerry / National Geographic Stock / WWF",
        "© Tim Irvin / WWF-Canada",
        "© Richard Barrett / WWF-UK",
        "© William W. Rossiter / WWF",
        "© Paul Nicklen/National Geographic Stock / WWF-Canada",
        "© Paul Nicklen / National Geographic Creative / WWF-Canada",
        "© naturepl.com / Franco Banfi / WWF",
        "© National Geographic Creative / Ralph Lee Hopkins / WWF"
      
    ]

    whaleTitles = [
      
        "1. WHALES ARE DIVIDED INTO TWO MAIN GROUPS",
        "2. HUMPBACK WHALES DON’T EAT FOR MOST OF THE YEAR",
        "3. ALL TOOTHED WHALES HAVE A ‘MELON’ IN THEIR FOREHEADS",
        "4. SOME WHALES BUBBLE NET FEED",
        "5. THERE USED TO BE THOUSANDS OF BLUE WHALES",
        "6. WHALES ARE OFTEN CAUGHT IN NETS",
        "7. USUALLY ONLY MALE NARWHALS HAVE A TUSK - THAT DEVELOPS FROM A TOOTH",
        "8. THE NAME 'NARWHAL' COMES FROM OLD NORSE",
        "9. THE ANTARCTIC BLUE WHALE IS THE LARGEST ANIMAL ON THE PLANET",
        "10. KILLER WHALES ARE ACTUALLY DOLPHINS"
      
    ];
    
    whaleTexts = [
        "There are two types of whales: the baleen whales and the toothed whales. Baleen whales, including humpbacks and blue whales, have fibrous 'baleen' plates in their mouths instead of teeth, which help them filter out and consume huge quantities of krill, plankton, and crustaceans. Whereas toothed whales, such as orcas, beluga and sperm whales, have teeth which enable them to feed on larger prey such as fish and squid. All dolphin families, including porpoises, are also classified as whales, as they are more related to their toothed counterparts.",
        "Humpback whales in the Southern Hemisphere live off their fat reserves for 5.5-7.5 months each year, as they migrate from their tropical breeding grounds to the Antarctic, to feed on krill.",
        "It’s a mass of tissue which focuses the whales’ calls, vital for communication and echolocation.​ Like bats, they use this echolocation to \"see\".",
        "This involves whales cooperatively blowing bubbles that encircle their prey. As the prey won't cross through the bubbles, they're trapped, making it easy for the whales to eat them.",
        "It's estimated that there were over 225,000 Antarctic blue whales before their exploitation in the 1900s. Today, blue whales are listed as endangered species, with less than 3,000 remaining in the wild.",
        "Over 80% of North Atlantic right whales have been entangled in fishing gear at least once during their lifetime - they often get caught many times in their lives.",
        "Used for foraging, displays of dominance and possibly fighting and breaking ice, the tusk is  also  a sensory tool used to detect changes in the sea around them.",
        "It means \"corpse whale\" as their skin colour resembles that of a drowned sailor.",
        "The Antarctic blue whale is the biggest of all blue whales. It is also the largest animal on the planet, weighing up to 200 tons (approximately 33 elephants) and reaching up to 30 metres in length. They can consume about 3,600kg of krill a day!",
        "Orcas, also known as \"killer whales\", are the largest members of the dolphin family. They are the ocean's top predators, preying on a diverse range of marine species, which include many fish species, penguins, seabirds, sea turtles, cephalopods and marine mammals such as seals and even whales."
    ]
  
    element.style.display = 'block';
    sliderImage.src = whaleImages[checkedNew];
    sliderTitle.innerText = whaleTitles[checkedNew];
    sliderText.innerText = whaleTexts[checkedNew];
    copyright.innerText = copyRights[checkedNew]; 
  
} // End of the unfade function.






/*
 * Summary: This function controls the opacity of the fact about our website box displayed on the screen.
 * Parameter(s): None.
 * Return(s): None.
 */
function runFact() {

    let website = {  
    
        factn: 'Did you know that this website is made in HTML, CSS, and JavaScript?', // This line makes a key value pair with a key of 'factn' as part of the object.\
        factt: 'Were you aware that the pictures on this website have been sourced from all over the globe?',      
        factthree: 'Did you know that the programmers behind the platform have never met a whale ... but it is on our To-Do list?',
        factfour: 'Did you know that this website was created in the year of 2023?',
        factfive: 'Were you aware that the aquatic life video on this website has been live-streamed since January 6th, 2023?',
        factsix: 'Did you know that the whale text speech on this website solely involves the translation of vowels!',
        factseven: 'Did you know you can learn whale talk through our website by entering human phrases and learning what they are in whale? They will come in handy if you ever play with dolphins!' ,
        facteigth: 'Did you know that the whale speech spoken on this website involves the use of a built-in JavaScript feature ',
        factnine: 'Did you know that the programmers behind this website are mammals?', 
        factten: `Did you know that the programmers who created this website know how to say 'hi' in whale - it is 'I'!`
                    
    } // The end of the declaration of the 'website' object.
  
    let hi = Object.values(website);
       
    hi.forEach( function (value, index) {  setTimeout(() => {
  
        document.getElementById('AboutIt').innerText = value;
  
    }, index * 10000); }); // End of the for Each loop which iterates through each list item of the 'hi' array.
  
  
    setInterval(function hello () {    
    
        hi.forEach( function (value, index) {   
            
            setTimeout(() => {  
                
                document.getElementById('AboutIt').innerText = value;
                                     
            }, index * 10000); // End of the setTimeout which alters the innerText of HTML elements with the ID of 'AboutIt'.
          
        }); // End of the forEach loop for the 'hi' array.
  
   },  100000); // End of the setInterval.
  
} // End of the runFact function.






// Beginning of Program






// Variable Declarations



// There are no global variables utilized in the program.






//Beginning of Main






// There is no main function to our program, as each function runs based on buttons the user clicks.






//End of Main






// End of Program






/* 






Notes:

* Let's make sure our translation is live from human text to whale.
* It's important that the loop with the animated text runs only once.






Test Code:

while (isSpeaking < 50044) {

  speakingNow =  synth.speaking;

   if (speakingNow === false) {
 
  document.getElementById('originalPhrase').disabled = false;
     
}
  if (speakingNow === true) {
 
  document.getElementById('originalPhrase').disabled = true;
     
  }
}

*/