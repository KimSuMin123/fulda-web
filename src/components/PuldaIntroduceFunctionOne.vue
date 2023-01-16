<template> 
    <div class = "WishCollege">
        <div class="WishCollegeLeft">
            <p id ="WishCollegeTop">
                <img id="WishCollege" src="../img/WishCollege/CollegeIcon.png"/>
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
        </div>
        <div class="WishCollegeRight">
            <img id="WishCollegeImg" src="../img/WishCollege/WishCollege.png"/>
        </div>
    </div>  
    <div class = "AiStudy">
        <div class="AiStudyRight">
            <p id ="AiStudyTop">
                <img id="AiStudy" src="../img/AiStudy/AiStudyIcon.png"/>
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
        </div>
        <div class="AiStudyLeft">
            <div id="AiStudyImg"></div>
        </div>
    </div>
</template>
<script>
    export default{
        methods: {
      
        }
    }

</script>
<style scoped>
  
    .WishCollege{
        width: 1920px;
        height: 816px; 
    }
    .WishCollegeLeft{
        background-color: #F8FAFC;
        height: 816px;
        width: 960px;
        float: left;
        text-align: left;
    }
    .WishCollegeRight{
        background-color: #F8FAFC;
        height: 816px;
        width: 960px;
        float: right;
        text-align: left;
    }
    #CollegeIcon{
        height: 16px;
        padding-right: 7px;
    }
    #WishCollegeTop{
        color: #2A4FD4;
        font-family: Pretendard;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        margin-left: 415px;
        margin-top: 238px;
    }
    #WishCollegeMid{
        color:#1E1E1E;
        font-family: Pretendard;
        font-weight: 700;
        font-size: 50px;
        line-height: 90px;
        margin-left: 415px;
        margin-top: 35px;
    }
    #WishCollegeBottom{
        font-family: Pretendard;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        margin-left: 415px;
        margin-top: 45px;
    }
    #WishCollegeImg{
       margin-top: 266px; 
       margin-left: 69px;
    }
    .AiStudy{
        width: 1920px;
        height: 696px; 
    }
    .AiStudyLeft{
        background-color: #F8FAFC;
        height: 696px;
        width: 960px;
        float: left;
        text-align: left; 
    }
    .AiStudyRight{
        background-color: #F8FAFC;
        height: 696px;
        width: 960px;
        float: right;
        text-align: left;
    }
    #AiStudyIcon{
        height: 16px;
        padding-right: 7px;
    }
    #AiStudyTop{
        color: #2A4FD4;
        font-family: Pretendard;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        margin-left: 187px;
    }
    #AiStudyMid{
        color:#1E1E1E;
        font-family: Pretendard;
        font-weight: 700;
        font-size: 50px;
        line-height: 90px;
        margin-left: 187px;
        margin-top: 35px;
    }
    #AiStudyBottom{
        font-family: Pretendard;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        margin-left: 187px;
        margin-top: 45px;
    }
    #AiStudyImg{
       margin-top: 59px;  
       margin-left: 387px;
       width: 502px;
       height: 274px;
       animation-name: ImgMove;
       animation-duration: 10s;
       animation-timing-function: linear;
       animation-iteration-count: infinite;
    }   
    @keyframes ImgMove {
        0%   {left:0px; top:0px;background-image: url(../img/AiStudy/AiStudy1.png);} 
        25%   {left:0px; top:0px;background-image: url(../img/AiStudy/AiStudy1.png);} 
        75%  {left:0px; top:0px;background-image: url(../img/AiStudy/AiStudy2.png);}      
        100%  {left:0px; top:0px;background-image: url(../img/AiStudy/AiStudy2.png);}
    }
</style>