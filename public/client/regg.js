const form = document.querySelector("#regForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  if (!res.email || !res.login || !res.password) {
    alert("Please enter your credentials");
  } else {
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      if (result.msg) {
        window.location.href = '/'
      }
      if (result.err) {
       alert(result.err)
      }
    } catch (error) {
      console.log(error);
    }
  }
});