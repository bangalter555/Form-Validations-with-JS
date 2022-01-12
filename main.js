const d = document;

const formValidator = () => {
  const $form = d.querySelector(".form-contact");
  const $inputs = $form.querySelectorAll(".input");

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".form-contact [required]")) {
      let $input = e.target;
      let $pattern = $input.pattern || $input.dataset.pattern;

      if ($pattern && $input.value !== "") {
        let regex = new RegExp($pattern);
        return !regex.exec($input.value)
          ? d
              .getElementById($input.nextElementSibling.id)
              .classList.remove("none")
          : d
              .getElementById($input.nextElementSibling.id)
              .classList.add("none");
      }
    }
  });
};

const formChecked = () => {
  d.addEventListener("submit", (e) => {
    // e.preventDefault();

    setTimeout(() => {
      alert("Your information has been sent");
      location.reload();
    }, Math.random());
  });
};

d.addEventListener("DOMContentLoaded", (e) => {
  formValidator();
  formChecked();
});
