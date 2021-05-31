// Navbars
sectionList = document.querySelectorAll(".page-section");
sectionHeaders = document.querySelectorAll(".header-links li"); // get all li(li has links for headers)
sideNavHeaders = document.querySelectorAll(".side-nav-links li"); // get all li(li has links for headers)
window.addEventListener("scroll", function (event) {
  let currentSectionID = "home";
  sectionList.forEach((section) => {
    // pageYOffset: Y-axis scroll val, section.offsetTop: top coord of section,
    if (pageYOffset + 1 >= section.offsetTop) {
      currentSectionID = section.getAttribute("id");
    }
  });
  // console.log(currentSectionIDval);
  // main navbar
  sectionHeaders.forEach((li) => {
    li.classList.remove("active-header");
    if (li.children[0].getAttribute("href").substring(1) === currentSectionID) {
      li.className = "active-header";
    }
  });

  // side navbar
  sideNavHeaders.forEach((li) => {
    li.classList.remove("active-header");
    if (
      li.children[0].children[0].getAttribute("href").substring(1) ===
      currentSectionID
    ) {
      li.className = "active-header";
    }
  });
});

function showNavbar() {
  /*if (
    window
      .getComputedStyle(document.querySelector(".header-links"))
      .getPropertyValue("top") != "13%"
  ) {
    console.log("cond1");
    document.querySelector(".header-links").style.top = "13%";
  } else if (document.querySelector(".header-links").style.top == "13%") {
    console.log("cond2");
    document.querySelector(".header-links").style.top = "-100%";
  }
  console.log(document.querySelector(".header-links").style.top == "13%");
  console.log(
    window
      .getComputedStyle(document.querySelector(".header-links"))
      .getPropertyValue("top")
  );
  */
  if (document.querySelector(".header-links").style.top == "13%") {
    document.querySelector(".header-links").style.top = "-100%";
  } else {
    document.querySelector(".header-links").style.top = "13%";
  }
}
document.querySelector(".header-links").addEventListener("click", function (e) {
  if (window.matchMedia("(max-width: 835px)").matches) {
    // console.log("only mobile-nav hided");
    e.target.parentElement.parentElement.style.top = "-100%";
  }
});

// Reference
// manipulating avatar related content
const avatarDataList = document.querySelectorAll("#reference div");
avatarDataList.forEach((avatarData) => {
  avatarData.style.display = "none";
});
avatarDataList[1].style.display = "inline"; // only person2 data visible initially

const avatarsList = document.querySelectorAll("#avatars li");
avatars.addEventListener("click", function (event) {
  if (
    event.target.parentElement.parentElement.getAttribute("id") === "avatars"
  ) {
    // only if clicked image
    // manipulating avatars
    avatarsList.forEach((avatarLi) => {
      avatarLi.classList.remove("selected-avatar"); //remove selected-avatar img class from each li
    });
    event.target.parentElement.classList.add("selected-avatar"); // adding selected-avatar img class to selected li
    // console.log("img selected"); // target is img element

    // manipulating avatar related content
    avatarDataList.forEach((avatarData) => {
      avatarData.style.display = "none";
    });
    const visiblePersonNo = event.target.parentElement
      .getAttribute("id")
      .substr(-1);
    avatarDataList[visiblePersonNo - 1].style.display = "inline"; // content shown acc to img selected
  }
});

const avatarNavLis = document.querySelectorAll("#avatar-mob-nav li");
const avatarMobNav = document.getElementById("avatar-mob-nav");
avatarMobNav.addEventListener("click", function (event) {
  if (event.target.parentElement.getAttribute("id") === "avatar-mob-nav") {
    //when li is clicked,not space b/n
    avatarNavLis.forEach((navLi) => {
      navLi.classList.remove("selected-avatar-nav");
    });
    event.target.classList.add("selected-avatar-nav"); // class added to selected avatarNavLi(dot)

    avatarDataList.forEach((avatarData) => {
      avatarData.style.display = "none";
    });
    const clickedDot = event.target.getAttribute("id").substr(-1);
    avatarDataList[clickedDot - 1].style.display = "inline"; // content shown acc to dot selected

    avatarsList.forEach((avatarLi) => {
      avatarLi.classList.remove("selected-avatar");
    });
    avatarsList[clickedDot - 1].classList.add("selected-avatar"); // show avatar corresponding to selected dot
  }
});

// form
const form = document.getElementById("contact-form");
const email = document.getElementById("email-field");
form.addEventListener("submit", function (event) {
  if (
    email.value === "" ||
    email.value === null ||
    !email.value.includes("@")
  ) {
    event.preventDefault();
    alert(
      "It seems like your email address is not correct. Please fix it, so we can contact you, thanks!"
    );
  }
});
