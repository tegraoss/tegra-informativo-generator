<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset="utf-8">
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,width=device-width">
    <meta name="format-detection" content="telephone=no">
		<link rel="stylesheet" type="text/css" href="../css/styles.css">
		<title>Upload form</title>
		<script type="text/php">
			<?php echo json_encode($_GET['id']); ?>;
		</script>
	</head>
<body>
	<form id="Upload" action="/upload" enctype="multipart/form-data" method="post">
	 <span class="title">Upload form</span>
		 <label id="upload-label">File to upload:</label>
	<div style="overflow: hidden;">
		 <input id="file-path" type="text" class="file-upload-input" disabled>
		 <button type="button" class="file-upload-button">
			 Select a File
			 <input type="file" name="file" id="file-submit" onchange="getFileName()">
		 </button>
	</div>
		 <input type="hidden" id="elementid" name="elementid" value="<?php echo ($_GET['id']); ?>"/>
	<p>
		 <input id="submit" class="file-upload-button" type="submit" name="submit" value="Upload me!"/>
	</p>
</form>
<script type="text/javascript" src="../js/form.js"></script>
</body>
</html>
