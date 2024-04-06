
let h_tag = document.querySelector('#h-tag');

h_tag.style.fontsize = '30px'
h_tag.style.color = 'red'
h_tag['innertext'] = 'All the same, we enjoyed ourself'

let container = document.querySelector('#container')

container.insertAdjacentHTML('beforeend', '<p>I hope you are enjoying the course.</p>');

h_tag.insertAdjacentHTML('beforebegin', '<h2>All is well. Do not bother</h2>')


let p_one = document.querySelectorAll('.p-one');

console.log({
    h_tag,
    p_one,
    container

})




let htag = document.getElementById('h-two');
htag.style.backgroundColor = 'green'
htag.style.fontweight = 'bolder'
htag['innerText'] = 'Javascript is fun!'


let ptags = document.getElementsByClassName('p-two')

for(let i =0; i < ptags.length; i++){
    let p_tag = ptags[i];
    p_tag.style.fontweight = '600'
    p_tag['innerText']  = 'Get all the classes'

}


let main = document.getElementById('main');

main.insertAdjacentHTML('afterbegin', '<h3>Work on your purpose</h3>');

main.insertAdjacentHTML('beforeend', '<h4>Just keep pushing</h4>');



console.log({
    htag,
    ptags,
    main
})