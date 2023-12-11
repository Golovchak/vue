<template>
  <div class="credit-card">
    <div class="card-number input-segment">
      <label for="cardNum">Card number</label>
      <input
        ref="cardNum"
        :key="updateKey"
        type="text"
        id="cardNum"
        v-model="cardNumberBinding"
      />
    </div>
    <div class="card-info">
      <div class="expiry-date input-segment">
        <label for="cardExpiry">Card Expiry</label>
        <input
          ref="expiry"
          :key="updateKey2"
          type="text"
          id="cardExpiry"
          v-model="cardExpiryBinding"
        />
      </div>
      <div class="secure-code input-segment">
        <label for="cardSecure">Card Expiry</label>
        <input type="password" id="cardSecure" v-model="cardCodeBinding" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDataField",
  data() {
    return {
      updateKey: 0,
      updateKey2: 0,
    };
  },
  props: {
    cardNumber: { type: String },
    cardNumberModifiers: { default: () => ({}) },

    cardExpiry: { type: String },
    cardExpiryModifiers: { default: () => ({}) },

    cardCode: { type: String },
  },

  computed: {
    cardNumberBinding: {
      get() {
        if (this.cardNumberModifiers.separate4Digits) {
          return (this.cardNumber ?? "")
            .toString()
            .replace(/(\d{4}(?=\S+))/g, "$1 ");
        } else return this.cardNumber;
      },
      set(newVal) {
        if (this.cardNumberModifiers.digitsOnly) {
          newVal = newVal.replace(/\D/g, "");
          this.$nextTick(() => {
            this.updateKey++;
            this.$nextTick(() => {
              this.$refs.cardNum.focus();
            });
          });
        } else if (this.cardNumberModifiers.separate4Digits) {
          newVal = newVal.replace(/\s/g, "");
        }
        this.$emit("update:cardNumber", newVal);
      },
    },
    cardExpiryBinding: {
      get() {
        return (this.cardExpiry ?? "")
          .toString()
          .replace(/(\d{2}(?=[^/]+))/g, "$1/");
      },
      set(newVal) {
        if (this.cardExpiryModifiers.digitsOnly) {
          newVal = newVal.replace(/\D/g, "");
          this.$nextTick(() => {
            this.updateKey2++;
            this.$nextTick(() => {
              this.$refs.expiry.focus();
            });
          });
        } else if (this.cardExpiryModifiers.slashInsert) {
          // newVal = newVal.replace(/(\d{2}(?=[^/]+))/g, "$1/");
          newVal = newVal.replace(/\//g, "");
        }
        this.$emit("update:cardExpiry", newVal);
      },
    },
    cardCodeBinding: {
      get() {
        return this.cardCode;
      },
      set(newVal) {
        this.$emit("update:cardCode", newVal);
      },
    },
  },
};
</script>

<style lang="css" scoped>
input {
  margin-top: 7px;
  padding: 16px;
  border-radius: 5px;
  border: 2px solid #9c9b9b;
  font-size: 20px;
}
.card-number input {
  margin-bottom: 20px;
  width: 364px;
}
.credit-card {
  padding: 10px;
  width: 400px;
  height: 200px;
  background: #eaeaea;
  text-transform: uppercase;
  font-weight: bold;
  color: #666666;
  font-size: 20px;
}
.card-info {
  display: flex;
}
.card-info input {
  width: 160px;
  margin: 7px 8px 0 0;
}
.input-segment {
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>