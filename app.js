var images = [{
    serialnumber: '1',
    srcofimg : './1jpg',
    idofelement : 'one',
},
{
    serialnumber: '2',
    srcofimg : "./2jpeg",
    idofelement: "two",
},{
    serialnumber: '3',
    srcofimg : "./3jpeg",
    idofelement: "three",
},{
    serialnumber: '4',
    srcofimg : "./4jpeg",
    idofelement: "four",
},{
    serialnumber: '5',
    srcofimg : "./5jpeg",
    idofelement: "five",
},{
    serialnumber: '6',
    srcofimg : "./6jpeg",
    idofelement: "six",
}];

var previous = document.getElementById('previous');
// console.log(previous);
var next = document.getElementById('next');
// console.log(next);

var frame = document.getElementById('frame');
// console.log(frame);

var cindex = 0;

var totalimageslength = images.length;
// console.log(totalimageslength);

for(let i = 0; i < images.length; i++) {
  frame.innerHTML = `<img src='${images[i].srcofimg}' title='${images[i].serialnumber}' alt='${images[i].idofelement}' id='${images[i].idofelement}' class="img">`; 
    
  console.log(`<img src="${images[i].srcofimg}" title="${images[i].serialnumber}" alt="" id="${images[i].idofelement}" class="img">`)
}