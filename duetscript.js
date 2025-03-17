const lyrics = [
        { time: 0, text: "Are you ready, hey, are you ready for this?", singer: "freddie" },
        { time: 2.5, text: "Are you hanging on the edge of your seat?", singer: "freddie" },
        { time: 4, text: "I need a break beat, uh", singer: "other" },
        { time: 4.8, text: "Are you ready, hey, are you ready for this?", singer: "freddie" },
        { time: 6.9, text: "Are you hanging on the edge of your seat?", singer: "freddie" },
        { time: 8.5, text: "I need a break beat, uh", singer: "other" },
        { time: 9.1, text: "Are you ready, hey, are you ready for this?", singer: "freddie" },
        { time: 10.4, text: "Are you hanging on the edge of your seat?", singer: "freddie" },
        { time: 9, text: "I need a break beat, uh", singer: "other" },
        { time: 14, text: "Outta the doorway the bullets rip", singer: "freddie" },
        { time: 16, text: "Repeating to the sound of the beat, hey", singer: "freddie" },
        { time: 17.5, text: "Yo, a for the kids in the club that's ready to get bugged", singer: "other" },
        { time: 21, text: "Another one bites the dust", singer: "freddie" },
        { time: 23, text: "And for the thugs with the burners that wanna blast off", singer: "other" },
        { time: 25, text: "Another one bites the dust", singer: "freddie" },
        { time: 27.4, text: "And for the kids on the blocks, shootin' at the crooked cops—blaow!", singer: "other" },
        { time: 26, text: "Another one bites the dust", singer: "freddie" },
        { time: 32, text: "And another one gone", singer: "freddie" },
        { time: 32.5, text: "Wyclef", singer: "other" },
        { time: 33, text: "And another one gone", singer: "freddie" },
        { time: 33.5, text: "Dirty Cash", singer: "other" },
        { time: 34.3, text: "Another one bites the dust", singer: "freddie" },
        { time: 34.8, text: "Young Free, Freddie where you at?", singer: "other" },
        { time: 36.9, text: "Steve walks wearily down the street", singer: "freddie" },
        { time: 39, text: "With the brim pulled way down low", singer: "freddie" },
        { time: 41, text: "Some cat up in Brooklyn just got robbed with a Kangol", singer: "other" },
        { time: 45, text: "Are you ready, hey, are you ready for this?", singer: "freddie" },
        { time: 47.3, text: "Are you hanging on the edge of your seat?", singer: "freddie" },
        { time: 50, text: "Out of the doorway, the bullets rip", singer: "freddie" },
        { time: 52, text: "Repeating to the sound of the beat, hey", singer: "freddie" },
        { time: 54.8, text: "My man got shot, and the block got hot", singer: "other" },
        { time: 57, text: "Another one bites the dust", singer: "freddie" },
        { time: 59, text: "Yo, hey I hear more shots, this is like Fort Knox, kid", singer: "other" },
        { time: 57, text: "Another one bites the dust", singer: "freddie" },
        { time: 63, text: "And another one gone" ,singer: "freddie"},
        { time: 63, text: "Yo, hold your breath", singer: "other" },
        { time: 64, text: "Hold your breath", singer: "other" },
        { time: 66, text: "Yo, check it", singer: "other" },
        { time: 68, text: "If you're a soldier at ease", singer: "other" },
        { time: 69, text: "My military style is known to murder Nazis", singer: "other" },
        { time: 71.5, text: "Brooklyn to Germany", singer: "other" },
        { time: 72.3, text: "Come on", singer: "freddie" },
        { time: 73.4, text: "My kamikaze will blow the U2", singer: "other" },
        { time: 75, text: "They hire Idi Amin in Timbuktu", singer: "other" },
        { time: 77, text: "Whether you Hindu, or do the Voodoo", singer: "other" },
        { time: 79.5, text: "You can't foresee this unless I bring the previews, yeah, yeah", singer: "other" },
        { time: 84, text: "Yo, it's the number one rappin' band", singer: "other" },
        { time: 86.5, text: "Yo, this review will be critically acclaimed", singer: "other" },
        { time: 89, text: "Leave you in critical pain, clinically insane", singer: "other" },
        { time: 91, text: "The name Wyclef Jean, with a yes, yes y'all", singer: "other" },
        { time: 93.5, text: "Better have a vest y'all, I'll blast, and bless y'all", singer: "other" },
        { time: 95.5, text: "F-y'all, the mark of the beast, the triple six", singer: "other" },
        { time: 98, text: "Time running out, listen to the tick", singer: "other" },
        { time: 100, text: "If you see what I saw, then you seen what I seen", singer: "other" },
        { time: 102, text: "If you know what I know, you know what I mean", singer: "other" },
        { time: 104, text: "Commanding officer of the Navy SEAL team", singer: "other" },
        { time: 107, text: "Once I give the orders, you feel the infrared beam", singer: "other" },
        { time: 109.5, text: "For all you critics, sayin' 'another remake'", singer: "other" },
        { time: 111, text: "Another one bites the dust", singer: "freddie" },
        { time: 114, text: "Yo, if you know the deal, this is the master reel, kid", singer: "other" },
        { time: 116, text: "Another one bites the dust", singer: "freddie" },
        { time: 118, text: "And another one gone", singer: "freddie" },
        { time: 119, text: "And another one gone", singer: "freddie" },
        { time: 120, text: "Another one bites the dust, hey", singer: "freddie" },
        { time: 120, text: "Freddie Mercury, where you at yo?", singer: "other" },
        { time: 123, text: "How do you think I'm gonna get along", singer: "freddie" },
        { time: 125, text: "Without you when you're gone (Oh yeah)", singer: "freddie" },
        { time: 125.5, text: "I need a break yo", singer: "other" },
        { time: 127.6, text: "If you're ready for the first of the month", singer: "other" },
        { time: 129, text: "For that welfare check, come on (Kicked me out on my own)", singer: "other" },
        { time: 131, text: "I need a break beat", singer: "other" },
        { time: 132, text: "Are you happy, are you satisfied?", singer: "freddie" },
        { time: 134.5, text: "How long can you stand the heat?", singer: "freddie" },
        { time: 135, text: "I need a break beat", singer: "other" },
        { time: 136, text: "Outta the doorway, the bullets rip", singer: "freddie" },
        { time: 138, text: "To the sound of the beat, look out", singer: "freddie" },
        { time: 141, text: "Yo, bulletproof vests, like the wild, wild west", singer: "other" },
        { time: 143, text: "Another one bites the dust", singer: "freddie" },
        { time: 145, text: "Yo, this is a stickup, now take off your Rolex", singer: "other" },
        { time: 149, text: "Yo, dirty money, good money, yo it's all money-money", singer: "other" },
        { time: 154, text: "Yo, Dirty Cash", singer: "other" },
        { time: 154.5, text: "And another one gone", singer: "freddie" },
        { time: 155, text: "Dirty Cash", singer: "other" },
        { time: 155.5, text: "And another one gone", singer: "freddie" },
        { time: 156, text: "The adventures of Dirty Cash", singer: "other" },
        { time: 156.5, text: "Another one bites the dust", singer: "freddie" },

        { time: 159, text: "Yo, for the love for the cash, I'll blast you in my path", singer: "other" },
        { time: 161, text: "Keep my eyes on the math, you cats don't know the half", singer: "other" },
        { time: 163, text: "As far as I'm concerned, you cats can burn in flames", singer: "other" },
        { time: 166, text: "This ain't no game, I'mma start callin' names", singer: "other" },
        { time: 168, text: "So come get me, if you know the one-fifty", singer: "other" },
        { time: 170, text: "A million refugees ready to bust with me", singer: "other" },
        { time: 172, text: "Bloody, filthy, in this rap shhh—", singer: "other" },
        { time: 175, text: "You gonna have to kill me, since you can't beat me", singer: "other" },
        { time: 177, text: "Pras, Dirty, Cash, you're the greedy", singer: "other" },
        { time: 179, text: "Believe me, you gotta let me fly like R. Kelly", singer: "other" },
        { time: 181, text: "Bite another dust with my man Freddie Mercury", singer: "other" },
        { time: 184, text: "What height nineties got ya cash, wannabe crazy (Oh yeah/Navy SEAL!)", singer: "other" },
        { time: 186, text: "Practically, I tactically destroy", singer: "other" },
        { time: 188.5, text: "Deploy more decoys than a presidential convoy (Oh yeah)", singer: "other" },
        { time: 191, text: "My whole envoy stay camouflaged out", singer: "other" },
        { time: 193, text: "And when I walk the street, I take the refugee route (Oh yeah)", singer: "other" },
        { time: 195, text: "This one go out to all my thugs in the borough", singer: "other" },
        { time: 197.5, text: "Soldiers stay thorough, like Kilamanjaro (Oh yeah)", singer: "other" },
        { time: 199, text: "Split it with an arrow, my girl platoon roll", singer: "other" },
        { time: 202, text: "Outta control, the female Mandingos (Oh yeah)", singer: "other" },
        { time: 205, text: "Free, I evolve from the egg of a seminarian", singer: "other" },
        { time: 207, text: "Don't go down, 'cause I'm a vegetarian (Oh yeah)", singer: "other" },
        { time: 209.5, text: "And when I bust, it ain't 'in God we trust'", singer: "other" },
        { time: 211, text: "And if you bring a gun, you better bring a black tusk (Oh yeah)", singer: "other" },
        { time: 213.5, text: "She looked into my eyes and said FBI", singer: "other" },
        { time: 215, text: "Another one bites the dust", singer: "freddie" },
        { time: 217, text: "She said she loved me, she was a spy who lied", singer: "other" },
        { time: 219, text: "Another one bites the dust", singer: "freddie" },
        { time: 223, text: "I could relate, could you relate?", singer: "other" },
        { time: 226, text: "Another one bites the dust", singer: "freddie" },
        { time: 237, text: "Yo, Dirty Cash, and baby Free", singer: "other" },
        { time: 240, text: "Another one bites the dust", singer: "freddie" },
        { time: 240.4, text: "And another one gone", singer: "freddie" },
        { time: 240.5, text: "Wyclef Jean", singer: "other" },
        { time: 241, text: "And another one gone", singer: "freddie" },
        { time: 241.5, text: "Freddie Mercury, haha", singer: "other" },
        { time: 243, text: "Another one bites the dust, yeah", singer: "freddie" },
        { time: 246, text: "I'm out baby, Navy SEALs!", singer: "other" },
        { time: 370, text: "Another one bites the dust", singer: "freddie" },
        { time: 375, text: "Another one bites the dust", singer: "freddie" },
        { time: 380, text: "Another one bites the dust", singer: "freddie" },
];


  
  
   let currentLyricIndex = 0;
   const audio = document.getElementById("audio");
   const freddieLyricElement = document.getElementById("lyric-freddie");
   const wyclefLyricElement = document.getElementById("lyric-other");

   audio.addEventListener("play", () => {
    setInterval(displayLyrics, 100);
   });
   function displayLyrics() {
    const currentTime = audio.currentTime;
    if (
        currentLyricIndex < lyrics.length &&
        currentTime >= lyrics[currentLyricIndex].time
      ) {
        const currentLyric = lyrics[currentLyricIndex];
    
        if (currentLyric.singer === 'freddie') {
          freddieLyricElement.textContent = currentLyric.text;
        } else if (currentLyric.singer === 'other') {
          wyclefLyricElement.textContent = currentLyric.text;
        }
    
        currentLyricIndex++; 
      }
    }
   