/* const elUrlShortener = document.querySelector('.url-shortener');
const elUrlShortenerForm = document.querySelector('.js-url-shortener-form');
const elUrlShortenerResults = document.querySelector('.url-shortener__results');
const elCopyUrlShortLinkButton = document.querySelector('.js-copy-short-link-button');

if (elUrlShortenerForm)
elUrlShortenerForm.addEventListener('submit', function(evt){
  evt.preventDefault();
  
  elUrlShortenerResults.classList.add('url-shortener__results--open');
});

if (elUrlShortener) { 
  elUrlShortener.addEventListener('click' , function (evt){
    if(evt.target.matches('.js-copy-short-link-button'))
    console.log(evt.target);
    // Change button text
    evt.target.textContent = 'copied'

    // Change button bgcolor
    evt.target.classList.add('url-shortener__copy-button-copied');
  });
} */