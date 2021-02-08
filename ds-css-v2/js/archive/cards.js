// Stored variables
const parentEl = document.querySelector('.cards');

// JSON-Server code

const cardData = async () => {
  /* When using json-server */
  // let uri = 'http://localhost:3000/cards';
  let local_uri = '../data-base/db.json';

  const response = await fetch(local_uri);
  const cards = await response.json();

  const data = cards.cards;

  let cardTemplate = '';

  data.forEach( card => {
    cardTemplate += `
    <div class="usa-card desktop:grid-col-3 tablet:grid-col-4 mobile-lg:grid-col-6 grid-col-12">
      <div class="usa-card__container" style="height: 280px; overflow-y: hidden; padding: 24px">
        <header class="usa-card_header">
          <span style="justify-content: flex-end; display: flex"><i class="far fa-star" style="height: 27px; width: 27px"></i></span>
          <h5 class="usa-card__heading" style="font-weight: 400">${card.title}</h5>
        </header>

        <div class="usa-card__body" style="margin: 12px 0; padding: 0">
          <p style="font-size: 14px; line-height: 20px">${card.data}</p>
          <span style="align-items: center; display: flex"><i class="fas fa-chevron-down" style="margin-right: 5px"></i>MORE</span>
        </div>
        
        <div class="usa-card__footer" style="align-items: center; border-top: solid 3px #DFE1E2; display: flex; justify-content: space-between; margin: 16px 0; padding-left: 0; padding-right: 0">
          <button class="usa-button usa-button--outline" style="font-size: 14px; height: 40px"><i class="fas fa-exclamation-circle"></i>INFO</button>
          <button class="usa-button" style="font-size: 14px; height: 40px; margin-right: 0"><i class="fas fa-external-link-alt"></i>GO TO APP</button>
        </div>
      </div>
    </div>
    `

  });

  parentEl.innerHTML = cardTemplate;
}

window.addEventListener('DOMContentLoaded', () => cardData());