<template>
    <div class = "Footer">
        <div class="CompanyInfo">
            <div id="CompanyName">(주)필드유</div>
            <div id="CompanyInfomation">
                대표 : 양지영 | 연락처 : 010-4788-8184 <br>
                사업자 등록번호 : 442-81-01575 <br>
                경기도 안양시 동안구 시민대로 327번길 11-41,<br> 
                3층 310호 <br>
                Copyright © 2023 FilledU, All rights reserved.
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
        </div>
        <div id="SeeMoreText">
            <p id="SeeMoreText1">관련 사이트</p>
            <p id="SeeMoreText2">+</p>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style>
    *{
        text-align: left;
    }
    .Footer{
        height: 640px;
        width: 360px;
        background-color: #2E363E;   
    }
    .CompanyInfo{
        padding-top: 231px;
        padding-left: 20px;
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
        margin-top: 30px;
        margin-left: 20px;
        display: flex;
    }
    #Instagram{
        margin-right: 10px;
    }
    #SeeMoreText{
        width: 320px;
        height: 54px;
        border-radius: 10px;
        background: #3D4751; 
        margin-left: 20px;
        margin-top: 50px;
        display: flex;
    }

    #SeeMoreText1{
        font-family: Pretendard;
        color: #D4D4D4;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        padding-left: 25px;
        padding-top: 19px;
    }
    #SeeMoreText2{
        font-family: Pretendard;
        color: #D4D4D4;
        font-size: 20px;
        font-weight: 700;
        line-height: 17px;
        padding-left: 196px;
        padding-top: 21px;
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




