<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../lib/vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userName = $_POST['user_name'];
    $userEmail = $_POST['user_email'];
    $placeName = $_POST['place_name'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        $mail->SMTPDebug = 0;
        $mail->Debugoutput = 'html';
        
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'andrealdj289@gmail.com';
        $mail->Password = 'oaducczzoeqncgzn';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->SMTPOptions = [
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            ]
        ];

        $mail->setFrom('andrealdj289@gmail.com', $userName); // usa una dirección válida
        $mail->addAddress('andrealdj289@gmail.com');
        $mail->addReplyTo($userEmail, $userName);

        $mail->isHTML(true);
        $mail->Subject = "Nueva recomendación: $placeName";
        $mail->Body = "
            <strong>Nombre:</strong> $userName<br>
            <strong>Correo:</strong> $userEmail<br>
            <strong>Nombre del lugar:</strong> $placeName<br>
            <strong>Descripción:</strong><br>$message
        ";

       // ...
$mail->send();
echo '¡Recomendación enviada exitosamente!';
    } catch (Exception $e) {
        echo "Error al enviar: {$mail->ErrorInfo}";
    }
}
