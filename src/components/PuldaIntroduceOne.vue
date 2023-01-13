<template>
    <div class = "IntroduceOne">
        <div class="IntroduceOneLeft">
            <p id ="IntroduceOneTop">
                학원도 다니고,<br>
                과외도 하고,<br>
                인강도 듣는데.<br>
            </p>
            <p id ="IntroduceOneMid">
                성적이 왜 안 오르지?
            </p>
            <p id = "IntroduceOneBottom">
                풀다를 시작해 보세요!<br>
                AI 학습 분석을 통해 빠른 성적 향상과 취약 유형 위주로 학습이 가능해요.<br>
                쉽고 간편한 성적 관리 지금부터 시작해 봐요.<br>
            </p>
        </div>
        <div class="IntroduceOneRight">
            <img id="Introduce1Img" src="../img/Introduce/Introduce1.png" />
        </div>
    </div>  
</template>
<script>

</script>
<style scoped>
    .IntroduceOne{
        width: 1920px;
        height: 976px; 
    }
    .IntroduceOneLeft{
        background-color: #fff;
        height: 976px; 
        width: 960px;
        float: left;
        text-align: left;
    }
    .IntroduceOneRight{
        background-color:#fff;
        height: 976px; 
        width: 960px;
        float: right;
        text-align: left;
    }
    #IntroduceOneTop{
        font-family: Pretendard;
        font-size: 50px;
        font-weight: 700;
        line-height: 90px;
        letter-spacing: 0em;
        text-align: left;
        margin-top: 97px;
        margin-left: 360px;
    }
    #IntroduceOneMid{
        font-family: Pretendard;
        font-size: 50px;
        font-weight: 700;
        line-height: 60px;
        letter-spacing: 0em;
        text-align: left;
        margin-top: 57px;
        margin-left: 360px;
    }
   #IntroduceOneBottom{
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px; 
        text-align: left;
        margin-top: 105px;
        margin-left: 360px;
    }
    #Introduce1Img{
        margin-left: 118px;
    }
</style>