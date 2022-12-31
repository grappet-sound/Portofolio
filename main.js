for(var i=0; i<20; i++){
    var topV = Math.floor( Math.random() * 100 );
    var leftV = Math.floor( Math.random() * 100 );
    var delayV = Math.random() * 5;

    var newDiv = document.createElement("div");
    newDiv.className = "s2";
    newDiv.style.left = leftV + "%";
    newDiv.style.top = topV + "%";
    newDiv.style.animationDelay = delayV + "s";

    document.getElementById("body").appendChild(newDiv);
}
for(var i=0; i<250; i++){
    var topV = Math.floor( Math.random() * 100 );
    var leftV = Math.floor( Math.random() * 100 );
    var delayV = Math.floor(Math.random()*15);

    var newDiv = document.createElement("div");
    newDiv.className = "star";
    newDiv.style.left = leftV + "%";
    newDiv.style.top = topV + "%";
    newDiv.style.animationDelay = delayV + "s";

    document.getElementById("body").appendChild(newDiv);
}

function goToWorks(){
    var projects = document.getElementById("projects");
    window.scrollTo({left:0, top:projects.offsetTop - 50, behavior: "smooth"});
}
function goToAbout(){
    var about = document.getElementById("about");
    window.scrollTo({left:0, top:about.offsetTop, behavior: "smooth"});
}
function goToMain(){
    var title = document.getElementById("title");
    window.scrollTo({left:0, top:title.offsetTop, behavior: "smooth"});
}