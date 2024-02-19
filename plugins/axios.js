import { authHeader } from "../helpers/fakebackend/auth-header";

export default function ({ $axios, redirect, store }) {
  $axios.onRequest((config) => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      $axios.setToken(user.token, "Bearer");
    }
    //mock token
    $axios.setToken("sometoken", "Bearer");
    // console.log("Making request to " + config.url);
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      //   redirect("/400");
      window.alert(error.response);
    }
  });
}
