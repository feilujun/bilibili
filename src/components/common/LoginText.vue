<template>
  <div>
    <van-field 
    :label="label" 
    :type="type" 
    :placeholder="placeholder" 
    :rule="rule"
    v-model="content"
    />
  </div>
</template>

<script>
export default {
    data() {
      return {
        content: ''
      }
    },
    props: ["label", "type", "rule", "placeholder"],
    methods: {
      handelerulg() {
        const rue = new RegExp(this.rule)
        if(rue.test(this.content)) {
          this.$emit('inputChange',this.content)
        }
      }
    },
    watch: {
      content() {
        this.handelerulg()
      }
    }
};
</script>

<style>
</style>