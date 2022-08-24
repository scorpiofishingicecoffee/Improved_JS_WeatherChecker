//for fetching
const myKey = "d9d4618517e140de98d766a91a28d918";
const fetchData = fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${myKey}&units=metric`
);

//promise section
Promise.all([fetchData])
  .then((values) => {
    return Promise.all(values.map((r) => r.json()));
  })
  .then((values) => {
    console.log(values);
  })

  .catch((e) => {
    console.log("Testing:has been catched");
    alert("Errror testing");
  });
