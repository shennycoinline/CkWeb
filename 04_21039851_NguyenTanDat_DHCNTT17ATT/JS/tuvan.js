$(document).ready(function(){
    var i = 1;
    $("#btnDat").click(function(){
        $("#myModal").modal();
    })

    function checkMa() {
        var reg = /^BN-[0-9]{5}$/;

        if($("#txtMa").val()=="") {
            $("#tbMa").html("*Bắt buộc nhập!");
            $("#tbMa").addClass("red");
            return false;
        } else 
        if (!reg.test($("#txtMa").val())){
            $("#tbMa").html("BN cố định, YYYYY là 5 chữ số!");
            $("#tbMa").addClass("red");
            return false;
        } else {
            $("#tbMa").html("*");
            $("#tbMa").removeClass("red");
            return true;
        }
    };
    $("#txtMa").blur(checkMa);

    function checkMK() {
        var reg = /^[a-zA-Z0-9]{6,}$/;

        if($("#txtMK").val()==""){
            $("#tbMK").html("*Bắt buộc nhập!");
            $("#tbMK").addClass("red");
            return false;
        } else 
        if (!reg.test($("#txtMK").val())){
            $("#tbMK").html("Chứa 6 ký tự bất kỳ trở lên!");
            $("#tbMK").addClass("red");
            return false;
        } else {
            $("#tbMK").html("*");
            $("#tbMK").removeClass("red");
            return true;
        }
    };
    $("#txtMK").blur(checkMK);

    function checkNgay() {
        var ht = new Date();
        var tl = new Date(ht);
        tl.setDate(ht.getDate() + 1);
        if(ht == tl) {
            $("#tbNgay").html("Ngày hiện tại trùng ngày hôm sau");
            $("#tbNgay").addClass("red");
            return false;
        } else {
            $("#tbNgay").html("*");
            $("#tbNgay").removeClass("red");
            return true;
        }
    };
    $("#txtNgay").blur(checkNgay);

    function checkDV(){
        var gia = 500000; //Giá trị phụ thu cho mỗi loại dịch vụ

        $('input[name="DV"]').change(function(){
            var total = 0;

            $('input[name="DV"]:checked').each(function(){
                total += gia;
            });
            $("#total-price").text('Giá trị phụ thu: ' + total + ' đồng');
        });
    };
    $("#txtDV").blur(checkDV);

    $("#btnDatlich").click(function(){
        var ma = $("#txtMa").val();
        var mk = $("#txtMK").val();
        var ngay = $("#txtNgay").val();
        var dv = $("#txtDV").val();
        var ck = $("#txtCK").val();
        var them = "<tr><td>" + (i++) + "</td><td>"
        + ma + "</td><td>" + mk + "</td><td>" + ngay + "</td><td>"
        + dv + "</td><td>" + ck + "</td></tr>";
        $("table").append(them);
        $("#myModal").modal("hide");
        return true;
    });
});