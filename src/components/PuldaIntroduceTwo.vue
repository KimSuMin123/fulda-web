<template>
    <div class = "IntroduceTwoAndThree">
        <div class="IntroduceTwoAndThreeRight">
            <p id ="IntroduceTwoText">
                무거운 문제집 이제 안녕~ *<br>
                언제 어디서나 풀다 앱으로 몸도 마음도 가볍게<br>
                내신, 모의고사 문제를 풀어봐요.<br>
            </p>
            <img id="IntroduceThreeImg" src="../img/Introduce/Introduce3.png" />
        </div>
        <div class="IntroduceTwoAndThreeLeft">
            <img id="IntroduceTwoImg" src="../img/Introduce/Introduce2.png" />
            <p id = "IntroduceThreeText">
                목표 대학에 갈 수 있도록 맞춤형 문제만 콕<br>
                나의 맞춤형 문제를 단계에 맞추어<br>
                풀다 보면 어느새 목표 대학에 가까워져 있을 거예요.<br>
            </p>
        </div>
    </div>  
</template>
<script>

</script>
<style scoped>
    .IntroduceTwoAndThree{
        width: 1920px;
        height: 1657px; 
    }
    .IntroduceTwoAndThreeLeft{
        background-color: #fff;
        height: 1657px;
        width: 960px;
        float: left;
        text-align: left;
    }
    .IntroduceTwoAndThreeRight{
        background-color:#fff;
        height: 1657px;
        width: 960px;
        float: right;
        text-align: left;
    }
    #IntroduceTwoText{
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        text-align: left;
        margin-top: 207px;
    }
    #IntroduceThreeText{
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        text-align: left;
        margin-top: 293px;
        margin-left: 558px;
    }
    #IntroduceTwoImg{
        margin-left: 501px;
    }

    #IntroduceThreeImg{
        margin-left: 118px;
        margin-top: 350px;
    }
</style>