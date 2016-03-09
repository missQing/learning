var XMLHttpReq;
function createReq(){
    try{
	    XMLHttpReq = new XMLHttpRequest();
	}catch(e){
		try{
		    XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
		}catch(e){
		    XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
		}
	    
	}
}

function sendAjaxReq(url){
	createReq();
    XMLHttpReq.open('POST', url, true);
	XMLHttpReq.setRequestHeader('content-type', 'application/json');
	XMLHttpReq.onreadystatechange = getResponse;
	XMLHttpReq.send(null);
}

function getResponse(){
    if(XMLHttpReq.readyState == 4){
	    if(XMLHttpReq.status == 200){
		     var text = XMLHttpReq.responseText;
		}
	}
}