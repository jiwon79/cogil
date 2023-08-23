<template>
    <div class = "custom-detail">
        <div class = "custom-subtitle">{{ "요약" }}</div>
        <div class = "custom-content">{{ getMessage() }}</div>
        <div class = "custom-youtube">
            <div class = "text-box">
                <div class = "youtube-title"> How I make science animation </div>
                <div class = "youtube-description"> To try everything blablablabla </div>
            </div>
            <div class = "thumbnail-box">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['index'],
    methods: {
        getMessage() {
            switch (this.index) {
                case 0:
                    return '이렇다';
                case 1:
                    return '값 2에 대한 메시지';
                case 2:
                    return '값 3에 대한 메시지';
                case 3:
                    return '값 4에 대한 메시지';
                default:
                    return '기본 메시지';
            }
        },
        getVideo() {
            switch (this.index) {
                case 0:
                    return 1;
                case 1:
                    return 2;
                case 2:
                    return 3;
            }
        }
    }
};
</script>

<style scoped>

.custom-detail{
    display: flex;
    padding: 16px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    background: var(--grey-200, #F1F3F5);
}

.custom-subtitle{
    color: var(--grey-800, #1D1E1F);

    /* Heading/24 */
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
}

.custom-content{
    color: var(--grey-800, #1D1E1F);
    /* Paragraph/14 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
}

.custom-youtube{
    display: flex;
    padding-left: 0px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border: 1px solid var(--grey-250, #E3E6EB);
    background: var(--grey-100, #FFF);
}

.text-box{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex: 1 0 0;
    border: 1px solid var(--grey-250, #E3E6EB);
    background: var(--grey-100, #FFF);
}

.youtube-title{
    color: var(--grey-800, #1D1E1F);

    /* Paragraph/12 */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
}

.youtube-description{
    color: var(--grey-600, #73767B);

    /* Paragraph/10 */
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 160% */
}

.thumbnail-box{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}

</style>







