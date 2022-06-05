<?php

/* https://api.telegram.org/bot1774728692:AAGsUotyXXaVdQrJi1UFzwRVwuba5tZNl5I/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$data = json_decode(file_get_contents('php://input'), true);
$token = "1774728692:AAGsUotyXXaVdQrJi1UFzwRVwuba5tZNl5I";
$chat_id = "-575326104";

echo $data;

foreach($data as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>