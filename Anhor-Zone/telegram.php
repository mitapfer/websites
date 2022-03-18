<?php

/* https://api.telegram.org/bot1738284145:AAFNoSDQ1KJoBoACYYmKmyWzpsQkuzzUpK8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = "1750766993:AAFLQtYuUIlCam-7xg6zeWfzxI3SY7g-3SM";
$chat_id = "-1001478922597";

if ($name == '') {
  $name = '-';
}
if ($phone == '') {
  $phone = '-';
}

$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  include('index.html');
  $message = "Спасибо! Мы обязательно с вами свяжемся.";
  echo "<script type='text/javascript'>setTimeout(() => alert('$message'), 450)</script>";
} else {
  echo "Error";
}
?>