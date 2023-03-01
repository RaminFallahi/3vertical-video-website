// GET THE VIDEO FROM THE DOM
const containers = document.querySelectorAll("header > div");

// loop through the containers
containers.forEach(container => {
  // add a mouse enter event listener
  container.addEventListener("mouseenter", () => {

    // play the video
    container.querySelector ("video").play();
  });

  // add a mouse leave event listener
  container.addEventListener("mouseleave", () => {

    // pause the video
    container.querySelector ("video").pause();
  });
})