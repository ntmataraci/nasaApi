const myKey="api_key=de54WHI5FMy3X3OuhDdKbDS4wKqL2uH9uQkRmJgJ"
const startDate="start_date=2021-09-01"
const docTitle=document.querySelector(".title")
const docContent=document.querySelector(".content")
const docImage=document.querySelector(".image")
let menuPage
let data
document.querySelector(".back").addEventListener("click",()=>{
    menuPage-=1
    actionHelper(data)
    console.log(menuPage)
})

document.querySelector(".forward").addEventListener("click",()=>{
    menuPage+=1
    actionHelper(data)
    console.log(menuPage)
})

async function action (){
    let response=await fetch(`https://api.nasa.gov/planetary/apod?${myKey}&${startDate}`)
    data=await response.json()
    menuPage=data.length-1
    actionHelper(data)
}

action()

function actionHelper(data){
    let image=data[menuPage].hdurl
    let content=data[menuPage].explanation
    let title=data[menuPage].title
    parseText(title,content,image)
}



function parseText(title,content,image){
docTitle.innerHTML=`<p>${title}</p>`
docContent.innerHTML=`<i>${content}</i>`
docImage.innerHTML=`<img src="${image}" >`

}