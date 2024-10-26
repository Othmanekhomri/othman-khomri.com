let burger = document.getElementById('burger')
let sidebar = document.getElementById('sidebar')
let close_btn = document.getElementById('close_btn')
let all_page = document.getElementById('all-page')
const hoverDiv = document.querySelector('.busines');
const targetDiv_game = document.querySelector('.gaming_link');
const hoverDiv_game = document.querySelector('.gaming');
const targetDiv = document.querySelector('.busines_link');
let busines_link =document.getElementById("busines_link")
let busines_link_large = document.getElementById('busines_link_large')
let gaming_link =document.getElementById("gaming_link")
let gaming_link_large = document.getElementById('gaming_link_large')
let close_alert = document.getElementById('close_alert')
let next_alert = document.getElementById('next_alert')
let alertt = document.getElementById('alert')
let msg_alert = document.getElementById('msg_alert')
let p_alert = document.getElementById('p_alert')
let anime = document.getElementById('anime')

//                               alert code start from here 

if(!sessionStorage.getItem('notif')){

setTimeout(()=>{
   alertt.style.display='flex'
},20000);
sessionStorage.setItem('notif',true);
}
next_alert.onclick=function(){
        p_alert.innerHTML='Thank you!😊'
        next_alert.style.display='none'
     }
     msg_alert.onclick=function(event){
             event.stopPropagation();// this prevent us from activating the click on the parent witch is alert div 
     }
     close_alert.onclick=function(){
         alertt.style.display='none'
     }
     alertt.onclick=function(){
             alertt.style.display='none'
         }
//                               alert code end here  



busines_link_large.addEventListener('click', function() {
       
        document.getElementById('busines').scrollIntoView({
          behavior: 'smooth' 
        });
      });
busines_link.addEventListener('click', function() {
        // Scroll to the element with id "busines"
        document.getElementById('busines').scrollIntoView({
          behavior: 'smooth' // Smooth scrolling effect
        });
      });

gaming_link_large.addEventListener('click', function() {
       
        document.getElementById('gaming').scrollIntoView({
          behavior: 'smooth' 
        });
      });
gaming_link.addEventListener('click', function() {
        // Scroll to the element with id "busines"
        document.getElementById('gaming').scrollIntoView({
          behavior: 'smooth' // Smooth scrolling effect
        });
      });
hoverDiv.addEventListener('mouseenter', () => {
            targetDiv.style.backgroundColor = '#FFE1FF';
            targetDiv.style.color = '#7E60BF';
            targetDiv.style.borderBottom = "4px solid #7E60BF";
});

hoverDiv.addEventListener('mouseleave', () => {
            targetDiv.style.backgroundColor = '';
            targetDiv.style.color = '';
            targetDiv.style.borderBottom = "";
});

hoverDiv_game.addEventListener('mouseenter', () => {
        targetDiv_game.style.backgroundColor = '#FFE1FF';
        targetDiv_game.style.color = '#7E60BF';
        targetDiv_game.style.borderBottom = "4px solid #7E60BF";
});

hoverDiv_game.addEventListener('mouseleave', () => {
        targetDiv_game.style.backgroundColor = '';
        targetDiv_game.style.color = '';
        targetDiv_game.style.borderBottom = "";
});

all_page.onclick=function(){
        sidebar.style.display="none"
        
}

burger.onclick=function(){
   
        sidebar.style.display="block"
        
    
}

close_btn.onclick=function(){
        sidebar.style.display="none"
        
}
