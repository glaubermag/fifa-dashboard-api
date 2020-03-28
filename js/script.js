
const url = "https://fifagama.herokuapp.com/fifa19/0/10";

fetch(url)
  .then(response => response.json())
  .then(players => {
    players.map(player => {
       createCards(player.data);
    });
  });

  function createCards (player) {
      const { Photo, Name, Age, Height} = player
    div = document.createElement("div");
      div.className = "container";

      card = document.createElement("div");
      card.className = "col-md-4 col-lg-12";
      
      image = document.createElement("img");
      image.className = "card-img-top";
      image.src = Photo; 


      cardBody = document.createElement("div");
      cardBody.className = "card-body";

      cardText = document.createElement("div");
      cardText.className = "card-text";

      propertyName = document.createElement("h3");
      propertyName.className = "property-name";
      propertyName.innerHTML = Name;
      
      playerAge = document.createElement("p");
      playerAge.className = "property-price";
    playerAge.innerHTML = "Idade: " + Age;

    playerHeight = document.createElement("p");
    playerHeight.className = "property-price";
  playerHeight.innerHTML = "Altura: " + Height;

      row.appendChild(div);
      div.appendChild(card);
      card.appendChild(image);
      card.appendChild(cardBody);
      cardBody.appendChild(cardText);
      cardText.appendChild(propertyName);
      cardText.appendChild(playerAge);
      cardText.appendChild(playerHeight);



  }