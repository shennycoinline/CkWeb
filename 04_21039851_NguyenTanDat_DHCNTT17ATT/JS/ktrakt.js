$(document).ready(function(){
    var i = 1;
    $("#btnTT").click(function(){
        $("#myModal").modal();
    })
    // function checkKh() {
    //     var selected = $("input[name=khach]:checked").val();
    //     if(selected) {
    //         $("#tbKH").html("Khách hàng " + selected + " hợp lệ");
    //         return true;
    //     } else {
    //         $("#tbKH").html("Vui lòng chọn loại khách hàng!");
    //         return false;
    //     }
    // };
    // $("#txtkh").blur(checkKh);

    function checkMaKH() {
        var reg = /^PE160000\d{4}(DN|GD)$/;
        
        if($("#txtMakh").val()==""){
            $("#tbMakh").html("*Bắt buộc nhập!");
            $("#tbMakh").addClass("red");
            return false;
        } else 
        if (!reg.test($("#txtMakh").val())){
            $("#tbMakh").html("Nhập đúng mẫu PE1600001234(DN|GD)");
            $("#tbMakh").addClass("red");
            return false;
        } else {
            $("#tbMakh").html("*");
            return true;
        }
    };
    $("#txtMakh").blur(checkMaKH);

    function checkHoten() {
        var reg = /^[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)+$/;
        if($("#txthoten").val()==""){
            $("#tbhoten").html("*Bắt buộc nhập!");
            $("#tbhoten").addClass("red");
            return false;
        } else 
        if(!reg.test($("#txthoten").val())){
            $("#tbhoten").html("*Ký tự đầu tiên phải viết hoa, và có 1 khoảng trắng!");
            $("#tbhoten").addClass("red");
            return false;
        } else {
            $("#tbhoten").html("*");
            return true;
        }
    };
    $("#txthoten").blur(checkHoten);

    function checkThanhToan() {
        var selectedMonth = parseInt($('#txtthang').val());
        var currentMonth = new Date().getMonth() + 1;

        if(selectedMonth > currentMonth){
            $('#tbthang').html("Chưa tới kỳ thanh toán!");
            $("#tbthang").addClass("red");
            return false;
        } else {
            $("#tbthang").html("Chỉ số tiêu thụ của tháng" + selectedMonth);
            return true;
        }
    };
    $("#txtthang").blur(checkThanhToan);
    $("#txtthang").change(function() {
        $("#txtthang option:selected").each(function() {
            alert($(this).val());
            $("#txtchiso").val($(this).val());
        });
    });

    $("#btnThanh").click(function() {
        var kh = $("#txtkh").val();
        var ma = $("#txtMakh").val();
        var hoten = $("#txthoten").val();
        var ttoan = $("#txtthang").val();
        var chiso = $("#txtchiso").val();
        var km = $("#txtkm").val();
        var them = "<tr><td>" + (i++) + "</td><td>" + kh + "</td><td>" + ma + "</td><td>" + hoten + "</td><td>"
        + ttoan + "</td><td>" + chiso + "</td><td>" + km + "</td></tr>";
        $("table").append(them);
        $("#myModal").modal("hide");
        return true;
    });
});