<template>
    <div class="PartOne">
        <img id="PartOneLogoImg" src="../img/Review/PuldaLogoBlack.png" />
        <p id="PartOneText">
            너와 나를 연결하는 인공지능 학습 플랫폼<br>     
            간편한 온라인 학습지,<br>
            나만의 공부 비법을 풀다에서!
        </p>
    </div>
    <div class="PartTwo">
        <div class="PartTwoOne">
            <p id ="PartTwoOneTop"
                data-aos="fade-up"
                data-aos-duration="200"> 
                학원도 다니고,<br>
            </p>
            <p id ="PartTwoOneTop"
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="100"> 
                과외도 하고,<br>
            </p>   
            <p id ="PartTwoOneTop"
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="400"> 
                인강도 듣는데.<br>
            </p>
            <p id ="PartTwoOneMid"
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="600">
                성적이 왜 안 오르지?
            </p>
        </div>  
        <div class="PartTwoTwo">
            <p id="PartTwoTwoTop"
                data-aos="fade-up"
                data-aos-duration="200"
                >
                풀다를 시작해 보세요!
            </p>
            <p id="PartTwoTwoMid"
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="200">
                AI 학습 분석을 통해 빠른 성적 향상과<br>
                취약 유형 위주로 학습이 가능해요.<br>
                쉽고 간편한 성적 관리 지금부터 시작해 봐요.<br>
            </p>
            <img id="ReviewTwoImg" 
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="400"
                src="../img/Review/ReviewTwo.png" 
            />
        </div>
        <div class="PartTwoThree">
            <p id="PartTwoThreeTop"
                data-aos="fade-up"
                data-aos-duration="200"
                >
                무거운 문제집 이제 안녕~ *
            </p> 
            <p id="PartTwoThreeMid"
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="200">
                언제 어디서나 풀다 앱으로 몸도 마음도 가볍게<br>
                내신, 모의고사 문제를 풀어봐요.
            </p>
            <img id="ReviewThreeImg" 
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="400"
                src="../img/Review/ReviewThree.png" 
            />      
        </div>
        <div class="PartTwoFour">
            <p id ="PartTwoFourTextTopOne"
                data-aos="fade-up"
                data-aos-duration="200"
            >
                목표 대학에 갈 수 있도록
            </p>
            <p id="PartTwoFourSpot"
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="300"></p>
            <p id ="PartTwoFourTextTopTwo"
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="300">
                맞춤형 문제만 콕
            </p>
            <p id ="PartTwoFourMid"
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="500">
                나의 맞춤형 문제를<br> 
                단계에 맞추어 풀다 보면<br> 
                어느새 목표 대학에 가까워져 있을 거예요.
            </p>
            <img id="ReviewThreeImg" 
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="700"
                src="../img/Review/ReviewThree.png" 
            />      
        </div> 
    </div>
</template>

<script>
export default {

}
</script>

<style>
    *{
        margin: 0 0; 
        text-align: left; 
    }
    .PartOne{
        height: 437px;
        width: 360px;
        background-color: #F8FAFC;
    }
    #PartOneLogoImg{
        margin-top: 140px;
        margin-left: 99px;
    }
    #PartOneText{
        margin-top: 30px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
        text-align: center;
    }
    .PartTwo{
        height: 2550px;
        width: 360px;
    }
    .PartTwoOne{
        height: 332px;
        width: 360px;
        padding-top: 70px;

    }
    #PartTwoOneTop{
        font-family: Pretendard;
        font-size: 32px;
        font-weight: 700;
        line-height:70px;
        color: #1E1E1E;
        text-align: center;
    }
    #PartTwoOneMid{
        padding-top: 70px;
        font-family: Pretendard;
        font-size: 32px;
        font-weight: 700;
        line-height: 38px;
        color: #1E1E1E;
        text-align: center;
    }
    .PartTwoTwo{
        height: 575px;
        width: 360px;
        padding-top: 70px;
        
    }
    #PartTwoTwoTop{
        font-family: Pretendard;
        font-size: 26px;
        font-weight: 600;
        line-height: 31px;
        color: #1E1E1E;
        text-align: center;
    }
    #PartTwoTwoMid{
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        margin-top: 20px;
        color: #1E1E1E;
        text-align: center;
    }
    #ReviewTwoImg{
        margin-left: 81px;
        margin-top: 45px;
    }
    .PartTwoThree{
        height: 544px;
        width: 360px;
        padding-top: 70px;
    }
    #PartTwoThreeTop{
        font-family: Pretendard;
        font-size: 26px;
        font-weight: 600;
        line-height: 31px;
        margin-left: 40px;
        color: #1E1E1E; 
    }
    #PartTwoThreeMid{
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        margin-top: 20px;
        text-align: center;
        color: #1E1E1E;
    }
    #ReviewThreeImg{
        margin-left: 81px;
        margin-top: 45px;
    }
    .PartTwoFour{
        height: 897px;
        width: 360px;
    }
    
    #PartTwoFourTextTopOne{
        font-family: Pretendard;
        font-size: 26px;
        font-weight: 600;
        line-height: 31px;
        display: flex;
        padding-top: 140px;
        color: #1E1E1E;
        margin-left: 55px;
    }
    #PartTwoFourSpot{
        background-color: #1e1e1e;
        width: 5px;
        height: 5px;
        margin-left:246px;
        border-radius: 50%;
    }
    #PartTwoFourTextTopTwo{
        font-family: Pretendard;
        font-size: 26px;
        font-weight: 600;
        color: #1E1E1E;
        margin-left: 90px;
    }
    #PartTwoFourMid{
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        text-align: center;
        margin-top: 20px;
        color: #1E1E1E;
    }
    #ReviewFourImg{
        margin-left: 81px;
        margin-top: 45px;
       padding-bottom: 120px;
    }
</style>