// select pop-box pop-overlay button
var popupbox = document.querySelector('.pop-box')
var popupoverlay = document.querySelector('.pop-overlay')
var button = document.getElementById('add-pop')

button.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

// select cancel button for default cancel button action was stoped
var cancelpop = document.getElementById('can-pop')
cancelpop.addEventListener("click",function(event){
    event.preventDefault()          // for default cancel is not work here is code
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

// select container, add button click to add all elements so select all of add-book, title, author, desc
var container = document.querySelector('.container')
var addbtn = document.getElementById('add-book')
var booktitle = document.getElementById('title')
var bookauthor = document.getElementById('author')
var bookdesc = document.getElementById('desc')

addbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement('div')
    div.setAttribute("class","book-container")
    // `<h2>${}</h2`        act as template `->not single quote press ~button
    div.innerHTML = `<h2>${booktitle.value}</h2
    <h4>${bookauthor.value}</h4>
    <p>${bookdesc.value}</p>
    <button onclick="del(event)">Delete</button>`
    container.append(div)
    // it will be add but overlay & popup back side is shown so display prpty shld none
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function del(event)
{
    event.target.parentElement.remove()
}