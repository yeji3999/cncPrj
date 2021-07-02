<template>
<div class="main">
    <router-view></router-view>
</div>
    
</template>
<script>
export default {
    name:'Main',
    created () {
        const id = this.$route.params.id;
        if (id === undefined) {
            this.$router.go(-1);
        } 
    }
}
</script>