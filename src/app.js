//constructor


//inst classes//

const ft = new Fetch();
const ui = new UI();
//add event listeners//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", (e) => {
  if (searchUser.value === "" || searchUser.value == null) {
    alert("My dude! It's empty! Please enter an existing location!");
  }

  const currentVal = search.value;
  ft.getCurrent(currentVal)
    .then((data) => {
      //call a UI method//
      ui.populateUI(data);
      //call saveToLS
      ui.saveToLS(data);
    })
    .catch((e) => {
      let text =
        "Location doesn't exist! Please try again and check if the location does exist!<a href=https://geographyfieldwork.com/WorldCapitalCities.htm target=_blank>Please check the locations first!</a>";
      document.getElementById("content").innerHTML = text;
    });
});

//don't use jquery. doesn't work properly
//event listener for local storage
window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});
//done. don't edit
