var graph = document.getElementById("performance-image")
var stats = document.getElementById('stats')

gsap.fromTo('#left-info', {opacity:0, x:300}, {opacity:1, x:0, duration:0.70})

console.log('Height: ' + graph.getBoundingClientRect().height)

function graphAnim() {

    window.removeEventListener("scroll", graphEvent); //Remove the scroll event for the graphEvent function.

    console.log('woo')

    // Start with a decrease size of the element and have it scale up within 2 seconds
    // Copy and paste the elastic ease from Green Sock Visualizer
    gsap.fromTo('#performance-image', {opacity: 0, scale:0.80}, {opacity: 1, scale:1, ease: "elastic.out(1, 0.3)", duration: 2}) 
}

function statsAnim() {

    window.removeEventListener('scroll', statsEvent) //Remove the scroll event for the statsEvent function

    const tl = gsap.timeline({defaults: {duration: 0.50, ease: "power4.out"}})
    
    // Make all the elements start at opacity zero and 50 pixels below their original point. Have them return to their original values in 0.50 seconds.
    tl.fromTo('#trades', {opacity:0, y:50},{opacity:1, y:0})
    tl.fromTo('#winRate', {opacity:0, y:50},{opacity:1, y:0},'<80%')
    tl.fromTo('#Profit', {opacity:0, y:50},{opacity:1, y:0},'<80%')
}


function graphEvent(){
    
    // If the user scrolls at or past the middlepoint of the performance graph element
    if (graph.getBoundingClientRect().bottom - graph.getBoundingClientRect().height / 2 <= window.innerHeight) {
        graphAnim()
    }
}

function statsEvent() {
    console.log(stats.getBoundingClientRect().bottom);
    if (stats.getBoundingClientRect().bottom - stats.getBoundingClientRect().height / 2 <= window.innerHeight) {
        statsAnim()
    }
}

// Add event listeners to the functions so that they activate every time you scroll
window.addEventListener("scroll", graphEvent);
window.addEventListener('scroll', statsEvent);
