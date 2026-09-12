function searchMachines() {

    let input =
        document.getElementById("searchInput");

    let filter =
        input.value.toUpperCase();

    let machines =
        document.getElementsByClassName("machine");

    for (let i = 0; i < machines.length; i++) {

        let title =
            machines[i].getElementsByTagName("h3")[0];

        if (title.innerHTML.toUpperCase()
            .indexOf(filter) > -1) {

            machines[i].style.display = "";

        } else {

            machines[i].style.display = "none";
        }
    }
}
function searchParts() {

    let input =
        document.getElementById("partsSearch");

    let filter =
        input.value.toUpperCase();

    let parts =
        document.getElementsByClassName("part");

    for (let i = 0; i < parts.length; i++) {

        let title =
            parts[i].getElementsByTagName("h3")[0];

        if (title.innerHTML.toUpperCase()
            .indexOf(filter) > -1) {

            parts[i].style.display = "";

        } else {

            parts[i].style.display = "none";
        }
    }
}
function calculateFuel() {

    let fuelRate =
        parseFloat(document.getElementById("fuelRate").value);

    let hours =
        parseFloat(document.getElementById("workingHours").value);

    if (isNaN(fuelRate) || isNaN(hours)) {

        document.getElementById("fuelResult").innerHTML =
            "Please enter valid values.";

        return;
    }

    let totalFuel = fuelRate * hours;

    document.getElementById("fuelResult").innerHTML =
        "Total Fuel Required: " +
        totalFuel.toFixed(2) +
        " Liters";
}