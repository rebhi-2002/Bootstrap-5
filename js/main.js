// Portfolio

let list = document.querySelectorAll(".our-work ul li");
let itemBox = document.querySelectorAll(".our-work .box");

list.forEach((li) => {
  li.addEventListener("click", () => {
    list.forEach((e) => {
      e.classList.remove("active");
    });
    li.classList.add("active", "rounded-pill");

    let dataFilter = li.getAttribute("data-filter");
    itemBox.forEach((item) => {
      item.classList.remove("active");
      item.classList.add("hide");
      if (
        item.getAttribute("data-item") === dataFilter ||
        dataFilter === "all"
      ) {
        item.classList.remove("hide");
        item.classList.add("active");
      }
    });
  });
});

/*

<div class="our-work">
  <div class="container">
    <ul>
      <li class="list active" data-filter="all">All</li>
      <li data-filter="design">Design</li>
      <li data-filter="code">Code</li>
      <li data-filter="photo">Photo</li>
      <li data-filter="app">App</li>
    </ul>
    <div class="product">
      <div class="box" data-item="all">
        <img src="..." alt="..." />
      </div>
      <div class="box" data-item="design">
        <img src="..." alt="..." />
      </div>
      <div class="box" data-item="code">
        <img src="..." alt="..." />
      </div>
      <div class="box" data-item="photo">
        <img src="..." alt="..." />
      </div>
      <div class="box" data-item="app">
        <img src="..." alt="..." />
      </div>
    </div>
  </div>
</div>

*/
