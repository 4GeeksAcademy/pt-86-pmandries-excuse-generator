import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".btn").addEventListener("click", generateExcuse)
};

const generateExcuse = () => {
  let whoIs = ["Michael Jordan", "Will Smith", "President Trump", "Captain America", "The Living Dead"];
  let whatVerb = [" power-slammed", " turbo-juiced", " ultra-microwaved", " sumo-flushed", " Jedi mind-warped"];
  let whatNoun = [" my laptop", " my cell phone", " my project", " whatever it is that you wanted", " my hard drive"];
  let whenIs = [" 4.2 milliseconds ago!", " literally, just now!", " about a week ago.", " some time in the near future.", " whenever it is that you think sounds plausible."];

  let whoIsIndex = Math.floor(Math.random() * whoIs.length);
  let whatVerbIndex = Math.floor(Math.random() * whatVerb.length);
  let whatNounIndex = Math.floor(Math.random() * whatNoun.length);
  let whenIsIndex = Math.floor(Math.random() * whenIs.length);

  let whoDiv = document.querySelector("#who");
  let verbDiv = document.querySelector("#verb");
  let nounDiv = document.querySelector("#noun");
  let whenDiv = document.querySelector("#when");

  whoDiv.innerHTML = whoIs[whoIsIndex];
  verbDiv.innerHTML = whatVerb[whatVerbIndex];
  nounDiv.innerHTML = whatNoun[whatNounIndex];
  whenDiv.innerHTML = whenIs[whenIsIndex];
}