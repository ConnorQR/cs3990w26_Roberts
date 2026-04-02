const root = document.getElementById("P3");

const header = document.createElement("div");
header.className = "menu-header";
header.textContent = "▶ Sweeties (click me)!";

const list = document.createElement("ul");
list.className = "menu-list";

const imageContainer = document.createElement("div");
imageContainer.className = "image-container";

const sweets = ["Cake", "Donut", "Honey"];

const images = {
  Cake: "images/cake.jpg",
  Donut: "images/donut.jpg",
  Honey: "images/honey.jpg"
};

let isOpen = false;

sweets.forEach(name => {
  const li = document.createElement("li");
  li.textContent = name;
  li.className = "menu-item";

  li.addEventListener("click", () => {
    if (!isOpen) return;

    list.querySelectorAll(".menu-item").forEach(i => {
      i.classList.remove("selected");
    });

    li.classList.add("selected");

    imageContainer.innerHTML = "";
    const img = document.createElement("img");
    img.src = images[name];
    imageContainer.appendChild(img);
  });

  list.appendChild(li);
});

header.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    list.style.display = "block";
    header.textContent = "▼ Sweeties (click me)!";
  } else {
    list.style.display = "none";
    header.textContent = "▶ Sweeties (click me)!";

    list.querySelectorAll(".menu-item").forEach(i => {
      i.classList.remove("selected");
    });
    imageContainer.innerHTML = "";
  }
});

root.appendChild(header);
root.appendChild(list);
root.appendChild(imageContainer);