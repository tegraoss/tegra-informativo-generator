<!DOCTYPE HTML>

<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=iso-8859-1">

		<link rel="stylesheet" type="text/css" href="../css/styles.css">

		<title>Upload form</title>
		<script type="text/php">
			<?php echo json_encode($_GET['id']); ?>;
		</script>
	</head>

	<body>

	<form id="Upload" action="/upload", enctype="multipart/form-data" method="post">

		<h1>
			Upload form
		</h1>

		<p>
			<label for="file">File to upload:</label>
			<input id="file" type="file" name="file">
		</p>
		<input type="hidden" id="elementid" name="elementid" value='<?php echo ($_GET['id']); ?>' />
		<p>
			<label for="submit">Press to...</label>
			<input id="submit" type="submit" name="submit" value="Upload me!"/>
		</p>

	</form>
	</body>

</html>
