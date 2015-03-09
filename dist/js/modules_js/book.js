
//add new book
$('body').on('click', '#add_new_book', function() {
    //alert("hh");
    var book_title=document.getElementById("book_title_reg").value;
    var book_desc=document.getElementById("book_desc_reg").value;

    
    var book_img=document.getElementById("book_img_reg").value.replace(/C:\\fakepath\\/i, '');
    var book_file=document.getElementById("book_file_reg").value.replace(/C:\\fakepath\\/i, '');

	


    if(book_title===""||book_desc===""||book_img===""||book_file===""){
        swal("Error!", "Fill the boxes to continue!", "error");
    }
    else{
	        var data="book_title="+book_title+"&book_desc="+book_desc+"&book_file="+book_file+"&book_img="+book_img+"&todo=addNewBook";
	        console.log(data);
	        $.ajax({
	            type: "POST",
	            url: 'server/book.php',
	            data: data, // appears as $_GET['id'] @ ur backend side
	            success: function (data) {
	                //var result = (data);
	                console.log(data);
	
	                if(data!=="ERROR") {
	                    swal({
	                        title: "New Book Added successfully",
	                        text: "SUCCESS",
	                        type: "success"
	                    });
	                    
	           			//img to be uploaded
						var file_data = $('#book_img_reg').prop('files')[0];
						var form_data = new FormData();
						form_data.append('file', file_data)

						$.ajax({
							url : 'upload.php?f1=books&f2=imgs', // point to server-side PHP script
							dataType : 'text', // what to expect back from the PHP script, if anything
							cache : false,
							contentType : false,
							processData : false,
							data : form_data,
							type : 'post',
							success : function(php_script_response) {

							}
						});
						
						//file to be uploaded
						var file_data = $('#book_file_reg').prop('files')[0];
						var form_data = new FormData();
						form_data.append('file', file_data)

						$.ajax({
							url : 'upload.php?f1=books&f2=files', // point to server-side PHP script
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
});



function getAllBooks(){

	 var data="todo=getAllBooks";
        console.log(data);
        $.ajax({
            type: "POST",
            url: 'server/book.php',
            data: data, // appears as $_GET['id'] @ ur backend side
            success: function (data) {
                var result = JSON.parse(data);
                console.log(result);
                var total='';
                $('#books_list').html("");

                for(var i=0;i<result.length;i++){
                    var id=result[i].id,title=result[i].title,bdesc=result[i].bdesc,bfile=result[i].bfile,bimg=result[i].bimg;

                    var book_item=buildBookListRow(id,title,bdesc,bfile,bimg);
                    //alert(book_item);
                    $('#books_list').append(book_item);

                }

            }
        });

        //get number of books
        data="todo=getBooksNumber";
        $.ajax({
            type: "POST",
            url: 'server/book.php',
            data: data, // appears as $_GET['id'] @ ur backend side
            success: function (data) {
                var result = JSON.parse(data);
                var numOfBooks=result.numOfBooks;

                var pages;
                $('#books_paginator').html("");
                if(numOfBooks%12==0) pages=numOfBooks/12;
                else pages=numOfBooks/12+1;
                pages=parseInt(pages);

                for(var i=1;i<=pages;i++){
                    var paginator=buildBookPaginationItem(i);
                    $('#books_paginator').append(paginator);
                }


            }
        });

}






//get all books when paginator clicked
$('body').on('click', '.books_page_click', function() {

    var page=$(this).attr('id');


    var data="page="+page+"&todo=getBooksByPageNumber";
 
    console.log(data);
    $.ajax({
        type: "POST",
        url: 'server/book.php',
        data: data, // appears as $_GET['id'] @ ur backend side
        success: function (data) {
            var result = JSON.parse(data);
            //console.log(result);
            var total='';
            $('#books_list').html("");
            for(var i=0;i<result.length;i++){
                var id=result[i].id,title=result[i].title,bdesc=result[i].bdesc,bfile=result[i].bfile,bimg=result[i].bimg;

                var book_item=buildBookListRow(id,title,bdesc,bfile,bimg);
                $('#books_list').append(book_item);

            }

            //set activation
            $('#books_paginator li').each(function(i)
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





//get book information by id
$('body').on('click', '.get_book_data', function() {
    //alert("hh");
		var book_id=$(this).attr('id');

        var data="id="+book_id+"&todo=getBookInfo";
        // alert(data);
        $.ajax({
            type: "POST",
            url: 'server/book.php',
            data: data, // appears as $_GET['id'] @ ur backend side
            success: function (data) {
                var jsonData = JSON.parse(data);
                if(data!=="ERROR") {
                    $("#book_title_up").val(jsonData.title);
                    $("#book_desc_up").val(br2nl(jsonData.bdesc));
                    $("#book_id_up").val(jsonData.id);
                   

                }else{
                    swal({
                        title: "Failed",
                        text: "Can't Return Book Information",
                        type: "error"
                    });
                }
            }
        });

});




//add new book
$('body').on('click', '#book_up', function() {
    //alert("hh");
    var book_id=document.getElementById("book_id_up").value;
    var book_title=document.getElementById("book_title_up").value;
    var book_desc=document.getElementById("book_desc_up").value;

    
    var book_img=document.getElementById("book_img_up").value.replace(/C:\\fakepath\\/i, '');
    var book_file=document.getElementById("book_file_up").value.replace(/C:\\fakepath\\/i, '');

	


    if(book_title===""||book_desc===""){
        swal("Error!", "Fill the boxes to continue!", "error");
    }
    else{
	        var data="book_id="+book_id+"&book_title="+book_title+"&book_desc="+book_desc+"&todo=editBookInfo";
	        if(book_img!=="") data+="&book_img="+book_img;
	        if(book_file!=="") data+="&book_file="+book_file;
	        
	        alert(data);
	        console.log(data);
	        $.ajax({
	            type: "POST",
	            url: 'server/book.php',
	            data: data, // appears as $_GET['id'] @ ur backend side
	            success: function (data) {
	                //var result = (data);
	                console.log(data);
					$('#book_updateModal').modal('hide');
	                if(data!=="ERROR") {
	                	
	                    swal({
	                        title: "New Book Added successfully",
	                        text: "SUCCESS",
	                        type: "success"
	                    });
	                    
	           			//img to be uploaded
	           			if(book_img!==""){
	           				var file_data = $('#book_img_reg').prop('files')[0];
							var form_data = new FormData();
							form_data.append('file', file_data)
	
							$.ajax({
								url : 'upload.php?f1=books&f2=imgs', // point to server-side PHP script
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
						
						//file to be uploaded
						if(book_file!==""){
							var file_data = $('#book_file_reg').prop('files')[0];
							var form_data = new FormData();
							form_data.append('file', file_data)
	
							$.ajax({
								url : 'upload.php?f1=books&f2=files', // point to server-side PHP script
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




//get book information by id
$('body').on('click', '.delete_book', function() {
    //alert("hh");
    var book_id=$(this).attr('id');
     swal({
         title: "Are you sure?",
         text: "Delete!",
         type: "warning",
         showCancelButton: true,
         confirmButtonColor: "#DD6B55",
         confirmButtonText: "Yes, delete!",
         closeOnConfirm: false },
       	 function(){
			
	
	        var data="book_id="+book_id+"&todo=deleteBook";
	        alert(data);
	        $.ajax({
	            type: "POST",
	            url: 'server/book.php',
	            data: data, // appears as $_GET['id'] @ ur backend side
	            success: function (data) {
	                var jsonData = JSON.parse(data);
	                if(data!=="ERROR") {
	                	console.log(jsonData);
	                   swal({
		                        title: "Book Has Been Deleted Successfully",
		                        text: "SUCCESS",
		                        type: "success"
		                    });
	                }else{
	                    swal({
	                        title: "Failed",
	                        text: "Can't Return Book Information",
	                        type: "error"
	                    });
	                }
	            }
	        });
	     }
	);	     

});

