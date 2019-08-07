window.onload=function(){
  document.getElementById('alert').style.Transform='translateY(-100px)';
  document.getElementById('alert').style.WebkitTransform='translateY(-100px)';
}

window.setInterval(clean, 8000);

function clean(){
  document.getElementById('alert').style.transform='translateY(-100px)';
  document.getElementById('alert').style.WebkitTransform='translateY(-100px)';
}

if( window.ActiveXObject ){

}else{
    function addLink(){
   document.getElementById('alert').style.transform='translateY(77px)';
   document.getElementById('alert').style.WebkitTransform='translateY(100px)';
    }
    document.oncopy = addLink;
}  
