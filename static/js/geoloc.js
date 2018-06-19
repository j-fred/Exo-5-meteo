/**
 *  Affichage de la map google avec selon les coordonées
 * @param {Object} coordonnees 
 * @param {String} nameStadium 
 * @param {String} imgStadium 
 */
var marker;
function geoloc(coordonnees, name) {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coordonnees
    });

    // var contentString = '<div class="text-center">' + '<h1 > ' + name + ' </h1>' + '</div>';

    // var infowindow = new google.maps.InfoWindow({
    //     content: contentString
    // });

    var marker = new google.maps.Marker({
        position: coordonnees,
        map: map,
        animation: google.maps.Animation.DROP,
        title: name
    });
    marker.addListener('click', function () {
        toggleBounce();
        //infowindow.open(map, marker);
    });

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
}