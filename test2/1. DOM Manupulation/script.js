const square = document.getElementById("square");

const eventHandler = () => {
  square.style.backgroundColor = "yellow";
  square.style.height = "600px";
  square.style.width = "600px";
};

square.addEventListener("click", eventHandler);