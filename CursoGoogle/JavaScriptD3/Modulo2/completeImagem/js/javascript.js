var svg = d3.select('body').append('svg').attr('width', 500).attr('height', 500);

var sky = svg.append('rect').attr('width', 450).attr('height', 500); 
var skyLight = svg.append('circle').attr('r', 50).attr('fill', 'yellow').attr('cx', 10).attr('cy', 10);

let cloud = 'M441.953,142.352c-4.447-68.872-61.709-123.36-131.705-123.36c-59.481,0-109.766,39.346-126.264,93.429  c-9.244-3.5-19.259-5.431-29.729-5.431c-42.84,0-78.164,32.08-83.322,73.523c-0.309-0.004-0.614-0.023-0.924-0.023  c-36.863,0-66.747,29.883-66.747,66.747s29.883,66.746,66.747,66.746c4.386,0,8.669-0.436,12.819-1.243  c20.151,27.069,52.394,44.604,88.734,44.604c31.229,0,59.429-12.952,79.533-33.772c15.071,15.091,35.901,24.428,58.913,24.428  c31.43,0,58.783-17.42,72.955-43.127c11.676,5.824,24.844,9.106,38.777,9.106c48.047,0,86.998-38.949,86.998-86.996  C508.738,185.895,480.252,151.465,441.953,142.352z';

var cloud1 = svg.append('path').attr('d', cloud);
cloud1.attr('fill', 'lightgrey').attr('transform','scale(0.29) translate(450 290)');

var cloud2 = svg.append('path').attr('d', cloud);
cloud2.attr('fill', 'lightgrey').attr('transform','scale(0.19) translate(230 80)');

var cloud3 = svg.append('path').attr('d', cloud);
cloud3.attr('fill', 'lightgrey').attr('transform','scale(0.20) translate(1505 180)');

var cloud4 = svg.append('path').attr('d', cloud);
cloud4.attr('fill', 'lightgrey').attr('transform','scale(0.2) translate(1500 820)');


var solo = svg.append('rect').attr('width', 450).attr('height', 230).attr('fill', 'green').attr('y', 270);

function pickRandom(arr){
    let res = arr[Math.floor(Math.random() * arr.length)];
    return res;
}

let horaDia = pickRandom(['manhã', 'tarde', 'noite' ]);

function changepicture(time){
    if (time === 'manhã'){
        sky.attr('fill', 'steelblue');
    }
    if (time === 'tarde'){
        sky.attr('fill', 'deepskyblue');
        skyLight.attr('cx', 230).attr('cy', 100);
    }
    if (time === 'noite'){
        sky.attr('fill', 'rgb(1, 1, 73)');
        skyLight.attr('fill', 'white');
        solo.attr('fill', 'darkgreen');
    }
}

changepicture(horaDia);
console.log(horaDia);