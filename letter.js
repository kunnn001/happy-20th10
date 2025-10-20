$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    // DÒNG NÀY ĐÃ THIẾT LẬP HIỆU ỨNG KHI CLICK VÀO PHONG BÌ
    envelope.click(function() { 
        open();
    });
    
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

})
