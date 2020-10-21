document.addEventListener('DOMContentLoaded',()=>{
     
    const cardArray=[
        {
            name:"blank",
            src:"images/blank.png"
        },
        {
            name:"elephant",
            src:"images/elephant.png"
        },
        {
            name:"grenouille",
            src:"images/grenouille.png"
        },
        {
            name:"ibouh",
            src:"images/h.png"
        },
        {
            name:"lion",
            src:"images/lion.png"
        },
        {
            name:"oiseau",
            src:"images/oiseau.png"
        },
        {
            name:"ours",
            src:"images/ours.png"
        }
        // {
        //     name:"tigre",
        //     src:"images/tigre.png"
        // }
    ]
    cardArray.sort(()=>0.5 - Math.random())

    const grid=document.querySelector(".grid")
    const resultDisplay= document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    
  const cardsWon = []


    const createBord=()=>{
        for(i=0;i<=cardArray.length;i++){
            var card=document.createElement('img')
            card.setAttribute('src','images/blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card)
        }
    }

    // check for match
    const checkForMatch=()=>{
        var cards=document.querySelectorAll('img')
        const optionOneId=cardsChosenId[0]
        const optionTowId=cardsChosenId[1]
        if(cardsChosenId[0]===cardsChosenId[1]){
            alert('you found a match')
            cards[optionOneId].setAttribute('src','images/ours.png')
            cards[optionTowId].setAttribute('src','images/ours.png')
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src','images/blank.png')
            cards[optionTowId].setAttribute('src','images/blank.png')
            alert("soppy try again")
        }
        cardsChosen=[]
        cardsChosenId=[]
        resultDisplay.textContent=cardsWon.length
        if(cardsWon.length===cardArray.length/2){
            resultDisplay.textContent="Congrat :) !!!! you found  them alll"
        }
    }

    const flipcard= ()=>{
        var cardId = this.getAttribute('data-id')
        console.log(cardId)
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute("src",cardArray[cardId].src)
        if(cardsChosen.length===2){
            setTimeout(checkForMatch,500)
        }
    }


    createBord()
    // create your board
})
