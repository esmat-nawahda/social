/**
 * Created by GeniuCode Pointer on 2/25/2015.
 */
function trimString(str){
    var length = 30;
    var trimmedString = str.substring(0, length)+"...";
    return trimmedString
}

function nl2br (str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

function br2nl(str) {
    return str.replace(/<br\s*\/?>/mg,"\n");
}


function getMyData(){
        var data="todo=getMyData";
  
        $.ajax({
            type: "POST",
            url: 'server/admin.php',
            data: data, // appears as $_GET['id'] @ ur backend side
            success: function (data) {
                var jsonData = JSON.parse(data);
                console.log(jsonData);
                if(data!=="ERROR") {

                    $(".logged_in_admin").html(jsonData.fullname);
                    $(".logged_in_img").attr("src",'uploads/admins/imgs/'+jsonData.img);
                    
                }else{
                    swal({
                        title: "Failed",
                        text: "Can't Return Your Personal Information",
                        type: "error"
                    });
                }
            }
        });

}


