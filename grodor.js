class Groda {
  constructor (id, namnSv, namnLat, egenskaper) {
    this.id = id
    this.namnSv = namnSv
    this.namnLat = namnLat
    this.egenskaper = egenskaper
  }
}

const frogArray = [
  new Groda(1, 'Klockgroda', 'Bombina bombina', [
    'Trekantig pupill',
    'Hanarna spelar på våren'
  ]),
  new Groda(2, 'Lövgroda', 'Hyla arborea', [
    'Exotiskt grön',
    'Finns endast i Skåne'
  ]),
  new Groda(3, 'Lökgroda', 'Pelobates fuscus', [
    'Doftar vitlök',
    'Gräver ner sig på dagen'
  ]),
  new Groda(4, 'Padda', 'Bufo bufo', [
    'Äter insekter och daggmask',
    'Giftkörtlar på ryggen'
  ]),
  new Groda(5, 'Strandpadda', 'Epidalea calamita', [
    'Minsta paddan',
    'Gult streck på ryggen'
  ]),
  new Groda(6, 'Grönfläckig padda', 'Bufotes viridis', [
    'Mycket sällsynt i Sverige',
    'Grönfläckig på ryggen'
  ]),
  new Groda(7, 'Långbensgroda', 'Rana dalmatina', [
    'Kan hoppa 2 meter högt',
    'Lika stora trumhinnor som ögon'
  ]),
  new Groda(8, 'Åkergroda', 'Rana arvalis', [
    'När hanen ska para sig blir den blå',
    'Finns i hela Sverige utom i fjällen'
  ]),
  new Groda(9, 'Gölgroda', 'Pelophylax lessonae', [
    'Tycker om värme',
    'Lever längs Upplandskusten'
  ]),
  new Groda(10, 'Groda', 'Rana temporaria', [
    'Färg varierar mellan beige, brun och grön',
    'Äter maskar och insekter'
  ])
]

frogArray.map(listItem => {
  let listDiv = document.createElement('div')
  listDiv.innerHTML = `
    <div class='container'>
    <div class='border'>
    <li><h3>${listItem.namnSv}</h3>
    <h4>${listItem.namnLat}</h4>
    </li>
    </div>
    </div>
    `
  document.querySelector('ul').appendChild(listDiv)
})

const lis = document.querySelectorAll('li')
lis.forEach(l => {
  l.addEventListener('click', highlightFunc)
})

function highlightFunc (event) {
const parent = event.currentTarget;
const child = parent.firstChild.textContent;
frogArray.filter(el => {
    if (el.namnSv === child) {
        const qualities = el.egenskaper.join('. ');
      const highlightDiv = document.createElement('div');
      highlightDiv.classList.add('highlight');
      highlightDiv.innerHTML = `
      <p class='title'>Svenskt namn: </p><h3>${el.namnSv}</h3>
      <p class='title'>Latinskt namn: </p><h4>${el.namnLat}</h4>
      <p class='title'>Egenskaper: </p><p>${qualities}</p>
      <button id='close'>Stäng</button>
      `
      document.querySelector('.content').append(highlightDiv);
      document.getElementById('close').addEventListener('click', () => {
document.querySelector('.highlight').remove();
      })
    }
})
}
