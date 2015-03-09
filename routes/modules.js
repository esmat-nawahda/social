/**
 * Created by GeniuCode Pointer on 2/24/2015.
 */
//    When a href clicked
$('a').click(function(e){

    var href = this.href;  // get href from link
    e.preventDefault();  // don't follow the link
    //alert(href);
    document.location = href;  // redirect browser to link

});
//return my data
getMyData();

//Modules
var homeModule = {
    goHome: function() {
        $('#main_container').load('pages/body/body.php').show();
     
    }
};

var adminModule = {
    insert: function() {
        $('#main_container').load('pages/admin/admin_insert.php').show();
    },
    list: function() {
        $('#main_container').load('pages/admin/admin_list.php').show();
        getAllAdmins();
    }
};

var bookModule = {
    insert: function() {
        $('#main_container').load('pages/book/book_insert.php').show();
    },
    list: function() {
        $('#main_container').load('pages/book/book_list.php').show();
        getAllBooks();
    }
};

var adModule = {
    insert: function() {
        $('#main_container').load('pages/ad/ad_insert.php').show();
    },
    list: function() {
        $('#main_container').load('pages/ad/ad_list.php').show();
        getAllAds();
    }
};



