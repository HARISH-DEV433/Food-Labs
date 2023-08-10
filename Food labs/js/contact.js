const scriptURL =
  "https://script.google.com/macros/s/AKfycbyQDEXqrvlNqSgSCyS9QnVBJqpacugtZ84tXrbnOzDUE9AmHTsyTdrjSTqVD3mtPts9/exec";
const form = document.forms["submit-to-google-sheet"];

///-----testing-------
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => console.log("Success!", response))
//     .catch((error) => console.error("Error!", error.message));
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("message sent successfully!");
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
