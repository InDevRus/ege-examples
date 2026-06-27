// noinspection HtmlUnknownTarget

'use strict';

function generateManualPage() {
    $('article.page.manual.generate-manual')
        .append('<h3>Единый государственный экзамен по МАТЕМАТИКЕ</h3>')
        .append('<h4>Профильный уровень</h4>')
        .append('<h4>Инструкция по выполнению работы</h4>')
        .append('<div>Экзаменационная работа состоит из двух частей, включающих в себя 19 заданий. Часть 1 содержит ' +
            '12 заданий с кратким ответом базового и повышенного уровней сложности. Часть 2 содержит 7 заданий с ' +
            'развёрнутым ответом повышенного и высокого уровней сложности.</div>')
        .append('<div>На выполнение экзаменационной работы по математике отводится 3 часа 55 минут (235 минут).</div>')
        .append('<div>Ответы к заданиям 1–12 записываются по приведённому ниже <u>образцу</u> в виде целого числа или' +
            ' конечной десятичной дроби. Числа запишите в поля ответов в тексте работы, а затем перенесите их в бланк' +
            ' ответов № 1.</div>')
        .append($('<div class="form-example">')
            .append('<div class="manual-marker kim-marker">КИМ</div>')
            .append('<div class="manual-marker form-marker">Бланк</div>')
            .append('<div>Ответ: <span class="emphasized-answer">-0,8</span></div>')
            .append('<img alt="form-example" src="../../../images/math-form-example.jpg">'))
        .append('<div>При выполнении заданий 13–19 требуется записать полное решение и ответ в бланке ' +
            'ответов № 2.</div>')
        .append('<div>Все бланки ЕГЭ заполняются яркими чёрными чернилами. Допускается использование гелевой или ' +
            'капиллярной ручки.</div>')
        .append('<div>При выполнении заданий можно пользоваться черновиком. <b>Записи в черновике не учитываются при ' +
            'оценивании работы.</b></div>')
        .append('<div>Баллы, полученные Вами за выполненные задания, суммируются. Постарайтесь выполнить как можно' +
            ' больше заданий и набрать наибольшее количество баллов.</div>')
        .append('<div>После завершения работы проверьте, чтобы ответ на каждое задание в бланках ответов № 1 и № 2 ' +
            'был записан под правильным номером.</div>')
        .append('<div class="good-luck-message">Желаем успеха!</div>')
        .append($('<section class="supporting-materials">').append('<h4>Справочные материалы</h4>')
            .append(String.raw`<div>$ \sin \br{2 \text{α}} = 2 \sin \text{α} \cdot \cos \text{α} $</div>`)
            .append(String.raw`<div>$ \cos \br{2 \text{α}} = \cos ^{2} \text{α} - \sin ^{2} \text{α} $</div>`)
            .append(String.raw`<div>$ \sin \br{\text{α} + \text{β}} = \sin \text{α} \cdot \cos \text{β} + \cos \text{α} \cdot \sin \text{β} $</div>`)
            .append(String.raw`<div>$ \cos \br{\text{α} + \text{β}} = \cos \text{α} \cdot \cos \text{β} - \sin \text{α} \cdot \sin \text{β} $</div>`)
        );
}

$(() => {
    generateManualPage();
});