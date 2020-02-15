## .gitignore配置规则 

## 1、gitignore文件
### 在git中如果想忽略掉某个文件，不让这个文件提交到版本库中，可以使用修改 .gitignore 文件的方法。这个文件每一行保存了一个匹配的规则例如：
```shell
# 此为注释 – 将被 Git 忽略
*.a       # 忽略所有 .a 结尾的文件
!lib.a    # 但 lib.a 除外
/TODO     # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
build/    # 忽略 build/ 目录下的所有文件
doc/*.txt # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
```

## 2、git rm -r --cached解决已提交的文件在.gitignore中加入忽略后无效的问题。

### 有时候，发现有不该提交的文件已经提交后，仅仅在.gitignore中加入忽略是不行的。这个时候需要执行:

```shell
git rm -r --cached 文件/文件夹名字
```

### 去掉已经托管的文件，然后重新提交：

```shell
git add .
git commit -m ''
```

![gitignore](https://img2018.cnblogs.com/blog/1834003/202002/1834003-20200209231756633-1321383946.png)


### 当我们需要删除暂存区或分支上的文件, 同时工作区也不需要这个文件了, 可以使用：
```shell
 git rm file_path
 git commit -m 'delete somefile'
 git push
```

