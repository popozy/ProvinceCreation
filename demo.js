/**
 * @Author:      Kapon Leo
 * @DateTime:    2016-05-06 19:58:49
 * @Description: basic logic and operation of dom
 */

//15 data of the table1
var t1l3 = new Array(15);
var t1l2 = new Array(9);

document.getElementById('btn-cal').addEventListener("click", function(){
    // alert("hello world");
    //
    // get table1 level3 data value
    for(var i = 0; i < 15; i++){
        t1l3[i] = document.getElementsByClassName('lv3')[i].value;
        //check
        // console.log(t1l3[i]);
    }

    //evaluate && score
    if(t1l3[0]>126.55) t1l3[0] = 10;
    else if(t1l3[0]> 97.2 && t1l3[0] <= 126.55) t1l3[0] = 8;
    else if(t1l3[0]> 72.5 && t1l3[0] <= 97.2) t1l3[0] = 6;
    else if(t1l3[0]> 53.65 && t1l3[0] <= 72.5) t1l3[0] = 4;
    else t1l3[0] = 2;


    if(t1l3[1]>10.85) t1l3[1] = 10;
    else if(t1l3[1]> 5.15 && t1l3[1] <= 10.85) t1l3[1] = 8;
    else if(t1l3[1]> 2.7 && t1l3[1] <= 5.15) t1l3[1] = 6;
    else if(t1l3[1]> 1.85 && t1l3[1] <= 2.7) t1l3[1] = 4;
    else t1l3[1] = 2;


    if(t1l3[2]>17.75) t1l3[2] = 10;
    else if(t1l3[2]> 13.10 && t1l3[2] <= 17.75) t1l3[2] = 8;
    else if(t1l3[2]> 8.20 && t1l3[2] <= 13.10) t1l3[2] = 6;
    else if(t1l3[2]> 5.00 && t1l3[2] <= 8.20) t1l3[2] = 4;
    else t1l3[2] = 2;


    if(t1l3[3]>19.90) t1l3[3] = 10;
    else if(t1l3[3]> 8.75 && t1l3[3] <= 19.90) t1l3[3] = 8;
    else if(t1l3[3]> -2.40 && t1l3[3] <= 8.75) t1l3[3] = 6;
    else if(t1l3[3]> -13.55 && t1l3[3] <= -2.40) t1l3[3] = 4;
    else t1l3[3] = 2;

    if(t1l3[4]> 7.35) t1l3[4] = 10;
    else if(t1l3[4]> 3.75 && t1l3[4] <= 7.35) t1l3[4] = 8;
    else if(t1l3[4]> 0.85 && t1l3[4] <= 3.75) t1l3[4] = 6;
    else if(t1l3[4]> -6.25 && t1l3[4] <= 0.85) t1l3[4] = 4;
    else t1l3[4] = 2;

    if(t1l3[5]>10.10) t1l3[5] = 10;
    else if(t1l3[5]> 5.00 && t1l3[5] <= 10.10) t1l3[5] = 8;
    else if(t1l3[5]> -0.4 && t1l3[5] <= 5.00) t1l3[5] = 6;
    else if(t1l3[5]> -8.35 && t1l3[5] <= -0.4) t1l3[5] = 4;
    else t1l3[5] = 2;

    if(t1l3[6]>160.50) t1l3[6] = 10;
    else if(t1l3[6]> 14.80 && t1l3[6] <= 160.50) t1l3[6] = 8;
    else if(t1l3[6]> -131.00 && t1l3[6] <= 14.80) t1l3[6] = 6;
    else if(t1l3[6]> -276.60 && t1l3[6] <= -131.00) t1l3[6] = 4;
    else t1l3[6] = 2;

    if(t1l3[7]<=57.50) t1l3[7] = 10;
    else if(t1l3[7]<= 62.50 && t1l3[7] > 57.50) t1l3[7] = 8;
    else if(t1l3[7]<= 70.00 && t1l3[7] > 62.50) t1l3[7] = 6;
    else if(t1l3[7]<= 82.50 && t1l3[7] > 70.00) t1l3[7] = 4;
    else t1l3[7] = 2;

    if(t1l3[8]>3.84) t1l3[8] = 10;
    else if(t1l3[8]> 3.00 && t1l3[8] <= 3.84) t1l3[8] = 8;
    else if(t1l3[8]> 1.85 && t1l3[8] <= 3.00) t1l3[8] = 6;
    else if(t1l3[8]> 1.00 && t1l3[8] <= 1.85) t1l3[8] = 4;
    else t1l3[8] = 2;

    if(t1l3[9]>3708) t1l3[9] = 10;
    else if(t1l3[9]> 2600 && t1l3[9] <= 3780) t1l3[9] = 8;
    else if(t1l3[9]> 1493 && t1l3[9] <= 2600) t1l3[9] = 6;
    else if(t1l3[9]> 385 && t1l3[9] <= 1493) t1l3[9] = 4;
    else t1l3[9] = 2;

    if(t1l3[10]>9) t1l3[10] = 10;
    else if(t1l3[10]> 7 && t1l3[10] <= 9) t1l3[10] = 8;
    else if(t1l3[10]> 5 && t1l3[10] <= 7) t1l3[10] = 6;
    else if(t1l3[10]> 3 && t1l3[10] <= 5) t1l3[10] = 4;
    else t1l3[10] = 2;

    if(t1l3[11] == 4) t1l3[11] = 10;
    else if(t1l3[11] == 3) t1l3[11] = 8;
    else if(t1l3[11] == 2) t1l3[11] = 6;
    else if(t1l3[11] == 1) t1l3[11] = 4;
    else if(t1l3[11] == 0) t1l3[11] = 2;
    else{
        alert("invalid parameter!!!");
        alert(t1l3[11]);
    }

    if(t1l3[12]>66.20) t1l3[12] = 10;
    else if(t1l3[12]> 58.60 && t1l3[12] <= 66.20) t1l3[12] = 8;
    else if(t1l3[12]> 51.00 && t1l3[12] <= 58.60) t1l3[12] = 6;
    else if(t1l3[12]> 43.30 && t1l3[12] <= 51.00) t1l3[12] = 4;
    else t1l3[12] = 2;

    if(t1l3[13]>11) t1l3[13] = 10;
    else if(t1l3[13]> 9 && t1l3[13] <= 11) t1l3[13] = 8;
    else if(t1l3[13]> 7 && t1l3[13] <= 9) t1l3[13] = 6;
    else if(t1l3[13]> 5 && t1l3[13] <= 7) t1l3[13] = 4;
    else t1l3[13] = 2;

    if(t1l3[14] == 0) t1l3[14] = 10;
    else if(t1l3[14] == 1) t1l3[14] = 8;
    else if(t1l3[14] == 2) t1l3[14] = 6;
    else if(t1l3[14] == 3) t1l3[14] = 4;
    else if(t1l3[14] == 4) t1l3[14] = 2;
    else{
        alert(t1l3[14]);
        alert("invalid parameter!!!");
    }
    //calculate average value of 15 data
    //fill them in level2
    t1l2[0] = (t1l3[0]+t1l3[1]+t1l3[2])/3;
    t1l2[1] = (t1l3[3]+t1l3[4]+t1l3[5]+t1l3[6])/4;
    t1l2[2] = t1l3[7];
    t1l2[3] = (t1l3[8] +t1l3[9])/2;
    t1l2[4] = t1l3[10];
    t1l2[5] = t1l3[11];
    t1l2[6] = t1l3[12];
    t1l2[7] = t1l3[13];
    t1l2[8] = t1l3[14];

    var str = new Array(9);
    str[0] = document.getElementsByClassName('lv2-1');
    str[1] = document.getElementsByClassName('lv2-2');
    str[2] = document.getElementsByClassName('lv2-3');
    str[3] = document.getElementsByClassName('lv2-4');
    str[4] = document.getElementsByClassName('lv2-5');
    str[5] = document.getElementsByClassName('lv2-6');
    str[6] = document.getElementsByClassName('lv2-7');
    str[7] = document.getElementsByClassName('lv2-8');
    str[8] = document.getElementsByClassName('lv2-9');
    // for(var i = 0; i < 9; i++){
    //     var child = str[i].childNodes;
    //     for(var j = child.length-1; j >= 0; j--){
    //         str[i].removeChild(child[i]);
    //     }
    // }
    // str.innerHTML += t1l2[0];


    var d = new Array(3);
    d[0] = (t1l2[0]*0.0882+t1l2[1]*0.1603+t1l2[2]*0.0485)/3;
    d[1] = (t1l2[3]*0.1239+t1l2[4]*0.0685+t1l2[5]*0.3498)/3;
    d[2] = (t1l2[6]*0.0485+t1l2[7]*0.0267+t1l2[8]*0.0882)/3;
    var mul = d[0]*d[1]*d[2];
    var res = Math.pow(mul, 1/3);
    var pivo;
    var final_eva;

    if(res<= 1.2691 && res > 1.0788){
        pivo = (res-1.0788)/(1.2691-res);
        if(pivo > 0.5)  final_eva = "等级：AAA; 信用记录：信用极好； 信用能力：很强； 风险程度：几乎无风险。";
        else final_eva = "等级：AA; 信用记录：信用良好； 信用能力：可靠； 风险程度：基本无风险。";
    }
    else if(res <= 1.0788 && res > 0.9518){
        pivo = (res - 0.9518)/(1.0788-res);
        if(pivo > 0.5)  final_eva = "等级：AA; 信用记录：信用良好； 信用能力：可靠； 风险程度：基本无风险。";
        else final_eva = "等级：A; 信用记录：信用较好； 信用能力：较稳定； 风险程度：风险较小。";
    }
    else if(res <= 0.9518 && res > 0.7615){
        pivo = (res - 0.7615)/(0.9518 - res);
        if(pivo > 0.5) final_eva = "等级：A; 信用记录：信用较好； 信用能力：较稳定； 风险程度：风险较小。";
        else final_eva = "等级：BBB; 信用记录：信用一般； 信用能力：基本具备，容易产生一定波动； 风险程度：有一定风险。";
    }
    else if(res <= 0.7612 && res > 0.6345){
        pivo = (res - 0.6345)/(0.7612 - res);
        if(pivo > 0.5) final_eva = "等级：BBB; 信用记录：信用一般； 信用能力：基本具备，容易产生一定波动； 风险程度：有一定风险。";
        else final_eva = "等级：BB; 信用记录：信用欠佳； 信用能力：不稳定，容易产生较大波动； 风险程度：有较大风险。";
    }
    else if(res <= 0.6345 && res > 0.4441){
        pivo = (res - 0.4441)/(0.6345 - res);
        if(pivo) final_eva = "等级：BB; 信用记录：信用欠佳； 信用能力：不稳定，容易产生较大波动； 风险程度：有较大风险。";
        else final_eva = "等级：B; 信用记录：信用较差； 信用能力：较低； 风险程度：有很大风险。";
    }

    var res = document.getElementById('container-2');
    var child = res.childNodes;
    for(var i = child.length-1; i >= 0; i--)
        res.removeChild(child[i]);
    res.innerHTML += "<div>" + final_eva + "</div>";
});

