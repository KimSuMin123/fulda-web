<template>
    <div class = "IntroduceOne">
        <div class="IntroduceOneLeft">
            <div id="IntroduceOneTop">
                <p id ="IntroduceOneTopOne"> 학원도 다니고,<br></p>
                <p id ="IntroduceOneTopTwo"> 과외도 하고,<br></p>   
                <p id ="IntroduceOneTopThree"> 인강도 듣는데.<br></p>
            </div>
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
    .animatable {
        visibility: hidden; 
        animation-play-state: paused;
    }
    .animated {
        animation-name: fadeInUp; 
        visibility: visible; 
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
    #IntroduceOneTopOne{
        animation: fadeInUp 1s;
    }
    #IntroduceOneTopTwo{
        animation: fadeInUp 1s;
        animation-delay: 1s;
    }
    #IntroduceOneTopThree{
        animation: fadeInUp 1s;
        animation-delay: 2s;
    }
    #IntroduceOneMid{
        font-family: Pretendard;
        font-size: 50px;
        font-weight: 700;
        line-height: 60px;
        text-align: left;
        margin-top: 57px;
        margin-left: 360px;
        animation: fadeInUp 1s;
        animation-delay: 3s;
    }
   #IntroduceOneBottom{
        font-family: Pretendard;
        font-size: 18px;
        font-weight: 600;
        line-height: 30px; 
        text-align: left;
        margin-top: 105px;
        margin-left: 360px;
        animation: fadeInUp 1s;
        animation-delay: 4s;
    }
    #Introduce1Img{
        margin-left: 118px;
        animation: fadeInUp 2s;
        animation-delay: 5s;
    }
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        50%{
            opacity: 0.5;
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
    }
   
</style>