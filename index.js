window.onload=function(){
    if(location.href.indexOf("index.html") == -1){
        window.open("./index.html","_self");
    }
    var options = {
        strings:["hopejieshuo", 
                "A GDI Malware Maker", 
                "Like Math, English And Chemistry", 
                "Currently Learning C/C++", 
                "Welcome To Visit My Website"],
        typeSpeed:100,
        backSpeed:25,
        loop:true,
        cursorChar:"",
        startDelay:500,
        backDelay:500
    };
    var typed = new Typed('.title-main', options);
}