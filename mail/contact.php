<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../lib/vendor/autoload.php'; // Ajusta si tu estructura de carpetas es distinta

if (
    empty($_POST['name']) ||
    empty($_POST['subject']) ||
    empty($_POST['message']) ||
    !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)
) {
    http_response_code(400);
    echo "Datos inválidos.";
    exit();
}

$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$subject = htmlspecialchars($_POST['subject']);
$message = nl2br(htmlspecialchars($_POST['message']));

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'andrealdj289@gmail.com'; // cambia esto
    $mail->Password = 'oaducczzoeqncgzn';     // cambia esto
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->SMTPOptions = [
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ];

    $mail->setFrom($email, $name);
    $mail->addAddress('andrealdj289@gmail.com'); // destinatario (puede ser el mismo que el remitente)
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = "<b>Nombre:</b> $name<br><b>Email:</b> $email<br><b>Mensaje:</b><br>$message";

    $mail->send();
    http_response_code(200);
    echo "Mensaje enviado correctamente.";
} catch (Exception $e) {
    http_response_code(500);
    echo "Mailer Error: " . $mail->ErrorInfo;
}
