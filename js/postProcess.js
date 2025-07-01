function countPages() {
    const pagesCount = $('article.page').length;
    const answersCount = $('#answers-start ~ article.page').length;
    $('html').css('--pages-count', `'${pagesCount - answersCount}'`);
}

function fixSpacings() {
    // Fix comma spacing
    // $("section.task span.mo:contains(',')").css({'margin-left': '.05em', 'margin-right': '.05em'});
    // $("section.task span.mo:contains(',') + *").css({'padding-left': '0'});
    $("span.MJXp-math span:contains(',')").css({'margin-right': '.05em'});

    // Fix f(x) spacing
    $("span.MJXp-math span:contains('f')").css({"white-space": "pre"}).text("f ");
}

$(function () {
    countPages();
    setTimeout(fixSpacings, 1000);
});