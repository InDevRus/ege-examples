'use strict';

function countPages() {
    const pagesCount = $('article.page').length;
    const answersCount = $('#answers-start ~ article.page').length;
    $('html').css('--pages-count', `'${pagesCount - answersCount}'`);
}

function fixSpacings() {
    // Fix comma spacing
    $("span.MJXp-math span:contains(',')").css({'margin-right': '.05em'});

    // Fix f(x) spacing
    $("span.MJXp-math span:contains('f')").css({"white-space": "pre"}).text("f ");
}

$(() => {
    countPages();
    setTimeout(fixSpacings, 1000);
});