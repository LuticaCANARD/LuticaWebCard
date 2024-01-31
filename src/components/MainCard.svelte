<script lang="ts">
    export const mainDesc = " asdsa";
    import '../styles/main.css'
</script>

<style>
    .maincard__wrap{
        display:flex;
        justify-content: space-around;
        height:100%;
        align-items: center
    }
    .maincard__wrap__main{
        width:100%;
        display:flex;
        justify-content: space-around;
        height:100%;
        align-items: center
    }
    .maincard__border{
        width:min(100%,300px);
        border: black 1px solid;
        border-radius: 10px;
    }

</style>
<div class="maincard__wrap">
    <div class="maincard__wrap__main">\
        <!--이하 카드 자체의 영역-->
        <div class ="maincard__border">
            <div class="maincard__main">
                <p>{mainDesc}</p>
            </div>
        </div>
    </div>
</div>