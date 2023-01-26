<template>
    <div class="FuctionTwo">
        <div class="WishCollege">
            <p id ="WishCollegeTop">
                <img id="WishCollegeIcon" src="../img/WishCollege/CollegeIcon.png"/>
                목표대학
            </p>
            <p id ="WishCollegeMid">
                목표대학 설정<br>
                간단해요!
            </p>
            <p id = "WishCollegeBottom">
                한 번의 터치만으로<br>
                내가 가고싶은 대학을 간편하게 설정해요.
            </p>
            <div class="WishCollegeImg">
                <img id="WishCollegeImg" src="../img/WishCollege/WishCollege.png"/>
            </div> 
        </div>
        <div class = "AiStudy">
            <p id ="AiStudyTop">
                <img id="AiStudyIcon" src="../img/AiStudy/AiStudyIcon.png"/>
                스마트한 AI코칭
            </p>
            <p id ="AiStudyMid">
                AI가 선정한<br>
                핵심 맞춤 문제를<br>
                풀다에서!
            </p>
            <p id = "AiStudyBottom"> 
                AI가 선정한 맞춤형 문제를 따라오기만 해도<br>
                내신관리와 수능 준비까지 한 번에 도와드려요.
            </p>
            <div id="AiStudyImg"></div>
        </div>
        <div class = "Ranking">
            <p id ="RankingTop">
                <img id="StudentHatIcon" src="../img/Ranking/StudentHatIcon.png"/>
                풀다에서는 나도 장학생
            </p>
            <p id ="RankingMid">
                매일매일 <br>새로운 랭킹에<br>도전해요.
            </p>
            <p id = "RankingBottom">
                공부하고 랭킹 점수를 쌓아서<br> 풀다 장학생이 되어보세요.<br>
                풀다 포인트로 상점도 이용하고 맞춤 혜택까지!
            </p>
            <div class="RankingImg">
                <img id="RankingImg" src="../img/Ranking/Ranking1.png"/>
                <img id="RankingImg" src="../img/Ranking/Ranking2.png"/>
            </div>
        </div>
        <div class = "Scholarship">
            <p id ="ScholarshipTop">
                <img id="ScholarshipCoinIcon" src="../img/Scholarship/ScholarshipCoinIcon.png"/>
                풀다 공테크 #공부하고 용돈도 받자
            </p>
            <p id ="ScholarshipMid">
                풀다에서 공부만해도<br>
                100% 장학금을 드려요.
            </p>
            <p id = "ScholarshipBottom"> 
                풀다 맞춤형 문제를 열심히 풀면 최대 6만 5천원 <br>
                장학금 혜택을 드려요.
            </p>
            <div class="ScholarshipImg">
                <img id="ScholarshipImg" src="../img/Scholarship/ScholarshipCoin.png"/>
            </div>
        </div>   
    </div>
</template>

<script>

</script>

<style>
    .FuctionTwo{
        width: 360px;
        height: 2515px;
        background-color: #F8FAFC;
    }
    .WishCollege{
        height: 506px;
        width: 360px;
        padding-top: 120px;
    }
    #WishCollegeTop{
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        color:#2A4FD4;
        align-items: center;

    }
    #WishCollegeIcon{
        margin-left: 30px;
        margin-right: 6px;
    }
    #WishCollegeMid{
        margin-top: 32px;
        font-family: Pretendard;
        font-size: 26px;
        font-weight: 600;
        line-height: 40px;
        color: #1e1e1e;
        margin-left: 30px;
    }
    #WishCollegeBottom{
        margin-top: 25px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        color: #1e1e1e;
        margin-left: 30px;
    }
    #WishCollegeImg{
        width: 320px;
        height: 158px;
        margin-left: 12px;
        margin-top: 35px;
    }
    .AiStudy{
        height: 445px;
        width: 360px;
    }
    #AiStudyTop{
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        color:#2A4FD4;
        align-items: center;
    }
    #AiStudyIcon{
        margin-left: 30px;
        margin-right: 6px;
    }
    #AiStudyMid{
        margin-top: 32px;
        font-family: Pretendard;
        font-size: 26px;
        font-weight: 600;
        line-height: 40px;
        color: #1e1e1e;
        margin-left: 30px;
    }
    #AiStudyBottom{
        margin-top: 25px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        color: #1e1e1e;
        margin-left: 30px;
    }
    #AiStudyImg{
        width: 320px;
        height: 175px;
        margin-left: 12px;
        margin-top: 35px;
        animation-name: ImgMove;
        animation-duration: 10s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }   
    @keyframes ImgMove {
        0%   {left:0px; top:0px;background-image: url(../img/AiStudy/AiStudy1.png);} 
        25%   {left:0px; top:0px;background-image: url(../img/AiStudy/AiStudy2.png);} 
        50%  {left:0px; top:0px;background-image: url(../img/AiStudy/AiStudy2.png);} 
        70%  {left:0px; top:0px;background-image: url(../img/AiStudy/AiStudy1.png);}      
        100%  {left:0px; top:0px;background-image: url(../img/AiStudy/AiStudy1.png);}
    }
    .Ranking{
        height: 750px;
        width: 360px;
    }
    #RankingTop{
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        padding-top: 120px;
        color:#2A4FD4;
        align-items: center;
    }
    #StudentHatIcon{
        margin-left: 30px;
        margin-right: 6px;
    }
    #RankingMid{
        margin-top: 32px;
        font-family: Pretendard;
        font-size: 26px;
        font-weight: 600;
        line-height: 40px;
        color: #1e1e1e;
        margin-left: 30px;
    }
    #RankingBottom{
        margin-top: 25px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        color: #1e1e1e;
        margin-left: 30px;
    }
    .RankingImg{
        width: 340px;
        display: flex;
        overflow: auto;
        margin-left: 18px;
    }

    #RankingImg{
        width: 289px;
        height: 314px;
        margin-top: 35px;
        margin-left: 10px;
    }  
    .Scholarship{
        height: 695px;
        width: 360px;
    }
    #ScholarshipTop{
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;  
        padding-top: 143px;
        color:#2A4FD4;
        align-items: center;
    }
    #ScholarshipCoinIcon{
        margin-left: 30px;
        margin-right: 6px;
    }
    #ScholarshipMid{
        margin-top: 30px;
        font-family: Pretendard;
        font-size: 26px;
        font-weight: 600;
        line-height: 40px;
        color: #1e1e1e;
        margin-left: 30px;
    }
    #ScholarshipBottom{
        margin-top: 25px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        color: #1e1e1e;
        margin-left: 30px;
    }
    #ScholarshipImg{
        width: 263px;
        height: 236px;
        margin-left: 48px;
        margin-top: 35px;
        animation-name: coinMove;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        transition-timing-function: linear;
        transition: all 1s;
    } 
    @keyframes coinMove {
        from {
            transform: translateY(15px);
        }
        50% {
            transform: translateY(-15px);
        }
        to {
            transform: translateY(15px);
        }
    } 
</style>