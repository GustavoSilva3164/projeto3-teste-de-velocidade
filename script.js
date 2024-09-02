let nameVehicle1 = "Captuh"; 
let speedVehicle1 = 120;      
let nameVehicle2 = "Oroch"; 
let speedVehicle2 = 100;      

if (speedVehicle1 > speedVehicle2) {
    console.log(`${nameVehicle1} está a ${speedVehicle1}km/h, e está mais rápido que o ${nameVehicle2}, que está a ${speedVehicle2}km/h!`);
} else if (speedVehicle1 < speedVehicle2) {
    console.log(`${nameVehicle2} está a ${speedVehicle2}km/h, e está mais rápido que o ${nameVehicle1}, que está a ${speedVehicle1}km/h!`);
} else {
    console.log(`Tanto ${nameVehicle1} quanto ${nameVehicle2} estão na mesma velocidade de ${speedVehicle1}km/h!`);
}
