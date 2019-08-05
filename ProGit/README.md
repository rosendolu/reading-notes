# ProGit

**abstract**

1. git config
2. 创建仓库
3. clone 
4. git status
5. git diff
6. .gitignore
7. git log
8. 撤销操作
9. git remote
10. git branch

```shell
git gui 
git gui blame filename // git gui blame readme.md
git gui blame --line=100 filename
```

### git config

- 用户信息

  ```shell
  git config --global user.name 
  git config --global user.email
  ```

- 文本编辑器

  ```shell
  git config --global core.editor code // vscode
  ```

- 查看配置信息

  ```shell
  git config --list
  git config --global --list
  git confit core.editor 
  ```

- alias

  ```shell
  git config --global alias.s status // git s
  git config --global alias.c commit // git c -m 'message'
  git config --global alias.p push  // g p
  ```

  

### 创建仓库

```shell
git init
git add filename // git add . 
git commit -m “commit message”  // git commit -am 'commit message'		
```

### clone

```shell
git clone url 
git clone url repositoryName // 重命名仓库
```

### git status

```shell
git status -s  // git status --short
```

### .gitignore

```shell
*.[oa]
*~
node-modules/
.vscode/
```

### git diff

```shell
git diff   // 未暂存 
git diff --staged  // 暂存
git difftool  // git difftool --tool-help
git difftool -y
git difftool
```

### git log

```shell
git log -p
git log -p -2 // 最近两次提交
git log --pretty=oneline
git log --stat
```

### 撤销操作

- git commit

  ```shell
  git commit --amend 
  ```

- git reset

  ```SHELL
  git reset HEAD --
  ```

- git checkout

  ```shell
  git checkout -- file
  ```

### git remote

```shell
git remote
git remote -v
git remote add name url 
git fetch 
git pull
git push  remote-name branch-name
git remote show reomte-name // git remote show origin
```

### git branch

```
git branch dev // 创建dev分支
git checkout dev // 切换到该分支
git checkout -b dev // 创建 切换
git checkout master
git merge // git mergetool
git branch -d dev
git branch -v 
```

