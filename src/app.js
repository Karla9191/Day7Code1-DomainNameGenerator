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

  let ext = [".com", ".es", ".net", ".us", ".io"];

  let RanPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];

  let RanAdj = adj[Math.floor(Math.random() * adj.length)];

  let RanNoun = noun[Math.floor(Math.random() * noun.length)];

  let RanExt = ext[Math.floor(Math.random() * ext.length)];

  let totalFrase = RanPronoun + RanAdj + RanNoun + RanExt;

  for (let i = 0; i < pronoun.length; i++) {
    console.log("Hello Karla desde console.log!" + pronoun[i]);
    document.getElementById("excuseF").innerHTML = totalFrase;
  }

  document.getElementById("excuseF").innerHTML = totalFrase;
};
