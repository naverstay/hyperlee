<?php
$from_to = "o.naidenov@hyperlee.com";
$post = (!empty($_POST)) ? true : false;
if ($post) {

    // Сообщение
    if (!$error) {
        $subject = "Новое сообщение!";
        $message = "Новый запрос!\r\n";
        foreach ($_POST as $key => $val) {
            $message = $message . $key . ' : ' . $val . "\r\n";
        }
        $mail = mail($from_to, $subject, $message,

            "From: " . $from_to . " " . "\r\nReply-To: " . $email . " " . "\r\nContent-type: text/plain; charset=utf-8\r\nX-Mailer: PHP/" . phpversion());
        if ($mail) {
            echo 'Отправлено';
        }
    } else {
        echo '<div class="notification_error">' . $error . '</div>';
    }
}
?>