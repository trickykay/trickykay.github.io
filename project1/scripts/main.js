let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/apple-touch-icon.png') {
      myImage.setAttribute('src','images/rakicon1.png');
    } else {
      myImage.setAttribute('src','images/apple-touch-icon.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}
myButton.onclick = function() {
  setUserName();
}