<template>
    <div id = "Header">
        <div id = "HeaderMenuBar">
            <div id = "LogoImg">
                <img class="LogoImg" src="../img/Header/PuldaLogo.png" />
            </div>
            <div id = "HeaderMenu">
                <nav>
                    <span class="introduce">풀다 소개</span>
                    <span class="review">REVIEW</span>
                    <span class="premium">프리미엄서비스</span>
                </nav>
            </div>
        </div>
        <div id ="HeaderMain">
            <div id="MainText">공부가 필요한 순간, 언제 어디서나</div>
            <div class="Download">
                <div id= "AppStoreButton">
                    <img id="AppStoreImg" src="../img/Footer/ColorAppStore.png" />
                    <p id="AppStoreText">App Store</p>
                </div> 
                <div id= "GoogleButton">
                    <img id="GoogleImg" src="../img/Footer/ColorGooglePlay.png" />
                    <p id="GooglePlayText">Google Play</p>
                </div>    
            </div>
            <div id = "DownButton">
                <img id = "DownButtonImg" src="../img/Header/DownButton.png"/>
            </div> 
            <div id = "ChannelTalkImg">
                <img class="ChannelTalkImg" src="../img/Header/ChannelTalk.png" />
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
    #Header{
        width: 1920px; 
    }
    #HeaderMenuBar {
        position: fixed;
        top: 0;
        height: 75px;
        width: 1920px;        
        display: flex;
        align-items: center;
        background: #ffffff;
        opacity: 90%;
    }
    #LogoImg{
        margin-left: 360px;
        margin-right: 145px;
    }
    span{                            
        color: #737373;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        margin-right : 139px;
    }

   #HeaderMain{
        background: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
        url('../img/Header/HeaderMain.png') center center;
        background-size: cover;
        background-color: black;
        width: 1920px;
        height: 1005px;
        margin-top: 75px;
    }
    #MainText{
        padding-left: 628px;
        padding-top: 370px;
        font-family: Pretendard;
        font-size: 50px;
        font-weight: 700;
        line-height: 50px;
        color: #ffffff;
    }
    .Download{
        margin-top: 62px;
        display: flex;
        opacity: 90%;
    }
    #AppStoreButton{
        width: 197px;
        height: 54px;
        border: #1e1e1e;
        border-radius: 10px;
        margin-left: 760px;
        display: flex;
        background-color: #0a1621; 
    }
    #AppStoreImg{
        margin-left: 48px;
        margin-top: 17px;
        display: flex;
        width: 17px;
        height: 21px;
    }
    #AppStoreText{
        padding-left: 8px;
        padding-top: 19px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
        color: #ffffff;
    }
    #GoogleButton{
        width: 197px;
        height: 54px;
        border: #1e1e1e;
        border-radius: 10px;
        margin-left: 5px;
        display: flex;
        background-color: #0a1621; 
    }
    #GoogleImg{
        margin-left: 43px;
        margin-top: 18px;
        display: flex;
        width: 17px;
        height: 19px;
    }
    #GooglePlayText{
        padding-left: 8px;
        padding-top: 19px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
        color: #ffffff;
    }
    #DownButton{
        margin-top: 292px;
        margin-left: 941px;
    }
    .ChannelTalkImg{
        position: fixed;
        margin-top: 67px;
        margin-left: 1822px;
    }
    
  
    
 </style>         