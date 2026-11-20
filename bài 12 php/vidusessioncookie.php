<?php
    // Session
    session_start(); //bắt đầu session
    $_SESSION['hoten'] = "Nguyen Kim Kien"; //khởi tạo

    echo "Họ tên: " . $_SESSION['hoten'];
    //2. Cookie
    $cookie_name = "user";
    $cookie_value = "Nguyen Kim Kien";

    setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
    if(!isset($_COOKIE[$cookie_name])) {
        echo "Cookie named '" . $cookie_name . "' is not set!";
    } else {
        echo "Cookie '" . $cookie_name . "' is set!<br>";
        echo "Value is: " . $_COOKIE[$cookie_name];
    }
?>