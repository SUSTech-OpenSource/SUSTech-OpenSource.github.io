var store = [{
"title": "发挥你的创意—开源协会创意工坊",
"excerpt":"什么是创意工坊  创意工坊，顾名思义，就是大家提供自己创意的地方，我们鼓励大家在创意工坊投递各种奇思妙想，各种心得分享 ，我们希望这里可以变成一个大家互相分享编程心得，类似公共博客的地方。  如何提交我的创意  对于开源协会的大部分工作都是基于开源流程  ","categories": ["公告"],
"tags": ["Welcome"],
"url": "/pages/SUSTech-OpenSource/ideas/2022/08/show-your-idea/",
"teaser": null
},{
"title": "mirrors.ustc.edu.cn开张啦！",
"excerpt":"经过大半周的迁移和新脚本的测试，现在 mirrors.ustc.edu.cn 已经基本稳定了。   新机器的域名：   IPv4/v6: mirrors.ustc.edu.cn  （能解析出教育网/电信/v6地址） v4only:  mirrors4.ustc.edu.cn （能解析出教育网/电信地址） v6only:  mirrors6.ustc.edu.cn   有些地方（比如我测试的合肥长宽），DNS 会解析出电信地址，但使用教育网地址访问更快，这时可以通过修改 hosts 指定强制使用教育网地址访问。   教育网ip：202.38.95.110 电  信ip：202.141.160.110 v6  地址：2001:da8:d800:95::110   支持的访问方式：   http/ftp/rsync   提供的服务：   原 debian.ustc.edu.cn 和 oss.ustc.edu.cn 提供的镜像服务基本上都迁移过来了，除 fedora/ubuntu-partner 外。fedora 正在进行同步，ubuntu-partner 也会在近几天同步过来。   原 centos.ustc.edu.cn 提供的 centos/epel/linux-2.6.git 也已经迁移过来了。   需要注意的修改：   debian.ustc.edu.cn 和 oss.ustc.edu.cn 两个域名已经设置为 mirrors.ustc.edu.cn 的别名，大多数镜像的相对地址没有改变，所以大家基本上不需要对原有设置进行修改（如 sources.list），可以继续正常使用。但是以下镜像用户请注意：      gentoo 用户，原 portage 地址： rsync://oss.ustc.edu.cn/pub/gentoo-portage  已经调整为： rsync://mirrors.ustc.edu.cn/gentoo-portage   cygwin 用户，原 cygwin 源地址： http://oss.ustc.edu.cn/cygwin/cygwin/ 已经调整为： http://mirrors.ustc.edu.cn/cygwin/   原 ubuntu cdimage 地址： http://debian.ustc.edu.cn/ubuntu-cd 已经调整为： http://mirrors.ustc.edu.cn/ubuntu-releases   原 fedora linux 地址： http://oss.ustc.edu.cn/fedora/ 已经调整为： http://mirrors.ustc.edu.cn/fedora/linux/   centos.ustc 用户，请修改自己的 CentOS-Base.repo 和 epel.repo，将文件中的域名 centos.ustc.edu.cn  修改为  mirrors.ustc.edu.cn   linux-2.6.git 用户，请修改 origin 地址： git remote set-url origin git://mirrors.ustc.edu.cn/linux-2.6.git   使用帮助：   大多数镜像的使用帮助已经完成，大家在对应的目录下，如： http://mirrors.ustc.edu.cn/ubuntu/ 点击页面上方（标题下方）的使用说明链接，可以打开其对应的帮助信息，如如何设置 sources.list 文件。或者也可以直接打开 http://mirrors.ustc.edu.cn/mirror-help/&lt;archive-name&gt;.html 在首页上点击使用说明链接，点击其中对应的源的链接，也可以跳转查看相应的帮助。   由于人手不够，有些源还没有使用帮助信息，也欢迎大家帮忙写了，发送给我们。   状态监控：   在首页点击页面上方的同步状态链接，可以查看当前各镜像的同步状态，包括成功与否/上游源/镜像体积等。大家如果知道更好（更新、更快）的上游源，请联系我们。   如果同步出现故障，服务器的管理员会收到邮件通知，以尽快处理，所以大家看到状态监控页面中有显示同步失败的条目时，无需联系我们。   如果同步状态上显示同步正常，但实际使用过程中发现镜像有问题，请联系我们。   联系方式：   我们的邮箱：mirrors@ustc.edu.cn   鸣谢：   感谢中国科学技术大学、网络信息中心的支持，特别感谢 jameszhang 老师为我们提供服务器！  ","categories": ["LUG活动"],
"tags": ["LUG","mirrors.ustc.edu.cn"],
"url": "/pages/SUSTech-OpenSource/news/2011/04/mirrors-ustc-edu-cn-comes/",
"teaser": null
},{
"title": "Linux技术沙龙暨Gnome 3.0发布活动",
"excerpt":"Color my desktop,Color my life!   4 月 6 日，已经连续多次跳票的 Gnome 3 终于在大家的翘首企盼中发布了，为了庆祝这件开源社区令人振奋的盛事。中国科大 LUG(Linux User Group)特联合北京 GUG(Gnome User Group)以及合肥 LUG,联合举办 Linux 技术沙龙暨 Gnome 3 发布活动。本次活动获得了中标软件公司的大力支持，并同时很荣幸的邀请到了北京 Gnome 用户组的李震宁主席参加。      Linux 技术沙龙是中国科学技术大学 Linux 用户协会定期举办的活动，主旨在于推广 Linux 技术 ，宣传和鼓励开源和自由软件精神。本次 Linux 技术沙龙主题是“探秘 Gnome 3.0”。不了解 Linux 的人往 往以为 Linux 是一个很古板的东西，图形化界面很不美观，难以摆脱粗糙风格。“Gnome ”是一种 Linux 一种桌面环境，以往安装 Linux 的 Gnome1.0 与 Gnome2.0 环境界面，不支持多点触控，操作较为费力，对于习惯 windows 的用户来说，最不习惯的就是 Gnome 的单点操作。这次技术沙龙就是要把将宣传千呼万唤始出来的“Gnome 3.0”，也将 Gnome 3.0 带到同学们的身边。本次活动可以让同学们亲身体验到 Gnome 3.0 的华丽特效与便捷操作，同时获得 Linux 与 Gnome 的相关知识。   由于活动之前通过海报、横幅、bbs 进站画面等多种途径的宣传，再加上中标软件公司的鼎力支持，以及合肥工业大学等兄弟院校同学的大力帮助，本次活动于 2011 年 4 月 16 日在 3124 教室成功举办，现场 200 名左右的同学和校友以及开软件软爱好者参加了活动。   本次活动由 LUG@USTC 王鹏会长同学主持。在活动中，北京 GUG（Gnome User Group）主席李震宁先生首先给大家详细介绍了 Gnome 环境的相关特性，包括 Gnome 的诞生经过。另外他还向大家介绍了 Gnome 的一些知识，紧跟着是趣味问答环节，送出中标软件公司赞助的礼物。该环节问了一些很有趣的问题，例如“为什么 Gnome 的图标为脚印？”、“列举 5 个以上窗口管理器？”、“什么是 GTK？”等等问题。同学们回答踊跃，现场气氛很热烈，回答的同学就能获取一份小礼品。   LUG 的祝元宠同学给大家介绍并演示了 Gnome 3.0 环境。祝元宠同学现场演示了 linux 在 Gnome 环境下的新特性，如无限度多窗口功能，绚丽切换窗口功能，多点触控功能等等新特性。同学们均深深体会到了 Gnome 3.0 令人震撼的华丽和亲和。   科大计算机系研究生，LUG CTO 张成同学绍了现在学校 linux 用户协会服务器现状，包括科大 linux 用户协会的创办历史，以及学校 LUG 资金来源，debian, oss, pxe, freeshell, lug.ustc 等服务器的配置。然后张成详细介绍了本学期服务器维护小组的工作计划，包括 oss/debian 系统和服务的更新以及 pxe 服务的改造构想，并展望了通过 pxe 建立全校无盘系统的愿景。   接下来赵希明同学为大家介绍了 Linux 新手在学习中应该注意的问题,赵希明用风趣幽默的介绍指出了 newbie 应该遵守的社区礼仪以及在出现问题的时候应该怎样获得帮助。   活动最后由北京 GUG 主席李震宁先生与王鹏同学给大家进行了抽奖环节，若干名参与者成为了当天的幸运观众，并获得了收音机、文化衫、小玩具等奖品。整个技术沙龙中同学们十分积极，气氛很热烈，活动从下午两点半持续到了五点半。之后有十几名热心志愿者参加了 LUD（Linux User Dinner）聚餐，就 Linux 社区讨论了许多问题和展望，增进了技术和感情。   在活动后的 LUD(Linux User Dinner)上同学们对北京 GUG 主席的到来，以及中标公司长期以来对 LUG@USTC 的支持表示感谢，李主席与志愿者们共进晚餐。餐会上商讨并同时宣布 HFGUG(Hefei Gnome User Group)(筹) 成立,王鹏担任筹委会主任。HFGUG(筹)的成立必将为开源软件特别是 Gnome 桌面在合肥乃至全国的推广做出自己的贡献。   下面是活动现场的一些照片:                          ","categories": ["LUG活动"],
"tags": ["gnome3","Linux User Party"],
"url": "/pages/SUSTech-OpenSource/news/2011/04/gnome3-launch-party/",
"teaser": null
},{
"title": "Fwd: 读书笔记：关于维护服务器的一些技巧",
"excerpt":"寒假读了三本书《LINUX SERVER HACKS 卷二》《实战 Nginx：取代 Apache 的高性能 Web 服务器》《Linux 服务器性能调整》，简单地了解了些 linux 服务器维护和管理上的技巧。现在就分别简要谈谈我在读这三本书时的感受吧。   一：《LINUX SERVER HACKS 卷二》   首先，这不是一本工具书，而是一本经验集。书内都是很巧妙的一节一节的 linux 服务器维护技巧，主要目的是提高维护 linux 是的速度和鲁棒性。说实话，我不是很习惯这种模式的书，因为如果带着问题去读这本书，读完后还是问题，而本不是关心的部分，读完后也很快就忘了。   简言之，我懂这本书里得到的信息有：   一：linux 非常灵活，特别是结合 NFS 以及远程终端，可以做非常有想象力的事情。   二：在复杂的连线环境中记得使用 screen   三：脚本可以做几乎任何维护性质的事，而且事情的解决方案往往比你想得简单。   四：注意 uid，gid 重用可能带来的问题   五：Google 万岁   二：《Linux 服务器性能调整》   这本书翻译的不是很好，文法晦涩，而且介绍的东西偏深，很多是探讨内核级的优化。感觉看得不是很明白，简单写写吧。   一：关于服务器文件系统的选择：ReiserFS 鲁棒性很好，而且对小文件有最佳性能。XFS 针对大型文件有最佳性能。   二：一块硬盘上读取外侧磁道的速度要快于内侧磁道，所以分区是可以考虑这点将序号小的分区分配给经常读写的目录。譬如分区时第一个为 swap，第二个/var，再者/usr，最后才是根和/home   三：mount 文件系统时带上 noatime 可以提高一些性能。   四：文件系统在创建的时候可以调教一些参数优化性能   五：各类监控/tweak 工具：hdparam, iostats, top, vmstat   三：《实战 Nginx：取代 Apache 的高性能 Web 服务器》   这本书灌水的内容比较多，内容实际上也就是作者博客上的一些应用技巧的整理，可以总结的不多，因为按部就班的做就行了。   从书中看，nginx 的性能优于 apache，而且在反向代理方面特别有优势，这是它的亮点。Nginx 虽然支持 rewrite，自我感觉还是蛮好用的，但是不兼容 apache 的.htaccess，使用时需注意。   Nginx 的组件高度模块化，可定制性比较强，具体可在使用时疯狂 google。   对于使用 php+mysql 的场合，注意 php 使用 fastcgi 的方式启动，性能貌似比传统 cgi 要高不少，估计和 apache 的 module 差不多   书中没有提到什么值得一提的优化，具体实践的时候多 google 好了。对于硬件环境不好的服务器，减少 nginx 工作进程，打开 gzip 压缩和缓存，为 php 安装加速器并为低配置环境优化，数据库（例如 mysql）在配置时减少内存占用上限。选择 myisam 而不是 innodb。   简言之，这本书最大的作用就是让 nginx 变得平易近人大家都可尝试了。  ","categories": ["读书笔记"],
"tags": ["nginx","linux server","php","mysql","reading notes"],
"url": "/pages/SUSTech-OpenSource/news/2011/04/2011-winter-reading-notes/",
"teaser": null
},{
"title": "Debian中国官方镜像：ftp.cn.debian.org",
"excerpt":"祝贺 mirrors.ustc.edu.cn 成为 Debian 中国官方镜像！此前，中国大陆 debian 镜像与主镜像延迟达 24 小时以上，现在，ftp.cn.debian.org 直接从 syncproxy.wna.debian.org 接受推送更新，其延迟降到 6 小时以内。此外，另一国内主力镜像 anheng.com 从 ftp.cn.debian.org 接受推送，延迟也在 10 小时以内。mirrors.sohu.com 亦开始从 ftp.cn.debian.org 同步。   Debian 用户使用帮助   使用当前稳定版 Debian Squeeze 的用户，请使用以下内容替换/etc/apt/sources.list   deb http://ftp.cn.debian.org/debian squeeze main deb-src http://ftp.cn.debian.org/debian squeeze main deb http://ftp.cn.debian.org/debian squeeze-updates main deb-src http://ftp.cn.debian.org/debian squeeze-updates main deb http://mirrors.ustc.edu.cn/debian-security/ squeeze/updates main deb-src http://mirrors.ustc.edu.cn/debian-security/ squeeze/updates main   其他版本用户请参考Debian 使用帮助。   镜像同步帮助   Debian Archive   请使用官方推荐的ftpsync脚本进行同步，脚本中有很详细的注释说明。如果有问题，请联系我们。   Debian CD   如果您已经同步了 Debain Archive，那么推荐您使用jigdo来同步，这可以节省很多流量和时间，平均每个 CD 的 ISO 仅需不到 1 分钟。这里有使用说明，同步脚本在这里可以下载到。   推送同步   为了尽可能减少与 Debian 主服务器的延迟，推荐您接受我们的推送。每次 ftp.cn.debian.org 同步完成后，会主动告知下游源，激活下游源的同步脚本。要接受推送同步，请下载我们的 pubkey，并保存到运行同步脚本的用户的~/.ssh/authorized_keys中：   wget -O- http://mirrors.ustc.edu.cn/~stephen/debianpush.pub &gt;&gt; ~/.ssh/authorized_keys   然后发邮件告知您的服务器地址、ssh 端口以及用户。   联系方式   如果您对我们的服务器有任何建议或者意见，以及使用中碰到任何问题，都可以联系我们，我们的邮箱是：mirrors AT ustc.edu.cn.  ","categories": ["LUG活动"],
"tags": ["mirrors.ustc.edu.cn","debian","ftp.cn.debian.org"],
"url": "/pages/SUSTech-OpenSource/news/2011/05/ftp-cn-debian-org-comes/",
"teaser": null
},{
"title": "Linux版版聚",
"excerpt":"                                                                                            ","categories": ["LUG活动"],
"tags": ["版聚","BBS"],
"url": "/pages/SUSTech-OpenSource/news/2011/05/linux-e7-89-88-e7-89-88-e8-81-9a/",
"teaser": null
},{
"title": "定制PXE Live系统",
"excerpt":"现在已经有上百中 Linux 发行版，很多发行版都提供了通过 PXE 启动的 Live 系统。在科大校园网网络启动服务上，我们部署了很多发行版的 Live 系统，例如 Ubuntu、Debian、Deepin、BackTrack、Knoppix 等，既给一些需要维护系统的同学带来了极大的便利，也使得那些未接触过 Linux 的同学可以“无痛”体验各发行版，并决定哪一款发行版更符合自己的口味。然而，随着校园网的发展，大家的需求也变得更加多样化。各发行版的 Linux 系统已经不能满足大家的需求，因此我们需要自己定制一些系统，以满足在学校中各个场合的需求。   发行版 Live 系统的限制   发行版提供的 Live 系统具有这些限制：      数据易失。Live 系统启动后所有的修改都保存在内存中，重启系统后所有修改都丢失了。   预装软件少。Live 系统只预装了很少的软件，不足以日常办公的需求，即使作为体验系统也偏少   各使用场合的需求   目前在校园网中，大家对系统的需求有这些：      体验系统。对于 Linux 新手，要决定是否使用一个系统，一次体验是不够的，需要长期的使用，因此需要能够保存一些对系统的修改，如新装的软件、修改的配置文件、一些用户数据   公共机房的系统，需要安装所有常用的软件   个人移动办公使用的系统，需要能够将一些个人数据存放在网络上   因此，我们希望能够定自己定制 Live 系统，以满足各使用场合的需求。   使用 Debian Live 定制系统   在各发行版中，Debian 提供了定制 Live 系统的工具，Debian Live。Debian Live 的文档中有非常详细的介绍。简化后的步骤为：   sudo apt-get install live-build mkdir live-system &amp;&amp; cd live-system lb config sudo lb build   其中，在 config 前可以自己修改 config 脚本来对 Live 系统的一些属性进行定制，例如 Live 的类型（ISO/PXE/HDD 等）、Live 系统使用的源、安装的软件等。在 build 系统之后也可以chroot到目标系统中进行进一步的定制。这篇文章中有一个稍微详细的定制步骤。使用 live build 可以定制 debian，也可以定制 ubuntu。   然而，这个方法仍然比较麻烦，定制者需要完全从头定制一个系统，并且不能复用一些其他人已经定制过的系统。因此我们推荐选择一个最接近使用需求的系统，在这个系统的基础之上进行进一步定制，而定制步骤也会简洁很多。   基于 Linux Deepin 定制 Live 系统   通过观察容易发现，Ubuntu, Deepin, BackTrack 等 Live 系统都使用相似的方法进行封装，因此基于这些系统进行定制的方法基本相同。而 Deepin 的中国本地化做的最好，也最接近校园网中的各种需求，因此我们选择基于该系统进行定制。   首先观察一下这个 Live 系统的结构：   $ ls -R .: casper  DeepWin.exe  isolinux  md5sum.txt  preseed  README.diskdefines  ./casper: filesystem.manifest  filesystem.manifest-desktop  filesystem.size  filesystem.squashfs  initrd.lz  vmlinuz  ./isolinux: back.jpg  boot.cat  deepin  gfxboot.cfg  isolinux.bin  isolinux.cfg  menu.cfg  stdmenu.cfg  text.cfg  ./preseed: deepin.seed   其中最重要的三个文件是位于casper目录下的vmlinuz、initrd.lz、filesystem.squashfs。vmlinuz和initrd.lz分别是启动是使用的内核和initrd文件，在系统启动之后，会通过 NFS 挂载位于服务器上的这个 ISO 的根目录，然后挂载filesystem.squashfs，接着使用aufs将filesystem.squashfs一段内存挂载为根目录，这段内存空间做为aufs的写分支。   由此可知，我们要定制系统，只需要对这个 filesystem.squashfs 修改并重新打包即可。下面就开始对这个文件修改并打包。   首先挂载这个文件系统，复制一份，并chroot到这个系统环境中：   sudo mount -o loop -t squashfs filesystem.squashfs /mnt/ sudo cp -ar /mnt/ ~/filesystem/ sudo umount /mnt/ sudo mount -o bind /dev/ ~/filesystem/dev/ sudo mount -t proc procfs ~/filesystem/proc/ sudo cp /etc/resolv.conf ~/filesystem/etc/ sudo chroot ~/filesystem/ /bin/bash   此时，我们就已经在这个系统中了，我们可以按照我们的需求对系统进行任意的定制了。注意，直到文中提到退出chroot环境前，所有的命令都是在chroot中完成的。我们在科大，当然首先将 sources.list 修改为使用科大的源了：   sed -i 's/cn.archive.ubuntu.com/debian.ustc.edu.cn/g' /etc/apt/sources.list sed -i 's#packages.deepin.org#debian.ustc.edu.cn/deepin#g' /etc/apt/sources.list.d/deepin.list sed -i 's#packages.linuxmint.com#debian.ustc.edu.cn/linuxmint#g' mint.list apt-get update   这篇文章里我们仅做演示用，所以不打算进行太多的定制，仅演示安装一个新的软件：   apt-get install vim   OK，定制完成啦！我们来重新封装文件系统。首先，退出chroot环境，并且卸载proc和dev文件系统。   exit sudo umount ~/filesystem/proc/ sudo umount ~/filesystem/dev/   然后封装 squashfs 文件系统：   mv filesystem.squashfs old-filesystem.squashfs sudo mksquashfs/ filesystem.squashfs   将新生成的filesystem.squashfs放到原来的位置，并将整个目录通过 NFS 导出。   这篇文章中将不介绍如何通过 PXE 启动这个系统，其方法与 Ubuntu 相同，网上有详细的教程。下一篇文章中，我们将会介绍如何进一步定制这个系统，在开机时，自动挂载科大提供给每个学生的 300M FTP 空间为 HOME 目录，文章中会稍微详细的介绍如何设置 PXE 服务器启动该系统。尽请期待！  ","categories": ["经验分享","USTC网络启动服务"],
"tags": ["PXE","deepin","live"],
"url": "/pages/SUSTech-OpenSource/news/2011/05/customize-pxe-live-system/",
"teaser": null
},{
"title": "Deepin Linux DAU '2011大会花絮",
"excerpt":"2011 年 5 月 28 日，我有幸受邀代表中科大 LUG 前往武汉参加了 Deepin Linux 开发者和用户大会。此行遇见了很多开源界的知名牛人，收获颇多。由于许多 Linux 站点都已经对此次会议有十分详细的报导，因此我就不再赘述具体的会议过程，而是更多的介绍些花絮吧。   一些花絮   这次大会主办方是 Deepin 研发团队，主办方接客非常热情周到。由于火车时刻不是很凑巧，当天赶去无法赶上会议，因此提前一天晚上便到了，当天晚上我被安排跟 Hiweed 住在一个房间。晚上，刘总（Deepin）、欣姐还有 Hiweed 与我聊了很多，主要聊了科大 LUG 在高校推广方面的努力和计划，以及我个人的一些想法，另外刘总也跟我聊了 Deepin 的发展计划。聊天开始时，Deepin 说我们的域名可能有问题了，结果晚上他们刚回去，就发现 deepin 的域名都无法解析了……现在新的域名已经生效（http://www.linuxdeepin.net/），网站部分内容还没有完全迁移完成，论坛将从深度的其他内容独立出来，并将在近期上线。   第二天早上，跟 Hiweed 吃早饭的时候，小白（BJGUG 负责人）到了，他吃过简单的早餐，就去一所中学了，与学校的老师讨论学校教育中使用开源软件的事。现在有许多中小学的计算机启蒙教育中都开始用开源软件了，很让人振奋 :-)   去会场的路上，大家在开玩笑。前几天某校长在武大被扔鞋，这次我们请来了比较有争议的袁教授，而且此次会议有很多武大的学生参加，会不会也被扔鞋？要不我们自己安排个人来扔鞋吧，还得安排两拨，互扔，炒作气氛！呵呵，just a joke!   这次会议在君宜王朝大酒店举行，可能前期的沟通不是特别好，在布置会场时碰到了些问题，不过对会议影响不大。最“惊险”的算是那个无线话筒吧，似乎耗电量很大，现场试了一下，就掉了一格电（共三格）了，当时担心会不会讲到一半就没声了。还好，六位嘉宾演讲时，都没出问题，在提问阶段，第二个人开始，话筒就没声了 T.T……   晚上嘉宾自由交流会上，袁教授发完一个长长的言后，就耷拉脑袋了。我和 Hiweed 坐在他旁边，都以为他睡着了，后来有个人讲完话后，袁教授突然接话了！原来他没睡着，就是闭幕养神:-) 袁教授其实很可爱，年纪这么大，依然很有激情。对国内开源事业的发展也很关心，这次大会刚回去，就联系与永中的曹参见面，讨论 Deepin 与永中合作的事，看袁教授最近几天的博文，他对此事一直很上心。   交流会结束后，我们几个年轻人（yanting, Hiweed, Deepin 等）出去吃烧烤，随心所欲的聊天。yanting 和 Hiweed 都是很活跃、很有想法、很会闯的人，我的性格跟他们很像，因此听他们讲故事的时候，共鸣很强，感触很深。Deepin 跟这它的团队一样很年轻，我相信也同样会很有想法、很有活力！   第二天我受邀去武大参观了他们自强网的工作室和机房。同时也交流了一下两校在推广 Linux 时的优势和障碍。武大的学生课余时间相对较多，自强网完全由学生来维护，但他们的资源（网络带宽、服务器配置等）有限。科大有着很好的 Linux 使用的环境，网络条件也非常好，但是大多数学生的课余时间较少。   下午赶去火车站时，由于宾馆在市中心最堵的路段，半天都没打到的，正愁会误点赶不到火车站时，一个小“摩的”（加引号是因为不是摩托车，而是电瓶车，但我想不出用什么词好了 :-P）来了，不到 20 分钟就赶到火车站了。“摩的”小哥自我介绍说是武大食堂的，下午没事做，就出来转转，能赚点钱就赚一点，要过日子阿。小哥很热情，收的钱也不多（应该比打的便宜），很开心 :-)   会场照片   这些是会场上的一些照片。（大家能否给我推荐个显示图片的插件？可以显示图片总数和当前图片编号的？）                                                                                                                                                                                                                                                                                          相关报导   以下是一些特邀嘉宾对此次大会的报导：      Linux Deepin 武汉技术交流会后记（笨兔兔）   Linux Deepin 2011 开发者和用户大会实录（驱动之家）   (http://www.ownlinux.cn/2011/05/28/ownlinux-linux-deepin-2011.html)（OwnLinux.cn）   国产 Linux 发行版面临的机遇和挑战（51CTO）   武汉 Deepin DAU 会议见闻（basic coder）  ","categories": ["LUG活动"],
"tags": ["deepin","Linux","花絮"],
"url": "/pages/SUSTech-OpenSource/news/2011/06/deepin-linux-dau-2011/",
"teaser": null
},{
"title": "中科大Linux文化衫开始接受预定啦！",
"excerpt":"1、圆领样式   此次文化衫主题为 Linux 20 周年。正面图案分男版和女版，图案分别如下：   男版： http://staff.ustc.edu.cn/~jhqi/LinuxTee2011/front_1.6.0.png   女版： http://staff.ustc.edu.cn/~jhqi/LinuxTee2011/front_1.6.1.png   背面图案为科大维护的服务器历史，男版女版相同，图案如下：   http://staff.ustc.edu.cn/~jhqi/LinuxTee2011/back_1.1.png   2、翻领样式   由于许多网友要求提供翻领样式，因此今年也提供翻领样式，翻领的正面图案是将圆领的背面图案放在左前胸，将圆领的正面图案放到后背。效果如下图的最后一行：   http://staff.ustc.edu.cn/~jhqi/LinuxTee2011/polo_sample_1.png   3、价格   圆领的价格为：￥ 45   翻领的价格为：￥ 60   需要邮寄的，需要额外支付￥ 20 邮费。   （科大在校师生、校友请到瀚海星云 Linux 版回帖预定，价格有优惠哦！）   前 20 位预定的友人，我们将在邮寄文化衫时附赠一张 GNOME3 体验光盘。   4、预定方式以及支付方式   您可以通过支付宝向我们支付费用。   我们的支付宝帐号为：lug@ustc.edu.cn，支付流程：                  登录支付宝–&gt;“我的支付宝”–&gt;“我的生活助手”–&gt;“我要付款”–&gt;在“对方支付宝账户”里输入lug@ustc.edu.cn即可。在备注中留下您的姓名，并且向lug@ustc.edu.cn发送一封邮件，标题为”预定文化衫–您的姓名”，内容为您选择的版式（男/女       圆领/翻领）、身高、手机号和详细的收货地址，我们将在 24 小时内回复您的邮件，表明我们已经收到您的付款和预定。           6、时间安排   本次预定从发本日志起到 2011 年 6 月 11 日晚 23 时 59 分结束预定。结束预定后，我们立即联系商家开始制作版衫，并争取一周内完成并开始发放，预计 6 月 18 日可以开始发放工作。发放方式到时候再发日志说明。  ","categories": ["LUG活动"],
"tags": ["BBS"],
"url": "/pages/SUSTech-OpenSource/news/2011/06/linux-tshirt-2011/",
"teaser": null
},{
"title": "Linux Install Party又来了，就在本周日！",
"excerpt":"Linux Install Party，一个人人都可以参加的 linux 盛会，Let’s Introduce   Perfection.   如果你是新手，在这里，你可以接触到 linux 最新鲜的感觉，了解基础并且好用的   linux 知识，获得他人的帮助，与 linux 进行亲密接触！   如果你是高人，在这里，你可以认识志同道合的朋友，交流 linux 里好玩的技巧和鲜为人   知的秘密，帮助和当年的你一样的初学者，多么有成就感！   Linux Install Party，就在本周日下午 2:00，3112 教室。   Linux User Group   life, love, linux  ","categories": ["LUG活动"],
"tags": ["Linux Install Party"],
"url": "/pages/SUSTech-OpenSource/news/2011/12/linux-install-party2011/",
"teaser": null
},{
"title": "Linux技术沙龙暨Gnome 3.0发布活动",
"excerpt":"您好  ","categories": [],
"tags": [],
"url": "/pages/SUSTech-OpenSource/news/2022/08/new-homepage/",
"teaser": null
},{
"title": "您好捏",
"excerpt":"原 debian.ustc.edu.cn 和 oss.ustc.edu.cn 提供的镜像服务基本上都迁移过来了，除 fedora/ubuntu-partner 外。fedora 正在进行同步，ubuntu-partner 也会在近几天同步过来。   原 centos.ustc.edu.cn 提供的 centos/epel/linux-2.6.git 也已经迁移过来了  ","categories": [],
"tags": [],
"url": "/pages/SUSTech-OpenSource/news/2022/08/ne-sssuwujsdihajswpage/",
"teaser": null
},{
"title": "南方科技大学开源协会网站终于上线了！",
"excerpt":"历经好几天终于在无数问题解决后将我们的官网搭建好了，目前协会官网的功能有：     新闻   创意工坊   项目   官网修改规则  由于是利用 GitHub pages 和 GitHub 的 ci 功能实现的官网部署，这就让我们可以采用开源开发的工作流，我们的所有初次开发均在 dev 分支上实现，然后提交 pull request 到 master 分支， ci 将在 master 更改后自动更新 GitHub pages 。   对于想参与首页创作的同学们可以 fork 到自己本地后提交 pull request   官网目前仍然需要做的工作  目前仍然没有英文版本，如果后期有需求是可以做的，原生框架支持多语言   目前部分文档仍然不够完善，所以需要大家进一步完善内容。  ","categories": ["通知"],
"tags": ["Welcome"],
"url": "/pages/SUSTech-OpenSource/news/2022/08/HomePage/",
"teaser": null
},{
"title": "404",
"excerpt":"     404     页面未能找到    您找的页面可能是被吃掉了呢，换个页面看看？   ","categories": [],
"tags": [],
"url": "/pages/SUSTech-OpenSource/404.html",
"teaser": null
},{
"title": "关于我们",
"excerpt":"协会简介   南科大开源软件协会是由南科大学生主导的开源软件开发者团体，致力于联合校内校外的开源软件爱好者，开发贡献更多的开源代码，为开源事业做出贡献。社团致力于推广开源的开发，提倡贡献代码，为整个计算机行业的发展提供动力，提高南科大乃至整个中国的大学生开源热情。   开源软件协会成立于2022年，虽然是一个新生的协会，但是我们坚信，千里之行始于足下，所有初期的协会骨干都发自内心的热爱开源事业，希望可以为开源行业的发展和人类计算机事业的进步发光发热。   开源软件协会希望可以提供一个供南科大同学及更多同学的友好交流开源技术的平台，希望形成一个良好的开源开发氛围。   协会活动   目前协会围绕在开源项目开发和课程讲解上，具体可以查阅新闻和项目开发下属板块   加入我们   协会采用广泛吸收各界志同道合的开源开发者的思路，十分欢迎各界开源开发者加入我们，如果您对我们有兴趣，可以加入QQ群   群号:551513701      请在入群的时候填写您的信息，如果非南科大学生，可以填写您所在院校或企业的名称   我们也有telegram的群组https://t.me/+kt3dejtUQgswMTA9  ","categories": [],
"tags": [],
"url": "/pages/SUSTech-OpenSource/about/",
"teaser": null
},{
"title": "友情链接",
"excerpt":"南科大相关组织   CRA：https://www.cra.moe/   CTF：https://wiki.compasa.college/   开源社区   Arch Linux中文社区：https://bbs.archlinuxcn.org   Github：https://github.com  ","categories": [],
"tags": [],
"url": "/pages/SUSTech-OpenSource/friendlylink/",
"teaser": null
},{
"title": "创意工坊",
"excerpt":"               最近点子                                                        发挥你的创意—开源协会创意工坊                                                                     August 6, 2022                                                                           少于 1 分钟阅读                                什么是创意工坊 创意工坊，顾名思义，就是大家提供自己创意的地方，我们鼓励大家在创意工坊投递各种奇思妙想，各种心得分享 ，我们希望这里可以变成一个大家互相分享编程心得，类似公共博客的地方。 如何提交我的创意 对于开源协会的大部分工作都是基于开源流程                ","categories": [],
"tags": [],
"url": "/pages/SUSTech-OpenSource/pages/idea/",
"teaser": null
},{
"title": "南科大开源协会",
"excerpt":"                     最新资讯                                                                南方科技大学开源协会网站终于上线了！                                                                     August 5, 2022                                   历经好几天终于在无数问题解决后将我们的官网搭建好了，目前协会官网的功能有：    新闻   创意工坊   项目                                                         您好捏                                                                     August 2, 2022                                   原 debian.ustc.edu.cn 和 oss.ustc.edu.cn 提供的镜像服务基本上都迁移过来了，除 fedora/ubuntu-partner 外。fedora 正在进行同步，ubuntu-partner 也会在近几天同步过来。                                                        Linux技术沙龙暨Gnome 3.0发布活动                                                                     August 1, 2022                                   您好                                                        Linux Install Party又来了，就在本周日！                                                                     December 2, 2011                                   Linux Install Party，一个人人都可以参加的 linux 盛会，Let’s Introduce                                                        中科大Linux文化衫开始接受预定啦！                                                                     June 5, 2011                                   1、圆领样式                    ","categories": [],
"tags": [],
"url": "/pages/SUSTech-OpenSource/",
"teaser": null
},{
"title": "协会新闻",
"excerpt":"","categories": [],
"tags": [],
"url": "/pages/SUSTech-OpenSource/pages/news/",
"teaser": null
},{
"title": "项目开发",
"excerpt":"               近期项目                                                        Java编程游戏                                                                              南科大创新实践项目汇总                                                                              EasyGameEngine                          EasyGameEngine                                                    更好的Linux服务器控制面板                                                                              本站                                          ","categories": [],
"tags": [],
"url": "/pages/SUSTech-OpenSource/pages/project/",
"teaser": null
},{
"title": "按标签归类",
"excerpt":"","categories": [],
"tags": [],
"url": "/pages/SUSTech-OpenSource/tags/",
"teaser": null
},{
"title": "项目天地板块说明",
"excerpt":"什么是项目天地   开源协会的主要功能是助力并推动南科大开源事业的发展，项目天地的核心目的是帮助南科大同学们进行更多的开源项目开发。而很多同学们在刚刚入学后会十分苦恼于没有项目的开发，不知道写什么，本版块的目的是帮助大家可以尽快的接触到开源事业中，并群策群力提供更好的项目开发点子。   值得注意的是，项目并不单纯狭隘于计算机程序项目，我们接受包括但不限于各种参考资料的整理，开源书籍，开源资源等内容。   我有很好的想法，怎么投稿呢   您可以在我们的项目仓库提交您的issue并详细描述您未来项目的规划，或者选择加入我们的QQ群。   issue提交link：https://github.com/SUSTech-OpenSource/SUSTech-OpenSource.github.io/issues   QQ群号：551513701   您的投稿应该包括您目前的项目完整规划，具体规划内容可以参考已有项目的页面或填写issue中的详细内容。   怎么加入项目天地   您可以在任何时候都可以参与开源项目的开发，我们十分鼓励任何人参与到项目的开发流程中，您的贡献将会成为开源事业中不可或缺的一环，无论您的贡献多少，我们都会视作您加入了项目天地开发流程中。或许后期我们会在这里放一个加入开发的开发者合集？期待您的早期加入！   ","categories": ["公告"],
"tags": ["Welcome"],
"url": "/pages/SUSTech-OpenSource/project/2022/08/project/",
"teaser": null
},{
"title": "新一代markdown编辑器",
"excerpt":" ","categories": ["开源项目开发"],
"tags": ["CSharp"],
"url": "/pages/SUSTech-OpenSource/project/2022/08/TypeDown/",
"teaser": null
},{
"title": "BetterLinuxMonitor前端",
"excerpt":" ","categories": ["开源项目开发"],
"tags": ["Vue"],
"url": "/pages/SUSTech-OpenSource/project/2022/08/Better-Linux-Monitor-Frontend/",
"teaser": null
},{
"title": "本站",
"excerpt":" ","categories": ["开源项目开发"],
"tags": ["Markdown","Jekyll"],
"url": "/pages/SUSTech-OpenSource/project/2022/08/website/",
"teaser": null
},{
"title": "更好的Linux服务器控制面板",
"excerpt":" ","categories": ["开源项目开发"],
"tags": ["Go"],
"url": "/pages/SUSTech-OpenSource/project/2022/08/Better-Linux-Monitor/",
"teaser": null
},{
"title": "EasyGameEngine",
"excerpt":"EasyGameEngine   简介   参与者   ","categories": ["开源项目开发"],
"tags": ["Java"],
"url": "/pages/SUSTech-OpenSource/project/2022/08/EasyGameEngine/",
"teaser": null
},{
"title": "南科大创新实践项目汇总",
"excerpt":" ","categories": ["开源文档开发"],
"tags": ["Markdown"],
"url": "/pages/SUSTech-OpenSource/project/2022/08/sustech-project/",
"teaser": null
},{
"title": "Java编程游戏",
"excerpt":" ","categories": ["开源项目开发"],
"tags": ["Unity","CSharp"],
"url": "/pages/SUSTech-OpenSource/project/2022/08/JaCoding/",
"teaser": null
}]