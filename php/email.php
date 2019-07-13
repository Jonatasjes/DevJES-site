<?php 

if(isset($_POST['email']) && !empty($_POST['email'])) {

$nome = addcslashes($_POST['nome']);
$email = addcslashes($_POST['email']);
$mensagem = addcslashes($_POST['mensagem']);

}

$to = "contato@devjes.com.br";
$subject = "contato - DevJES";
$body = "Nome: ". $nome . "\r\n".
        "Email: ". $email . "\r\n".
        "Mensagem: ". $mensagem;

$header = "From:jonatas.eleoterio@devjes.com.br"."\r\n".
          "Reply-to:".$email."\r\n".
          "X=Mailer:php/".phpversion();

if(mail($to,$subject,$body,$header)) {
    echo("Email enviado com sucesso!");
    header('Location: http://devjes.com.br/');
} else {
    echo("o email não pode ser enviado.");
    header('Location: http://devjes.com.br/');
}

?>