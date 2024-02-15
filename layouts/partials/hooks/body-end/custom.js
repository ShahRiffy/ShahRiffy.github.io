<script>
// Changed the email icon
$('.fa-ul li i:first').removeClass("fas fa-envelope").addClass("far fa-envelope-open")

// Lighten the firstname
$('.navbar-brand').html("<div class='firstname' style='display:inline'>Kumar</div> Ashwin")

// Removes Footer
$('.powered-by').last().html("")

// Change Button Style in Contact Form
$("#contact :button").removeClass();
$("#contact :button").addClass("btn btn-outline-primary px-3 py-2");
</script>