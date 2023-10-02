<template>
    <MainHeader :title="document.title"/>
    <ButtonSelect
        :label-list="labelList"
        :cur-index="curIndex"
        :set-cur-index="setCurIndex"
    />
    <Component :is="document.detailList[curIndex].content as any"/>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";

import MainHeader from "@/components/MainHeader.vue";
import ButtonSelect from "@/components/Document/component/ButtonSelect.vue";
import documentMap from "@/components/Document/documentMap";

const category = useRoute().params.category as string;
const document = documentMap.get(category)!;
const labelList = document.detailList.map((detail) => detail.title);

const curIndex = ref(0)
const setCurIndex = (index: number) => {
  curIndex.value = index
}

</script>
