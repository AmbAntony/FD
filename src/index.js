// Retrieving data using fetch

const menumovietitle = document.querySelector('#films')
let URL = 'http://localhost:3000/films'

document.addEventListener('DOMContentLoaded', ()=>{ 
fetchData(URL)
fetchMovies(URL)
})

function fetchData(URL){
    fetch(`${URL}`)
    .then(response=>response.json())
    .then(data => movieDetails(data[0]))
    
}

function fetchMovies(URL){
    fetch(`${URL}`)
    .then(response=>response.json())
    .then(data1 => {
        
        data1.forEach(data1 =>addMovies(data1))
})
}

//function that displays titles of movies as a list

function addMovies(data1){
    let li=document.createElement('li')
    li.style.cursor="hand"
    li.textContent = data1.title
    menumovietitle.appendChild(li)
    addClickEvent()
}

function addClickEvent(){
    let children = menumovietitle.children
    for(let i=0; i<children.length; i++){
        let child = children[i]
        console.log(child)
        child.addEventListener('click',() =>{
        fetch(`{http://localhost:3000/films}`)
        .then(response => response.json)
        .then(movie => {
            document.getElementById('buy-ticket').textContent = 'Buy Ticket'
            movieDetails(movie[i])
        })
     })
  }
}




//create function that posts movie details

function movieDetails(data){

document.querySelector('#poster').src = data.poster;


const movietitle = document.getElementById('title')
const runtime = document.getElementById('runtime')
const filmdescription = document.getElementById('film-info')
const showtime = document.querySelector('#showtime')
const ticketnumbers = document.querySelector('#ticket-num')

movietitle.textContent = data.title
runtime.textContent = data.runtime
filmdescription.textContent = data.description
showtime.textContent = data.showtime
ticketnumbers.textContent = data.capacity-data.tickets_sold
}



//Sold out if tickets<0

const btn=document.getElementById('buy-ticket')
btn.addEventListener('click', function(event){
    let ticketsRemaining = document.querySelector('#ticket-number').textContent
    event.preventDefault()
    if(ticketsRemaining>0){
        document.querySelector('#ticket-number').textContent = ticketsRemaining - 1; 
    }
    else if(parseInt(ticketsRemaining, 10)===0){
        btn.textContent = "Sold Out"
    }
})




    


