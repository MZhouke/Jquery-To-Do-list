// alert("connected");

//when click on the li, li gets crossed off
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if (event.which === 13){
		var input = $(this).val();
		$("ul").prepend("<li><span><i class='fa fa-trash'></i></span> " + input +"</li>");
		$(this).val('');
	}

});

$("#plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});