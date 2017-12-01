

<?php

    if(isset($_POST['form'])){
     $field_name = $_POST['nombre'];
$field_email = $_POST['email'];
$field_message = $_POST['mensaje'];
		
		
		$mail_to = 'nicolas.gimenezlemos@gmail.com';
		
		$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;
		
		$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
		
		$mail_status = mail($mail_to, $body_message, $headers);
		
		if ($mail_status) { ?>
    <script language="javascript" type="text/javascript">
        // Print a message
        alert($("#msjenviado"));
        // Redirect to some page of the site. You can also specify full URL, e.g. http://template-help.com
        window.location = '#home';
    </script>
<?php
}else { ?>
    <script language="javascript" type="text/javascript">
        // Print a message
        alert('Message failed. Please, send an email to gordon@template-help.com');
        // Redirect to some page of the site. You can also specify full URL, e.g. http://template-help.com
        window.location = 'home';
    </script>
}?>

	
			
			
			
}?>


<?php ?>







