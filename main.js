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
    var markdown = xmlHttp.responseText;
    markdown = markdown.replace(/(#{1,6})/g,"$1 ");
    var content = document.getElementById("contents");
    content.innerHTML = marked(markdown);
  }
}
