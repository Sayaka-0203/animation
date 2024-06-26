document.addEventListener("DOMContentLoaded",
function () {
  const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {entry.target.classList.add("displayed");}
      else { entry.target.classList.remove("displayed");
      }});
},
    {threshold:0.5,});
      document.querySelectorAll(".box").forEach((box)=>{
        observer.observe(box);
});});
