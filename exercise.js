function lotBilling (totalDuration, vehicleType){
    const car ={
        firstHour: 5000,
        nextHour: 3000,
        extraCharge: 50000
    };
    const bike ={
        firstHour: 2000,
        nextHour: 1000,
        extraCharge: 20000      
    };

    function getType(vehicleType) {
        if (vehicleType === "car") {
            return car;
        } else if (vehicleType === "bike") {
            return bike;
        }
        return "invalid vehicleType";
    }

    const fee = getType(vehicleType);

    let total = fee.firstHour;
    if (totalDuration > 1) {
        total += (totalDuration - 1) * fee.nextHour;
    }
    if (totalDuration > 24) {
        total += fee.extraCharge;
    }

    return total;
}

console.log(lotBilling(3, "car"));     
console.log(lotBilling(0.5, "bike"));  
console.log(lotBilling(27, "car"));   
