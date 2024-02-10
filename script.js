const wrapper = document.querySelector(".wrapper")
const monkies = document.querySelector(".monkies")

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.intersectionRatio > 0){
            injectMonkies(entry)
        }
    })
},
{ rootMargin: "0px 0px 200% 0px"}
)

function injectMonkies(entry) {
    //console.log("The entry is on screen!")
    observer.unobserve(entry.target);

    const clonedMonkies = monkies.cloneNode(true);
    wrapper.appendChild(clonedMonkies);
    observer.observe(clonedMonkies)
}

observer.observe(monkies);
