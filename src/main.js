import "./global.css";
import HMR from "@roxi/routify/hmr";
import App from "./App.svelte";

const app = HMR(App, { target: document.body }, "routify-app");

export default app;


const testAppServe = () => {
  fetch('/app').then((res) => {
    console.log('res---', res);
    return res.text();
  }).then(r => {
      console.log('r---', r);
  })
}

testAppServe();