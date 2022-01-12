const questionsContainer = document.getElementsByClassName("question-answer__container");

let IS_ACTIVE = false;

for (const question of questionsContainer) {
    question.firstElementChild.addEventListener("click", () => {
        if (!question.lastElementChild.classList.contains("display-block") && !IS_ACTIVE) {
            question.lastElementChild.classList.add("display-block");
            question.firstElementChild.firstElementChild.classList.add("active-state");
            question.firstElementChild.lastElementChild.classList.add("rotate");
            IS_ACTIVE = true;
        } else if (question.lastElementChild.classList.contains("display-block") && IS_ACTIVE) {
            IS_ACTIVE = false;
            question.lastElementChild.classList.remove("display-block");
            question.firstElementChild.firstElementChild.classList.remove("active-state");
            question.firstElementChild.lastElementChild.classList.remove("rotate");
        }
        // console.log(IS_ACTIVE);
    })
}
