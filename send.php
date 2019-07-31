<?php

require_once('qdmail.php');
require_once('qdsmtp.php');

$mail = new Qdmail();

$mail -> errorDisplay( false );
$mail -> smtp( true );

$param = array(
    'host' => 'pop3.lolipop.jp'    // メールサーバのIPなど
    'port' => 465                  // SMTPポート（25,　587 ...）
    'from' => 'test@arnk.sub.jp'  // Return-path: に設定されるメルアド
    'protocol' => 'SMTP_AUTH'      // 認証が必要なければ 'SMTP' でよし
    'user' => 'test@arnk.sub.jp'           // SMTP認証ユーザ
    'pass' => 'Arnk8350'            // SMTP認証パスワード
);
$mail -> smtpServer($param)

$mail->to('a.darara.21@gmail.com', '');    // 宛先
$mail->from('test@arnk.sub.jp');              // 送信元
$mail->subject($_POST['title']);           // 件名
$mail->text($_POST['body']);                  // メッセージ

if ( $mail->send() ) {
    print 'mail send OK';
} else {
    print 'mail send NG';
}





?>
