<script>
import {
  ArrowDown
} from '@element-plus/icons-vue'
import MultiAddressInput from './MultiAddressInput.vue'
import { fetchBalance } from '@/utils/substrate.js'

export default {
    components: {ArrowDown, MultiAddressInput},
    props: {
        address: {
            type: String,
            default: ''
        }
    },
    emits: ["submit"],
    data: function (){
        return {
            modules: [],
            selectedModule: '',
            selectedMethod: '',
            methods: [],
            values: [],
            balance: '0.00 DOT'
        }
    },
    computed: {
        encodeData: function() {
            if (!this.selectedMethod || !this.selectedMethod.key) {
                return '0x'
            }
            const extrinsicFn = api.tx[this.selectedModule][this.selectedMethod.key]
            return extrinsicFn(...this.values).method.toHex()
        },
        encodeHash: function() {
            return window.api.registry.hash(this.encodeData).toHex()
        }
    },
    watch: {
        selectedModule: function(val) {
            this.methods = []
            const methods = api.tx[val]
            for (let k in methods) {
                const meta = methods[k].meta.toJSON()
                const method = {
                    'name': `${k}(${meta.args.map((e)=>e.name).join(',')})`,
                    'doc': meta.docs[0],
                    'args': meta.args,
                    'key': k,
                }
                this.methods.push(method)
            }
            this.selectedMethod = this.methods[0]
        },
        selectedMethod: function(val) {
            this.values = new Array(val.args.length)
        }
    },
    mounted: async function() {
        const metadata = await api.rpc.state.getMetadata()
        const pallets = metadata.asLatest.toHuman().pallets
        pallets.forEach(element => {
            const name = element.name
            const txName = name.charAt(0).toLowerCase() + name.slice(1)
            const methods = api.tx[txName]
            if (methods) {
                this.modules.push(txName)
            }
        })
        this.balance = await fetchBalance(this.address)
        // sort in ascendant order
        this.modules.sort()
        this.selectedModule = this.modules[0]
    },
    methods: {
        inputType(t) {
            const numberTypes = ['u32', 'u128']
            if (!t) {
                return 'text'
            }
            for(const nt in numberTypes) {
                if (t.includes(numberTypes[nt])) {
                    return 'number'
                }
            }
            return 'text'
        },
        multiAddressUpdateed(i, val) {
          this.values[i] = val
        },
        submit() {
          this.$emit('submit', this.encodeData)
        },
        copy(text) {
          navigator.clipboard.writeText(text).then(
                ()=>{this.$message.success('Content copied!')},
                ()=>{this.$message.error('Copy failed!')}
            )
        }
    }
}
</script>

<template>
  <h3> New transaction</h3>
  <div class="form-groups">
    <div class="wallet-header">
      <div class="description">
        Accounts
      </div>
      <div class="balance">
        Balance: {{ balance }}
      </div>
    </div>
    <div class="wallet-info">
      {{ address }}
    </div>
    <div class="form-control">
      <div class="description">
        Submit
      </div>
      <div class="controls">
        <el-dropdown
          trigger="click"
          max-height="400px"
          class="module-control"
        >
          <span class="el-dropdown-link">
            {{ selectedModule }}
          </span>
          <el-icon class="el-icon--right">
            <ArrowDown />
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="(name, i) in modules"
                :key="i"
                class="method-group"
                @click="selectedModule=name"
              >
                <div>{{ name }}</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-dropdown
          trigger="click"
          max-height="400px"
          class="method-control"
        >
          <div class="el-dropdown-link">
            <span>{{ selectedMethod.name }}</span>
            <span>{{ selectedMethod.doc }}</span>
          </div>
          <el-icon class="el-icon--right">
            <ArrowDown />
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="(item, i) in methods"
                :key="i"
                class="method-group"
                @click="selectedMethod=item"
              >
                <div>{{ item.name }}</div>
                <div>{{ item.doc }}</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div
      v-for="(arg,i) in selectedMethod.args"
      :key="i"
      class="form-control"
    >
      <div class="arg-name">
        {{ arg.name }}: {{ arg.type }} ({{ arg.typeName }})
      </div>
      <MultiAddressInput
        v-if="arg.type == 'MultiAddress'"
        @done="multiAddressUpdateed(i, $event)"
      />
      <input
        v-else
        v-model="values[i]"
        class="arg-value"
        :type="inputType(arg.type)"
      >
    </div>
    <div class="form-control">
      <div class="description">
        encoded call data
      </div>
      <div class="encoded">
        {{ encodeData }}
        <img
          src="@/assets/copy-circle.svg"
          @click="copy(encodeData)"
        >
      </div>
    </div>
    <div class="form-control">
      <div class="description">
        encoded call hash
      </div>
      <div class="encoded">
        {{ encodeHash }}
        <img
          src="@/assets/copy-circle.svg"
          @click="copy(encodeHash)"
        >
      </div>
    </div>
    <div
      class="btn"
      @click="submit"
    >
      Submit transaction
    </div>
  </div>
</template>
<style lang="stylus">
@import '@/assets/base.css'

h3
  text-align: left
  font-size: 24px
  margin-block-start: 0
.wallet-header
  display: flex
  justify-content: space-between
  width: 900px
  .balance
    color: rgba(14, 14, 17, 0.5)
    font-size: 12px
    font-weight: 400
.form-groups
  display: flex
  flex-direction: column
  align-items: flex-start
  width: 900px
  .description
    text-align: left
    padding-left: 16px
    padding-bottom: 6px
    font-size: 12px
    font-weight: 400
  .form-control
    margin-top: 12px
    margin-bottom: 12px
    text-align: left
  .wallet-info
    height: 40px
    width: 100%
    text-align: left
    font-size: 16px
    padding: 10px 16px
    border: 1px solid rgba(14, 14, 17, 0.1)
    box-sizing: border-box
    border-radius: 4px
    color: rgba(14, 14, 17, 0.3)
.method-group
  display: flex
  justify-content: space-between
.module-control
  margin-right: 10px
  max-width: 130px
  .el-dropdown--default
    width: 100px
    display: flex
    justify-content: space-between
    align-items: center
.method-control
  width: 760px
  .el-dropdown--default
    width: 740px
    display: flex
    justify-content: space-between
    align-items: center

.el-dropdown
  height: 40px
  border: 1px solid rgba(14, 14, 17, 0.1)
  box-sizing: border-box
  border-radius: 4px
  padding: 8px 16px
  color: #0E0E11
  .el-dropdown-link
    line-height: 24px
    font-size: 16px
    cursor: pointer
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    width: 100%
    display: flex
    justify-content: space-between
    span:first-child
      margin-right: 20px
    span:last-child
      color: rgba(14, 14, 17, 0.3)
.el-dropdown-menu
  overflow-y: scroll
.encoded
  color: rgba(14, 14, 17, 0.3)
  font-size: 16px
  text-align: left
  line-height: 24px
  width: 900px
  display: flex
  justify-content: space-between
  img
    cursor pointer
.arg-name
  text-align: left
  font-size: 16px
  font-weight: 400
  line-height: 18px
  margin-bottom: 6px
  margin-left: 16px
  color: #0E0E11
.arg-value
  height: 32px
  border: 1px solid rgba(14, 14, 17, 0.1)
  box-sizing: border-box
  border-radius: 4px
  color: rgba(14, 14, 17, 0.3)
  text-align: left
  min-width: 600px
</style>