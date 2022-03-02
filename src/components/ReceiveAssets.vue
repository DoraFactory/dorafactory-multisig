<template>
    <div class="receive-assets">
        <h2>Receive Assets</h2>
        <div class="note-info">
            <span>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM25.5586 26.7129H22.4297L22.125 15.3691H25.875L25.5586 26.7129ZM26.1328 30.6738C26.1328 31.8809 25.3242 32.6309 24 32.6309C22.6875 32.6309 21.8672 31.8809 21.8672 30.6738C21.8672 29.4551 22.6875 28.7051 24 28.7051C25.3242 28.7051 26.1328 29.4551 26.1328 30.6738Z" fill="#FF761C"/>
                </svg>
            </span>
            <div class="note-text">
                Please double check the address and only send funds to an address on the Dora Factory network.
            </div>
        </div>
        <div class="description">
            This is the address of your wallet.Deposit funds by scanning the QR code or copying the address below.
            Only send Dora factory Network and assets to this address!
        </div>
        <div class="address-info">
            0x121212
        </div>
        <div class="btn stretch-btn">Done</div>
    </div>
</template>
<style lang="stylus" scoped>
.receive-assets
  width: 560px
  text-align: left
  h2
    font-weight: 600
    line-height: 32px
    height: 32px
    font-size: 24px
    color: #0E0E11
    margin-block: 0
    text-align: left
  .note-info
    margin-top: 32px
    display: flex
    justify-content: flex-start
    align-items: center
    .note-text
      font-size: 12px
  .description
    margin-top: 16px
    font-size: 16px
  .address-info
    background: rgba(14, 14, 17, 0.03)
    border-radius: 4px
    color: black
    padding: 12px 15px
    margin-top: 20px
  .stretch-btn
    width: 145px
    text-align: center
    margin-left: 160px
</style>