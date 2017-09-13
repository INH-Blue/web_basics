
var myNumber = 0;

function myFunction() {

    var text = document.getElementById('myText').value;

    myNumber = myNumber + text;  //Equivalent to myNumber++

    document.getElementById('output').innerHTML = myNumber + text;
}

var newOutput = '';

function newText(thing) {

    if(thing > 5) {
      alert('wow big number!');
    }
    else {
      alert('dat number tiny!');
    }

    //newOutput = newOutput + thing;

    //document.getElementById('output').innerHTML = newOutput;

}
