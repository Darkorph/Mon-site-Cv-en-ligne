<?php



if (isset($_POST["name"]) && isset($_POST["mail"]) && isset($_POST["check"]) && isset($_POST["message"])) 
{


	if (empty($_POST["name"]) || empty($_POST["mail"]) || empty($_POST["message"]) || empty($_POST["check"])) 
	{
	  echo json_encode("Les champs marqués * sont obligatoires");
	}
	else 
	{

		if ( !preg_match( " /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/ " , $_POST["mail"] ))
		{  echo json_encode("Veuillez entrer une adresse mail valide");
			
		 }
		else
		{
			
			$message = utf8_decode($_POST["name"]." a envoyé le message suivant : ".$_POST["message"]);
			$to = "y.crochon@gmail.com";
			$subject = "mail issu de mon formulaire";
			$from = $_POST["mail"];
			$headers = "From:" . $from;
		    if(mail($to,$subject,$message, $headers)){
			  echo json_encode("Mail envoyé avec succès");
			}else{
			  echo json_encode("Erreur sur ce mail :") ;
			}
		}
	}
}



?>