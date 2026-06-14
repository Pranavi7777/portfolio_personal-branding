// Smooth Scroll

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

document.querySelector(
this.getAttribute('href')
).scrollIntoView({
behavior:'smooth'
});

});

});
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

});

document.querySelectorAll('.fade-in')
.forEach(el => observer.observe(el));
const text =
"AI Engineer • Data Science Student";

let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing")
        .innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,60);

    }

}

typing();