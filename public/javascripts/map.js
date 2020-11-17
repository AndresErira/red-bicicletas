var mymap = L.map('main_map').setView([3.4282738, -76.4700004,17], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(mymap);

//L.marker([3.4282738, -76.4700004,17]).addTo(mymap);
//L.marker([3.4329001,-76.4678761]).addTo(mymap);
//L.marker([3.4282738, -76.4678761,17]).addTo(mymap);

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title: bici.id}).addTo(mymap);
        });
    }
});