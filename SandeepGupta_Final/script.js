
$(document).ready(function(){
    $('#form-container-1').show();
    $('#ship-info').prop('checked', true);

    $('#continue').click(function() {
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var country = $("#country").val();
        var towncity = $("#towncity").val();
        var address = $("#address").val();
        var pincode = $("#pincode").val();
        var state = $("#state").val();
        var zipcode = $("#zipcode").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        

        if(firstName=="" || lastName=="" || country=="" || towncity=="" || address=="" || pincode=="" || state=="" || zipcode=="" || email=="" || phone==""){
            alert("Please fill all the fields");
        }else{
            $('#payment-info').prop('checked', true);
            $('#form-container-1').hide();
            $('#form-container-2').show();
        }

        
    });

    $('#place-order').click(function() {
            
        
        var cardnumber = $("#card-number").val();
        var nameoncard = $("#name-on-card").val();
        var expirydate = $("#expiry-date").val();
        var cvv = $("#cvv").val();
        if(cardnumber=="" || nameoncard=="" || expirydate=="" || cvv=="" ){
            alert("Please fill all the fields");
        }else{
            $('#payment-info').prop('checked', true);
            $('#review-order').prop('checked', true);
            $('#form-container-2').hide();
            $('#form-container-3').show();
        }
        
    });



});

function printcontent() {
    var divContents = document.getElementById("form-container-3").innerHTML;

    var printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print Order</title>');
    printWindow.document.write('<style>body{font-family: Arial, sans-serif; margin: 20px;}</style>');  // Add any necessary styles here
    printWindow.document.write('</head><body >');
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

function updateContent(){
    var addressValue = document.getElementById("address").value;
    document.getElementById("ship-add").innerText = addressValue;
   
    
}
function updateState(){
    var stateValue = document.getElementById("state").value;
    document.getElementById("ship-add-2").innerText = stateValue;
}

function updatePhone(){
    var phoneValue = document.getElementById("phone").value;
    document.getElementById("ship-add-3").innerText = phoneValue;
}



// var i=0;
// function newcheck(){
//     if(i==0){
//         document.getElementById("ship-info").checked = true;
//         console.log("checked successfully");
//         i++;

//     }else{
//         document.getElementById("ship-info").checked = false;
//         console.log("unchecked successfully");
//         i--;
//     }
    
// }




var str = "My name is sandeep guptazz";
longest(str);

function longest(str) {
    var words = str.split(' ');
    var maxLength = 0;  
    var longestWords = [];
    
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            longestWords = [words[i]];
        } else if (words[i].length === maxLength) {
            longestWords.push(words[i]);
        }
    }
    
    console.log(longestWords);
}