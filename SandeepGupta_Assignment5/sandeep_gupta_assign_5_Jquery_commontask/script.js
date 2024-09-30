$(document).ready(function(){
    $('#h-1').click(function(){
        $('#h-1').hide();
    });

    $('.double-click').dblclick(function(){
        $('.double-click').addClass("doubled-clicked");
    });

    $('#changebg').mouseover(function(){
        $('#changebg').css('background-color','aqua');
    }).mouseout(function(){
        $('#changebg').css('background-color','rgb(83, 195, 154)');
    })

    $('#append-span').click(function(){
        $(this).append('<span> ..I am added </span>');
    });


    $('#wrap-p-tag').click(function(){
        $(this).wrap('<p></p>');
        $(this).parent().addClass("wrapper-class");
    });

    $('#box-mod-1').click(function(event){
        event.preventDefault(); // Prevent the default action of the event
    
        var header1 = $('#h-1');
    
        // Use the .css() method to get the CSS properties
        var bgc = header1.css('background-color');
        var pad = header1.css('padding');
        var cursor = header1.css('cursor');
        var colour = header1.css('color');
        var border = header1.css('border');
    
        // Display the properties in the .boxmodelproperties element
        $('.boxmodelproperties').html(
            '<p><strong>Box model properties of "H1" Tag:</strong></p>' +
            '<p>background-color: ' + bgc + '</p>' +
            '<p>padding: ' + pad + '</p>' +
            '<p>cursor: ' + cursor + '</p>' +
            '<p>color: ' + colour + '</p>' +
            '<p>border: ' + border + '</p>'
        ).show();
    });

    
    for(var i=1;i<=10;i++){
    $(`#row-${i}`).mouseover(function(){
        $(this).css('background-color','aqua');
    }).mouseout(function(){
        $(this).css('background-color','rgb(224, 70, 70)');
    });
}
    
});