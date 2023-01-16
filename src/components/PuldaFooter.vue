<template>
    <div class = "Topfooter">
        <div id = "PuldaIcon">
            <img id="PuldaIconImg" src="../img/Footer/PuldaSqureIcon.png" />
        </div>
        <div id="PuldaText">
            <p id="PuldaText">이 모든 것을 풀다에서 지금 바로 시작해 보세요.</p>
        </div>
        <div class="Download">
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
    </div>
    <div class = "Bottomfooter">
        <div class="CompanyInfo">
            <div id="CompanyName">(주)필드유</div>
            <div id="CompanyInfomation">
                대표 : 양지영 | 연락처 : 010-4788-8184 | 사업자 등록번호 : 442-81-01575 <br>
                경기도 안양시 동안구 시민대로 327번길 11-41, 3층 310호 | Copyright © 2023 FilledU, All rights reserved.
            </div>
            <div id="CompanyMenu">
                <a href="https://open.kakao.com/o/gRLVRNyc">문의 | </a>
                <a href="https://pulda.net/privacy">개인정보처리방침 | </a>
                <a href="https://pulda.net/terms-of-service">이용약관 | </a>
                <a href="https://filledyou.com/">회사소개</a>
            </div>
        </div>
        <div id="CompanySns">
            <a id="" href="https://www.instagram.com/pulda_official/">
                <img id="Instagram" src="../img/Footer/Instagram.png" />
            </a>
            <a id ="" href="https://blog.naver.com/support_filledyou">
                <img id="NaverBlog " src="../img/Footer/NaverBlog.png" />
            </a>
            <div id="SeeMoreText">
         
                        <p id="SeeMoreText1">관련 사이트</p>
                        <p id="SeeMoreText2">+</p>
                 
            
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
    *{
        text-align: left;
    }
    .Topfooter{
        height : 1138px;
        width: 1920px;
        background-color: #fff;
    }
    .Bottomfooter{
        height: 600px;
        width: 1920px;
        background-color: #2E363E;   
    }

    #PuldaIcon{
        margin-top: 326px;
        margin-left: 862px;
    }
    #PuldaText{
        margin-top: 60px;
        text-align: center;
        font-family: Pretendard;
        font-size: 50px;
        font-weight: 700;
        line-height: 60px;
        color: #1e1e1e;
    }
    .Download{
        margin-top: 60px;
        display: flex;
    }
    #AppStoreButton{
        width: 197px;
        height: 54px;
        border: 1px solid #737373;
        border-radius: 10px;
        margin-left: 760px;
        display: flex;
        background-color: #fff;
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
        color: #1e1e1e;
        text-decoration: none;
        width: 197px;
        height: 54px;
    }
    #AppStoreButton :hover{
        background-color: #f3f3f3;
    }
   
    #GoogleButton{
        width: 197px;
        height: 54px;
        border: 1px solid #737373;
        border-radius: 10px;
        margin-left: 5px;
        display: flex;
        background-color: #fff;
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
        color: #1e1e1e;
        text-decoration: none;
        width: 197px;
        height: 54px;
    }
    #GoogleButton :hover{
        background-color: #f3f3f3;
    }
    .CompanyInfo{
        padding-top: 334px;
        padding-left: 360px;
    }
    #CompanyName{
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        color: #D4D4D4;
    }
    #CompanyInfomation{
        font-family: Pretendard;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
        color: #BABABA;
        margin-top: 10px;
    }
    #CompanyMenu{
        margin-top: 10px;
    }

    #CompanySns{
        margin-top: 36px;
        margin-left: 360px;
        display: flex;
    }
    #Instagram{
        margin-right: 10px;
    }
    #SeeMoreText{
        width: 197px;
        height: 37px;
        border-radius: 10px;
        background: #3D4751; 
        margin-left: 921px;
        display: flex;
    }

    #SeeMoreText1{
        font-family: Pretendard;
        color: #D4D4D4;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        padding-left: 25px;
        padding-top: 10px;
    }
    #SeeMoreText2{
        font-family: Pretendard;
        color: #D4D4D4;
        font-size: 20px;
        font-weight: 700;
        line-height: 17px;
        padding-left: 65px;
        padding-top: 8px;
    }
    a{
        text-decoration: none;
        font-family: Pretendard Variable;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        color: #D4D4D4;
    }  
</style>