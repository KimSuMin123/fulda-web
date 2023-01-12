<template> 
    <div class="RankingLeft">
        <p id ="RakingTop">
            <img class="StudentHat" src="../img/StudentHat.png"/>
            풀다에서는 나도 장학생
        </p>
        <p id ="RakingMid">
            매일매일 <br>새로운 랭킹에<br>도전해요.
        </p>
        <p id = "RakingBottom">
            공부하고 랭킹 점수를 쌓아서 풀다 장학생이 되어보세요.<br>
            풀다 포인트로 상점도 이용하고 맞춤 혜택까지!
        </p>
    </div>
    <div class="RankingRight">
        <img class="RankingImg" src="../img/Ranking.png"/>
    </div>
</template>
<script>

</script>
<style scoped>
    *{
        margin: 0 0;
    }
    .RankingLeft{
        background-color: #F8FAFC;
        height: 1406px;
        width: 960px;
        float: left;
    }
    .RankingRight{
        background-color: #F8FAFC;
        height: 1406px;
        width: 930px;
        float: right;
    }
    .StudentHat{
        height: 16px;
        padding-right: 10px;
    }
    #RakingTop{
        color: #2A4FD4;
        font-family: Pretendard;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        margin-left: 415px;
        text-align: left;
    }
    #RakingMid{
        color:#1E1E1E;
        font-family: Pretendard;
        font-weight: 700;
        font-size: 50px;
        line-height: 60px;
        margin-left: 415px;
        text-align: left;
        margin-top: 59px;
    }
    #RakingBottom{
        font-family: Pretendard;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        margin-left: 415px;
        text-align: left;
        margin-top: 103px;
    }

</style>