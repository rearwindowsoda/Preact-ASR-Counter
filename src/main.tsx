import { render } from "preact";
import { App } from "./app";
import "./assets/css/main.scss";
render(<App />, document.getElementById("app") as HTMLElement);
