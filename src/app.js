/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adjective = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = ["com", "net", "us", "io"];

  for (const pro of pronoun) {
    for (const adj of adjective) {
      for (const nou of noun) {
        for (const ext of extensions) {
          console.log(pro + adj + nou + "." + ext);
        }
      }
    }
  }
};
