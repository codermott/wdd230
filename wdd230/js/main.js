let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

document.querySelector('h1').textContent = year;

document.querySelector('div').innerHTML = '<h2>Subtitle</h2>';

let newpara = document.createElement('p');
newpara.textContent = 'This is my paragraph';
document.querySelector('div').appendChild(newpara);

document.querySelector('img').setAttribute('src', "images/profilepic.png");

document.querySelector('img').setAttribute('width', "400");

document.querySelector("img").classList

// Selection

// if clause
if (year == 2022) {
    console.log("current year")
}

//repetition (loops)

const myarray = ["CSE121b", "WDD230", "CIT 111"];

function makelist(item) {
    document.querySelector("div").innerHTML += "<li>" + item + "</li>"
}

myarray.forEach(makelist);

// All I need for js in week 01

// last modified property that works with doc

let currentdate = document.lastModified;

console.log(currentdate);
document.getElementById("LastMod").innerHTML = currentdate;

console.log(currentdate);