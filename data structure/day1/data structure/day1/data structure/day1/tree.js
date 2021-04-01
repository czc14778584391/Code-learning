// * 深度优先算法步骤
// 1.访问根节点
// 2.对根节点的children进行逐个深度优先遍历（使用递归）

const tree = {
    val: "a",
    children: [
        {
            val: "b",
            children: [
                {
                    val: "d",
                    children: []
                },
                {
                    val: "e",
                    children: []
                }
            ]
        },
        {
            val: "c",
            children: [
                {
                    val: "f",
                    children: []
                },
                {
                    val: "g",
                    children: []
                }
            ]
        }
    ]
}

const dfs = (root) => {
    console.log(root.val);
    root.children.forEach(child => {
        dfs(child);
    });
}

dfs(tree); //深度优先

// * 广度优先遍历
// 1.新建一个队列，根节点入队
// 2.队头出队，并访问
// 3.把队头的children逐个入队
// 4.重复 2 3步，直到队列为空

const bfs = (root) => {
    const q = [root];
    while (q.length > 0) {
        const n = q.shift();
        console.log(n.val);
        n.children.forEach(child => {
            q.push(child);
        })
    }
}

bfs(tree);//广度优先

// 手写实现
// const dfs=root=>{
//     console.log(root.val);
//     root.children.forEach(child=>{
//         dfs(child);
//     })
// }

// const bfs=root=>{
//     const p=[root];
//     while(p.length>0){
//        const n =p.shift();s
//         console.log(n.val);
//         n.children.forEach(child=>{
//             p.push(child);
//         })
//     } 
// }

