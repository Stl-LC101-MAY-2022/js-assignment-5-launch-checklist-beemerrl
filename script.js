// So far, formSubmission() validates user input, but does not update shuttle requirements - should it be used to update SRs?

// why aren't results being stored anywhere and why won't visibility stay updated

//the error was in the DOCTYPE - read the comments and error statements *facepalm*


window.addEventListener("load", function() {

    let form = this.document.querySelector("form");

    form.addEventListener("submit", function(event){
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");

        let list = document.getElementById("faultyItems");
        let ready = true;
        
       //formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);

       pilotStatus.innerHTML = `Pilot ${pilotName} is ready to launch.`;
       copilotStatus.innerHTML = `Pilot ${copilotName} is ready to launch.`;

       if (fuelLevel < 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = `Not enough fuel for the journey.`;
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        ready = false;
       }

       if(cargoMass > 10000) {
        list.style.visibility = "visible";
        cargoStatus.innerHTML = `Shuttle has too much mass for liftoff.`;
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        ready = false;
       }

       if(ready){
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch!";
        document.getElementById("launchStatus").style.color = "green";
       }

       event.preventDefault();
    
    });

   

   

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })


   
});