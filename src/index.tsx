import { render } from "solid-js/web";
import "./index.css";
import App from "./App";

var script = document.createElement('script');
script.src = 'https://static.line-scdn.net/liff/edge/2/sdk.js';
script.onload= () => {
    render(() => <App />, document.getElementById("root"));
}
document.body.appendChild(script);


