
// Interseting that it didn't work with function expressions 

let pts = [
    { x: 100, y: 100 },
    { x: 100, y: 300 },
    { x: 300, y: 100 }
]
let slider;

function setup() {
    console.log('ah0y')
    createCanvas(600, 600)
    background(50, 100, 50)
    slider = createSlider(0, 600, 300);
    slider.position(20, 620);
}

function draw() {
    background(50, 100, 50)
    pts[2].y = slider.value();

    stroke('steelblue');
    line(pts[0].x, pts[0].y, pts[1].x, pts[1].y);
    line(pts[1].x, pts[1].y, pts[2].x, pts[2].y);

    pts.forEach(p => {
        noStroke();
        fill('tomato');
        ellipse(p.x, p.y, 8);
    })

}