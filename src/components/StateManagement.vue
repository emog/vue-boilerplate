<template>
  <div class="title">
    <h1>State Management</h1>
    <div>
      <h3>{{ $store.state.default.count }}</h3>
      <button
        class="btn"
        @click="onClick"
      >
        {{ 'increment'| capitalize }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
    metaInfo: {
        title: 'State Management',
    },
    methods: {
        onClick (){
            this.$store.commit('default/increment');
        }
    }
};
</script>

<style lang="scss" scoped>
    .title {
        h1 {
            color: red;
        }
    }
  .btn {
    padding: 10px;
    background: #ffffff;
    color: #000;
    font-size: 16px;
  }
</style>
