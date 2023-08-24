<template>
    <div class = "custom-detail">
        <test-component/>
        <component :is="testComponent"></component>
        <!-- <div class = "custom-subtitle">{{ getSubtitle() }}</div>
        <div class = "custom-content">{{ getContent() }}</div>
        <div class = "custom-youtube">
            <div class = "text-box">
                <div class = "youtube-title">{{ getYoutubeTitle() }} </div>
                <div class = "youtube-description"> {{ getDescription() }} </div>
                <div> {{ getTestComponent() }}</div>
            </div>
            <div class = "thumbnail-box">
                {{ getYoutubeThumbnail() }}
            </div>
        </div> -->

    </div>
</template>

<script>
import TestComponent from '../components/testComponent.vue';
import {subtitleCollection} from '../store/subtitle.js';
import {contentCollection} from '../store/content.js';
import { descriptionCollection } from '../store/description.js';
import { thumbnailCollection } from '../store/thumbnail.js';
import { youtubetitleCollection } from '../store/youtubetitle.js';

export default {
    components:{
        TestComponent
    },
    props: ['index'],
    methods: {
        getContent() {
            return contentCollection[this.index];
        },
        getSubtitle() {
            return subtitleCollection[this.index];
        },
        getDescription() {
            return descriptionCollection[this.index];
        },
        getThumbnail() {
            return thumbnailCollection[this.index];
        },
        getYoutubeTitle() {
            return youtubetitleCollection[this.index];
        },
    },
    computed: {
        testComponent() {
            return TestComponent;
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







