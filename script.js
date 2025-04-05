let quotes = {
    "Steve Jobs" : "Stay Hungry,Stay Foolish" ,
    "Aristotle" : "Happiness depends upon ourselves." ,
    "William Shakespeare" : "Love all, trust a few, do wrong to none." ,
    "Benjamin Franklin" : "An investment in knowledge pays the best interest." ,
    "Theodore Roosevelt" : "Believe you can and you are halfway there." 
}

function generateQuote() {
    quoteElement = document.querySelector("#quote") ;
    authorElement = document.querySelector("#author") ;

    names = Object.keys(quotes) ;
    randomIndex = Math.floor(Math.random() * names.length) ;
    authorElement.innerHTML = names[randomIndex] ;
    quoteElement.innerHTML = quotes[authorElement.innerHTML] ;
}

function addQuote() {
    let quoteElement = document.querySelector("#newQuote") ;
    let authorElement = document.querySelector("#authorName") ;
    let quote = quoteElement.value ;
    let author = authorElement.value ;
    
    quotes[author] = quote ;
    localStorage.setItem("quotes",JSON.stringify(quotes)) ; 

    quoteElement.value = "" ;
    authorElement.value = "" ;
}

window.addEventListener("load", function () {
    localStorage.clear();
});


