 <template>
    <div id = "Header">
        <div id = "HeaderMenuBar">
            <div id = "LogoImg">
                <img class="LogoImg" src="../img/PuldaLogo.png" />
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
            <div id="MainImg">
                <img class="MainImg" src="../img/HeaderMain.png" />
            </div>
            <div id="MainText"></div>
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
    #main{      
        display: flex;
        align-items: center;
        width: 1920px;
        height: 1005px;
        
    }
    span.introduce{
        color: black;
        /*text-underline-position : 3px #1e1e1e;*/ 
    }

    
    
  
    
 </style>         