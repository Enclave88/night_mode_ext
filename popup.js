;(function (window, document, undefined) {
    'use strict';
    if (!('localStorage' in window)) return;
    let nightMode = localStorage.getItem('gmtNightMode');
    if (nightMode) {
        document.documentElement.className += ' night-mode';
    }
})(window, document);


(function (window, document, undefined) {

    'use strict';

    // Feature test
    if (!('localStorage' in window)) return;

    // Get the navigation menu
    let nav = document.querySelector('#menu-primary');
    if (!nav) return;

    // Insert the night mode toggle
    nav.innerHTML += '<li id="night-mode"><a role="button" href="#">Toggle Night Mode2</a></li>';

    // Get our newly insert toggle
    let nightMode = document.querySelector('#night-mode');
    if (!nightMode) return;

    // When clicked, toggle night mode on or off
    nightMode.addEventListener('click', function (event) {
        event.preventDefault();
        document.documentElement.classList.toggle('night-mode');
        if ( document.documentElement.classList.contains('night-mode') ) {
            localStorage.setItem('gmtNightMode', true);
            return;
        }
        localStorage.removeItem('gmtNightMode');
    }, false);

})(window, document);