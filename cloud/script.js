
function openDashboard(){

  // small loading animation effect
  document.body.style.opacity = "0.7";

  setTimeout(function(){

      window.location.href = "dash.html";

  },500); // delay for smooth transition

}


// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden")
.forEach(el => observer.observe(el));