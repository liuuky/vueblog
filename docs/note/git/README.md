### Git

#### git rm -r --cached解决已提交的文件在.gitignore中加入忽略后无效的问题。

#### 有时候，发现有不该提交的文件已经提交后，仅仅在.gitignore中加入忽略是不行的。这个时候需要执行:

```js
git rm -r --cached 文件/文件夹名字
```

#### 去掉已经托管的文件，然后重新提交：

```js
git add .
git commit -m ''
```

![](https://img2018.cnblogs.com/blog/1834003/202002/1834003-20200209231756633-1321383946.png)


#### 当我们需要删除暂存区或分支上的文件, 同时工作区也不需要这个文件了, 可以使用：
```js
 git rm file_path
 git commit -m 'delete somefile'
 git push
```

