"use strict";
const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i <= nums.length; i++) {
        const matchedValue = target - nums[i]; // Computed the matched value and try to find it in the Map.
        if (map.has(matchedValue)) {
            // If found, return the index of the matched value and the current index.
            return [map.get(matchedValue), i];
        }
        else {
            // If not found, add the current value and index to the Map.
            map.set(nums[i], i);
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9));
