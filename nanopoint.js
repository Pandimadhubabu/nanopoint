window.addEventListener('load', function() {

    // get slide number
    var slides = document.querySelectorAll('.slide');
    if (!slides.length) return;
    var index = function() {
        for (var i=0;i<slides.length;i++)
            if (slides[i].id == (location.hash.substr(1))) return i;
        return false;
    };

    // update count
    var countTarget = document.getElementById('slide-number');
    if (countTarget) var defaultClass = countTarget.className;
    var update = function() {
        if (index() === false) location.hash = slides[0].id;
        if (!countTarget) return;
        countTarget.innerHTML = (index()+1)+'/'+slides.length;
        countTarget.className = defaultClass+' '+location.hash.substr(1);
    }
    window.addEventListener('hashchange', update);
    update();

    // set prev/next functions
    var prev = function(e) { e.preventDefault(); var n = index(); location.hash = n>0?slides[n-1].id:slides[slides.length-1].id; }
    var next = function(e) { e.preventDefault(); var n = index(); location.hash = n<slides.length-1?slides[n+1].id:slides[0].id; }

    // click controls
    document.getElementById('slide-prev').addEventListener('click', prev);
    document.getElementById('slide-next').addEventListener('click', next);

    // scroll current element
    var scroll = function(m) { document.querySelector('#'+slides[index()].id).scrollTop += (m || 1)*100; }

    // keyboard controls
    document.addEventListener('keydown', function(e) {
        if (e.which === 37) prev(e); // Left arrow for previous
        else if ([32,39].indexOf(e.which) > -1) next(e); // Spacebar & right arrow for next
        else if (e.which === 38) scroll(-1); // Top arrow for scrolling up
        else if (e.which === 40) scroll(); // Bottom arrow for scrolling down
    });
});
