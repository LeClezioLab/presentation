var xmlHttp;
function loadText(url){
  if (window.XMLHttpRequest){
    xmlHttp = new XMLHttpRequest();
  }else{
    if (window.ActiveXObject){
      xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }else{
      xmlHttp = null;
    }
  }
  xmlHttp.onreadystatechange = checkStatus;
  xmlHttp.open("GET", url, true);

  xmlHttp.send(null);
}

function checkStatus(){
  if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
    var node = document.getElementById("disp");
    node.innerHTML = xmlHttp.responseText;
  }
}
