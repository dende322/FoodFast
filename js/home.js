const containerTabs = document.querySelectorAll(".tab");
const containerDishes = document.querySelectorAll(".container-dishes");

containerTabs.forEach((tab) => {
  addEventListener("click", (e) => {
    const tabName = e.target.dataset.name;

    containerTabs.forEach((tab) => tab.classList.remove("active"));
    e.target.classList.add("active");

    containerDishes.forEach((containerDish) => {
      const dishName = containerDish.dataset.name;
      if (dishName === tabName) {
        containerDish.classList.add("active");
      } else {
        containerDish.classList.remove("active");
      }
    });
  });
});
