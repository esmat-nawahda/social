//logout from the system
$('body').on('click', '#logout', function() {
    swal({
            title: "Are you sure?",
            text: "Logout!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, logout!",
            closeOnConfirm: false },
        function(){
            var data="todo=logout";
            $.ajax({
                type: "POST",
                url: 'server/admin.php',
                data: data, // appears as $_GET['id'] @ ur backend side
                success: function (data) {
                    // data is ur summary
                    //                        $('#Edit').html(data);

                    //
                    swal("Done!", "Your have been logout from your account successfully.", "success");
                    window.location="login.php";


                }
            });
        }
    );
});



//login to the system
$('body').on('click', '#login', function() {
    //alert("hh");
    var username=document.getElementById("username_log").value;
    var password=document.getElementById("password_log").value;



    if(username===""||password===""){
        swal("Error!", "Fill the boxes to continue!", "error");
    }
    else{
        var data="username="+username+"&password="+password+"&todo=login";
        //console.log(data);
        $.ajax({
            type: "POST",
            url: 'server/admin.php',
            data: data, // appears as $_GET['id'] @ ur backend side
            success: function (data) {
                var result = JSON.parse(data);
                // console.log(result);
                //alert(data);
//                    var result = $.parseJSON(data);
                // data is ur summary
//                        $('#Edit').html(data);
                if(data!=="ERROR") {
                    swal({
                        title: "Login successfully",
                        text: "Welcome Again " + result.aname,
                        type: "success",
                        timer: 2000
                    });
                    
                    setTimeout(function(){window.location="index.php#/"},2000);
                }else{
                    swal({
                        title: "Login Failed",
                        text: "Error in username or password",
                        type: "error"
                    });
                }
            }
        });
    }
});



//register new admin
$('body').on('click', '#admin_btn_reg', function() {
    //alert("hh");
    var aname=document.getElementById("admin_name_reg").value;
    var fullname=document.getElementById("admin_fullname_reg").value;
    var password=document.getElementById("admin_pass_reg").value;
    var password2=document.getElementById("admin_pass_reg2").value;
    
    var img=document.getElementById("admin_img_reg").value.replace(/C:\\fakepath\\/i, '');

	


    if(aname===""||fullname===""||password===""||password2===""||img===""){
        swal("Error!", "Fill the boxes to continue!", "error");
    }
    else{
	    if(password!==password2){
	        swal("Passwords Mismatch!", "Passwords are not equals!", "error");
	    }
	    else{
	        var data="aname="+aname+"&password="+password+"&fullname="+fullname+"&img="+img+"&todo=register";
	        console.log(data);
	        $.ajax({
	            type: "POST",
	            url: 'server/admin.php',
	            data: data, // appears as $_GET['id'] @ ur backend side
	            success: function (data) {
	                //var result = (data);
	                console.log(data);
	
	                if(data!=="ERROR") {
	                    swal({
	                        title: "New Admin Added successfully",
	                        text: "SUCCESS",
	                        type: "success"
	                    });
	                    
	           			//file to be uploaded
						var file_data = $('#admin_img_reg').prop('files')[0];
						var form_data = new FormData();
						form_data.append('file', file_data)

						$.ajax({
							url : 'upload.php?f1=admins&f2=imgs', // point to server-side PHP script
							dataType : 'text', // what to expect back from the PHP script, if anything
							cache : false,
							contentType : false,
							processData : false,
							data : form_data,
							type : 'post',
							success : function(php_script_response) {

							}
						});
						
	                }else{
	                    swal({
	                        title: "Login Failed",
	                        text: "ERROR",
	                        type: "error"
	                    });
	                }
	            }
	        });
	    }
	 }
});



//get my personal information
$('body').on('click', '#get_my_data', function() {
    //alert("hh");


        var data="todo=getMyData";
        //console.log(data);
        $.ajax({
            type: "POST",
            url: 'server/admin.php',
            data: data, // appears as $_GET['id'] @ ur backend side
            success: function (data) {
                var jsonData = JSON.parse(data);
                if(data!=="ERROR") {
                    $("#username_up").val(jsonData.aname);
                    $("#password_up").val(jsonData.password);
                    $("#fullname_up").val(jsonData.fullname);
                    // $("#admin_img_up").val(jsonData.img);

                }else{
                    swal({
                        title: "Failed",
                        text: "Can't Return Your Personal Information",
                        type: "error"
                    });
                }
            }
        });

});




