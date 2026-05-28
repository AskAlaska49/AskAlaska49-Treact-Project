function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

const plans = document.querySelectorAll(".plan");

function revealPlans() {
  plans.forEach((plan) => {
    const revealTop = plan.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (revealTop < windowHeight - 100) {
      plan.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealPlans);
revealPlans();