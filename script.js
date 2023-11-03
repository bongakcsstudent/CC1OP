let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let birds = document.getElementById('birds');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    birds.style.marginTop = value * -2.5 + 'px';
    birds.style.marginLeft = value * 2.5 + 'px';

    const button = document.getElementById("facebookButton");
    const section = document.getElementById("Skills");
    
    window.addEventListener("scroll", () => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      if (sectionTop < window.innerHeight && sectionBottom > 0) {
        button.style.opacity = "0";
      } else {
        button.style.opacity = "1";
      }
    });

    const nextButton = document.getElementById("NextSection");
    
    window.addEventListener("scroll", () => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      if (sectionTop < window.innerHeight && sectionBottom > 0) {
        nextButton.style.opacity = "0";
      } else {
        nextButton.style.opacity = "1";
      }
    });
});
