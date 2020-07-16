$(function () {
    const pagesCount = $('article.page').length;
    const answersCount = $('#answers-start ~ article.page').length;
    $('html').css('--pages-count', `'${pagesCount - answersCount}'`);
});
