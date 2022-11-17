function optionalChaining() {
  const obj = {};
  obj.fc?.(); // 如果 fc 存在，但不是函数，将会抛出错误
}
