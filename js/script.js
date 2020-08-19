	var type = '';
	var distance = 0;
	var fuelEfficiency = '';
	var stay = '';
	var Cost = 0;
	function taxiTypeChanged() {
		type = document.getElementById("taxiType").value;
		document.getElementById("currentTaxi").innerHTML = "Current Taxi : " + type;
		cost();
	}
	function fuelEfficiencyChanged() {
		fuelEfficiency = document.getElementById("Fuel").value;
		document.getElementById("fuelEfficiency").innerHTML = "Fuel Efficiency : " + fuelEfficiency;
		cost();
	}
	function stayChanged() {
		stay = document.getElementById("Stay").value;
		document.getElementById("StayCurrent").innerHTML = "Stay : " + stay;
		cost();
	}
	function currentDistanceChanged(val) {
		distance = val;
		document.getElementById("currentDistance").innerHTML = "Distance : " + distance;
		cost();
	}
	
	function cost() {
		
		var costType = 0;
		var costStay = 0;
		var costFlue = 0;
		
		if(type == "Tuk Tuk") {
			costType = 50;
		}
		if(type == "Mini Car") {
			costType = 75;
		}
		if(type == "Luxury Car") {
			costType = 100;
		}
		if(type == "Luxury Van") {
			costType = 150;
		}
		if(type == "Luxury Bus") {
			costType = 200;
		}
		
		
		if(fuelEfficiency == "High") {
			costFlue = 2000;
		}
		if(fuelEfficiency == "Medium") {
			costFlue = 1000;
		}
		if(fuelEfficiency == "Low") {
			costFlue = 500;
		}
		
		if(stay == "One Way") {
			costStay = costType * distance;
		}
		if(stay == "Two Way") {
			costStay = 2 * (costType * distance);
		}
		if(stay == "Over Night") {
			costStay = 2 * (costType * distance) + 5000;
		}
		
		Cost = costFlue + costStay;
		document.getElementById("currentCost").innerHTML = "cost of current Taxi  : " + Cost;
	}
	
	function addOrder() {
		var currentTaxis = document.getElementById("lbl1").innerHTML;
		var allTaxis = currentTaxis  +  type + " , ";
		document.getElementById("lbl1").innerHTML = allTaxis;
		
		
		//document.getElementById("lbl2").innerHTML = "0";
		var currentTot = document.getElementById("lbl2").innerHTML;
		var tot = parseInt(Cost , 10) +  parseInt(currentTot , 10);
		document.getElementById("lbl2").innerHTML = tot;
		
		
		var currentTotDistance = document.getElementById("lbl3").innerHTML;
		var totDistance = parseInt(distance , 10) +  parseInt(currentTotDistance , 10);
		document.getElementById("lbl3").innerHTML = totDistance;
	}
	
	function reserve() { 
		document.getElementById("lbl1").innerHTML = "";
		document.getElementById("lbl2").innerHTML = "0";
		document.getElementById("lbl3").innerHTML = "0";
		
		document.getElementById("currentCost").innerHTML = "cost of current Taxi  : " ;
		document.getElementById("currentDistance").innerHTML = "Distance : ";
		document.getElementById("StayCurrent").innerHTML = "Stay : ";
		document.getElementById("fuelEfficiency").innerHTML = "Fuel Efficiency : ";
		document.getElementById("currentTaxi").innerHTML = "Current Taxi : " ;
		
		alert("Reservation Successfull. Thank you.");
	}
	
	function addFavourite() { 
		var location = document.getElementById("location").value;
		localStorage.setItem("taxiType",type);
		localStorage.setItem("distance",distance);
		localStorage.setItem("fuelEfficiency",fuelEfficiency);
		localStorage.setItem("stay",stay);
		localStorage.setItem("location",location);
		localStorage.setItem("Cost",Cost);
		alert(localStorage.getItem("stay"));
	}
	function getFromFavourite() { 
		document.getElementById("currentCost").innerHTML = "cost of current Taxi  : " +  localStorage.getItem("Cost");
		document.getElementById("currentDistance").innerHTML = "Distance : " + localStorage.getItem("distance");
		document.getElementById("StayCurrent").innerHTML = "Stay : " + localStorage.getItem("stay");
		document.getElementById("fuelEfficiency").innerHTML = "Fuel Efficiency : " + localStorage.getItem("fuelEfficiency");
		document.getElementById("currentTaxi").innerHTML = "Current Taxi : "  + localStorage.getItem("taxiType");
		
		
		document.getElementById("taxiType").value = localStorage.getItem("taxiType");
		document.getElementById("Fuel").value = localStorage.getItem("fuelEfficiency");
		document.getElementById("Stay").value = localStorage.getItem("stay");
		document.getElementById("Distance").value = localStorage.getItem("distance");
		document.getElementById("location").value = localStorage.getItem("location");

	}
