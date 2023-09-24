// function postorder(tree) {
//   if (tree == null) return;
//   postorder(tree.left);
//   postorder(tree.right);
//   process.stdout.write((`${tree.val} -> `));
// }

const preorder = (root, nodes = []) => {
    if (root) {
      nodes.push(root.val);
      preorder(root.left, nodes);
      preorder(root.right, nodes);
    }
    return nodes;
  };
  
  const postorder = (root, nodes = []) => {
    if (root) {
      postorder(root.left, nodes);
      postorder(root.right, nodes);
      nodes.push(root.val);
    }
    return nodes;
  };
  
  const inorder = (root, nodes = []) => {
    if (root) {
      inorder(root.left, nodes);
      nodes.push(root.val);
      inorder(root.right, nodes);
    }
    return nodes;
  };

  // To be fixed with BFS
  // const topdown = (root, nodes = [], visited = false) => {
  //   if (root) {
  //     debugger;
  //     nodes.push(root.val);
  //     if (!visited) {
  //       topdown(root.left, nodes, true)
  //     } else {
  //       topdown(root.right, nodes, false)
  //     }
  //   }
  //   return nodes;
  // }
  
  const tree = {
    val: 10,
    left: {
      val: 5,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 7,
        left: null,
        right: null,
      },
    },
    right: {
      val: 20,
      left: {
        val: 15,
        left: null,
        right: null,
      },
      right: {
        val: 35,
        left: null,
        right: null,
      },
    },
  };

  /* 
              10
        5            20
    3       7    15      35
  
  */
  console.log("PREORDER", preorder(tree));
  console.log('---------------');
  console.log("INORDER", inorder(tree));
  console.log('---------------');
  console.log("POSTORDER", postorder(tree));