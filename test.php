<!DOCTYPE html>
<html lang="ja" dir="ltr">

<head>
    <meta charset="utf-8">
</head>

<body>
<?php

$email = $_POST['email'];
$content = $_POST['content'];

?>

    <h1>Email:<?php echo $email ?></h1>
    <h1>内容：<?php echo $content ?></h1>

</body>
</html>
