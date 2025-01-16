
const distance = 120; 
const speed = 60; 


const timeInHours = distance / speed;


const hours = Math.floor(timeInHours); 
const minutes = Math.floor((timeInHours - hours) * 60);
const seconds = Math.round(((timeInHours - hours) * 60 - minutes) * 60); // Extract remaining seconds

console.log("distance"+distance );
console.log("speed ="+speed+"km/hr" );
console.log( "hours =" + hours , "minutes="+ minutes ,"seconds ="+ seconds);
