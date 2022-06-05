<?php

/* https://api.telegram.org/bot1943389688:AAEEwamBD3wnQo4JWIbHaYr71d7ontJJ13o/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$data = json_decode(file_get_contents('php://input'), true);
$token = "1943389688:AAEEwamBD3wnQo4JWIbHaYr71d7ontJJ13o";
$chat_id = "-1001592564242";

echo $data;

foreach($data as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>