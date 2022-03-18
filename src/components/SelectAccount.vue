<script>
export default {
    data: function(){
        return {
            selected: ''
        }
    },
    watch: {
        selected: function(v) {
            this.$emit("change", v)
            this.$store.commit('network/setAccount', v)
        }
    },
    emits: ["change"],
    props: {
        accounts: Array
    }
}
</script>
<template>
<div class="main">
    <h3>Select an account</h3>
    <select v-model="selected">
        <option>Please select an account</option>
        <option v-for="(account, index) in this.accounts" :key="index" :value="account">{{ account.meta.name }}({{ account.address }})</option>
    </select>
</div>
</template>
