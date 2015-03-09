<?php session_start();?>
<?php include_once("language/ar.php");?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>GC CMS</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
   
   <!-- Head includes -->
   		<?php include_once 'includes/head_incs.html'; ?>
   <!-- End Head includes -->
   
  </head>
  <body class="skin-blue">
    <div class="wrapper">
      
      <!-- Header -->
   		<?php include_once 'views/header.php'; ?>
   	  <!-- End Header -->
      
      
      
      <!-- Left side column. contains the logo and sidebar -->
      <!-- left_side_bar -->
   		<?php include_once 'views/left_side_bar.php'; ?>
   	  <!-- End left_side_bar -->
   	  

      <!-- Right side column. Contains the navbar and content of the page (BODY)-->
      <div class="content-wrapper" id="main_container">
        

      </div><!-- /.content-wrapper -->
        
        
        
        <!-- Footer -->
   		<?php include_once 'views/footer.php'; ?>
   	    <!-- End Footer -->
        
	</div><!-- ./wrapper -->

   
   
   <!-- Footer includes -->
   		<?php include_once 'includes/Footer_incs.html'; ?>
   <!-- End Footer includes -->
   
   
   
   
   <!--Modals-->
    <?php include_once("Modals/updateModal.php"); ?>
    <?php include_once("Modals/galleryModal.php"); ?>
    <?php include_once("Modals/infoModal.php"); ?>
    	<!-- Objects Modals -->
    		<?php include_once("Modals/objects_modals/update_book_modal.php"); ?>
    	
    	<!-- End Objects Modals -->
    <!--End Modals-->
  </body>
</html>