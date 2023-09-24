<template>
    <div>
        <div class = "button-area">
            <button v-for="(buttonText, index) in buttonList" :key="index" @click="changeText(index)" class ="custom-button">
                {{ buttonText }}
            </button>
        </div>
        <Document :index="selectedButton"/> <!-- 세부 분야 -->
    </div>
</template>

<script>

export default {
    components: {
        Document
    },
    data() {
        return {
            buttonList: ['게임 엔진', '수학/물리', '그래픽스', '인공지능'], // 버튼 텍스트 목록
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

<style scoped>

.button-area {
    display: flex;
    padding: 12px 16px;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
}

.custom-button {
    display: flex;
    padding: 6px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #FFFFFF;
    transition: background 0.1s ease;
    border: none; /* 테두리 제거 */

    /* Label/14 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 114.286% */
}

.custom-button:active {
    display: flex;
    padding: 6px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    color: #E74A55;
}

</style>

