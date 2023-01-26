<template>
    <div class = "IntroduceTwoAndThree">
        <div class="IntroduceTwoAndThreeRight">
            <div id ="IntroduceTwoText">
                <div id="IntroduceTwoTextOneGroup">
                    <p id ="IntroduceTwoTextOne" 
                    data-aos="fade-left"
                    data-aos-duration="500"
                    data-aos-delay="500">무거운 문제집 이제</p>
                    <p id ="IntroduceTwoTextTwo"
                    data-aos="fade-left"
                    data-aos-duration="500"
                    data-aos-delay="1000">안녕~ *</p>
                </div>
                <p id ="IntroduceTwoTextOne"
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-delay="500">언제 어디서나 풀다 앱으로 몸도 마음도 가볍게</p>
                <p id ="IntroduceTwoTextOne"
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-delay="500">내신, 모의고사 문제를 풀어봐요.</p>
            </div>
            <img id="IntroduceThreeImg" 
            data-aos="fade-right"
            data-aos-duration="1000"
            src="../img/Introduce/Introduce3.png" />
        </div>
        <div class="IntroduceTwoAndThreeLeft">
            <img id="IntroduceTwoImg"  
            data-aos="fade-left"
            data-aos-duration="1000"
            src="../img/Introduce/Introduce2.png" />
            <div id = "IntroduceThreeText">
                <p id="IntroduceThreeTextTwoSpot"
                data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="1000"></p>
                <div id="IntroduceThreeTextOneGroup">
                    <p id ="IntroduceThreeTextOne"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="500">목표 대학에 갈 수 있도록 맞춤형 문제만</p>
                    <p id ="IntroduceThreeTextTwo"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="1000">콕 </p>
                </div>
                <p id ="IntroduceThreeTextOne"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="500">나의 맞춤형 문제를 단계에 맞추어</p>
                <p id ="IntroduceThreeTextOne"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="500">풀다 보면 어느새 목표 대학에 가까워져 있을 거예요.</p>
            </div>
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
    #IntroduceTwoTextOneGroup{
        display: flex;
        align-items: center;
    }
   
    #IntroduceTwoTextTwo{

        font-family: Pretendard;
        font-size: 30px;
        font-weight: 800;
        line-height: 36px;
        padding-left: 10px;
        color: #1e1e1e;
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
    #IntroduceThreeTextOneGroup{
        display: flex;
        align-items: center;
    }
    #IntroduceThreeTextTwoSpot{
        border-radius: 50%;
        background-color: #1e1e1e;
        width: 10px;
        height: 10px;
        margin-left: 323px;
      
    }
    

    #IntroduceThreeTextTwo{
        font-family: Pretendard;
        font-size: 30px;
        font-weight: 800;
        line-height: 36px;
        padding-left: 10px;
        color: #1e1e1e;
    }
   
</style>