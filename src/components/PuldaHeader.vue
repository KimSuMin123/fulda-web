<template>
    <div class ="HeaderBar">
        <div id = "LogoImg">
            <a id="main" href="PuldaHeader.vue">
                <img class="LogoImg" src="../img/Header/PuldaLogo.png" />
            </a>
        </div>
        <div id="DownloadTop">
            <div id="DownloadTopText">
                앱 다운로드
            </div>
        </div>
        
    </div>
    <div class ="HeaderMain">                      
        <div id="MainText">공부가 필요한 순간,<br> 언제 어디서나</div> 
        <div id="Download">
            <div id="DownloadText">
                앱 다운로드
            </div>
        </div>   
        <div id = "DownButton">
            <img id = "DownButtonImg" src="../img/Header/DownButton.png"/>
        </div> 
        <div id = "ChannelTalkImg">
            <img class="ChannelTalkImg" src="../img/Header/ChannelTalk.png" />
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
    .HeaderMain{
        width: 360px;
        height: 632px;
        background: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
        url('../img/Header/HeaderMain.png') center center;
    }
    #Header{
        width: 1920px; 
    }
    .HeaderBar {
        position: fixed;
        top: 0;
        height: 64px;
        width: 360px;        
        display: flex;
        align-items: center;
        background: #ffffff;
        opacity: 90%;
    }
    #LogoImg{
        margin-left: 30px;
        margin-right: 24px;
    }
    #DownloadTop{
        height: 24px;
        width: 75px;
        border-radius: 100px;

        margin-left: 90px;
        background: #2A4FD4;
    }
    #DownloadTopText{
        font-family: Pretendard;
        font-size: 12px;
        font-weight: 500;
        color: #ffffff;
        margin-top: 6px;
        margin-left: 10px;
    }
    #MainText{
        
        padding-top: 206px;
        font-family: Pretendard;
        font-size: 30px;
        font-weight: 700;
        line-height: 50px;
        color: #ffffff;
        text-align: center;
    }
    #Download{
        height: 54px;
        width: 163px;
        border-radius: 100px;
        border: 1px solid #1e1e1e;
        margin-left: 55px;
        margin-top: 25px;
        padding-left: 45px;
        padding-top: 19px;
        font-family: Pretendard;
        font-size: 25px;
        font-weight: 700;
        background: #0A1621B2;
        color: #ffffff;

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
        margin-top: 100px;
        margin-left: 130px;
        position: relative;
        animation: arrowMove 2s;
        animation-iteration-count: infinite;
        transition-timing-function: linear;
        transition: all 2s;
    }
    .ChannelTalkImg{
        position: fixed;
        margin-top: 32px;
        margin-left: 280px;
        width: 50px;
        height: 50px;
    }
    a{
        text-decoration: none;
        color: #737373;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
    }
 
    
 </style>         