let drop = document.getElementById("drop");
let down = document.getElementById("down");

drop.addEventListener("click", function(){
    var options = ["1", "2", "3", "4", "5"];
    for(let i = 0; i < options.length; i++){
        let opt = options[i];
        let list = document.createElement("li");
        list.textContent = opt;
        down.appendChild(list);
        
    }
});
 window.setTimeout( () => {
     down.style.display="none";
    //  window.location.reload(true);
 }, 5000);
