# Git操作   


## 本地仓库关联到远程仓库
1. 将本地项目初始化为git仓库
	1. `git init`
2. 远程新建repository
3. 正式进行关联和推送
	1. 关联远程库： `git remote add origin git@server-name:path/repo-name.git`
	2. 推送本地仓库内容 ：`git push -u origin master`
<br/>

## 基本使用
1. 工作目录--->暂存区 ：`git add .`
2. 暂存区  --->本地仓库 ： `git commit -m "some commit info"`
3. 本地仓库--->远程仓库 ： `git push origin 分支名`

**注意事项：** 
1. push到远程前要先pull远程数据
2. 若有冲突需先解决冲突
3. 然后再次提交(add和commit)
4. 最后push(如果push到master分支，可以简写为`git push`)  
<br/>


## git pull命令
**作用**：取回远程仓库某个分支的更新，并与本地某个分支合并。    
**完整语法**：git pull 远程主机名 远程分支名:本地分支名    
**举例**：`git pull origin wlk:main`  &nbsp;&nbsp;&nbsp;&nbsp; 取回远程origin主机的wlk分支与本地的main分支合并。  
<br/> 


## 暂存区回退到工作区
`git reset HEAD <file>` 将file从暂存区回退到工作空间    
`git reset` 简写，回滚暂存区的所有添加  
<br/>

## 取消本次修改

指还没有进入暂存区的修改。

`git checkout -- <file>` 将工作空间的还没有add的修改取消掉
<br/>


## 覆盖上次的commit
`git commit --amend -m "message"` 覆盖掉上一次的commit信息
<br/>


## 回退到指定版本
回退到上一个版本：`git reset --hard HEAD^`    
回退到上三个版本：`git reset --hard HEAD^^^`    
回退到指定版本：`git reset --hard commit-id`    
**注意**    
1.版本回退时，若工作区和暂存区有未提交的修改，会被撤销掉。这点要**特别注意**    
2.若回退后，再想恢复，可用 `git reflog` 查看历史命令，找到相关commit-id，再次reset。 
<br/>


## 分支操作
1. 创建分支 ： `git branch 分支名`
2. 切换分支  :  `git checkout 分支名`
3. 创建并切换： `git checkout -b 分支名`
4. 查看分支：`git branch`
5. 合并分支：`git merge 分支名` ---> 合并其他分支到当前分支
6. 删除分支 ： `git branch -d 分支名`
7. 删除远程分支 ： `git push origin -d 分支名`    
8. 拉取远程分支(本地不存在的分支) : `git checkout -b 本地分支名 origin/远程分支名`
9. push本地存在而远程不存在的分支时，远程会自动创建分支

<br/>

## 合并冲突
```javascript
<<<<head    
当前分支最新提交   
============   
其他分支提交或当前分支其他人的提交   
>>>>>其他commit-id
```
1. 当两个人同时更改了同一个文件的**文件名**时，会冲突；手动合并文件，再提交。

2. 远程删除了某文件，本地修改了该文件，导致本地修改的文件与不存在的文件冲突；解决办法是：1-删除该文件再提交；2-直接提交（需要再次add和commit）

<br/>


## 标签操作
1. 切换到目标分支上
2. 执行`git tag 标签名`   
**在指定commit-id上打标签** : `git tag 标签名 commit-id`    
**打指定并标签信息** ： `git tag -a 标签名 -m "message" commit-id`    
   

命令 `git push origin 标签名` 可以推送一个本地标签；    
命令 `git push origin --tags` 可以推送全部未推送过的本地标签；    
命令 `git tag -d 标签名` 可以删除一个本地标签；    
命令 `git push origin :refs/tags/标签名` 可以删除一个远程标签。  
<br/>


##  强制获取远程最新版本
```js
(删除本地src)--->这一步可有可无，但是为保安全建议拷贝一下，以防万一
git fetch --all
git reset --hard origin/分支名
git pull
```
<br/>

## 强制推送本地代码
```js
方法一：
git push -f origin 分支名
方法二：
	拷贝本地src
	pull代码
    删除src
    拷入src
    push代码
```
<br/>

##  git默认对文件名大小写不敏感

```python
git config --get core.ignorecase
# 查看是否文件名大小写敏感，true为不敏感，false为敏感

git config core.ignorecase false
#将git设置为文件名大小写敏感
```

