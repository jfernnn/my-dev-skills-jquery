$('h1').css('text-align', 'center');
$('h1').css('background-color', '#93C47D');
$('h1').css('color', 'white');

$('tbody').css('text-align', 'center');

$('tr').css('grid-template-columns', '1fr 8fr');

$('button').css('background-color', '#E06666');
$('button').css('color', 'white');

$('td').css('color', 'orange');


$('input').css('width', '500px');


$('.btn-danger').on('click', function(e) {
    $(this).closest('tr').remove();
});

$(`.addSkill`).on('click', function(e) {
    const num = $("myText").val();
    console.log(num);
});