<script setup>
import { ref } from "vue"
const data = ref([
  {
    name: "加料报料",
    time: "2022-10-1 10:10:10",
    user: "张三"
  },
  {
    name: "加料投料",
    time: "2022-10-1 10:10:10",
    user: "张三"
  },
  {
    name: "初装报料",
    time: "2022-10-1 10:10:10",
    user: "张三"
  },
  {
    name: "初装报料",
    time: "2022-10-1 10:10:10",
    user: "张三"
  },
  {
    name: "初装报料",
    time: "2022-10-1 10:10:10",
    user: "张三"
  },
  {
    name: "初装报料",
    time: "2022-10-1 10:10:10",
    user: "张三",
    line: true
  },
  {
    name: "初装报料",
    time: "2022-10-1 10:10:10",
    user: "张三"
  }
])
</script>

<template>
  <div class="container">
    <div
      v-for="item in data"
      class="item"
    >
      <div class="content">
        <div class="circle"></div>
        <div class="line-wrapper">
          <div
            class="line"
            v-if="item.line"
          ></div>
        </div>
      </div>
      <div class="content">
        <span :class="!item.line && 'content-line'">{{ item.name }}</span>
        <span>{{ item.time }}</span>
        <span>{{ item.user }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  height: 200px;
}
.content {
  display: flex;
  flex-direction: column;
}
.container {
  display: grid;
  grid-template-columns: repeat(6, 16%);
}
.line-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.line {
  width: 1px;
  height: 120px;
  background-color: gray;
}
.content-line {
  border-bottom: 1px solid gray;
  width: 90%;
}
.circle {
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  background-color: gray;
  margin-top: 15px;
}
</style>
