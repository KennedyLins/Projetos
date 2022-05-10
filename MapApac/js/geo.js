
var map = L.map('map').setView([-8.27519, -38.0376], 7.4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



L.marker([-7.84594, -35.2549], 13).addTo(map)
L.marker([ -8.06755, -39.1242], 13).addTo(map)
//L.marker([-8.27519, -38.0376], 13).addTo(map)
L.marker([-8.05428, -34.8813], 13).addTo(map)
//L.marker([-8.23255, -35.4619], 13).addTo(map)


L.circle([-8.23255, -35.4619], {radius: 100000}).addTo(map)



    