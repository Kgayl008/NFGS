//CARD 1
const gifId = "kaq6GnxDlJaBq";
const apiKey = "PNB507HWO69dnemnFuHfdWH52qdECFDR";
const chloeGif = `https://api.giphy.com/v1/gifs/${gifId}?api_key=${apiKey}`;
axios.get(chloeGif)
  .then(result => {
    const cardEl = document.querySelector('.card__gif');
    cardEl.src = result.data.data.images.original.url;
  })
  .catch(error => {
    console.error(error);
  });

//CARD 2
const gifId2 = "3osBLA53AVzn746dXi";
const concededGif = `https://api.giphy.com/v1/gifs/${gifId2}?api_key=${apiKey}`;
axios.get(concededGif)
  .then(result => {
    const cardEl = document.querySelector('.card__gif2');
    cardEl.src = result.data.data.images.original.url;
  })
  .catch(error => {
    console.error(error);
  });

  //card 3
  const gifId3 = "hyyV7pnbE0FqLNBAzs";
const officeGif = `https://api.giphy.com/v1/gifs/${gifId3}?api_key=${apiKey}`;
axios.get(officeGif)
  .then(result => {
    const cardEl = document.querySelector('.card__gif3');
    cardEl.src = result.data.data.images.original.url;
  })
  .catch(error => {
    console.error(error);
  });
  
  //card 4
  const gifId4 = "S3Ot3hZ5bcy8o";
const jackGif = `https://api.giphy.com/v1/gifs/${gifId4}?api_key=${apiKey}`;
axios.get(jackGif)
  .then(result => {
    const cardEl = document.querySelector('.card__gif4');
    cardEl.src = result.data.data.images.original.url;
  })
  .catch(error => {
    console.error(error);
  });

//FOR CARD BUTTON DISPLAY NONE
const buttons = document.querySelectorAll('.card__btn');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');
for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            modals[i].style.display = 'block';
            buttons[i].style.display = 'none';

            modals[event.target.name].addEventListener('submit', (e) => {
              e.preventDefault();  
              modals[event.target.name].style.display = 'none';
                buttons[event.target.name].style.display = 'block';

                window.location.href = '/congrats/congrats.html';
            });
        });
    }



