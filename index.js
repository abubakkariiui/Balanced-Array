//   find the index of the smallest array element (the pivot), for which the sums of all elements to the left and
//   to the right are equal.
function find_element_index(arr) {
  //Finding length of the array
  var n = arr.length;

  // Forming prefix sum array from 0
  var prefix_array = Array(n).fill(0);
  prefix_array[0] = arr[0];
  for (i = 1; i < n; i++) prefix_array[i] = prefix_array[i - 1] + arr[i];

  // Forming suffix sum array from n-1
  var suffix_array = Array(n).fill(0);
  suffix_array[n - 1] = arr[n - 1];
  for (i = n - 2; i >= 0; i--) suffix_array[i] = suffix_array[i + 1] + arr[i];

  // Find the point where prefix and suffix have same element
  for (i = 1; i < n - 1; i++)
    if (prefix_array[i] == suffix_array[i])
      return console.log('The pivot number index is', i);

  return -1;
}

// Triggering Function

var arr = [1, 2, 3, 4, 6];

let test = find_element_index(arr);
