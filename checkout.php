<!DOCTYPE html>
<html>
	
    <head>
        <meta charset="utf-8" />
        <title>Your first Backbone.js App | Tutorialzine </title>
        
        <!-- Google web fonts -->
		<link href="http://fonts.googleapis.com/css?family=Abel:400,700" rel='stylesheet' />

        <!-- The main CSS file -->
		<link href="assets/css/style.css" rel="stylesheet" />
		
    </head>
    
    <body>
    	
		<div id="main" method="post" action="submit.php">
			<h1>EduonlineShop Toy Store</h1>

			<p id="services">
				Your Cart: <?php //echo htmlspecialchars(implode(array_keys($_POST), ', '));?> <br />
				<a href="index.html">Go back</a>
			</p>
            <p id="cart">
            <?php
                //print_r($_POST);
                if(isset($_POST))
                {
                    foreach ($_POST as $k=>$v)
                    {?>

                     <table>
                            <tr>
                            <td><?php echo $k; ?></td>

                            </tr>
                    </table>

                    <?php
                    }
                }
                
                ?>

            </p>

		</div>
		
		<!-- Only used for the demos. Please ignore and remove. --> 
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

    </body>
</html>

