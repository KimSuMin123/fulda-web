<template>
   <div id = "Review" class = "Review">
        <img id ="ReviewImg" src="../img/Review/review.png"/>
        <div class ="ReviewTop">
            <p id="ReviewTop">
                공부앱 만족도 98%
            </p>
        </div>
        <div class ="ReviewBottom">
            <p id="ReviewBottom">
                풀다를 사용해 본 학생들의 생생한 후기 
            </p>
        </div>
        <div class="ReviewBox">
            <div id="ReviewBox1"
                data-aos="fade-left"
                data-aos-duration="1000">
                <p id="StudentNickname1">
                    풀다 학생 **dstg
                </p>
                <p id="StudentReview1">
                    시간이 애매하게 남을 때 공부하기 좋은 어플이에요!<br>
                    기출 문제가 나오는 것과 해설도 있는 것,<br>
                    그리고 풀이 시간도 제한되어 있는 것 등등 앱을<br>
                    세심하게 만드신게 보여요. 감사히 잘 쓰겠습니다.<br>
                    이런 앱 많이 만들어 주세요!
                </p>
            </div>
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
    .Review{
        width: 360px;
    }
    #ReviewImg{
        width: 43px;
        height: 35px;
        padding-top: 185px;
        margin-left: 203px;
    }
    .ReviewTop{
        margin-top: 4px;
        margin-left: 53px;
        font-family: Pretendard;
        font-size: 32px;
        font-weight: 700;
    }
    .ReviewBottom{
        margin-top: 15px;
        margin-left: 59px;
        font-family: Pretendard;
        font-size: 15px;
        font-weight: 500;
        line-height: 20px;
    }
   
    #ReviewBox1{
        width: 360px;
        height: 208px;
        background-color: #F8FAFC;
        border-radius: 30px;
        position: relative;
        margin-top: 60px;
    }
    #StudentNickname1{
        padding-left: 30px;
        padding-top: 40px;
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
    }
    #StudentReview1{
        padding-top: 20px;
        padding-left: 30px;
        font-family: Pretendard;
        font-size: 15px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
    }
    

</style>