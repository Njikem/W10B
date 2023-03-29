//Changing element style using selectors
 
let  purse_tag = document.querySelector(`#purse_tag`);
purse_tag[`style`][`fontsize`]= `4rem`;

let teams = document.querySelectorAll(`.team_tag`);
 teams[`style`][`color`] = `#FFFFFF`;
 teams.insertAdjacentHTML(`beforeend` `<h3>I'm trying my best to make it right</h3>`);


 //change element by id
 let support = document.getElementById(`support_tag`);
 support[`style`][`fontsize`] = `3rem`;
 support[`innerHTML`] = `Red Alert: hit by phaser fire`;
 support.insertAdjecentHTML(`afterend`, `<p>Welcome to my new tag</p>`);
 support.insertAdjacentHTML(`<h4>I know i am new tag</h4>`);

 console.log(support.innerHTML);

 //change elements by class name
 let teams = document.getElementsByClassName(`team_tag`);

 for(let i=0; i < teams.length; i++){
    teams[i][`style`][`fontsize`] = `4rem`;
}

  for(let i=0; i < teams.length; i++){
    teams[i][`innerHTML`] = `Everything will take it place, just be you`;
  }

for(let i=0; i < teams.length; i++){
    teams[i][`insertAdjacentElement`][`<h3>Make sure you understand the course well.Don't rush</h3>`];
}
