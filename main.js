let saveButton = document.querySelector("#saver");
let inputElement = document.getElementById("inputEl")
let displayer = document.getElementById("box")
saveButton.addEventListener("click", saver)
let boxer = document.querySelector("#boxer");
ulElemt= document.querySelector("#ulElement");

let today = new Date()
let fullDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(fullDate, time)

function tConvert (timeTime) {
   // Check correct time format and split into components
   timeTime = timeTime.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
 
   if (timeTime.length > 1) { // If time format correct
     timeTime = timeTime.slice (1);  // Remove full string match value
     timeTime[5] = +timeTime[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
     timeTime[0] = +timeTime[0] % 12 || 12; // Adjust hours
   }
   return timeTime.join (''); // return adjusted time or original string
 }
 
 

let displayBox =""
function saver(){
   let content = inputElement.value ;
   let binder = document.createElement("li")
   binder.style.listStyleType="none"
   binder.innerHTML +=  '<i class="fas fa-calendar-week" aria-hidden="false"></i>';
   // binder.classList.add("fa-calendar-week")
  binder.appendChild(document.createTextNode(" " + content))
  binder.innerHTML += " | " + fullDate + ` | ` + tConvert (time);
  ulElemt.appendChild(binder)
//   displayBox.push(binder)
// displayBox=binder
   // binder.innerContent = displayBox
   inputElement.value = ""
   boxer.style.display = "block"
   displayer.innerText=""

   // ` <li><i class="fas fa-calendar-week" aria-hidden="false"></i></li>`

}

function keyPress (event){
   // window.addEventListener("keydown", (event) => {
   //    let keyPressed = event.key
   //    displayer.innerText = keyPressed
   // });
   
   let keyPressed = event.key;
   displayer.innerHTML += keyPressed
  

}