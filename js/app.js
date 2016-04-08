$('.show-icon').hide();


$('.hide-icon').click(function(){
	$('.main-nav').slideToggle('slow', function(){
		$('.show-icon').show();
		$('.hide-icon').hide();
	});

});


$('.show-icon').click(function(){
		$('.main-nav').slideToggle('slow', function(){
		$('.show-icon').hide();
		$('.hide-icon').show();
	});
});
