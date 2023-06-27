walkw = 0;
walkx = 0;
walky = 0;
walkz = 0;

$("#btnUp").click(Up);
$("#btnRight").click(Right);
$("#btnDown").click(Down);
$("#btnLeft").click(Left);


    function Up() {
        walkw +=20;
        $("#img3").animate({ top: walkw + "px" }, { duration: 200 });
    }

    function Right() {
        walkx +=20;
        $("#img3").animate({ left: walkx + "px" }, { duration: 200 });
    }

    function Down() {
        walky +=20;
        $("#img3").animate({ top: walky + "px" }, { duration: 200 });
    }

    function Left() {
        walkz +=20;
        $("#img3").animate({ left: walkz + "px" }, { duration: 200 });
    }