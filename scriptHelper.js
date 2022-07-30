// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const div = document.getElementById("missionTarget");
    div.innerHTML =  `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `
}

function validateInput(testInput) {
   if(testInput === "") {
    return "Empty";
   }
    if(isNaN(testInput) === true) {
    return "Not a Number";
   } else if(isNaN(testInput) === false) {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

        if(pilot === "" || copilot === "" || fuelLevel=== "" || cargoMass === "") {
            alert("All fields are required!");
        }

        if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
            alert("Enter valid inputs in each field.");
        }

        if(validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
            alert("Enter valid inputs in each field.");
        }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        return response.json();
        });
    

    return planetsReturned;
}

function pickPlanet(planets) {  
    return planets[Math.floor(Math.random()*planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
