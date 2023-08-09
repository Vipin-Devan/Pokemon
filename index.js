fetch('/pokemon.json')
  .then((res) => res.json())
  .then((data) => {
    let html = '';
    data.forEach((pokemon) => {
      html += `<div data-name="${pokemon.title}" class="tile">
                    <div class="image">
                        <img src=${pokemon.image}>
                    </div>
                    <div class="title">
                        ${pokemon.title}
                    </div>
                </div>`;
    });
    document.getElementById('pokemon').innerHTML = html;
  });
