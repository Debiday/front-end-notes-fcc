// Notes from FCC Certification 
// Front-end Development Libraries


// Jquery
// Some available functions
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    //function chaining
    $("#target5").clone().appendTo("#left-well")
  });
</script>


//Others
$("#target1").parent().css("background-color", "red");
$("#right-well").children().css("color", "orange");
$(".target:nth-child(2)").addClass("animated bounce");
$(".target:even").addClass("animated shake");

//hinge
$("body").addClass("animated hinge");





