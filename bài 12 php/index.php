
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Thực hành PHP</title>
</head>
<body>
    <h1>Bài thực hành PHP số 12</h1>

    <?php
        // In ra màn hình
        echo "Hello World!";
        echo "<br>";

        // Biến
        $hoten = "Nguyen Kim Kien";
        $tuoi = 20;

        // Nối chuỗi
        echo $hoten . " - Tuổi: " . $tuoi;
        echo "<br>";

        // Toán tử
        $sothu1 = 10;
        $sothu2 = 20;

        $tong = $sothu1 + $sothu2;
        echo "Tổng hai số: " . $tong;
        echo "<br>";

        // Toán tử gán
        $sothu1 += $sothu2;
        echo "Kết quả sau khi cộng: " . $sothu1;
        
        $diem = 5;
        if ($diem >= 4 && $diem < 5) {
            echo "D";
        } elseif($diem >= 5) && $diem <7 {
            echo "C";
        } elseif($diem >= 7) && $diem <9 {
            echo "B";
        } else {
            echo "A";
        }
    ?>
</body>
</html>
