<template>
    <div class = "Premium">
        <div class ="PremiumTopText">
            <p id = PremiumTopText>
                풀다 프리미엄 서비스로<br>
                AI 맞춤형 학습부터 동기부여까지! 
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
            <div class ="Subscribe">
                <button type="button" onclick="location.href='https://pulda.net/premium-service/guide'">
                    서비스 혜택 더보기
                </button>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
    .Premium{
        width: 1920px;
        height: 1235px;
        text-align: left;
        background-color: blanchedalmond;
    }
    #PremiumTopText{
        font-family: Pretendard;
        font-size: 50px;
        font-weight: 700;
        line-height: 100px;
        text-align: center;
        padding-top: 157px;
    }
    .Chart{
        margin-top: 45px;
    }
    .DownChart{
        background-color: #fff;
        width: 440px;
        height: 481px;
        border-radius: 20px;
        box-shadow: 3px 20px 46px 0px #777A9433;
        margin-left: 440px;
    }
    .PuldaChart{
        background-color: #fff;
        width: 440px;
        height: 481px;
        border-radius: 20px;
        box-shadow: 3px 20px 46px 0px #777A9433;
        margin-left: 1024px;
    }
</style>