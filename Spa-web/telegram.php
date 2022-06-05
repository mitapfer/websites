<?php

/* https://api.telegram.org/bot1956384667:AAGrZz9INw7vzeHVMiPqoSLxdqHk2g7w3JU/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$data = json_decode(file_get_contents('php://input'), true);
$token = "1956384667:AAGrZz9INw7vzeHVMiPqoSLxdqHk2g7w3JU";
$chat_id = "-1001571876078";

echo $data;

foreach($data as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>