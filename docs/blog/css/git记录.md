###　1.有非常多的冲突不知如何解决时

	A.远程仓库确定是最新(强制覆盖本地)
		(删除本地src)--->这一步可有可无，但是为保安全建议拷贝一下，以防万一
		git fetch --all
		git reset --hard origin/分支名
		git pull		
	
	B.本地仓库确定是最新(强制推送)：
		拷贝本地src
		pull代码
		删除src
		拷入src
		push代码
