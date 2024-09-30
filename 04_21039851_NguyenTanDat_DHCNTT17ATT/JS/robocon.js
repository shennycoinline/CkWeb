$(document).ready(function(){
    var i = 1;
    $("#btnDK").click(function(){
        $("#myModal").modal();
    })

    function checkMa() {
        var reg = /^K17-\d{9}$/;

        if($("#txtMa").val()==""){
            $("#tbMa").html("*Bắt buộc nhập!");
            $("#tbMa").addClass("red");
            return false;
        } else 
        if (!reg.test($("#txtMa").val())){
            $("#tbMa").html("Kí tự K in hoa, x là chữ số không rỗng!");
            $("#tbMa").addClass("red");
            return false;
        } else {
            $("#tbMa").html("*");
            $("#tbMa").removeClass("red");
            return true;
        }
    };
    $("#txtMa").blur(checkMa);

    function checkHoten() {
        var reg = /^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/;

        if($("#txtHT").val()==""){
            $("#tbHT").html("*Bắt buộc nhập!");
            $("#tbHT").addClass("red");
            return false;
        } else 
        if (!reg.test($("#txtHT").val())){
            $("#tbHT").html("Chữ đầu phải viết hoa, không dùng số rỗng!");
            $("#tbHT").addClass("red");
            return false;
        } else {
            $("#tbHT").html("*");
            $("#tbHT").removeClass("red");
            return true;
        }
    };
    $("#txtHT").blur(checkHoten);

    function checkLop() {
        var reg = /^[A-Z0-9]{11}$/;

        if($("#txtLop").val()==""){
            $("#tbLop").html("*Bắt buộc nhập!");
            $("#tbLop").addClass("red");
            return false;
        } else 
        if(!reg.test($("#txtLop").val())){
            $("#tbLop").html("Các kí tự đều in hoa và gồm 11 kí tự!");
            $("#tbLop").addClass("red");
            return false;
        } else {
            $("#tbLop").html("*");
            $("#tbLop").removeClass("red");
            return true;
        }
    };
    $("#txtLop").blur(checkLop);

    // var joinDate = $("#txtNgay").val();
    // if(ValidjoinDate(joinDate)){
    //     alert("Ngày tham gia hợp lệ");
    // } else {
    //     alert("Ngày tham gia không hợp lệ. Vui lòng thử lại!");
    // }
    // function checkNgay(date) {
    //     if(date == ""){
    //         return false;
    //     }
    //     var currentDate = new Date();
    //     var selectDate = new Date(date);
    //     var thirtyDate = new Date(currentDate.getTime() - 30 * 24 * 24 * 60 * 1000);

    //     return selectDate <= currentDate && selectDate >= thirtyDate;
    // };
    // $("#txtNgay").blur(checkNgay);

    function checkSDT(){
        var reg = /^0\d{3}-\d{3}-\d{3}$/;

        if($("#txtSDT").val()==""){
            $("#tbSDT").html("*Bắt buộc nhập!");
            $("#tbSDT").addClass("red");
            return false;
        } else 
        if (!reg.test($("#txtSDT").val())){
            $("#tbSDT").html("Bắt đầu bằng số 0 và đằng sau nhập đúng định dạng!");
            $("#tbSDT").addClass("red");
            return false;
        } else {
            $("#tbSDT").html("*");
            $("#tbSDT").removeClass("red");
            return true;
        }
    };
    $("#txtSDT").blur(checkSDT);

    function checkEmail() {
        var reg = /^[A-Za-z0-9]\w*@iuh\.edu\.vn$/;

        if($("#txtEmail").val()==""){
            $("#tbEmail").html("*Bắt buộc nhập!");
            $("#tbEmail").addClass("red");
            return false;
        } else 
        if (!reg.test($("#txtEmail").val())){
            $("#tbEmail").html("Ký tự đầu dùng chữ, đúng định dạng!");
            $("#tbEmail").addClass("red");
            return false;
        } else {
            $("#tbEmail").html("*");
            $("#tbEmail").removeClass("red");
            return true;
        }
    };
    $("#txtEmail").blur(checkEmail);

    $("#btnLuu").click(function(){
        var ma = $("#txtMa").val();
        var ht = $("#txtHT").val();
        var lop = $("#txtLop").val();
        var ngay = $("#txtNgay").val();
        var sdt = $("#txtSDT").val();
        var email = $("#txtEmail").val();
        var them = "<tr><td>" + (i++) + "</td><td>" + ma + "</td><td>" + ht + "</td><td>"
        + lop + "</td><td>" + ngay + "</td><td>" + sdt + "</td><td>" + email + "</td></tr>";
        $("table").append(them);
        $("#myModal").modal("hide");
        return true;
    });
});