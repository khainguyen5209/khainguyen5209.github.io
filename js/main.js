// Initialize and add the map
function initMap() {
    //Your location
    const loc = { lat: 10.798150, lng: 106.637530 };

    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });

    //Add marker to be positioned at the location
    const marker = new google.maps.Marker({
        position: loc,
        map: map,
    });
}

// sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// smooth scrolling
$('#navbar a, .btn').on('click', function(even) {
    if (this.hash != '') {
        even.preventDefault();
        const hash = this.hash;
        $('html, body').stop().animate({
                'scrollTop': $(hash).offset().top - 91
            },
            700
        );
    }
});