
let popoverEl=document.getElementById('popover')
let displayPopEl=document.getElementById('displaypop')
let popoverEl1=document.getElementById('popover1')
let displayPopEl1=document.getElementById('displaypop1')
popoverEl.addEventListener('mouseover',function(event){
    displayPopEl.classList.remove('d-none')
    displayPopEl1.classList.add('d-none')
})
popoverEl1.addEventListener('mouseover',function(event){
    displayPopEl1.classList.remove('d-none')
    displayPopEl.classList.add('d-none')
})
document.addEventListener('mouseup',function(event){
    displayPopEl.classList.add('d-none')
    displayPopEl1.classList.add('d-none')
})
displayPopEl.addEventListener('mouseout',function(){
    displayPopEl.classList.add('d-none')
})

displayPopEl.addEventListener('focusout',function(){
    displayPopEl.classList.add('d-none')
})