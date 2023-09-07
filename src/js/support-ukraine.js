const list = document.querySelector('.list-support')
let number = 1
const imgUrl1 = new URL('../img/support-img/image-1', import.meta.url);
const imgUrl2 = new URL('../img/support-img/image-1', import.meta.url);
const imgUrl3 = new URL('../img/support-img/image-1', import.meta.url);
const imgUrl4 = new URL('../img/support-img/image-1', import.meta.url);
const imgUrl5 = new URL('../img/support-img/image-1', import.meta.url);
const imgUrl6 = new URL('../img/support-img/image-1', import.meta.url);
const imgUrl7 = new URL('../img/support-img/image-1', import.meta.url);
const imgUrl8 = new URL('../img/support-img/image-1', import.meta.url);
const imgUrl9 = new URL('../img/support-img/image-1', import.meta.url);

const arraySopportUA = [
  {
    title: 'Save the Children',
    url:'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: `${imgUrl1}`,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: `${imgUrl2}`,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: `${imgUrl3}`,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: `${imgUrl4}`,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: `${imgUrl5}`,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: `${imgUrl6}`,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: `${imgUrl7}`,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: `${imgUrl8}`,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: `${imgUrl9}`,
  },
]

function createCharityElement(charity) {
  const formattedNumber = String(number).padStart(2, '0');
  number += 1; 
  return `
    <li class="el-support">
    <p class='number'>${formattedNumber}</p>
      <a href="${charity.url}" class="a-support" target="_blank">
        <img src="${charity.img}" alt="${charity.title}" class="img-support">
      </a>
    </li>
  `;
}

export function load() {
  list.innerHTML = arraySopportUA.map((charity) => createCharityElement(charity)).join('');
}

