import fetch from "node-fetch";
import { FormData } from "node-fetch";
import { getByDay } from "prayertiming";
const res = getByDay({
  date: new Date(),
  long: 25.2182814,
  lat: 55.2615848,
  timeFormat: "12h",
});
console.log(res);
const form = new FormData();
form.append("text", res.fajr);
form.append("x", 0);
form.append("y", 0);
form.append("r", 255);
form.append("g", 255);
form.append("b", 255);
form.append("identifier", 0);
form.append("font", 1);
form.append("width", 64);
form.append("movement_speed", 0);
form.append("direction", 0);
const response = await fetch("http://localhost:5000/sendText", {
  method: "POST",
  body: form,
});
const data = await response;

console.log(data);
