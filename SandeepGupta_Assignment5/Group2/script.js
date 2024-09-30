
$(document).ready(function() {
$(document).on('keydown', function (e) {
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault(); // Prevent the default browser search
        $('#searchbar').show();
        $('#searchInput').focus();
        $('#textContainer').css('max-height', 'none');

    }
});

$('#readmore').on('click', function () {
    $('#textContainer').css('max-height', 'none');
    $(this).hide();
});

$("#searchButton").on("click",function(){
    var searched = $("#searchInput").val().trim();
    
    var content = $("#textContent1").html();

    if(searched === " "){
        return;
    }
    
    var regexp = new RegExp('('+ searched + ')', 'gi');
    var matches = content.match(regexp);
    if (matches) {
        $('#textContent1').html(content.replace(regexp, '<span class="highlight">$1</span>'));
        
    } else {
        showCustomAlert();
    }
    
});
function showCustomAlert() {
    $('#fullpage').show();
    $('#customAlert').show();
}
$('#okbutton, #cancelbutton').on('click', function() {
    $('#customAlert').hide();
    $('#fullpage').hide();
});
});