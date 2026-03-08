// CREATE MAP

var map = L.map('map').setView([11.1271, 78.6569], 7);

// TILE LAYER

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
maxZoom:18
}).addTo(map);


// DISTRICT DATA

var districts = [

{
name:"Nilgiris",
lat:11.4916,
lon:76.7337,
status:"danger"
},
{
  name: "Coonoor"
  ,lat:11.3526,
  lon:76.8194,
  status:"warning"
},

{
name:"Kodaikanal",
lat:10.2381,
lon:77.4892,
status:"warning"
},

{
name:"Sirumalai",
lat:10.1710,
lon:78.1870,
status:"safe"
},

{
name:"Ooty",
lat:11.4064,
lon:76.6932,
status:"danger"
},
{
name:"Kotagiri",
lat:11.4064,
lon:76.6932,
status:"danger"
}

];


// FUNCTION FOR COLOR

function getColor(status){

if(status=="danger")
return "red";

if(status=="warning")
return "yellow";

return "green";

}


// ADD MARKERS

districts.forEach(function(d){

var color = getColor(d.status);

var marker = L.circleMarker([d.lat,d.lon],{

radius:10,
color:color,
fillColor:color,
fillOpacity:0.8,
className:"blink"

}).addTo(map);

marker.bindPopup(
"<b>"+d.name+"</b><br>Status: "+d.status
);

});
function openAbout(){
  document.getElementById("aboutBox").classList.add("active");
}

function closeAbout(){
  document.getElementById("aboutBox").classList.remove("active");
}
function openContact(){
  document.getElementById("contactBox").classList.add("show");
}

function closeContact(){
  document.getElementById("contactBox").classList.remove("show");
}