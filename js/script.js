$(document).ready(function(){
    $("#submit5").click(function(e){
		e.preventDefault();
		var name = $("#name").val();
		var mail = $("#mail").val();
		var message = $("#message").val();
		var check = $("#check").is(':checked');
        var myRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
        
		if (!isNaN(name) || name.length == 0)
		{
            
		$("#result").html("Le nom ne peut être numérique et est obligatoire ");	
		}
		else
		{
			if (!myRegex.test(mail))
			{
			$("#result").html("Le mail n'est pas correct");	
			}
			else
			{	if (message.length == 0)
				{
				$("#result").html("Le commentaire est obligatoire ");	
				}
				else
				{
					if (!$("#check").is(':checked'))
					{
					$("#result").html("Vous devez valider notre politique de confidentialité ");	
					}
					else
					{					
						$.ajax({
						url : '/fonction/envoi.php',
						type : 'POST',
						data : { "name" : name, "mail" : mail, "message" : message, "check" : $("#check").is(':checked') },
						dataType : 'json',
						success : function(donnees, statut){ // success est toujours en place, bien sûr !
						$("#result").html(donnees);
						},
						error : function(resultat, statut, erreur){
						$("#result").html("erreur : "+erreur+" status : "+status);	
						}
						});
					}
				}
			}
		}

    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
    });
    $(window).scroll(function(){
        if ($('.submit_5').visible() ) {
            $("header").slideUp();
            $('.aside_icon').hide("right");
            $('footer').slideDown();
            

        } else {
            $("header").slideDown();
            $('.aside_icon').show("left");
            $('footer').slideUp();
        }
       
    });
    



    ////////////////////////////////
    $(window).scroll(function(){
        if($('.partie_1').visible(true)) {
            $('.anchor1').css('backgroundColor', '#333');
        } else {
            $('.anchor1').css('backgroundColor', 'rgba(255,255,255,0)');
            
        }
    });
    $(window).scroll(function(){
        if($('.p_partie2').visible(true)) {
            $('.anchor2').css('backgroundColor', '#333');
            $('.anchor1').css('backgroundColor', 'rgba(255,255,255,0)');
        } else {
            $('.anchor2').css('backgroundColor', 'rgba(255,255,255,0)');
        }
    });
    $(window).scroll(function(){
        if($('.partie_3').visible(true)) {
            $('.anchor3').css('backgroundColor', '#333');
            $('.anchor2').css('backgroundColor', 'rgba(255,255,255,0)');
        } else {
            $('.anchor3').css('backgroundColor', 'rgba(255,255,255,0)');
        }
    });
    $(window).scroll(function(){
        if($('.p_partie5').visible(true)) {
            $('.anchor4').css('backgroundColor', '#333');
            $('.anchor3').css('backgroundColor', 'rgba(255,255,255,0)');
        } else {
            $('.anchor4').css('backgroundColor', 'rgba(255,255,255,0)');
        }
    });


    



    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       230,          // default
        mobile:       true,       // default
        live:         true,        // default
      }
      )
      wow.init();

      $('.legal_7').click(function(){
        $(`.popup_man`).fadeIn(500);
        $(`.black_popup`).fadeIn(500);



    });
    $('.fermeture_popup').click(function(){
        $(`.popup_man`).fadeOut(500);
        $(`.popup_man2`).fadeOut(500);
        $(`.black_popup`).fadeOut(500);
    });
    $('.black_popup').click(function(){
        $(`.popup_man`).fadeOut(500);
        $(`.black_popup`).fadeOut(500);
        $(`.popup_man2`).fadeOut(500);
    });
    $('.click_pop_2').click(function(){
        $(`.popup_man2`).fadeIn(500);
        $(`.black_popup`).fadeIn(500);


    });
    
    //////////// Script  en jQuery verif formulaire + Ajax

    

    

});


