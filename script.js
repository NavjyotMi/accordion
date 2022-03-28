const icon = document.querySelectorAll(".icon");
const questinExpand = document.querySelectorAll(".question--expand");
const answer = document.querySelectorAll(".answer");

questinExpand.forEach((curr, i) => {
  curr.addEventListener("click", function (e) {
    e.preventDefault();

    const ans = document.getElementsByClassName("answer")[i];
    ans.classList.toggle("hide");
  });
});
