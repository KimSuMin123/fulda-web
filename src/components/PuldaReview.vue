<template>
    <div class = "Review">
        <div class="ReviewLeft">
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
        </div>
        <div class="ReviewRight">
            <div id="ReviewBox">
                <p id="StudentNickname">
                    풀다 학생 **dstg
                </p>
                <p id="StudentReview">
                    시간이 애매하게 남을 때 공부하기 좋은 어플이에요!<br>
                    기출 문제가 나오는 것과 해설도 있는 것,<br>
                    그리고 풀이 시간도 제한되어 있는 것 등등 앱을 세심하게<br>
                    만드신게 보여요. 감사히 잘 쓰겠습니다.<br>
                    이런 앱 많이 만들어 주세요!
                </p>
            </div>
        </div>
    </div>     
</template>
<script>

</script>
<style scoped>
 *{
    margin: 0 0;
 }
    .Review{
        width: 1920px;
        height: 655px;
    }
    .ReviewLeft{
        background-color: #fff;
        height: 655px;
        width: 960px;
        float: left;
        text-align: left;
    }
    .ReviewRight{
        background-color: #fff;
        height: 655px;
        width: 960px;       
        float: right;
        text-align: left;
    }
    #ReviewImg{
        margin-top: 51px;
        margin-left: 611px;
    }
    .ReviewTop{
        margin-top: 7px;
        margin-left: 360px;
        font-family: Pretendard;
        font-size: 50px;
        font-weight: 700;
        line-height: 60px;
    }
    .ReviewBottom{
        margin-top: 25px;
        margin-left: 360px;
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
    }
    #ReviewBox{
        width: 589px;
        height: 264px;
        background-color: #F8FAFC;
        border-radius: 30px;
        position: relative;
        animation: fadeInRight 1s;
    }
    #StudentNickname{
        padding-left: 62px;
        padding-top: 40px;
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
    }
    #StudentReview{
        padding-top: 20px;
        padding-left: 62px;
    }
   
    @keyframes fadeInRight {
        0% {
            opacity: 0;
            transform: translate3d(100%, 0, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
    }
 
</style>