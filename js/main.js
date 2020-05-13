$('body').css('display', 'grid');
$('body').css('width', '500px');
$('body').css('height', '250px');
$('body').css('padding', '50px 100px 0 100px');

$('h1').css('text-align', 'center');
$('h1').css('background-color', '#93C47D');
$('h1').css('color', 'white');

$('tbody').css('display', 'flex');
$('tbody').css('flex-direction', 'column');
$('tbody').css('text-align', 'center');

//$('tr').css('grid-template-columns', '1fr 8fr');
$('bar').css('display', 'flex')
$('input').css('width', '300px');
$('input').css('border-color', '#93C47D')
$('button').css('border-color', '#93C47D')
$('button').css('color', '#93C47D')

$(`#addSkill`).on('click', function(e) {
    var num = $(`#myInput`).val();
    if(num !== ''){
        console.log(num);
        $('tbody').prepend(`<tr></tr>`);
        $('tr').first().append(`<td><button>X</button></td>`);
        $('tr').first().append(`<td>${num}</td>`);
        $('button').first().css('background-color', '#E06666');
        $('button').first().css('color', 'white');
        $('td').css('color', 'orange');
    }
});

$(`tbody`).on('click', 'button', function(e) {
    console.log('dsfds');
    $(this).closest('tr').remove();
});






