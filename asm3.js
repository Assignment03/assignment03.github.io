"use strict";

const email = document.getElementById("email");
const submitButton = document.querySelector(".submit");
const sectionContent = document.querySelector(".section-content");
const submitEmail = document.querySelector(".submit-email");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const showInfor = function () {
  sectionContent.classList.remove("hidden");
  submitEmail.classList.add("hidden");
};
const closeInfor = function () {
  sectionContent.classList.add("hidden");
  submitEmail.classList.remove("hidden");
};
submitButton.addEventListener("click", function (e) {
  if (!regex.test(email.value.toLocaleLowerCase())) {
    alert("Email không hợp lệ!");
  } else {
    showInfor();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !sectionContent.classList.contains("hidden")) {
    closeInfor();
  }
});
/*ẩn thông tin nghề nghiệp */
const viewMores = document.querySelectorAll(".view-more");

for (let i = 0; i < viewMores.length; i++)
  viewMores[i].addEventListener("click", function () {
    /* trỏ đến phần tử có class content mà ng dùng vừa click vào nút view More của ô đó*/
    let contentElem = this.closest(".skill-titles").querySelector(".content");

    if (contentElem.classList.contains("hidden")) {
      contentElem.classList.remove("hidden");
      this.textContent = "▾ View Less";
    } else {
      contentElem.classList.add("hidden");
      this.textContent = "▾ View More";
    }
  });
