import { Fruits } from "./Data.js";

const ul = $("#fruits");
const section = $("#fruitDesc");

const title = $("<h2>");
const desc = $("<p>");
const img = $("<img>");

section.append(title, img, desc);

Fruits.forEach((e, index) => {
  const li = $("<li>")
    .text(e.fruit)
    .data("fruitData", e);

  ul.append(li);

  if (index === 0) {
    li.addClass("highlighted");
    title.text(e.fruit);
    desc.text(e.descr);
    img.attr("src", e.img);
  }
});

$("li").click(function () {
  $("li").removeClass("highlighted");

  $(this).addClass("highlighted");

  const data = $(this).data("fruitData");
  
  title.text(data.fruit);
  desc.text(data.descr);
  img.attr("src", data.img);
});