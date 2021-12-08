var mode = {
    body : function(x){
        document.body.style.backgroundColor=x;
    },
    h1 : function(y){
        document.querySelector("h1").style.color=y;
    },
    btn : document.querySelector("input")
};
function toggle () {
    if(mode.btn.value === "night"){
        mode.body("white");
        mode.h1("black");
        mode.btn.value="day";
    }else{
        mode.body("black");
        mode.h1("white");
        mode.btn.value="night";
    }
}
mode.btn.addEventListener("click", toggle);
