<?php session_start();


include_once("DB.php");
$GLOBALS['db']=new DB($host,$username,$password,$database);


class ad extends DB {
    private $todo;

    public function __construct(){
        $this->todo=$_POST['todo'];
        $this->dispatcher($this->todo);
    }

    public function dispatcher($todo){
        switch($todo){
            case "getAllAds":
                $this->getAllAds();
                break;
            case "getAdInfo":
                $this->getAdInfo();
                break;
            case "getAdsNumber":
                $this->getAdsNumber();
                break;
           case "getAdsByPageNumber":
                $this->getAdsByPageNumber();
                break;



        }
    }



    protected function getAllAds(){
        $_SESSION['filter']='1=1';
        $sql='select * from ads order by id desc limit 9';
        $result=$GLOBALS['db']->db_query($sql);

        $total=array();
        while($row = $GLOBALS['db']->db_assoc($result)){
            array_push($total, $row);
        }
        print(json_encode($total));
    }

    protected function getAdInfo(){
        $ad_id=$_POST['id'];
        $sql='select title,content from ads where id='.$ad_id;
        $result=$GLOBALS['db']->db_query($sql);
        $row = $GLOBALS['db']->db_assoc($result);

        print(json_encode($row));
    }

    protected function getAdsNumber(){
        $sql='select count(id) as numOfAds from ads where '.$_SESSION['filter'] ;
        $result=$GLOBALS['db']->db_query($sql);
        $row = $GLOBALS['db']->db_assoc($result);

        print(json_encode($row));
    }

   protected function getAdsByPageNumber(){
        $pageNum=$_POST['page'];
        $pageNum=abs(intval($pageNum)-1);
        $offset=$pageNum*9;



//        print(json_encode($offset));

        $sql='select * from ads order by id desc limit 9 offset '.$offset;
        $result=$GLOBALS['db']->db_query($sql);

        $total=array();
        while($row = $GLOBALS['db']->db_assoc($result)){
            array_push($total, $row);
        }
        print(json_encode($total));
    }
   



}

$ad_obj=new ad();


?>
