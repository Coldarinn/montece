<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

    if($_POST['formName'] == "connect"){
		//От кого письмо working@montecegaming.com
        $mail->setFrom('working@montecegaming.com', 'Сообщение с Montece Gaming');
        //Кому отправить
        $mail->addAddress('working@montecegaming.com');
        //Тема письма
        $mail->Subject = 'Сообщение с Montece Gaming"';
        //Тело письма
        $body = '<h1>Кто-то хочет с нами связаться!</h1>';
	} else {
	    //От кого письмо
        $mail->setFrom('working@montecegaming.com', 'Заявка с Montece Gaming');
        //Кому отправить
        $mail->addAddress('working@montecegaming.com');
        //Тема письма
        $mail->Subject = 'Заявка с Montece Gaming"';
        //Тело письма
        $body = '<h1>Подъехал очередной заказ!</h1>';
	}
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['category']))){
		$body.='<p><strong>Категория:</strong> '.$_POST['category'].'</p>';
	}
	if(trim(!empty($_POST['budget']))){
    		$body.='<p><strong>Бюджет:</strong> '.$_POST['budget'].'</p>';
    	}
    if(trim(!empty($_POST['date']))){
        $body.='<p><strong>Срок:</strong> '.$_POST['date'].'</p>';
    }
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>