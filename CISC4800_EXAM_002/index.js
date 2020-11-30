const URL = "https://www.boredapi.com/api/activity";

const getMsg = () => {
  fetch(URL)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      console.log(res);
      const msg = res.activity;
      document.getElementById("response").innerHTML = msg;
    });
};