//set my personal information
$('body').on('click', '#account_up', function() {
    //alert("hh");
    var username=document.getElementById("username_up").value;
    var password=document.getElementById("password_up").value;
    var fullname=document.getElementById("fullname_up").value;
    var img=document.getElementById("admin_img_up").value.replace(/C:\\fakepath\\/i, '');
    



    if(username===""||password===""||fullname===""){
        swal("Error!", "Fill the boxes to continue!", "error");
    }
    else{
        var data="username="+username+"&password="+password+"&fullname="+fullname+"&todo=update";
        if(img!==""){
        	data=data+"&img="+img;
        	
        	//file to be uploaded
						var file_data = $('#admin_img_up').prop('files')[0];
						var form_data = new FormData();
						form_data.append('file', file_data)

						$.ajax({
							url : 'upload.php?f1=admins&f2=imgs', // point to server-side PHP script
							dataType : 'text', // what to expect back from the PHP script, if anything
							cache : false,
							contentType : false,
							processData : false,
							data : form_data,
							type : 'post',
							success : function(php_script_response) {

							}
						});
        } 
        console.log(data);
        $.ajax({
            type: "POST",
            url: 'server/admin.php',
            data: data, // appears as $_GET['id'] @ ur backend side
            success: function (data) {
                //var result = (data);
                //console.log(data);

                if(data!=="ERROR") {
                	$('#updateModal').modal('hide');
                    swal({
                        title: "Updated successfully",
                        text: "SUCCESS",
                        type: "success"
                    });
                    getMyData();
                }else{
                    swal({
                        title: "Login Failed",
                        text: "ERROR",
                        type: "error"
                    });
                }
            }
        });
    }
});


function getAllAdmins(){

	var data="todo=getAllAdmins";
        console.log(data);
        $.ajax({
            type: "POST",
            url: 'server/admin.php',
            data: data, // appears as $_GET['id'] @ ur backend side
            success: function (data) {
                var result = JSON.parse(data);
                console.log(result);
                var total='';
                $('#admins_list').html("");

                for(var i=0;i<result.length;i++){
                    var id=result[i].id,username=result[i].aname,fullname=result[i].fullname,img=result[i].img,password=result[i].password;

					var admin_item=buildAdminListRow(id,username,fullname,img,password);
			
                    // var ad_item=buildAdItem(id,title,content,img,due_date);
                    // alert(admin_item);
                    $('#admins_list').append(admin_item);

                }

            }
        });
        
        
	   
		//get number of books
		data = "todo=getAdminsNumber";
		$.ajax({
			type : "POST",
			url : 'server/admin.php',
			data : data, // appears as $_GET['id'] @ ur backend side
			success : function(data) {
				var result = JSON.parse(data);
				var numOfAdmins = result.numOfAdmins;
	
				var pages;
				$('#admins_paginator').html("");
				if (numOfAdmins % 12 == 0)
					pages = numOfAdmins / 12;
				else
					pages = numOfAdmins / 12 + 1;
				pages = parseInt(pages);
	
				for (var i = 1; i <= pages; i++) {
					var paginator = buildAdminPaginationItem(i);
					$('#admins_paginator').append(paginator);
				}
	
			}
		}); 


}



//get all admins when paginator clicked
$('body').on('click', '.page_click', function() {

    var page=$(this).attr('id');
  


    var data="page="+page+"&todo=getAllAdmins";
 
    console.log(data);
    $.ajax({
        type: "POST",
        url: 'server/admin.php',
        data: data, // appears as $_GET['id'] @ ur backend side
        success: function (data) {
            var result = JSON.parse(data);
            //console.log(result);
            var total='';
            $('#admins_list').html("");
            for(var i=0;i<result.length;i++){
               	    var id=result[i].id,username=result[i].aname,fullname=result[i].fullname,img=result[i].img,password=result[i].password;

					var admin_item=buildAdminListRow(id,username,fullname,img,password);
			
                    // var ad_item=buildAdItem(id,title,content,img,due_date);
                    // alert(admin_item);
                    $('#admins_list').append(admin_item);

            }

            //set activation
            $('#admins_paginator li').each(function(i)
            {
                var id=$(this).attr('id'); // This is your rel value
                if(id===page){
                    $(this).addClass('active');
                }
                else{
                    $(this).removeClass('active');
                }
            });

        }
    });


});

