<template>
    <div id = "Premium" class = "Premium">
        <div class ="PremiumTopText">
            <p id = PremiumTopText>
                풀다 프리미엄 서비스로<br>
                AI 맞춤형 학습부터<br>동기부여까지! 
            </p>
        </div>
        <div class="Chart">
            <div class ="DownChart">
                <p id="DownChartTopText">교재로만 공부한 학생</p>
                <img id="DownChartImg" src="../img/Premium/DownChart.png" />
                <p id="DownChartBottomText">점점 낮아지는 동기부여</p>
            </div>
            <div class ="PuldaChart">
                <p id="PuldaChartTopText">꾸준히 풀다를 사용한 학생</p>
                <img id="PuldaChartImg" src="../img/Premium/PuldaChart.png" />
                <p id="PuldaChartBottomText">자신감과 동기부여 상승</p>
            </div>
        </div>
        <div class ="Subscribe">
            <button id= "SubscribeButton" 
                type="button" 
                onclick="location.href='https://pulda.net/premium-service/guide'">
                서비스 혜택 더보기
            </button>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
    .Premium{
        width: 360px;
        height:847px;
        text-align: left;
        background-color: #F8FAFC;
        margin-top: 126px;
    }
    #PremiumTopText{
        font-family: Pretendard;
        font-size: 32px;
        font-weight: 700;
        line-height:50px;
        letter-spacing: 0em;
        text-align: center;
        padding-top: 110px;
    }
    .Chart{
        margin-top: 40px;
        display: flex;
    }
    .DownChart{
        background-color: #fff;
        width: 261px;
        height: 339px;
        border-radius: 20px;
        box-shadow: 3px 20px 46px 0px #777A9433;

       
    }
    #DownChartTopText{
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        margin-top: 20px;
        text-align: center;
    }
    #DownChartImg{
        margin-top: 15px;
        margin-left: 50px;
        margin-right: 50px;
        height: 225px;
        width: 161px;
    }
    #DownChartBottomText{
        margin-top: 16px;
        font-family: Pretendard;
        font-size: 22px;
        font-weight: 700;
        line-height: 26px;
        color: #7F8B93;
        text-align: center;
    }
    .PuldaChart{
        background-color: #fff;
        width: 261px;
        height: 339px;
        border-radius: 20px;
        box-shadow: 3px 20px 46px 0px #777A9433;
    }

    #PuldaChartTopText{
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        margin-top: 20px;
        text-align: center;
        color: #2A4FD4;
    }
    #PuldaChartImg{
        margin-top: 15px;
        margin-left: 50px;
        margin-right: 50px;
        height: 225px;
        width: 161px;
    }
    #PuldaChartBottomText{
        margin-top: 16px;
        font-family: Pretendard;
        font-size: 22px;
        font-weight: 700;
        line-height: 26px;
        color: #7F8B93;
        text-align: center;
        color: #2A4FD4;
    }
    #SubscribeButton{
        width:197px;
        height: 54px;
        box-shadow: 0px 5px 15px 0px #266FFC33 20%;
        border: none;
        background-color: #2A4FD4;
        border-radius: 50px;
        font-family: Pretendard;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        margin-top: 45px;
        margin-left: 81px;
    }
</style>