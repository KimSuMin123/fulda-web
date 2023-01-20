<template>
     <div class = "DreamFill">
        <div id="TopText">
            <p id="TopTextTop">모두의 꿈을 채울 때까지</p>
            <p id="TopTextBottom">풀다의 다양한 맞춤 서비스를 언제든지 누구나!</p>
        </div>
        <div class="TopSquare">
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
        </div>
        <div class="BottomSquare">
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
export default {

}
</script>

<style>
    .DreamFill{
        height: 470px;
        width: 360px;
    }
    #TopTextTop{
        padding-top: 136px;
        padding-left: 30px;
        font-family: Pretendard;
        font-size: 32px;
        font-weight: 700;
        line-height: 38px;
        color: #1E1E1E;
    }
    #TopTextBottom{
        padding-top: 15px;
        padding-left: 36px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: #1E1E1E;
    }
    .TopSquare{
        margin-top: 60px;
        display: flex;
    }
    #SquareOne{
        width: 95px;
        height: 95px;
        background: #FFB800;
        box-shadow: -2px -5px 10px 0px #00000040 inset;
        border-radius: 10px;
        margin-left: 30px;
        margin-right: 9px;
    }
    #SquareOneImg{
        width: 24px;
        height: 20px;
        padding-left: 35px;
        padding-top: 15px;
    }
    #SquareOneTopText{
        padding-top: 12px;
        padding-left: 21px;
        font-family: Pretendard;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        text-align: left;
        color: #FFFFFF;
    }
    #SquareOneBottomText{
        font-family: Pretendard;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        color: #FFFFFF;
        padding-top: 3px;
        padding-left: 8px;
    }
    #SquareTwo{
        width: 95px;
        height: 95px;
        background:#1D77FF;
        box-shadow: -2px -5px 10px 0px #00000040 inset;
        border-radius: 10px;
        margin-right: 9px;
    }
    #SquareTwoImg{
        width: 19px;
        height: 19px;
        padding-left: 38px;
        padding-top: 16px;
    }
    #SquareTwoTopText{
        padding-top: 11px;
        padding-left: 28px;
        font-family: Pretendard;
        font-size: 14px;
        font-weight: 800;
        line-height: 17px;
        color: #FFFFFF;
    }
    #SquareTwoBottomText{
        font-family: Pretendard;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        color: #FFFFFF;
        padding-top: 3px;
        padding-left: 7px;
    }
    #SquareThree{
        width: 95px;
        height: 95px;
        background: #002B6C;
        box-shadow: -2px -5px 10px 0px #00000040 inset;
        border-radius: 10px;

    }
    #SquareThreeImg{
        width: 34px;
        height: 21px;
        padding-left: 31px;
        padding-top: 15px;
    }
    #SquareThreeTopText{
        padding-top: 10px;
        padding-left: 23px;
        font-family: Pretendard;
        font-size: 14px;
        font-weight: 800;
        line-height: 17px;
        color: #FFFFFF;
    }
    #SquareThreeBottomText{
        font-family: Pretendard;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        color: #FFFFFF;
        padding-top: 3px;
        padding-left: 8px;
    }
    .BottomSquare{
        margin-top: 9px;
        display: flex;
    }
    #SquareFour{
        width: 95px;
        height: 95px;
        background:#FFFFFF;
        box-shadow: -2px -5px 10px 0px #00000040 inset;
        border-radius: 10px;
        margin-right: 9px;
        margin-left: 85px;
    }
    #SquareFourTopCircle{
        background-color: #1D77FF;
        border-radius: 50%;
        width: 22px;
        height: 22px;
        margin-left: 36px;
        margin-top: 16px;
    }
    #SquareFourCircleText{
        padding-top:3px;
        padding-left: 7px;
        font-family: Pretendard;
        font-size: 15px;
        font-weight: 550;
        color: #ffffff;
    }
    #SquareFourTopText{
        padding-top: 7px;
        padding-left: 23px;
        font-family: Pretendard;
        font-size: 14px;
        font-weight: 800;
        line-height: 17px;
        color: #1e1e1e;
    }
    #SquareFourBottomText{
        font-family: Pretendard;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        color: #1E1E1E;
        padding-top: 3px;
        padding-left: 3px;
    }
    #SquareFive{
        width: 95px;
        height: 95px;
        background: #7DD13C;
        box-shadow: -2px -5px 10px 0px #00000040 inset;
        border-radius: 10px;
    }
    #SquareFiveImg{
        width: 24px;
        height: 20px;
        padding-left: 35px;
        padding-top: 14px;
    }
    #SquareFiveTopText{
        padding-top: 9px;
        padding-left: 21px;
        font-family: Pretendard;
        font-size: 14px;
        font-weight: 800;
        line-height: 17px;
        color: #FFFFFF;
    }
    #SquareFiveBottomText{
        font-family: Pretendard;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        color: #FFFFFF;
        padding-top: 3px;
        padding-left: 8px;
    }
</style>