<?php

include "includes/header.php";
include "includes/db.php";?>

<?php
echo loggedInUserId();

if( userLikedThisPost(69)){
   echo " user liked this post";
}else{
   echo " user did not like ";
}
?>