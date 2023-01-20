<template>
    <div class="PuldaDownload">
        <div id = "PuldaIcon">
            <img id="PuldaIconImg" src="../img/Footer/PuldaSqureIcon.png" />
        </div>
        <div id="PuldaText1">
            이 모든 것을 <p id ="BlueText"> 풀다</p>에서 
        </div>
        <div id="PuldaText2">
            지금 바로 시작해 보세요.
        </div>
        <div id="Download">
            <div id="DownloadText">
                앱 다운로드
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    methods :[
        PuldaDownLoad()
    ]
}
</script>

<style>
    .PuldaDownload{
        height: 860px;
        width: 360px;
      
    }
    #PuldaIconImg{
        margin-top: 154px;
        margin-left: 50px;
    }
    #PuldaText1{
        font-family: Pretendard;
        font-size: 32px;
        font-weight: 700;
        line-height: 38px;
        display: flex;
        text-align: center;
        margin-top: 50px;
        margin-left: 30px;
        color: #1e1e1e;
    }
    #BlueText{
        color: #3359E0;
        margin-left: 10px;
    }
    #PuldaText2{
        font-family: Pretendard;
        font-size: 32px;
        font-weight: 700;
       margin-top: 15px;
        margin-left: 20px;
        color: #1e1e1e;
    }
    #Download{
        height: 54px;
        width: 163px;
        border-radius: 100px;
        border: 1px solid #737373;
        margin-left: 55px;
        margin-top: 25px;
        padding-left: 45px;
        padding-top: 19px;
        font-family: Pretendard;
        font-size: 25px;
        font-weight: 700;

    }
</style>