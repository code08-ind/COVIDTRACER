function updateMap() {
    fetch("https://corona.lmao.ninja/v2/countries")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            data.forEach(element => {
                latitude = element.countryInfo.lat;
                longitude = element.countryInfo.long;
                cases = element.active;
                if (cases < 25000 && cases > 0) {
                    color = "#F6A606";
                }
                else if (cases < 50000 && cases > 25000) {
                    color = "#F6A606";
                }
                else if (cases < 75000 && cases > 50000) {
                    color = "#FC5106";
                }
                else {
                    color = "#E70303";
                }
                //map
                new mapboxgl.Marker({
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        });
}

let interval = 20000;
setInterval(updateMap, interval);