<template>
    <div id = "Header">
        <div id = "HeaderMenuBar">
            <div id = "LogoImg">
                <a id="main" href="PuldaHeader.vue">
                    <img class="LogoImg" src="../img/Header/PuldaLogo.png" />
                </a>
            </div>
            <div id = "HeaderMenu">
                <nav>
                    <span class="introduce">
                        <a href="#Header">
                            풀다 소개
                        </a>
                    </span>
                    <span class="review">
                        <a href="#Review">
                            REVIEW
                        </a>
                    </span>
                    <span class="premium">
                        <a href="#Premium">
                            프리미엄서비스
                        </a>
                    </span>
                </nav>
            </div>
        </div>
        <div class ="HeaderMain1" ref="PuldaHeader" v-bind:class="{ 'HeaderMain2' : SizeDown }">                      
            <div id="MainText">공부가 필요한 순간, 언제 어디서나</div> 
            <div class="Download1" ref="PuldaHeader" v-bind:class="{ 'Download2' :SizeDown }">
            <div id= "AppStoreButton">
                <a id="AppStoreLink" href="https://apps.apple.com/app/id1530892838">
                    <img id="AppStoreImg" src="../img/Footer/ColorAppStore.png" />
                    App Store
                </a>
            </div> 
            <div id= "GoogleButton">
                <a id="GoogleLink" href="https://play.google.com/store/apps/details?id=com.filledu.pulda2">
                    <img id="GoogleImg" src="../img/Footer/ColorGooglePlay.png" />
                    Google Play
                </a>
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
        name:"PuldaHeader",
        data: function() {
            return {
                SizeDown : false
            }
        }
        // props :{
        //     SizeDown : {
        //         type: Boolean
        //     }
        // }
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
        font-size: 16px;
        margin-right : 139px;
    }

   .HeaderMain1{
        background: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
        url('../img/Header/HeaderMain.png') center center;
        background-size: cover;
        background-color: black;
        width: 1920px;
        height: 1005px;
        margin-top: 75px;
    }
   .HeaderMain2{
        background: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
        url('../img/Header/HeaderMain.png') center center;
        background-size: cover;
        background-color: black;
        margin-top: 500px;
        width:1200px;
        height: 224px;
        margin-left: 360px;
    } 
     /* #HeaderMain1:hover 
      {
        transform: scale(0.65);
        transition: .9s;
    }  */
   
    #MainText{
        padding-left: 628px;
        padding-top: 370px;
        font-family: Pretendard;
        font-size: 50px;
        font-weight: 700;
        line-height: 50px;
        color: #ffffff;
    }
    .Download1{
        margin-top: 62px;
        display: flex;
        
    }
    .Download2{
        display: none;
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
        margin-right: 8px;
        margin-bottom:5px;
        display: flex;
        width: 17px;
        height: 21px;
    }
   
    #AppStoreLink{
        align-items: center;
        display: flex;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
        color: #ffffff;
        text-decoration: none;
        width: 197px;
        height: 54px;
    }
    #AppStoreButton :hover{
        opacity: 0.5 ;
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
        margin-right: 5px;
        display: flex;
        width: 17px;
        height: 19px;
    }
    #GoogleLink{
        align-items: center;
        display: flex;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
        text-decoration: none;
        color: #ffffff;
    }
    #GoogleButton :hover{
        opacity: 0.5;
    }
    @keyframes fadeInDown {
        0% {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
    }
    @keyframes arrowMove {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        30% {
            opacity: 1;
            transform: translateY(-15px);
        }
        60% {
            opacity: 1;
            transform: translateY(15px);
        }
       to {
            opacity: 0;
            transform: translateY(30px);
        }
    
    }
 
    #DownButton{
        margin-top: 292px;
        margin-left: 941px;
        position: relative;
        animation: arrowMove 2s;
        animation-iteration-count: infinite;
        transition-timing-function: linear;
        transition: all 2s;
    }
    .ChannelTalkImg{
        position: fixed;
        margin-top: 67px;
        margin-left: 1822px;
    }
    a{
        text-decoration: none;
        color: #737373;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
    }
   
    
 </style>         