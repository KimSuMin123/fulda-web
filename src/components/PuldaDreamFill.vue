<template>
    <div class = "DreamFill">
        <div class="TopText">
            <div id="BracketOpen">
                <p id="BracketOpen">{</p>
            </div>
            <div id="MidText">
                <p id="MidTextTop">모두의 꿈을 채울 때까지</p>
                <p id="MidTextBottom">풀다의 다양한 맞춤 서비스를 언제든지 누구나!</p>
            </div>
            <div id="BracketClose">
                <p id="BracketClose">}</p>
            </div>
        </div>
        <div class="FiveSquare">
            <div id="SquareOne">
                <img id="SquareOneImg" src="../img/DreamFill/WrongNoteIcon.png" />
                <p id="SquareOneTopText">오답 관리</p>
                <p id="SquareOneBottomText">나만의 오답 노트</p>
            </div>
            <div id="SquareTwo">
                <img id="SquareTwoImg" src="../img/DreamFill/BookIcon.png" />
                <p id="SquareTwoTopText">전 과목</p>
                <p id="SquareTwoBottomText">10만 문제 콘텐츠</p>
            </div>
            <div id="SquareThree">
                <img id="SquareThreeImg" src="../img/DreamFill/AiServiceIcon.png" />
                <p id="SquareThreeTopText">인공지능</p>
                <p id="SquareThreeBottomText">맞춤 교육 서비스</p>
            </div>
            <div id="SquareFour">
                <div id="SquareFourTopCircle">
                    <p id="SquareFourCircleText">P</p>
                </div>
                <p id="SquareFourTopText">동기부여</p>
                <p id="SquareFourBottomText">100% 장학금 혜택</p>
            </div>
            <div id="SquareFive">
                <img id="SquareFiveImg" src="../img/DreamFill/UniversityIcon.png" />
                <p id="SquareFiveTopText">목표 대학</p>
                <p id="SquareFiveBottomText">데이터 기반 예측</p>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
.DreamFill{
    width: 1920px;
    height: 1288px; 
    text-align: left;
}
.TopText{
    display: flex;
    padding-top: 240px;
    padding-left: 452px;
}
#BracketOpen{
    color: #F2F5F8;
    font-family: Pretendard;
    font-size: 150px;
    font-weight: 500;
    line-height: 179px;
 
}
#MidTextTop{
    margin-top: 42px;
    margin-left: 220px;
    margin-right: 220px;
    font-family: Pretendard;
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;         
}
#MidTextBottom{
    margin-left: 230px;
    margin-right: 229px;
    margin-top: 20px;   
    font-family: Pretendard;
    font-size: 25px;
    font-weight: 500;
    line-height: 30px;
    color: #1e1e1e;
}
#BracketClose{
    color: #F2F5F8;
    font-family: Pretendard;
    font-size: 150px;
    font-weight: 500;
    line-height: 179px;
}
.FiveSquare{
    margin-top: 111px;
    display: flex;
}
#SquareOne{
    margin-left: 40px;
    background: #FFB800;
    width: 344px;
    height: 344px;
    box-shadow: inset -2px -10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    margin-right: 30px;
}
#SquareOneImg{
    width: 60px;
    height: 45px;
    margin-top: 99px;
    margin-left: 145px;
}
#SquareOneTopText{
    margin-top: 33px;
    font-family: Pretendard;
    font-size: 30px;
    font-weight: 800;
    color: #FFFFFF;
    margin-left: 105px;
}
#SquareOneBottomText{
    margin-top: 15px;
    font-family: Pretendard;
    font-size: 25px;
    font-weight: 600;
    color: #FFFFFF;
    margin-left: 80px;
}
#SquareTwo{
    background: #1D77FF;
    width: 344px;
    height: 344px;
    box-shadow: inset -2px -10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    margin-right: 30px
}
#SquareTwoImg{
    width: 60px;
    height: 45px;
    margin-top: 99px;
    margin-left: 145px;
}
#SquareTwoTopText{
    margin-top: 33px;
    font-family: Pretendard;
    font-size: 30px;
    font-weight: 800;
    color: #FFFFFF;
    margin-left: 125px;
}
#SquareTwoBottomText{
    margin-top: 15px;
    font-family: Pretendard;
    font-size: 25px;
    font-weight: 600;
    color: #FFFFFF;
    margin-left: 75px;
}
#SquareThree{
    background: #002B6C; 
    width: 344px;
    height: 344px;
    box-shadow: inset -2px -10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    margin-right: 30px;
}
#SquareThreeImg{
    width: 77px;
    height: 53px;
    margin-top: 99px;
    margin-left: 134px;
}
#SquareThreeTopText{
    margin-top: 32px;
    font-family: Pretendard;
    font-size: 30px;
    font-weight: 800;
    color: #FFFFFF;
    margin-left: 115px;
}
#SquareThreeBottomText{
    margin-top: 15px;
    font-family: Pretendard;
    font-size: 25px;
    font-weight: 600;
    color: #FFFFFF;
    margin-left: 82px;
}
#SquareFour{
    background: #FFFFFF;
    width: 344px;
    height: 344px;
    box-shadow: inset -2px -10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    margin-right: 30px;
}
#SquareFourTopCircle{
    background-color: #1D77FF;
    border-radius: 50%;
    width: 52px;
    height: 52px;
    margin-left: 146px;
    margin-top: 94px;
}
#SquareFourCircleText{
    padding-top: 6px;
    padding-left: 16px;
    font-family: Pretendard;
    font-size: 30px;
    font-weight: 550;
    color: #ffffff;
}
#SquareFourTopText{
    margin-top: 31px;
    font-family: Pretendard;
    font-size: 30px;
    font-weight: 800;
    color: #1E1E1E;
    margin-left: 110px;
}
#SquareFourBottomText{
    margin-top: 15px;
    font-family: Pretendard;
    font-size: 25px;
    font-weight: 600;
    color: #1E1E1E;
    margin-left: 82px;
}
#SquareFive{
    background: #7DD13C;
    width: 344px;
    height: 344px;
    box-shadow: inset -2px -10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
}
#SquareFiveImg{
    width: 55px;
    height: 46px; 
    margin-top: 99px;
    margin-left: 144px;
}
#SquareFiveTopText{
    margin-top: 32px;
    font-family: Pretendard;
    font-size: 30px;
    font-weight: 800;
    color: #FFFFFF;
    margin-left: 110px;
}
#SquareFiveBottomText{
    margin-top: 15px;
    font-family: Pretendard;
    font-size: 25px;
    font-weight: 600;
    color: #FFFFFF;
    margin-left: 82px;
}
</style>
