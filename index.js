// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(){
    const newarr= [...drivers];
     return newarr.slice(0, 2)
}
const returnLastTwoDrivers = function(){
    const newarr= [...drivers];
    return newarr.slice(2, 4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(int){
    return function(fare){
        return fare * int;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr, f){
    return f(arr);
}