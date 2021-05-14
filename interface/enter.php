<?php
    include('./library/conn.php');
    $phone = $_REQUEST['phone'];
    $select = "select * from users where phone='$phone'";
    $result = $mysqli->query($select);
    $mysqli->close();
    if($result->num_rows>0){
        // 设置  谁登陆了
        $row = $result->fetch_assoc(); // 从查询结果中获得数据
        echo '<script>alert("登陆成功");</script>';
        echo '<script>location.href="../src/html/homepage.html";</script>';
    }else{
        echo '<script>alert("用户名或密码错误");</script>';
        echo '<script>location.href="../src/html/enter.html";</script>';
    }
?>