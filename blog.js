function bcClick(index){
	var xmlhttp;
	if (window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
		    var obj = JSON.parse(xmlhttp.responseText);
		    if(obj.data[index].canGoto == true){
		        window.location.href=obj.data[index].gotoLink;
		    }else{
		        alert("Oops, I Can Not Found This Blog's Link!");
		    }
		}
	}
	xmlhttp.open("GET", "./blog-link.json", true);
	xmlhttp.send();
}