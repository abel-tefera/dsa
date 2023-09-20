// const bstToGst = (root, sum = 0) => {
//     if (root) {
//         debugger;
//         sum = bstToGst(root.right, sum);
//         sum += root.val;
//         root.val = sum;
//         sum = bstToGst(root.left, sum);
//     }
//     return sum;
// };

var bstToGst = function(root) {
    debugger;
    bstToGstHelper(root);
    return root;
 };
 
 var bstToGstHelper = function(root, sum = 0) {
     if (root){
         sum = bstToGstHelper(root.right, sum);
         sum += root.val;
         root.val = sum;
         sum = bstToGstHelper(root.left, sum);
     }
     return sum;
 }

var tree = { "left": { "left": { "left": null, "right": null, "val": 0 }, "right": { "left": null, "right": { "left": null, "right": null, "val": 3 }, "val": 2 }, "val": 1 }, "right": { "left": { "left": null, "right": null, "val": 5 }, "right": { "left": null, "right": { "left": null, "right": null, "val": 8 }, "val": 7 }, "val": 6 }, "val": 4 }
console.log(JSON.stringify(bstToGst(tree)));