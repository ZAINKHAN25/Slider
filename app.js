var images = [{
    serialnumber: '1',
    srcofimg : './1.jpg',
    idofelement : 'one',
},
{
    serialnumber: '2',
    srcofimg : "./2.jpeg",
    idofelement: "two",
},{
    serialnumber: '3',
    srcofimg : "./3.jpeg",
    idofelement: "three",
},{
    serialnumber: '4',
    srcofimg : "./4.jpeg",
    idofelement: "four",
},{
    serialnumber: '5',
    srcofimg : "./5.jpeg",
    idofelement: "five",
},{
    serialnumber: '6',
    srcofimg : "./6.jpeg",
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

async function loadImages() {
    for (let i = 0; i < images.length; i++) {
      var imgcreation = document.createElement('img');
      await imgcreation.setAttribute('src', images[i].srcofimg);
      await imgcreation.setAttribute('title', images[i].serialnumber);
      await imgcreation.setAttribute('alt', images[i].idofelement);
      await imgcreation.setAttribute('id', images[i].idofelement);
      await imgcreation.setAttribute('class', 'img');
      
    await frame.appendChild(imgcreation);
      
      console.log(`<img src="${images[i].srcofimg}" title="${images[i].serialnumber}" alt="" id="${images[i].idofelement}" class="img">`)
    }
  }
  
  loadImages();

  
  
  