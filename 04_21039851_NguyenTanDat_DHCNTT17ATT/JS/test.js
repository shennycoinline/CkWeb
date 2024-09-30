function ktMaKH(){
    let MaKH=document.getElementById('txtmakh').value;
}

function ktHoten(){
    let patten=/^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
    if($("#txtmakh").val() == "") {
        $("#erMaKH").html("*Bắc buộc nhập !!");
        $("#erMaKH").addClass("red");
        return false;
    } else
    if (!patten.test($("#txtmakh").val())){
        $("#erMaKH").html("*Chữ cái đầu của mỗi từ phải viết hoa!");
        $("#erMaKH").addClass("red");
        return false;
    } else {
        $("#erMaKH").html("*");
        return true;
    }
};
$("#txtmakh").blur(ktHoten);

var STT=1;
function thanhtoan(){
    let hoten=document.getElementById('txthoten').value;

    if(ktHoten()){
        let trnew="<tr><td>"+STT+"</td><td>"+hoten+"</td></tr>";
        document.getElementById('tbl').innerHTML+=trnew;
        STT++;
    }
}