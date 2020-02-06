

$(document).ready(function() {
   
    $('#quiz').hide();
    $('.Results').hide();
    $('#timer').hide();


        var correct = 0;
        var incorrect = 0;
        var incomplete = 0;
        var elapse;
        var secs = 120;


           function clock() {
            time = setInterval(oneTwo, 1000);
        
            function oneTwo() {
                if (secs === 0) {
                    clearInterval(time);
                    $('#quiz').hide();
                    $('.Results').show();
                    $('#timer').hide();
                }
                if (secs > 0) {
                    secs--;   
                }
                $("#time").html(secs);
            }
        }

 $("#start").on("click", function() {
            $('#start').hide();
            $('#timer').show();
            $('#quiz').show();
            clock();
            $("#time").html(secs);
          });



 

        $('input[type=radio]').on ('change', function(){
            correct = $('input[value=correct]:checked').length;
            incorrect = $('input[value=wrong]:checked').length;
            incomplete = $(6-(correct+incorrect));
            
            });



          $("#submit").on("click", function() {
            $('.Results').show();
            $('#quiz').hide();
            $('#timer').hide();
            $('#start').hide();
            
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            $("#empty").html(empty);

        });
        
            
    
 


    });

