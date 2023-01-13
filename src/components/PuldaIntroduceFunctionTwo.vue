<template> 
    <div class = "Ranking">
        <div class="RankingLeft">
            <p id ="RankingTop">
                <img id="StudentHat" src="../img/Ranking/StudentHatIcon.png"/>
                풀다에서는 나도 장학생
            </p>
            <p id ="RankingMid">
                매일매일 <br>새로운 랭킹에<br>도전해요.
            </p>
            <p id = "RankingBottom">
                공부하고 랭킹 점수를 쌓아서 풀다 장학생이 되어보세요.<br>
                풀다 포인트로 상점도 이용하고 맞춤 혜택까지!
            </p>
        </div>
        <div class="RankingRight">
            <img id="RankingImg" src="../img/Ranking/Ranking.png"/>
        </div>
    </div>
    <div class = "Scholarship">
        <div class="ScholarshipRight">
            <p id ="ScholarshipTop">
                <img id="Scholarship" src="../img/Scholarship/ScholarshipCoinIcon.png"/>
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
        </div>
        <div class="ScholarshipLeft">
            <img id="ScholarshipImg" src="../img/Scholarship/ScholarshipCoin.png"/>
        </div>
    </div>   
</template>
<script>

</script>
<style scoped>
  
    .Ranking{
        width: 1920px;
        height: 749px;
    }
    .RankingLeft{
        background-color: #F8FAFC;
        height: 749px;
        width: 960px;
        float: left;
        text-align: left;

    }
    .RankingRight{
        background-color: #F8FAFC;
        height: 749px;
        width: 960px;
        float: right;
        text-align: left;

    }
    .StudentHat{
        height: 16px;
        padding-right: 10px;
    }
    #RankingTop{
        color: #2A4FD4;
        font-family: Pretendard;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        margin-left: 415px;
    }
    #RankingMid{
        color:#1E1E1E;
        font-family: Pretendard;
        font-weight: 700;
        font-size: 50px;
        line-height: 90px;
        margin-left: 415px;
        margin-top: 35px;
    }
    #RankingBottom{
        font-family: Pretendard;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        margin-left: 415px;
        margin-top: 45px;
    }
    
    #RankingImg{
       margin-top: 2px;      
    }
    .Scholarship{
        width: 1920px;
        height: 551px;
    }
    .ScholarshipLeft{
        background-color: #F8FAFC;
        height: 551px;
        width: 960px;
        float: left;
        text-align: left;
    }
    .ScholarshipRight{
        background-color: #F8FAFC;
        height: 551px;
        width: 960px;
        float: right;
        text-align: left;
    }
    .ScholarshipCoinIcon{
        height: 16px;
        padding-right: 10px;
    }
    #ScholarshipTop{
        color: #2A4FD4;
        font-family: Pretendard;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        margin-left: 67px;
        margin-top: 6px;
    }
    #ScholarshipMid{
        color:#1E1E1E;
        font-family: Pretendard;
        font-weight: 700;
        font-size: 50px;
        line-height: 90px;
        margin-left: 67px;
        margin-top: 35px;
    }
    #ScholarshipBottom{
        font-family: Pretendard;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        margin-left: 67px;
        margin-top: 45px;
    }
    #ScholarshipImg{
        margin-left: 433px;
    }

</style>