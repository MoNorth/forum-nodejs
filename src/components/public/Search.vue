<template>
  <form class="search" :class="{'search_changeClass' :data.change}">
    <input class="search" type="text" name="search" placeholder="搜索话题/用户..." v-model="data.searchCon" @focus="changeClass" @blur="changeClass">
    <button type="button" @click="getSearchCon(data.searchCon)">
      <img src="../../static/images/header_search.png">
    </button>
  </form>
</template>
<script>
  let data = {
    searchCon : '',
    change : false
  }
  export default {
    name : 'search',
    data() {
      return {
        data : data
      }
    },
    methods : {
      getSearchCon(searchCon) {
        console.log(searchCon);
      },
      changeClass() {
        this.data.change = !this.data.change;
      }
    }
  }
</script>
<style lang="less">
  .search {
    display: inline-block;
    position: relative;
    width: 15%;
    min-width: 150px;
    transition: width 1s;
    font-size: 14px;
    input {
      width: 100%;
      height: 35px;
      text-indent: 16px;
      margin: 0;
      outline: none;
      border: 2px solid #324b4e;;
      border-radius: 35px;
    }
    button {
      width: 35px;
      height: 35px;
      background: none;
      border: none;
      position: absolute;
      top: -2px;
      right: 0;
      outline: 0;
    }
  }  
  .search_changeClass {
    width: 20%;
    transition: width 1s;
  }
</style>