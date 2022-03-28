<script>
export default {
    props: {
        accounts: {
            type: Array,
            default: () => []
        }
    },
    emits: ["change"],
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
    }
}
</script>
<template>
  <div class="main">
    <h3>Select an account</h3>
    <select v-model="selected">
      <option>Please select an account</option>
      <option
        v-for="(account, index) in accounts"
        :key="index"
        :value="account"
      >
        {{ account.meta.name }}({{ account.address }})
      </option>
    </select>
  </div>
</template>
