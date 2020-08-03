// Eslint-disable
import "core-js/stable";
import "regenerator-runtime/runtime";
import $ from "jquery";
import jQuery from "jquery";

import "../scss/main.scss";

import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/modal";

import "semantic-ui-css";

// import Header from "./components/header";
// import Career from "./components/career";
import Validation from "./components/validation";
import semanticUi from "./components/semantic";

if (process.env.NODE_ENV === "development") {
  require("../pug/home.pug");
  require("../pug/index.pug");
  require("../pug/components.pug");
}

// Eslint-disable-line no-console
console.log("Hi, my name is Common!");

//For Live Projects
window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});

const validation = new Validation();
const semantic = new semanticUi();
