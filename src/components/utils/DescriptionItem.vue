<template>
    <p>
        <span class="title">{{ title }}</span>  
        <span class="content">{{ content }}</span>
    </p>
</template>
<script>
export default {
    props: ['title', 'content']
}
</script>
<style scoped>
.title {
    font-size: 14px; 
    line-height: 22px; 
    margin: 0 10px 0px 0; 
    color: rgba(0, 0, 0, 0.65);
    font-weight: 600;
}
</style>


