/*storing elements in variable */
let fid = document.getElementById("find");
let add = document.getElementById("add");
let data = document.getElementById("data");
let info = document.getElementById("info");

/* adding an event on the click event */
add.addEventListener("click", function(e){
    let result = fid.value;
    let journal = [
        {james: ["work", "touched tree", "pizza",
                  "running", "television"],
         Married: "YES", Branch_location:"Kisubi"},
         
        {peter: ["work", "ice cream", "cauliflower",
                  "lasagna", "touched tree", "brushed teeth"],
         Married: "YES", Branch_location:"Jinja"},

        {shivan: ["weekend", "cycling", "break", "peanuts",
                  "beer"],
         Married: "NO", Branch_location:"Nakawa"}
        /* and so on... */
      ];

      /* check if the value of the input is the as the one in the data center and logging to the
      console */
      if(result == "james"){
          console.log(journal[0]);
          data.innerHTML = `member <br> Please check in the console for ${result} data` ;
      }
      else if(result == "peter" ){
        console.log(journal[1]);
        data.innerHTML = `member <br> Please check in the console for ${result} data` ;
      }
      else if(result == "shivan" ){
        console.log(journal[2]);
        data.innerHTML = `member <br> Please check in the console for ${result} data` ;
      }
      else{
          console.log("not avaiable");
          data.innerHTML = ` Not member <br> Please there is data of ${result} stored in this data center` ;
      }
    /* clearing the input field */
    fid.value = "";
          
    /* preventing the default submit effect of the form */
      e.preventDefault();
})



// const x = journal.find( c => c.james);
// console.log(x);
