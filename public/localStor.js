var b = document.querySelector(".add-btn");

function addTC(){
    let movies ={
        titles: b.value
    };
    JSON.parse(localStorage.getItem(movies.titles));
    localStorage.setItem("title", JSON.stringify(movies.titles));

    var all = JSON.parse(localStorage.getItem("ALL"));
    if (all == null){
        all = [];
    }
    all.push(movies);
    localStorage.setItem("ALL", JSON.stringify(all));
}
function startAdding(a){
    b.addEventListener("click", a);
    console.log("click")
}
startAdding(addTC);