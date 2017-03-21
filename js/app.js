//var page = require('page');
//var slider = require('slider');
//var Milkyway = require('milkyway');
//var transitions = require('transitions');

function init(View) {
    View = View || document;

    // Sky
    if (!page.sky && $(View).find("#intro-sky").length && !page.browser.touch) {
        page.sky = new Milkyway({
            id: "intro-sky",
            popularity: 0.8, // Per Screen Width
            freezedRollupSpeed: 0.015,
            speedMin: 0.05,
            maxTrailLength: 0.20,
            soundId: "intro-audio"
        });

        page.sky.populateSky();
        page.sky.drawStars();
        page.sky.registerHandler(".cb-intro");

        /*$(View).find("#intro-audio-btn").on('click', function () {
            var btn = $(this);
            if (btn.hasClass('-off')) {
                btn.removeClass('-off');
                page.sky.playAudio(true);
            } else {
                btn.addClass('-off');
                page.sky.pauseAudio(true);
            }
        });*/
    }
}