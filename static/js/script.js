$(function () {
    // $('#btn').click(function () {
    $.ajax({
        url: 'http://localhost:7856/get_meteo',
        type: 'GET',
        success: function (d) {
            // console.log(d);
            var cityName = "";
            var cityTemp = "";
            var cityGeoloc = "";
            var html = "";
            $.each(d, function (index, d) {
                cityGeoloc = {
                    lat: d.coord.lat,
                    lng: d.coord.lon
                };
                cityName = d.name;
                cityTemp = d.main.temp;
                html = `
                    <div class="col-sm-6 my-3">
                    <div class="card">
                        <div class="card-header">${cityName}</div>
                        <div class="card-body">
                        <h2 class="card-text">${cityTemp}°C </h2>
                        </div>
                        <a href="#" class="btn-secondary" data-toggle='modal' data-target='#exampleModalCenter' id="btn_${index}" data-lat="${d.coord.lat}" data-lng="${d.coord.lon}" data-name="${d.name}" >Voir carte</a>
                    </div>
                    </div>`;
                $('#meteo').append(html);
                $("#btn_" + index).click(function (e) { 
                    cityGeoloc = { 
                        lat: Number(e.currentTarget.dataset.lat),
                        lng: Number(e.currentTarget.dataset.lng)
                    };
                    cityName = e.currentTarget.dataset.name;
                    console.log("cityGeoloc = ", cityGeoloc, "cityName = ", e.currentTarget.dataset.name);
                    geoloc(cityGeoloc, cityName);
                });
            });

        },
        error: function (e) {
            console.error("erreur :", e);
        }
    });
    // });
});