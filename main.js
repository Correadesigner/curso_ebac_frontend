$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const nomedaNovaTarefa = $('#nome-nova-tarefa').val();
        const novaTarefa = $('<li style="text"></li>');
        $(`<li>${nomedaNovaTarefa}</li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#nome-nova-tarefa').val('');

        $(novaTarefa).click(function(){
            $('.tarefa-nova').css("text-decoration", "line-through")
        })

    })
})