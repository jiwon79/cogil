<template>
    <div>
        <p>{{ getMessage() }}</p>
    </div>
</template>

<script>
export default {
    props: ['index'],
    methods: {
        getMessage() {
            switch (this.index) {
                case 0:
                    return '값 1에 대한 메시지';
                case 1:
                    return '값 2에 대한 메시지';
                case 2:
                    return '값 3에 대한 메시지';
                default:
                    return '기본 메시지';
            }
        }
    }
};
</script>








