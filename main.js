
/**
 * iterate in the loop and match the element with value;
 * if value matches then splice the element
 * reuturn the length of array in the end
 */


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

let nums = [3,2,2,3]; let  val = 3
 var removeElement = function(nums, val) {
    let n=nums.length;
    for(let i=0;i<n;i++){
        if(nums[i]===val){
            nums.splice(i,1);
           i--;
            n--;
}
}
    return nums.length;
};

console.log(removeElement(nums,val));