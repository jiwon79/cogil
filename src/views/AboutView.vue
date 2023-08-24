<template>
    <div class="iphone14">
        <MainHeader title="GAME"/>
        <!-- 전체 분야, 아마 이것도 merge할 때 리스트 인덱스 받아와야 할 듯 싶음 -->
        <div>
            <ButtonSelect/>
        </div>
    </div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import ButtonSelect from './AboutButtonSelect.vue';

export default {
  name: 'SubjectPage',
  components: {
    ButtonSelect,
      MainHeader,
  },
  methods: {
    goBack() {
      history.back(); // 이전 페이지로 이동
    }
  }
};
</script>


<style scoped>

.iphone14 {
    display: flex;
    width: 390px;
    height: 844px;
    flex-direction: column;
    align-items: flex-start;
    background: var(--grey-200, #F1F3F5);
}

.header {
    display: flex;
    width: 390px;
    height: 52px;
    padding: 0px 12px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.custom-image {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
}

.header-text {
    color: var(--grey-800, #1D1E1F);
    /* Heading/24 */
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
}

</style>

