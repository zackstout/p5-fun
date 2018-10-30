
// Interseting that it didn't work with function expressions 

let pts = [
    { x: 100, y: 200 },
    { x: 100, y: 300 },
    { x: 300, y: 300 }
]
let slider;
let center;

function setup() {
    console.log('ah0y')
    createCanvas(600, 600)
    background(50, 100, 50)
    slider = createSlider(0, 1000, 300);
    slider.position(20, 620);
}

function draw() {
    background(50, 100, 50)
    center = slider.value();

    stroke('steelblue');
    line(pts[0].x, pts[0].y, pts[1].x, pts[1].y);
    line(pts[1].x, pts[1].y, pts[2].x, pts[2].y);

    pts.forEach(p => {
        noStroke();
        fill('tomato');
        ellipse(p.x, p.y, 8);
    })

    noFill()
    stroke('purple');
    ellipse(300, center, 2 * dist(pts[0].x, pts[0].y, 300, center))

    stroke('gold');
    line(300, 0, 300, 600);
}