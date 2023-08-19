<template>
    <div>
        <button v-for="(buttonText, index) in buttonList" :key="index" @click="changeText(index)">
            {{ buttonText }}
        </button>
        <Document :index="selectedButton"/>
    </div>
</template>

<script>

import Document from './AboutDocument.vue';

export default {
    components: {
        Document
    },
    data() {
        return {
            buttonList: ['버튼 1', '버튼 2', '버튼 3'], // 버튼 텍스트 목록
            selectedButton: null, // 선택된 버튼의 인덱스
        };
    },  
    methods: {
        changeText(index) {   // 버튼 index 저장
            this.selectedButton = index;
        },
        openLink1() {
            window.open("", "_blank");
        },
        openLink2() {   
            window.open("", "_blank");
        },
        openLink3() {
            window.open("", "_blank");
        }
    },
};
</script>
