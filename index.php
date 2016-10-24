<?php

require_once __DIR__.'/vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;

$config = require('config.php');

$credentials = new Aws\Credentials\Credentials($config['key'], $config['secret']);
$provider = Aws\Credentials\CredentialProvider::fromCredentials($credentials);
$aws = new Aws\Sdk([
    'region'   => 'us-east-1',
    'version'  => 'latest',
    'credentials' => $provider
]);
$s3 = $aws->createS3();

$app = new Silex\Application();

$app['debug'] = true;

$app->get('/', function() use ($app) {
  ob_start();
  require('templates/informativo.html');
  return ob_get_clean();
});

$app->post('/upload', function (Request $request) use ($app, $s3) {
  // get the element by name
  $file = $_FILES['file'];
  $elementid = $request->get('elementid');

  $key = date('YmdHis');

  try {
    $result = $s3->putObject([
        'Bucket' => 'tegra-informativo',
        'Key'    => $key,
        'Body'   => fopen($file['tmp_name'], 'r'),
        'ACL'    => 'public-read',
    ]);

    $actual_link = $result->get('ObjectURL');
} catch (Aws\Exception\S3Exception $e) {
    echo "There was an error uploading the file.\n";
}

  //move_uploaded_file($file['tmp_name'], getcwd() . '/uploaded_files/' . $file['name']);
  //$actual_link = "http://$_SERVER[HTTP_HOST]". '/uploaded_files/' . $file['name'];

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
