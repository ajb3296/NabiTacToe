nowTeam = "O"
/*
window.onload = function(){
    //반복제거, url
    document.getElementById("body").style.backgroundRepeat = "no-repeat";
    //이미지 등록
    document.getElementById("body").style.backgroundImage = "url('img/nabi_forhead.png')";
    //이미지 사이즈
    document.getElementById("body").style.backgroundSize = "1500px";

    document.getElementById("body").style.backgroundPosition = "10% 0%";
}
*/


function resetBoard() {
    document.getElementById("a1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";

    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";

    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";

    document.getElementById("a1").style.cursor = "pointer";
    document.getElementById("a2").style.cursor = "pointer";
    document.getElementById("a3").style.cursor = "pointer";

    document.getElementById("b1").style.cursor = "pointer";
    document.getElementById("b2").style.cursor = "pointer";
    document.getElementById("b3").style.cursor = "pointer";

    document.getElementById("c1").style.cursor = "pointer";
    document.getElementById("c2").style.cursor = "pointer";
    document.getElementById("c3").style.cursor = "pointer";
}

function clickBox(boxid) {
    if (document.getElementById(boxid).innerHTML === "") {
        document.getElementById(boxid).innerHTML = nowTeam;
        document.getElementById(boxid).style.cursor = "default";
        if (nowTeam === "O") {
            nowTeam = "X"
        } else {
            nowTeam = "O"
        }
        document.getElementById("nextTurnTxt").innerHTML = nowTeam + " Turn";

        winner = ""
        const a1 = document.getElementById("a1").innerHTML;
        const a2 = document.getElementById("a2").innerHTML;
        const a3 = document.getElementById("a3").innerHTML;

        const b1 = document.getElementById("b1").innerHTML;
        const b2 = document.getElementById("b2").innerHTML;
        const b3 = document.getElementById("b3").innerHTML;

        const c1 = document.getElementById("c1").innerHTML;
        const c2 = document.getElementById("c2").innerHTML;
        const c3 = document.getElementById("c3").innerHTML;

        if (((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3) || (a1 == b2 && a1 == c3)) && a1 != "") {
            winner = a1;
        } else if (((b2 == b1 && b2 == b3) || (b2 == a2 && b2 == c2) || (b2 == a3 && b2 == c1)) && b2 != "") {
            winner = b2;
        } else if (((c3 == c2 && c3 == c1) || (c3 == a3 && c3 == b3)) && c3 != "") {
            winner = c3;
        } else if (a1 != "" && a2 != "" && a3 != "" && b1 != "" && b2 != "" && b3 != "" && c1 != "" && c2 != "" && c3 != "") {
            winner = "reset";
        }

        if (winner != "") {
            if (winner === "reset") {
                document.getElementById("popup_container_txt").innerHTML = "Tie"
                call_popup();
            } else {
                if (winner === "O") {
                    document.getElementById("oCounter").innerHTML = Number(document.getElementById("oCounter").innerHTML) + 1
                } else {
                    document.getElementById("xCounter").innerHTML = Number(document.getElementById("xCounter").innerHTML) + 1
                }
                document.getElementById("popup_container_txt").innerHTML = winner + " Win!"
                call_popup();
            }
            resetBoard();
        }
    }
}

function bodyFull(){
    /* display 값 확인 */
    var tagId = document.getElementById("body_full");
    var display = window.getComputedStyle(tagId).display;

    if(display == "none"){
        tagId.style.display = "block";
    }
    else {
        tagId.style.display = "none";
    }
}

/* 팝업창 호출 이벤트 함수 정의 */
function call_popup() {
    /* display 값 확인 */
    var tagId = document.getElementById("popup_container");
    var display = window.getComputedStyle(tagId).display;

    if(display == "none"){
        tagId.style.display = "block";
    }
    else {
        tagId.style.display = "none";
    }
    
    /* body 영역 투명도 표시 함수 호출 */
    bodyFull();
}