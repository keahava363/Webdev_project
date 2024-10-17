

// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} s
 * @returns {number[]}
 */

class Solution {
    // Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, s) {
        // code here
        let total=0;
        //let new_array=[];
        for (let i = 0; i < arr.length; i++) {
            total = 0;

            for (let j = i; j < arr.length; j++) 
                {
                    total += arr[j];
               // console.log(i,j)
                //console.log(`Total=${total}`)

                if (total === s) {
                    //new_array.push(i);
                    //new_array.push(j);
                    //console.log(i,j)
                    return [i,j];
                    //break;
                }
                
            }

            
        }
        return[-1]
    }
}

const solution = new Solution();
const arr = [1, 2, 3, 7, 5]; // Example array
const s = 8; // Target sum
const result = solution.subarraySum(arr, s);
console.log(result);