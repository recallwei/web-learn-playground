function optionalChaining() {
  const obj = {};
  obj.fc?.(); // 如果 fc 存在，但不是函数，将会抛出错误
}

class Counter {
  i = 0;

  print() {
    console.log(this.i);
  }
}

const counter = new Counter();

counter.print();

const bubbleSort = (arr) => {};

const arr = [1, 3, 2, 4, 5, 6, 7, 8, 9, 10];
arr.sort((a, b) => a - b);

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i; i <= nums.length; i++) {
    map.set(item, index);
    const x = target - item;
    if (map.has(x)) {
      return [map.get(x), index];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
