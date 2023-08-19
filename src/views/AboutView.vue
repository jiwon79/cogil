<!-- 아이콘 버튼 클릭 시 내용 뜨고, 내용에는 더보기 버튼이 존재. 더보기 버튼을 누르면 내용이 더 로드됨-->

<template>
  <div>
    <button v-for="(buttonText, index) in buttonList" :key="index" @click="changeText(index)">
      {{ buttonText }}
    </button> 
    <div v-if="selectedButton !== null">
      <div v-if="selectedButton === 0 && !expanded">
        <p> 요약된 내용 1 </p>
        <button @click="toggleExpanded">
          {{  !expanded ? '더보기' : '접기' }}
        </button>
        <button @click="openLink1"> 카카오톡1 </button>
      </div>
      <div v-if="selectedButton === 0 && expanded">
        <p> 요약된 내용 1 </p>
        <p> 추가된 내용 1 </p>
        <button @click="toggleExpanded">
          {{ !expanded ? '더보기' : '접기' }}
        </button>
        <button @click="openLink1"> 카카오톡1 </button>
      </div>
    
      <div v-if="selectedButton === 1 && !expanded">
        <p> 요약된 내용 2 </p>
        <button @click="toggleExpanded">
          {{ !expanded ? '더보기' : '접기' }}
        </button>
        <button @click="openLink2"> 카카오톡2 </button>
        </div>
      <div v-if="selectedButton === 1 && expanded">
        <p> 요약된 내용 2 </p>
        <p> 추가된 내용 2 </p>
        <button @click="toggleExpanded">
            {{ !expanded ? '더보기' : '접기' }}
        </button>
        <button @click="openLink2"> 카카오톡2 </button>
      </div>

      <div v-if="selectedButton === 2 && !expanded">
        <p> 요약된 내용 3 </p>
        <button @click="toggleExpanded">
          {{ !expanded ? '더보기' : '접기' }}
        </button>
        <button @click="openLink3"> 카카오톡3 </button>
      </div>
      <div v-if="selectedButton === 2 && expanded">
        <p> 요약된 내용 3 </p>
        <p> 추가된 내용 3 </p>
        <button @click="toggleExpanded">
          {{ !expanded ? '더보기' : '접기' }}
        </button>
        <button @click="openLink3"> 카카오톡3 </button>
      </div>
            
      <p>다른 버튼: {{ getOtherButtonText(selectedButton) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonList: ['버튼 1', '버튼 2', '버튼 3'], // 버튼 텍스트 목록
      selectedButton: null, // 선택된 버튼의 인덱스
      expanded: false
    };
  },
  methods: {
    changeText(index) {   // 버튼 index 저장, 버튼 클릭 시 접힌 상태로 리셋
      this.selectedButton = index;
      this.expanded = false;
    },
    getOtherButtonText(index) {     // 다른 버튼 표현하는 기능인데, 필요한지는 잘 모르겠음.
      const otherButtons = this.buttonList.filter((_, i) => i !== index);
      return otherButtons.map(buttonText => buttonText).join(', ');
    },
    toggleExpanded() {    // 더보기/접기 함수
      this.expanded = !this.expanded;
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