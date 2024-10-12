const faqs = document.querySelectorAll(".qna")
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})

function showSidebar() {
 const sidebar = document.querySelector(".sidebar");
 sidebar.style.display = "flex"
 const hideIconMenu = document.querySelector(".hideIconMenu")
 hideIconMenu.style.display = "none";

}
function hideSidebar() {
 const sidebar = document.querySelector(".sidebar");
 sidebar.style.display = "none"
 const hideIconMenu = document.querySelector(".hideIconMenu")
 hideIconMenu.style.display = "block";
}
