<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
<div class="all-transactions">
    <p class="title">TRANSACTIONS /</p>
    <div class="options">
        <ul>
            <li class="selected">Pending</li>
            <li>Created</li>
            <li>Completed</li>
        </ul>
        <div class="btn new-transaction">
            ↗ New transaction
        </div>
    </div>
    <div class="transaction-card-list">
        <div class="transaction-card">
            <div class="transaction-summary">
              <p>
                <span class="summary-label">CALL DATA:</span>
                <span class="summary-value">0xhhuadashua</span>
              </p>
              <p>
                <span class="summary-label">TIME:</span>
                <span class="summary-value">8 months ago</span>
              </p>
              <p>
                <span class="summary-label">ADDRESS:</span>
                <span class="summary-value">0xh...ashua</span>
              </p>
              <p>
                <span class="summary-label">PALLET/MODULEID:</span>
                <span class="summary-value">multisig pallet</span>
              </p>
              <p>
                <span class="summary-label">PARAMETER:</span>
                <span class="summary-value">round_id:2</span>
              </p>
            </div>
            <div class="transaction-status">
              <div class="status-bar success">
                  Pending approval
              </div>
              <p class="status-summary">1 out of 2 owners</p>
              <div class="progress-bar">
                <div class="progress-created">
                  <div class="circle-sign">+</div>
                  <span>Created</span>
                  <span class="connect-line"></span>
                </div>
                <div>
                <div class="progress-confirmed">
                  <div class="circle-sign empty"></div>
                  <div class="">Confirmed</div>
                  <span class="connect-line waiting"></span>
                </div>
                </div>
                <div class="progress-rejected">Rejected</div>
              </div>
              <div class="users-list">
                <div class="user-info">
                  <img src="@/assets/avatar.svg" />
                  <div class="user-profile">
                    <p>adasds</p>
                    <p>adasds</p>
                  </div>
                </div>
                <div class="user-info">
                  <img src="@/assets/avatar.svg" />
                  <div class="user-profile">
                    <p>adasds</p>
                    <p>adasds</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>
</template>
<style lang="stylus" scoped>
@import '@/assets/base.css'
.all-transactions
  width: 1000px
.title
  font-weight: bold
  font-size: 20px
  justify-content: flex-start
.options
  display: flex
  justify-content: space-between
  height: 40px
  ul
    list-style: none
    display: inline-flex
    justify-content: space-around
    padding-inline-start: 0
    li
      font-size: 20px
      font-weight: 600
      color: rgba(14, 14, 17, 0.5)
      margin-right: 20px
    .selected
      color: #FF761C
  .new-transaction
    margin-top: 0px
    padding: 10px 16px
    cursor pointer
.transaction-card-list
  margin-top: 30px
.transaction-card
  background: linear-gradient(190.57deg, rgba(255, 255, 255, 0.56) 19.25%, rgba(248, 248, 255, 0.71) 54.39%, rgba(255, 255, 255, 0.59) 90.02%)
  box-shadow: -10px 48.5967px 140px rgba(126, 123, 160, 0.2)
  backdrop-filter: blur(19px)
  border-radius: 34px
  padding: 30px
  display: flex
.transaction-summary
  font-size: 16px
  padding-right: 100px
  .summary-label
    font-weight: 600
    margin-right: 5px
.transaction-status
  .status-bar
    font-weight: 600
    color: #FF761C
    background: url('@/assets/pending.svg') no-repeat left center
    padding-left: 26px
    &.failed
      color: #FD0053
      background-image: url('@/assets/failed.svg')
    &.success
      color: #00B272
      background-image: url('@/assets/success.svg')
.progress-bar
  display: inline-flex
  color: #00B272
  font-weight: 600
  .connect-line
    height: 1px
    width: 60px
    border-bottom: 1px solid
    margin: 0 6px
    &.waiting
      border-bottom: 1px dotted #B7B7B8
  .progress-created, .progress-confirmed
    display: inline-flex
    align-items: center
  .circle-sign
    width: 12px
    height: 12px
    line-height: 12px
    color: white
    border-radius: 50%
    font-size: 12px
    text-align: center
    background: #00B272
    margin-right: 6px
    &.empty
      border: 1px solid #B7B7B8
      background: white
.users-list
  margin-left: 156px
  width: 1px
  position relative
  &:before 
    content : ""
    position: absolute
    left    : 0
    top  : 0
    height  : calc(100% - 15px)
    width   : 100%
    border-left:1px solid #00B272

  .user-info
    padding-left: 6px
    padding-top: 12px
    display: flex
    position: relative
    &:before
      content : ""
      position: absolute
      left    : 0
      top  : calc(50% + 6px)
      height  : 50%
      width   : 6px
      border-top:1px solid #00B272
    p
      margin-block: 0
      line-height: 15px
      height: 15px
    .user-profile
      font-size: 12px
      margin-left: 8px
  img
    width: 30px
    height: 30px

</style>
