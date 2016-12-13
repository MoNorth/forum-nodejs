# forum-nodejs
基于 Nodejs 的通用型论坛社交系统

## 今天任务
1. 熟悉 github 操作
2. 将你们的画的图都提交上来，路径为 `docs/` 你的分支名文件夹/你的图文件~


## 基本操作
1. 将库拉到本地
   ```bash
   git clone git@github.com:MoNorth/forum-nodejs.git
   ```
2. 在 docs 文件夹中新建自己的文件夹，然后将你画的图复制进去
3. 切换分支
   ```bash
   git checkout 你的分支名
   ```
4. 提交
   ```bash
   git add 你需要提交的文件/文件夹
   git commit -m "你本次提交说明"
   git push
   ```
5. 发起 pull request , github 网页端切换到你的分支，看看如果没有问题的话点击按钮 new pull request，申请合并到 master



## 2016/12/7

### 今日任务，先将这个架子跑起来，然后自己看看文件结构，根据文件里面的提示写东西

### 找两个vue已经比较熟悉的人，先把pulic下的两个公用组件写了

### 重点！记着先把分支合并了，把master合并到你自己的分支，然后再写，写完后写的那两个人彼此先合并了确认没问题的话将其中一个人的分支提到主分支


## 2016/12/9

### 今日任务，glt和yxt继续完善之前任务
### 今日四个模块，分四个组件去写。，每人一个。分别为：
1. 话题分类，目录/src/components/index/Classification.vue
2. 热门帖子，目录/src/components/index/Hotpost.vue
3. 登录，目录/src/components/index/Login.vue
4. 推荐博主，目录/src/components/index/Hotblogger.vue

![图](/docs/ljx/登录界面.png)

### 注意，数据采用假数据，自己模拟。但要求必须采用数据绑定加载数据
