const searchElem = document.getElementById('search');

const update = (til) => {
  document.querySelectorAll('.tile').forEach((el) => {
    const title = el.getAttribute('data-name');

    if (title.toLowerCase().indexOf(til) > -1) {
      el.classList.remove('is-hidden');
    } else {
      el.classList.add('is-hidden');
    }
  });
};

searchElem.addEventListener('keyup', () => {
  let typingTimer;
  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => {
    update(searchElem.value.toLowerCase().trim());
  }, 500);
});

fetch('/pokemon.json')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((pokemon) => {
      const cardTile = document.createElement('div');
      cardTile.setAttribute('data-name', pokemon.title);
      cardTile.className = 'tile';

      const imgTile = document.createElement('div');
      imgTile.className = 'image';

      cardTile.appendChild(imgTile);

      const titleTile = document.createElement('div');
      titleTile.innerHTML = pokemon.title;
      cardTile.appendChild(titleTile);

      let imag = document.createElement('img');
      imag.src = pokemon.image;
      imgTile.appendChild(imag);

      let res = document.getElementById('pokemon');
      res.appendChild(cardTile);
    });
  });
