let burger = document.getElementById('burger')
let sidebar = document.getElementById('sidebar')
let close_btn = document.getElementById('close_btn')
let all_page = document.getElementById('all-page')
const hoverDiv = document.querySelector('.busines');
const targetDiv = document.querySelector('.busines_link');
let busines_link =document.getElementById("busines_link")
let busines_link_large = document.getElementById('busines_link_large')

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

all_page.onclick=function(){
        sidebar.style.display="none"
        
}

burger.onclick=function(){
   
        sidebar.style.display="block"
        
    
}

close_btn.onclick=function(){
        sidebar.style.display="none"
        
}
