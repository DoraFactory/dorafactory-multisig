<script>

export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        addressType: {
            type: String,
            default: 'Id',
        }
    },
    data: function() {
        return {
            types: ['Id', 'Index', 'Raw', 'Address32', 'Address20']
        }
    },
    emits: ["done"],
    methods: {
        onBlur() {
            const address = {
                [this.addressType]: this.value
            }
            this.$emit('done', address)
        }
    }
}
</script>

<template>
  <el-select v-model="addressType" class="address-type">
      <el-option v-for="(name, i) in types" :key="i" :value="name"/>
  </el-select>
  <input v-on:blur="onBlur" :type="this.addressType == 'Index' ? 'number' : 'text'" v-model="value" />
</template>

<style lang="stylus" scoped>
@import '@/assets/base.css'

.address-type
  width: 80px
  margin-right: 20px
input
  height: 32px
  border: 1px solid rgba(14, 14, 17, 0.1)
  box-sizing: border-box
  border-radius: 4px
  color: rgba(14, 14, 17, 0.3)
  width: 500px

</style>