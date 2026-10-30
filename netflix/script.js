var danhSachVid = [
        {
            id: 1,
            ten: "Tiếng yêu này anh dịch được không?",
            duongDanAnh: "../bài 5 html/dongvat1.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/tNZG1aLBATY?si=KzrFUt3lqicHTGF2"
        },
        {
            id: 2,
            ten: "SSD",
            duongDanAnh: "../bài 5 html/dongvat1.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/HXWRTGbhb4U?si=PXTh51YQKy8MO2fR"

        },
        {
            id: 3,
            ten: "Âm thầm bên em",
            duongDanAnh: "../bài 5 html/dongvat1.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/ECy8UAT2tgg?si=uOQcBYSnDHVLj4K2"

        },
        {
            id: 4,
            ten: "Tìm em",
            duongDanAnh: "../bài 5 html/dongvat1.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/xpngc71-FCc?si=-3V_szGicJvL-ZjY"

        },
        {
            id: 5,
            ten: "Tìm em",
            duongDanAnh: "../bài 5 html/dongvat1.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/6r2hYdW2g0U?si=H_xvBaL10ZDknu3F"

        }, 
    ];

    function chonPhim(id){
        for (let i= 0; i < danhSachVid.length; i++){
            if(danhSachVid[i].id ==id){
                document.getElementsByClassName("video")[0].src =danhSachVid[i].duongDanYoutube
            }
        }

    }