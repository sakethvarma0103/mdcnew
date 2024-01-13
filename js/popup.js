const view=document.querySelectorAll('.pops')
const div=document.querySelectorAll('.pop1')
const close=document.querySelectorAll('.close-button')
  
  
let pop=function(click){
      view[click].classList.add('popsy')
}
div.forEach((mb,i)=>{
    mb.addEventListener('click',()=>{
        pop(i)
    })
})
  
close.forEach((mc,i)=>{
    mc.addEventListener('click',()=>{
        view[i].classList.remove('popsy')
      })
  })