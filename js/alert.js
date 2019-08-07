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
   document.getElementById('alert').style.WebkitTransform='translateY(80px)';
   document.getElementById('alert').innerHTML="复制成功！如引用请注明原作者及地址！";
    }
    document.oncopy = addLink;
}  
