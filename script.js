// dynamic preview-cards
const cards = [{

  img: 'img/speaker1.png',
  name: 'Angela Mark',
  title: 'full-stack developer',
  des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',

},
{
  img: 'img/speaker2.png',
  name: 'Steph Portilla',
  title: 'Web application developer',
  des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
},
{
  img: 'img/speaker3.png',
  name: 'Jose Steele',
  title: 'Front end developer',
  des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
},
{
  img: 'img/speaker4.png',
  name: 'Colt Jonas',
  title: 'Back end developer',
  des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
},
{
  img: 'img/speaker5.png',
  name: 'Kyle Tim',
  title: 'Web Designer ',
  des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
},
{
  img: 'img/speaker6.png',
  name: 'Jonas Deo',
  title: 'Game developer',
  des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
},

];

function displayCards() {
  let result = '';

  cards.forEach((card) => {
    result += `
    <div class="instructor-card">
    <div>
      <img src="${card.img}">
    </div>
    <div>
      <h3 class="fw-bold fs-500">${card.name}</h3>
      <div class="guide_bar-inst"></div>
      <h3 class="text-accent-400 fw-bold">${card.title}</h3>
      <p class="">${card.des}</p>
    </div>
  </div>`;
  });

  document.querySelector('.even-columns-instructor').innerHTML = result;
}

displayCards();