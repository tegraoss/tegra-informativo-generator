<?php

require_once __DIR__.'/vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;

$app = new Silex\Application();

$app->get('/', function() use ($app) {
  ob_start();
  require('templates/informativo.html');
  return ob_get_clean();
});

$app->post('/upload', function (Request $request) use ($app) {

  $file = $_FILES['file'];
  $elementid = $request->get('elementid');

  move_uploaded_file($file['tmp_name'], getcwd() . '/uploaded_files/' . $file['name']);

  $actual_link = "http://$_SERVER[HTTP_HOST]". '/uploaded_files/' . $file['name'];

  return <<<XPTO
  	<script>
  	    console.log(window.opener);
  	    window.opener.document.setFile('$elementid', '$actual_link');
  		 // window.opener.document.setFile('$actual_link');
  		window.close();
  	</script>
XPTO;
});

$app->run();
?>
