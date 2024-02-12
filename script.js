/* Generate random box shadow values */
function generateRandomBoxShadow(n) {
    let boxShadow = '';
    for (let i = 0; i < n; i++) {
      boxShadow += `${getRandomValue(2000)}px ${getRandomValue(2000)}px #FFFFFF`;
      if (i < n - 1) {
        boxShadow += ', ';
      }
    }
    return boxShadow;
  }
  
  /* Get a random value up to a maximum */
  function getRandomValue(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  
  /* Assign generated box shadows to variables */
  var shadowsSmall = generateRandomBoxShadow(700);
  var shadowsMedium = generateRandomBoxShadow(200);
  var shadowsBig = generateRandomBoxShadow(100);

document.getElementById('stars').style.boxShadow = shadowsSmall;
document.getElementById('stars2').style.boxShadow = shadowsMedium;
document.getElementById('stars3').style.boxShadow = shadowsBig;


var wordswords = [
    'CHERYL',
    'WILL',
    'YOU',
    'BE',
    'MY',
    'VALENTINES?',

]; 
var textnum = 0;

function changeText() {
    textnum = (textnum + 1) % wordswords.length;
    document.getElementById('name2').textContent = wordswords[textnum];

    if (textnum === wordswords.length - 1) {
        document.getElementById('button1').style.display = 'inline-block';
        document.getElementById('button2').style.display = 'inline-block';
    } else {
        document.getElementById('button1').style.display = 'none';
        document.getElementById('button2').style.display = 'none';
    }
}
function showGif1() {
    var gifContainer1 = document.getElementById('gifContainer1');
    gifContainer1.style.display = 'block';
}
function showGif2() {
    var gifContainer2 = document.getElementById('gifContainer2');
    gifContainer2.style.display = 'block'; 
}

