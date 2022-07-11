---
title: 怎么用好你的王八来协作？
mainfont: 霞鹜文楷
---

最简单能工作就好，可能这个方法不太正规，但是没关系。

假设你现在要在主分支加一个功能，顺序是：

# 复制咱们仓库的地址

![copy_git_link.png](img/copy_git_link.png)

# 用王八克隆下来

![use_wangba_to_clone.png](img/use_wangba_to_clone.png)

就是要找一个没有这个目录的目录，右键克隆下来。

这里克隆的是主分支哈，所以上面的`Branch`不用勾也不用写，因为默认就是主分支。

# 改

在克隆下来的文件里改。

# 上传

在克隆下来的根目录下右键，找到乌龟，先`commit`。这里你`commit`到哪个分支都行，因为都是你电脑上的分支。

然后`commit`完王八会让你`push`，注意这时候要`push`到一个新的分支，因为这里已经是远程分支了，看图。

![set_new_branch.png](img/set_new_branch.png "set_new_branch.png")

就是Ref下面哪个Remote要点一下输入一个新的分支名，这样就会推到新的分支了。

看Github效果：

![github_new_branch.png](img/github_new_branch.png)

然后在github提pr就行了。

你要再改别的可以在本地改，推到同一个分支去，pr不用重新提。

如果pr已经被合并到主分支了，下次要加功能就把之前的文件夹都删了，从头看起。