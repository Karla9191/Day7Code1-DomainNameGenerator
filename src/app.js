/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["The", "our"];

  let adj = ["great", "big"];

  let noun = ["jogger", "racoon"];

  let ext = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < ext.length; i++) {
    for (let i = 0; i < noun.length; i++) {
      for (let i = 0; i < adj.length; i++) {
        for (let i = 0; i < pronoun.length; i++) {}
      }
    }

    console.log(pronoun[i] + adj[i] + noun[i] + ext[i]);
  }
};
