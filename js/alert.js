window.onload=function(){
  document.getElementById('alert').style.top='-500px';
  //document.getElementById('alert').style.WebkitTransform='translateY(-100px)';
}

window.setInterval(clean, 8000);

function clean(){
  document.getElementById('alert').style.top='-500px';
  //document.getElementById('alert').style.WebkitTransform='translateY(-100px)';
}

if( window.ActiveXObject ){

}else{
    function addLink(){
   document.getElementById('alert').style.top='0px';
   //document.getElementById('alert').style.WebkitTransform='translateY(80px)';
   document.getElementById('alert').innerHTML="复制成功！如引用请注明原作者及地址！";
    }
    document.oncopy = addLink;
}  


document.getElementById("btn").onclick = function(){
  document.querySelector('.msg').className += " open";
  setTimeout(function(){
    document.querySelector('.msg').className = "msg";
  },2000);
}
