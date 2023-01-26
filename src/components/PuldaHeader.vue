<template>
    <div class ="HeaderBar">
        <div id = "LogoImg">
            <a id="main" href="PuldaHeader.vue">
                <img class="LogoImg" src="../img/Header/PuldaLogo.png" />
            </a>
        </div>
        <div id="DownloadTop">
            <div id="DownloadTopText" @click="myFunction()">
                앱 다운로드
                <div v-if="andriod">
                    <a href='https://play.google.com/store/apps/details?id=com.filledu.pulda2&pli=1'>앱 다운로드</a>
                </div>
                <div v-else-if="ipone">
                    <a href='https://https://apps.apple.com/app/id1530892838'>앱 다운로드</a>
                </div>
            </div>
        </div>
        <div id = HiddenMenu>
            <input class="burger-check" type="checkbox" id="burger-check" />
            <label class="burger-icon" for="burger-check"><span class="burger-sticks"></span></label>
            <div class="menu">
                <div style="width: 360px;">
                    <br>
                    <a href="#" id="HiddenMenuContent1">풀다 소개</a><br>
                    <a href="#Review" id="HiddenMenuContent1">REVIEW</a><br>
                    <a href="#Premium" id="HiddenMenuContent2">프리미엄서비스</a>
                </div>
            </div>

        </div>
    </div>
    <div class ="HeaderMain">                      
        <div id="MainText">공부가 필요한 순간,<br> 언제 어디서나</div> 
        <div id="Download">
            <div id="DownloadText" @click="myFunction()">
                앱 다운로드
                <div v-if="andriod">
                    <a href='https://play.google.com/store/apps/details?id=com.filledu.pulda2&pli=1'>앱 다운로드</a>
                </div>
                <div v-else-if="ipone">
                    <a href='https://https://apps.apple.com/app/id1530892838'>앱 다운로드</a>
                </div>
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
  export default{
        data: function() {
        return {
                    result: ''
                };
        },  
        methods:{
            myFunction: function () {
                var ua = navigator.userAgent.toLocaleLowerCase();		
                if(ua.indexOf('andriod') > -1){
                    console.log('andriod');
                    this.result = 'andriod';
                } else if(ua.indexOf('ipone') > -1){
                    console.log('ipone');
                    this.result ='ipone';
                }else{
                    console.log('other')  ;
                    this.result ='other';
                }	 
            }
        }
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
    #nav{
        margin: 0;
        padding: 0;
        display: inline;
    }
    #nav li{
        display: inline;
    }
    #nav,#toggle{
        display: none;
    }
    .menu {
        width: 360px;
        overflow: hidden;
  position: absolute;
  top: 60px;
  right: 0;
  height: 180px;
  max-width: 0;
  transition: 0.5s ease;
  z-index: 1;
  background-color: #fff;
}

.burger-icon {
  cursor: pointer;
  display: inline-block;
  position: absolute;
  z-index: 2;
  padding: 8px 0;
  top: 20px;
  right: 4px;
  user-select: none;
  width: auto;
  margin: 0;
}

.burger-icon .burger-sticks {
  background: #8E8E8E;
  display: block;
  height: 1px;
  position: relative;
  transition: background .2s ease-out;
   width: 18px;
}

.burger-icon .burger-sticks:before,
.burger-icon .burger-sticks:after {
    background: #8E8E8E;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.burger-icon .burger-sticks:before {
  top: 5px;
}

.burger-icon .burger-sticks:after {
  top: -5px;
}

.burger-check {
  display: none;
}

.burger-check:checked~.menu {
  max-width: 400px;
}

.burger-check:checked~.burger-icon .burger-sticks {
  background: transparent;
}

.burger-check:checked~.burger-icon .burger-sticks:before {
  transform: rotate(-45deg);
}

.burger-check:checked~.burger-icon .burger-sticks:after {
  transform: rotate(45deg);
}

.burger-check:checked~.burger-icon:not(.steps) .burger-sticks:before,
.burger-check:checked~.burger-icon:not(.steps) .burger-sticks:after {
  top: 0;
}
#HiddenMenuContent1{

    text-decoration: none;
        color: #737373;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 50px;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 30px;
        padding-right: 271px;
}
#HiddenMenuContent2{

text-decoration: none;
    color: #737373;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 233px;
}
 a:hover{
    background-color: #F0F3F8;
    
}
 </style>         