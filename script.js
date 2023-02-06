console.log('Are you ready for the word of God?');
let answer= 'Yes';
let randomNumber= Math.floor(Math.random() * 39);
let genesis = Math.floor(Math.random() * 50);
let exodus = Math.floor(Math.random() * 40);
let leviticus= Math.floor(Math.random() * 27);
let numeri= Math.floor(Math.random() * 36);
let deuteronomy= Math.floor(Math.random() * 34);
let joshua = Math.floor(Math.random() * 24);
let judges= Math.floor(Math.random() * 21);
let ruth= Math.floor(Math.random() * 4);
let firstSam= Math.floor(Math.random() * 31);
let firstKings= Math.floor(Math.random() * 22);
let secondKings= Math.floor(Math.random() * 25);
let firstChron= Math.floor(Math.random() * 29);
let ezra= Math.floor(Math.random() * 10);
let nehemiah= Math.floor(Math.random() * 13);
let job= Math.floor(Math.random() * 42);
let psalms= Math.floor(Math.random() * 150);
let ecclesiastes= Math.floor(Math.random() * 12);
let songOfSolomon= Math.floor(Math.random() * 8);
let isaiah= Math.floor(Math.random() * 66);
let jeremiah= Math.floor(Math.random() * 55);
let lamentations= Math.floor(Math.random() * 5);
let ezekiel= Math.floor(Math.random() * 48);
let hosea= Math.floor(Math.random() * 14);
let joel= Math.floor(Math.random() * 3);
let amos= Math.floor(Math.random() * 9);
let micah= Math.floor(Math.random() * 7);
let bibleBook='';




if(answer) {
    bibleBook=randomNumber;
} else {console.log('Please enter an answer');
}
switch(bibleBook) {
    case 0:
    console.log(`The word of God for you today = Genesis chapter${genesis}.`);

break;
case 1:
    console.log(`The word of God for you today = Exodus chapter${exodus}.`);

break;
case 2:
    console.log(`The word of God for you today = Leviticus chapter${leviticus}.`);
    
    break;
case 3:
    console.log(`The word of God for you today = Numbers chapter${numeri}.`);
 
    break;
case 4:
    console.log(`The word of God for you today = Deuteronomy chapter${deuteronomy}.`);
 
    break;
case 5:
    console.log(`The word of God for you today = Joshua chapter${joshua}.`);
 
    break;
case 6:
    console.log(`The word of God for you today = Judges chapter${judges}.`);
 

    break;
case 7:
    console.log(`The word of God for you today = Ruth chapter${ruth}.`);
 
    break;
case 8:
    console.log(`The word of God for you today = I Samuel chapter${firstSam}.`);
 
    break;
    case 9:
        console.log(`The word of God for you today = II Samuel chapter${joshua}.`);
     
break;
case 10:
 console.log(`The word of God for you today = I Kings chapter${firstKings}.`);
         
break;
case 11:
    console.log(`The word of God for you today = II Kings chapter${secondKings}.`);
 
    break;
case 12:
    console.log(`The word of God for you today = I Chronicles chapter${firstChron}.`);
 
    break;
case 13:
    console.log(`The word of God for you today = II Chronicles chapter${numeri}.`);
 
    break;
case 14:
    console.log(`The word of God for you today = Ezra chapter${ezra}.`);
 
    break;
    case 15:
    console.log(`The word of God for you today = Nehemiah chapter${nehemiah}.`);
     
break;
case 16:
 console.log(`The word of God for you today = Esther chapter${ezra}.`);
         
break;
case 17:
 console.log(`The word of God for you today = Job chapter${job}.`);
             
 break;
case 18:
 console.log(`The word of God for you today = Psalms chapter${psalms}.`);
    
break;
 case 19:
    console.log(`The word of God for you today = Proverbs chapter${firstSam}.`);
                     
break;
case 20:
    console.log(`The word of God for you today = Ecclesiastes chapter${ecclesiastes}.`);
 
    break;
case 21:
    console.log(`The word of God for you today = Song of Solomon chapter${songOfSolomon}.`);
 
    break;
    case 22:
        console.log(`The word of God for you today = Isaiah chapter${isaiah}.`);
     
    break;
case 23:
    console.log(`The word of God for you today is = Jeremiah chapter${jeremiah}.`);
 
    break;
case 24:
    console.log(`The word of God for you today = Lamentations chapter${lamentations}.`);
 
    break;
case 25:
    console.log(`The word of God for you today = Ezekiel chapter${ezekiel}.`);
 
    break;
case 26:
    console.log(`The word of God for you today = Daniel chapter${ecclesiastes}.`);
 
    break;
case 27:
    console.log(`The word of God for you today = Hosea chapter${hosea}.`);
 
    break;
case 28:
    console.log(`The word of God for you today = Joel chapter${joel}.`);
 
    break;
case 29:
    console.log(`The word of God for you today = Amos chapter${amos}.`);
 
    break;
case 30:
    console.log('The word of God for you today = Obadiah chapter1.');
 
    break;
case 31:
    console.log(`The word of God for you today = Jonah chapter${ruth}.`);

    break;
case 32:
    console.log(`The word of God for you today = Micah chapter${micah}.`);
 
    break;
case 33:
    console.log(`The word of God for you today = Nahum chapter${joel}.`);
 
    break;
case 34:
    console.log(`The word of God for you today = Habakkuk chapter${joel}.`);
 
    break;
case 35:
    console.log(`The word of God for you today = Zephaniah chapter${joel}.`);
 
    break;
case 36:
    console.log(`The word of God for you today = Haggai chapter${joel}.`);
 
    break;
case 37:
    console.log(`The word of God for you today = Zechariah chapter${hosea}.`);

    break;
case 38:
    console.log(`The word of God for you today = Malachi chapter${ruth}.`);
 
    break;
default:
    console.log('invalid response');
}