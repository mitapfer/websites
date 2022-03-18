<?php

/* https://api.telegram.org/bot1828095144:AAEWHumQV2JpMc2FvTpZNzuGziTrQ4XlDB4/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$data = json_decode(file_get_contents('php://input'), true);
$token = "1828095144:AAEWHumQV2JpMc2FvTpZNzuGziTrQ4XlDB4";
$chat_id = "-1001405997178";

echo $data;

foreach($data as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>