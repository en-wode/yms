import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: '登录',
            redirect: '/login'
        },
        {
            path: '/famin',
            name: '功能选择',
            component: resolve => require(['../components/famin/famin.vue'], resolve)
        },
        {
            path: '/new/home',
            name: '信息功能',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/personfunc/message',
                    name: '消息',
                    component: resolve => require(['../components/personfunc/message.vue'], resolve)
                },
                {
                    path: '/personfunc/notice',
                    name: '通知',
                    component: resolve => require(['../components/personfunc/notice.vue'], resolve)
                },
                {
                    path: '/personfunc/todo',
                    name: '待办',
                    component: resolve => require(['../components/personfunc/todo.vue'], resolve)
                },
                {
                    path: '/personfunc/memo',
                    name: '备忘录',
                    component: resolve => require(['../components/personfunc/memo.vue'], resolve)
                }
            ]
        },
        {
            path: '/index/home',
            name: '首页',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/index/home',
                    name: '首页',
                    component: resolve => require(['../components/common/Readme.vue'], resolve)
                },
                {
                    path: '/allcatalog',
                    name: '章节列表',
                    component: resolve => require(['../components/template/allcatalog.vue'], resolve)
                },
                {
                    path: '/diagram',
                    name: '收入数据',
                    component: resolve => require(['../components/template/diagram.vue'], resolve)
                }
            ]
        },
        {
            path: '/index/home',
            name: '编辑后台2',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/bianji2/collectionreview/bidlist',
                    name: '掌阅对应书号列表',
                    component: resolve => require(['../components/bianji2/collectionreview/Bidlist.vue'], resolve)
                }
            ]
        },
        {
            path: '/bianji1/home',
            name: '编辑后台1',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/bianji1/authermanage/searchauthor',
                    name: '作者查询',
                    component: resolve => require(['../components/bianji1/authermanage/Searchauthor.vue'], resolve)
                },
                {
                    path: '/bianji1/authermanage/whiteauthor',
                    name: '白名单作者列表',
                    component: resolve => require(['../components/bianji1/authermanage/Whiteauthor.vue'], resolve)
                },
                {
                    path: '/bianji1/authermanage/blackauther',
                    name: '黑名单作者列表',
                    component: resolve => require(['../components/bianji1/authermanage/Blackauthor.vue'], resolve)
                },
                {
                    path: '/bianji1/authermanage/addblack',
                    name: '添加黑名单作者',
                    component: resolve => require(['../components/bianji1/authermanage/Addblack.vue'], resolve)
                },
                {
                    path: '/bianji1/authermanage/buyout',
                    name: '添加黑名单作者',
                    component: resolve => require(['../components/bianji1/authermanage/Buyout.vue'], resolve)
                },
                {
                    path: '/bianji1/authermanage/buyout',
                    name: '添加黑名单作者',
                    component: resolve => require(['../components/bianji1/authermanage/Buyout.vue'], resolve)
                },
                {
                    path: '/bianji1/worksmanage/allworks',
                    name: '全部作品管理',
                    component: resolve => require(['../components/bianji1/worksmanage/Allworks.vue'], resolve)
                },
                {
                    path: '/bianji1/worksmanage/worksprice',
                    name: '作品价格维护',
                    component: resolve => require(['../components/bianji1/worksmanage/Worksprice.vue'], resolve)
                },
                {
                    path: '/bianji1/worksmanage/worksmanage',
                    name: '作品信息批处理',
                    component: resolve => require(['../components/bianji1/worksmanage/Worksmanage.vue'], resolve)
                },
                {
                    path: '/bianji1/worksmanage/booklist',
                    name: '书目下载',
                    component: resolve => require(['../components/bianji1/worksmanage/Booklist.vue'], resolve)
                },
                {
                    path: '/bianji1/worksmanage/signworks',
                    name: '签约作品管理',
                    component: resolve => require(['../components/bianji1/worksmanage/Allworks.vue'], resolve)
                },
                {
                    path: '/bianji1/worksmanage/vipworks',
                    name: 'VIP作品管理',
                    component: resolve => require(['../components/bianji1/worksmanage/Allworks.vue'], resolve)
                },
                {
                    path: '/bianji1/worksmanage/buyworks',
                    name: '买断作品管理',
                    component: resolve => require(['../components/bianji1/worksmanage/Allworks.vue'], resolve)
                },
                {
                    path: '/bianji1/worksmanage/checkworks',
                    name: '审核被拒小说',
                    component: resolve => require(['../components/bianji1/worksmanage/Allworks.vue'], resolve)
                },
                {
                    path: '/bianji1/worksmanage/waitcheck',
                    name: '编辑待审新书管理',
                    component: resolve => require(['../components/bianji1/worksmanage/Waitcheck.vue'], resolve)
                },
                {
                    path: '/bianji1/worksmanage/workscover',
                    name: '作品封面上传',
                    component: resolve => require(['../components/bianji1/worksmanage/Workscover.vue'], resolve)
                },
                {
                    path: '/bianji1/worksmanage/batchcover',
                    name: '批量无水印封面上传',
                    component: resolve => require(['../components/bianji1/worksmanage/Batchcover.vue'], resolve)
                },
                {
                    path: '/bianji1/worksmanage/morerecode',
                    name: '作品催更统计',
                    component: resolve => require(['../components/bianji1/worksmanage/Morerecode.vue'], resolve)
                },
                {
                    path: '/bianji1/worksmanage/qianyuelist',
                    name: '申请签约书列表',
                    component: resolve => require(['../components/bianji1/worksmanage/Qianyuelist.vue'], resolve)
                },
                {
                    path: '/bianji1/budget/recycling',
                    name: '作品回本统计',
                    component: resolve => require(['../components/bianji1/budget/Recycling.vue'], resolve)
                },
                {
                    path: '/bianji1/budget/budget',
                    name: '作品收支统计',
                    component: resolve => require(['../components/bianji1/budget/Budget.vue'], resolve)
                },
                {
                    path: '/bianji1/budget/bonus',
                    name: '责编奖金统计',
                    component: resolve => require(['../components/bianji1/budget/Bonus.vue'], resolve)
                },
                {
                    path: '/bianji1/contentaudit/rejectchapter',
                    name: '驳回章节列表（新）',
                    component: resolve => require(['../components/bianji1/contentaudit/Rejectchapter.vue'], resolve)
                },
                {
                    path: '/bianji1/contentaudit/timechapter',
                    name: '定时章节列表',
                    component: resolve => require(['../components/bianji1/contentaudit/Timechapter.vue'], resolve)
                },
                {
                    path: '/bianji1/contentaudit/chapterforbidden',
                    name: '章节名违禁词列表',
                    component: resolve => require(['../components/bianji1/contentaudit/Chapterforbidden.vue'], resolve)
                },
                {
                    path: '/bianji1/contentaudit/contentforbidden',
                    name: '章节内容违禁词列表',
                    component: resolve => require(['../components/bianji1/contentaudit/Contentforbidden.vue'], resolve)
                },
                {
                    path: '/bianji1/contentaudit/reviewabstract',
                    name: '简介（作者的话）审核管理',
                    component: resolve => require(['../components/bianji1/contentaudit/Reviewabstract.vue'], resolve)
                },
                {
                    path: '/bianji1/commentaudit/searchcomment',
                    name: '书评主贴列表',
                    component: resolve => require(['../components/bianji1/commentaudit/Searchcomment.vue'], resolve)
                },
                {
                    path: '/bianji1/commentaudit/searchreply',
                    name: '回复列表',
                    component: resolve => require(['../components/bianji1/commentaudit/Searchreply.vue'], resolve)
                },
                {
                    path: '/bianji1/commentaudit/searchreply',
                    name: '楼中楼列表',
                    component: resolve => require(['../components/bianji1/commentaudit/Searchreply.vue'], resolve)
                },
                {
                    path: '/bianji1/commentaudit/badwordcommentlist',
                    name: '书评先审',
                    component: resolve => require(['../components/bianji1/commentaudit/Badwordcommentlist.vue'], resolve)
                },
                {
                    path: '/bianji1/commentaudit/badwordreplylist',
                    name: '回复先审',
                    component: resolve => require(['../components/bianji1/commentaudit/Badwordreplylist.vue'], resolve)
                },
                {
                    path: '/bianji1/commentaudit/badwordreplylist',
                    name: '楼中楼先审',
                    component: resolve => require(['../components/bianji1/commentaudit/Badwordreplylist.vue'], resolve)
                },
                {
                    path: '/bianji1/salesearch/salesearch',
                    name: '作品销售查询',
                    component: resolve => require(['../components/bianji1/salesearch/Salesearch.vue'], resolve)
                },
                {
                    path: '/bianji1/salesearch/allstatis',
                    name: '全站平均订阅统计',
                    component: resolve => require(['../components/bianji1/salesearch/Allstatis.vue'], resolve)
                },
                {
                    path: '/bianji1/salesearch/welfarestatis',
                    name: '红书奖订阅统计',
                    component: resolve => require(['../components/bianji1/salesearch/Welfarestatis.vue'], resolve)
                },
                {
                    path: '/bianji1/yejimanage/eunuch',
                    name: '编辑太监文业绩统计',
                    component: resolve => require(['../components/bianji1/yejimanage/Eunuch.vue'], resolve)
                },
                {
                    path: '/bianji1/yejimanage/allstatis',
                    name: '全勤申请管理',
                    component: resolve => require(['../components/bianji1/yejimanage/Eunuch.vue'], resolve)
                },
                {
                    path: '/bianji1/yejimanage/welfarestatis',
                    name: '保障申请管理',
                    component: resolve => require(['../components/bianji1/yejimanage/Eunuch.vue'], resolve)
                },
                {
                    path: '/bianji1/yejimanage/wangbian',
                    name: '网编业绩管理',
                    component: resolve => require(['../components/bianji1/yejimanage/Wangbian.vue'], resolve)
                },
                {
                    path: '/bianji1/yejimanage/welfarestatis',
                    name: '预付稿费管理',
                    component: resolve => require(['../components/bianji1/yejimanage/Eunuch.vue'], resolve)
                },
                {
                    path: '/bianji1/workdata/clickmanage',
                    name: '调整点击管理',
                    component: resolve => require(['../components/bianji1/workdata/Clickmanage.vue'], resolve)
                },
                {
                    path: '/bianji1/workdata/flowermanage',
                    name: '调整鲜花管理',
                    component: resolve => require(['../components/bianji1/workdata/Clickmanage.vue'], resolve)
                },
                {
                    path: '/bianji1/workdata/addcollect',
                    name: '给新用户自动添加收藏',
                    component: resolve => require(['../components/bianji1/workdata/Clickmanage.vue'], resolve)
                },
                {
                    path: '/bianji1/discountbook/activetopic',
                    name: '活动专题管理',
                    component: resolve => require(['../components/bianji1/discountbook/Activetopic.vue'], resolve)
                },
                {
                    path: '/bianji1/discountbook/discountmanage',
                    name: '折扣书目管理',
                    component: resolve => require(['../components/bianji1/discountbook/Activetopic.vue'], resolve)
                },
                {
                    path: '/bianji1/discountbook/discountcharge',
                    name: '折扣扣费统计',
                    component: resolve => require(['../components/bianji1/discountbook/Discountcharge.vue'], resolve)
                },
                {
                    path: '/bianji1/setpricemanage/setprice',
                    name: '设置自定义价格书籍',
                    component: resolve => require(['../components/bianji1/setpricemanage/Setprice.vue'], resolve)
                },
                {
                    path: '/bianji1/setpricemanage/pricelist',
                    name: '自定义价格列表',
                    component: resolve => require(['../components/bianji1/setpricemanage/Pricelist.vue'], resolve)
                },
                {
                    path: '/bianji1/setpricemanage/freebook',
                    name: '设置限时免费书籍',
                    component: resolve => require(['../components/bianji1/setpricemanage/Freebook.vue'], resolve)
                },
                {
                    path: '/bianji1/setpricemanage/freetopic',
                    name: '限时免费专题书籍',
                    component: resolve => require(['../components/bianji1/setpricemanage/Freetopic.vue'], resolve)
                },
                {
                    path: '/bianji1/setpricemanage/freelist',
                    name: '限时免费列表',
                    component: resolve => require(['../components/bianji1/setpricemanage/Freelist.vue'], resolve)
                },
                {
                    path: '/bianji1/setpricemanage/freeclicklist',
                    name: '限时免费点击统计列表',
                    component: resolve => require(['../components/bianji1/setpricemanage/Freeclicklist.vue'], resolve)
                },
                {
                    path: '/bianji1/topicmanage/topicmanage',
                    name: '专题汇总管理',
                    component: resolve => require(['../components/bianji1/topicmanage/Topicmanage.vue'], resolve)
                },
                {
                    path: '/bianji1/fanssearch/fanslist',
                    name: '专题汇总管理',
                    component: resolve => require(['../components/bianji1/fanssearch/fanslist.vue'], resolve)
                },
                {
                    path: '/bianji1/interview/naninterview',
                    name: '男频作者访谈专辑',
                    component: resolve => require(['../components/bianji1/interview/naninterview.vue'], resolve)
                },
                {
                    path: '/bianji1/interview/nvinterview',
                    name: '女频作者访谈专辑',
                    component: resolve => require(['../components/bianji1/interview/nvinterview.vue'], resolve)
                },
                {
                    path: '/bianji1/datamanage/datamanage',
                    name: '数据增长管理',
                    component: resolve => require(['../components/bianji1/datamanage/Datamanage.vue'], resolve)
                },
                {
                    path: '/bianji1/datamanage/raiseday',
                    name: '数据按天增长管理',
                    component: resolve => require(['../components/bianji1/datamanage/Raiseday.vue'], resolve)
                },
                {
                    path: '/bianji1/datamanage/raisemonth',
                    name: '数据按月增长管理',
                    component: resolve => require(['../components/bianji1/datamanage/Raisemonth.vue'], resolve)
                },
                {
                    path: '/bianji1/other/qyinforlist',
                    name: '签约信息不全作品列表',
                    component: resolve => require(['../components/bianji1/other/Qyinforlist.vue'], resolve)
                },
                {
                    path: '/bianji1/other/editbatchbj',
                    name: '批量修改作者的编辑名',
                    component: resolve => require(['../components/bianji1/other/Editbatchbj.vue'], resolve)
                },
                {
                    path: '/bianji1/other/allotauthorview',
                    name: '分配编辑名下的作者',
                    component: resolve => require(['../components/bianji1/other/Allotauthorview.vue'], resolve)
                },
                {
                    path: '/bianji1/other/getallowbianjiid',
                    name: '获取推荐作者注册的url',
                    component: resolve => require(['../components/bianji1/other/Getallowbianjiid.vue'], resolve)
                },
                {
                    path: '/bianji1/other/nobj',
                    name: '没分配的作者列表',
                    component: resolve => require(['../components/bianji1/other/Nobj.vue'], resolve)
                },
                {
                    path: '/bianji1/other/uploadimage',
                    name: '上传图片',
                    component: resolve => require(['../components/bianji1/other/Uploadimage.vue'], resolve)
                },
                {
                    path: '/bianji1/other/nobj',
                    name: '没分配的作者列表',
                    component: resolve => require(['../components/bianji1/other/Nobj.vue'], resolve)
                },
                {
                    path: '/bianji1/other/uploadimage',
                    name: '上传图片',
                    component: resolve => require(['../components/bianji1/other/Uploadimage.vue'], resolve)
                },
                {
                    path: '/bianji1/other/nobj',
                    name: '没分配的作者列表',
                    component: resolve => require(['../components/bianji1/other/Nobj.vue'], resolve)
                },
                {
                    path: '/bianji1/other/uploadimage',
                    name: '上传图片',
                    component: resolve => require(['../components/bianji1/other/Uploadimage.vue'], resolve)
                },
                {
                    path: '/bianji1/other/nobj',
                    name: '没分配的作者列表',
                    component: resolve => require(['../components/bianji1/other/Nobj.vue'], resolve)
                },
                {
                    path: '/bianji1/other/uploadimage',
                    name: '上传图片',
                    component: resolve => require(['../components/bianji1/other/Uploadimage.vue'], resolve)
                },
                {
                    path: '/bianji1/other/nobj',
                    name: '没分配的作者列表',
                    component: resolve => require(['../components/bianji1/other/Nobj.vue'], resolve)
                },
                {
                    path: '/bianji1/other/uploadimage',
                    name: '上传图片',
                    component: resolve => require(['../components/bianji1/other/Uploadimage.vue'], resolve)
                },
                {
                    path: '/bianji1/other/booktxt',
                    name: 'TXT打包管理',
                    component: resolve => require(['../components/bianji1/other/Booktxt.vue'], resolve)
                },
                {
                    path: '/bianji1/other/duangen',
                    name: '手动榜断更列表',
                    component: resolve => require(['../components/bianji1/other/Duangen.vue'], resolve)
                },
                {
                    path: '/bianji1/other/daochu',
                    name: '批量导出订阅信息',
                    component: resolve => require(['../components/bianji1/other/Daochu.vue'], resolve)
                },
                {
                    path: '/bianji1/other/piliangbookview',
                    name: '批量书籍分配作者号',
                    component: resolve => require(['../components/bianji1/other/Piliangbookview.vue'], resolve)
                },
                {
                    path: '/bianji1/other/piliangsourceidview',
                    name: '批量书号设置来源ID',
                    component: resolve => require(['../components/bianji1/other/Piliangsourceidview.vue'], resolve)
                },
                {
                    path: '/bianji1/other/shortmessage',
                    name: '作者短信箱管理',
                    component: resolve => require(['../components/bianji1/other/Shortmessage.vue'], resolve)
                },
                {
                    path: '/bianji1/other/booksystag',
                    name: '书籍系统标签管理',
                    component: resolve => require(['../components/bianji1/other/Booksystag.vue'], resolve)
                },
                {
                    path: '/bianji1/other/tagcen',
                    name: '书库常用标签管理',
                    component: resolve => require(['../components/bianji1/other/Tagcen.vue'], resolve)
                },
                {
                    path: '/bianji1/other/shouquantag',
                    name: '授权书库单本书标签修改',
                    component: resolve => require(['../components/bianji1/other/Shouquantag.vue'], resolve)
                },
                {
                    path: '/bianji1/other/androidcountfav',
                    name: '客户端书籍日收藏数',
                    component: resolve => require(['../components/bianji1/other/Androidcountfav.vue'], resolve)
                },
                {
                    path: '/bianji1/other/interfacedata',
                    name: '接口数据检查',
                    component: resolve => require(['../components/bianji1/other/Interfacedata.vue'], resolve)
                },
                {
                    path: '/bianji1/other/youledou',
                    name: '有乐豆统计',
                    component: resolve => require(['../components/bianji1/other/Youledou.vue'], resolve)
                },
                {
                    path: '/bianji1/resourcelibrary/primarydata',
                    name: '原始数据',
                    component: resolve => require(['../components/bianji1/resourcelibrary/Primarydata.vue'], resolve)
                },
                {
                    path: '/bianji1/resourcelibrary/resource',
                    name: '资源库',
                    component: resolve => require(['../components/bianji1/resourcelibrary/Resource.vue'], resolve)
                },
                {
                    path: '/bianji1/resourcelibrary/sysallocate',
                    name: '系统分配资源',
                    component: resolve => require(['../components/bianji1/resourcelibrary/Sysallocate.vue'], resolve)
                },
                {
                    path: '/bianji1/resourcelibrary/collection',
                    name: '已收藏资源',
                    component: resolve => require(['../components/bianji1/resourcelibrary/Collection.vue'], resolve)
                },
                {
                    path: '/bianji1/resourcelibrary/lock',
                    name: '已锁定资源',
                    component: resolve => require(['../components/bianji1/resourcelibrary/Lock.vue'], resolve)
                },
                {
                    path: '/bianji1/resourcelibrary/sign',
                    name: '我的签约',
                    component: resolve => require(['../components/bianji1/resourcelibrary/Sign.vue'], resolve)
                }
            ]
        },
        {
            path: '/index/home',
            name: '渠道管理',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/qudao/canalincome/canallist',
                    name: '渠道列表',
                    component: resolve => require(['../components/canalmanage/canalincome/Canallist.vue'], resolve)
                },
                {
                    path: '/qudao/canalincome/batchenter',
                    name: '批量录入',
                    component: resolve => require(['../components/canalmanage/canalincome/Batchenter.vue'], resolve)
                },
                {
                    path: '/qudao/canalincome/canalshouru',
                    name: '渠道收入列表',
                    component: resolve => require(['../components/canalmanage/canalincome/Canalshouru.vue'], resolve)
                },
                {
                    path: '/qudao/canalincome/shouruXLS',
                    name: '导出渠道收入XLS',
                    component: resolve => require(['../components/canalmanage/canalincome/ShouruXLS.vue'], resolve)
                },
                {
                    path: '/qudao/canalincome/canalcollect',
                    name: '渠道收入汇总',
                    component: resolve => require(['../components/canalmanage/canalincome/Canalcollect.vue'], resolve)
                },
                {
                    path: '/qudao/canalincome/canalaccount',
                    name: '渠道收入结算',
                    component: resolve => require(['../components/canalmanage/canalincome/Canalaccount.vue'], resolve)
                },
                {
                    path: '/qudao/canalincome/canalaccountlist',
                    name: '渠道收入结算列表',
                    component: resolve => require(['../components/canalmanage/canalincome/Canalaccountlist.vue'], resolve)
                },
                {
                    path: '/qudao/canalincome/revisefreeze',
                    name: '批量修改冻结状态',
                    component: resolve => require(['../components/canalmanage/canalincome/Revisefreeze.vue'], resolve)
                },
                {
                    path: '/qudao/canalincome/freezelist',
                    name: '书籍渠道收入冻结列表',
                    component: resolve => require(['../components/canalmanage/canalincome/Freezelist.vue'], resolve)
                },
                {
                    path: '/qudao/canalincome/thawlist',
                    name: '书籍渠道收入解冻列表',
                    component: resolve => require(['../components/canalmanage/canalincome/Thawlist.vue'], resolve)
                },
                {
                    path: '/qudao/ireadermanage/chapterluru',
                    name: '录入对应书号',
                    component: resolve => require(['../components/canalmanage/ireadermanage/Chapterluru.vue'], resolve)
                },
                {
                    path: '/qudao/ireadermanage/revenueluru',
                    name: '录入收入',
                    component: resolve => require(['../components/canalmanage/ireadermanage/Revenueluru.vue'], resolve)
                },
                {
                    path: '/qudao/ireadermanage/revenuelist',
                    name: '收入列表',
                    component: resolve => require(['../components/canalmanage/ireadermanage/Revenuelist.vue'], resolve)
                },
                {
                    path: '/qudao/ireadermanage/bidlist',
                    name: '对应书号列表',
                    component: resolve => require(['../components/canalmanage/ireadermanage/Bidlist.vue'], resolve)
                },
                {
                    path: '/qudao/ireadermanage/flshview',
                    name: '刷新生成上月掌阅数据',
                    component: resolve => require(['../components/canalmanage/ireadermanage/Flshview.vue'], resolve)
                }
            ]
        },
        {
            path: '/index/home',
            name: '财务管理',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/finance/allwork/worksmanage',
                    name: '全部作品管理',
                    component: resolve => require(['../components/finance/allwork/Worksmanage.vue'], resolve)
                },
                {
                    path: '/finance/member/member',
                    name: '所有会员管理',
                    component: resolve => require(['../components/finance/member/Member.vue'], resolve)
                },
                {
                    path: '/finance/member/VIPmanage',
                    name: 'VIP会员管理',
                    component: resolve => require(['../components/finance/member/VIPmanage.vue'], resolve)
                },
                {
                    path: '/finance/attendancemanage/attendancedata',
                    name: '全勤作品数据',
                    component: resolve => require(['../components/finance/attendancemanage/Attendancedata.vue'], resolve)
                },
                {
                    path: '/finance/attendancemanage/previousdata',
                    name: '生成上月全勤数据',
                    component: resolve => require(['../components/finance/attendancemanage/Previousdata.vue'], resolve)
                },
                {
                    path: '/finance/month/monthlyticket',
                    name: '月票数据',
                    component: resolve => require(['../components/finance/month/Monthlyticket.vue'], resolve)
                },
                {
                    path: '/finance/month/previousticket',
                    name: '生成上月月票数据',
                    component: resolve => require(['../components/finance/month/Previousticket.vue'], resolve)
                },
                {
                    path: '/finance/reward/previousreward',
                    name: '道具打赏数据',
                    component: resolve => require(['../components/finance/reward/Previousreward.vue'], resolve)
                },
                {
                    path: '/finance/reward/rewarddata',
                    name: '生成上月道具打赏数据',
                    component: resolve => require(['../components/finance/reward/Rewarddata.vue'], resolve)
                },
                {
                    path: '/finance/payment/pricemaintenance',
                    name: '价格维护',
                    component: resolve => require(['../components/finance/payment/Pricemaintenance.vue'], resolve)
                },
                {
                    path: '/finance/payment/maiduanbaodi',
                    name: '买断保底稿费',
                    component: resolve => require(['../components/finance/payment/Maiduanbaodi.vue'], resolve)
                },
                {
                    path: '/finance/payment/jichu',
                    name: '基础稿费',
                    component: resolve => require(['../components/finance/payment/Jichu.vue'], resolve)
                },
                {
                    path: '/finance/payment/fuli',
                    name: '福利稿费',
                    component: resolve => require(['../components/finance/payment/Fuli.vue'], resolve)
                },
                {
                    path: '/finance/payment/disanfang',
                    name: '第三方渠道稿费',
                    component: resolve => require(['../components/finance/payment/Disanfang.vue'], resolve)
                },
                {
                    path: '/finance/payment/qichuyue',
                    name: '期初余额',
                    component: resolve => require(['../components/finance/payment/Qichuyue.vue'], resolve)
                },
                {
                    path: '/finance/payment/dangyue',
                    name: '当月稿费',
                    component: resolve => require(['../components/finance/payment/Dangyue.vue'], resolve)
                },
                {
                    path: '/finance/payment/dangyuejiesuan',
                    name: '当月结算稿费',
                    component: resolve => require(['../components/finance/payment/Dangyuejiesuan.vue'], resolve)
                },
                {
                    path: '/finance/payment/qimoyue',
                    name: '期末余额',
                    component: resolve => require(['../components/finance/payment/Qimoyue.vue'], resolve)
                },
                {
                    path: '/finance/payment/caiwujiesuan',
                    name: '财务当月结算',
                    component: resolve => require(['../components/finance/payment/Caiwujiesuan.vue'], resolve)
                },
                {
                    path: '/finance/subscription/salesearch',
                    name: '作品销售查询',
                    component: resolve => require(['../components/finance/subscription/Salesearch.vue'], resolve)
                },
                {
                    path: '/finance/subscription/salereportday',
                    name: '作品销售日报表',
                    component: resolve => require(['../components/finance/subscription/Salereportday.vue'], resolve)
                },
                {
                    path: '/finance/subscription/salereportmonth',
                    name: '作品销售月报表',
                    component: resolve => require(['../components/finance/subscription/Salereportmonth.vue'], resolve)
                },
                {
                    path: '/finance/recharge/paylog',
                    name: '充值记录查看',
                    component: resolve => require(['../components/finance/recharge/Paylog.vue'], resolve)
                },
                {
                    path: '/finance/recharge/checkctcpayinfoform',
                    name: '天翼手机短信订单查询',
                    component: resolve => require(['../components/finance/recharge/Checkctcpayinfoform.vue'], resolve)
                },
                {
                    path: '/finance/recharge/querytransactions',
                    name: '查询订单交易状态',
                    component: resolve => require(['../components/finance/recharge/Querytransactions.vue'], resolve)
                },
                {
                    path: '/finance/recharge/applepaylog',
                    name: '查询苹果支付交易状态',
                    component: resolve => require(['../components/finance/recharge/Applepaylog.vue'], resolve)
                },
                {
                    path: '/finance/recharge/rechargeback',
                    name: '充值赠送活动记录',
                    component: resolve => require(['../components/finance/recharge/Rechargeback.vue'], resolve)
                },
                {
                    path: '/finance/recharge/rechargereport',
                    name: '充值统计报表',
                    component: resolve => require(['../components/finance/recharge/Rechargereport.vue'], resolve)
                },
                {
                    path: '/finance/recharge/countwangyin',
                    name: '统计充值占比例',
                    component: resolve => require(['../components/finance/recharge/Countwangyin.vue'], resolve)
                },
                {
                    path: '/finance/recharge/countmhpay',
                    name: '统计盛峰充值',
                    component: resolve => require(['../components/finance/recharge/Countmhpay.vue'], resolve)
                }
            ]
        },
        {
            path: '/index/home',
            name: '系统管理',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/system/filtration/replaceword',
                    name: '章节替换词管理',
                    component: resolve => require(['../components/system/filtration/Replaceword.vue'], resolve)
                },
                {
                    path: '/system/filtration/titlebadworda',
                    name: '章节标题-严重违禁词',
                    component: resolve => require(['../components/system/filtration/Titlebadworda.vue'], resolve)
                },
                {
                    path: '/system/filtration/titlebadwordb',
                    name: '章节标题-中级违禁词',
                    component: resolve => require(['../components/system/filtration/Titlebadwordb.vue'], resolve)
                },
                {
                    path: '/system/filtration/titlebadwordc',
                    name: '章节标题-初级违禁词',
                    component: resolve => require(['../components/system/filtration/Titlebadwordc.vue'], resolve)
                },
                {
                    path: '/system/filtration/bknamebadword',
                    name: '禁止使用的书名',
                    component: resolve => require(['../components/system/filtration/Bknamebadword.vue'], resolve)
                },
                {
                    path: '/system/filtration/contentbadword',
                    name: '章节内容违禁词',
                    component: resolve => require(['../components/system/filtration/Contentbadword.vue'], resolve)
                },
                {
                    path: '/system/filtration/usnamebadword',
                    name: '注册用户名违禁词',
                    component: resolve => require(['../components/system/filtration/Usnamebadword.vue'], resolve)
                },
                {
                    path: '/system/filtration/commentbadword',
                    name: '评论内容违禁词',
                    component: resolve => require(['../components/system/filtration/Commentbadword.vue'], resolve)
                },
                {
                    path: '/system/filtration/commentbadword',
                    name: '评论内容违禁词（新版）',
                    component: resolve => require(['../components/system/filtration/Commentbadword.vue'], resolve)
                },
                {
                    path: '/system/sysmg/pricemaintenance',
                    name: '权限管理',
                    component: resolve => require(['../components/finance/payment/Pricemaintenance.vue'], resolve)
                },
                {
                    path: '/system/sysmg/pricemaintenance',
                    name: '查看编辑权限数组',
                    component: resolve => require(['../components/finance/payment/Maiduanbaodi.vue'], resolve)
                },
                {
                    path: '/system/sysmg/pricemaintenance',
                    name: '编辑三级权限管理',
                    component: resolve => require(['../components/finance/payment/Jichu.vue'], resolve)
                },
                {
                    path: '/system/sysmg/pricemaintenance',
                    name: '编辑特殊权限管理',
                    component: resolve => require(['../components/finance/payment/Fuli.vue'], resolve)
                },
                {
                    path: '/finance/payment/disanfang',
                    name: '缓存管理',
                    component: resolve => require(['../components/finance/payment/Disanfang.vue'], resolve)
                },
                {
                    path: '/system/sysmg/pricemaintenance',
                    name: '书籍缓存更新',
                    component: resolve => require(['../components/finance/payment/Qichuyue.vue'], resolve)
                },
                {
                    path: '/system/sysmg/pricemaintenance',
                    name: '用户操作记录',
                    component: resolve => require(['../components/finance/payment/Dangyue.vue'], resolve)
                },
                {
                    path: '/system/sysmg/pricemaintenance',
                    name: 'gearmand监控',
                    component: resolve => require(['../components/finance/payment/Dangyuejiesuan.vue'], resolve)
                },
                {
                    path: '/system/sysmg/pricemaintenance',
                    name: 'yar_rpc接口日调用量统计',
                    component: resolve => require(['../components/finance/payment/Qimoyue.vue'], resolve)
                },
                {
                    path: '/system/sysmg/pricemaintenance',
                    name: 'redis缓存管理',
                    component: resolve => require(['../components/finance/payment/Caiwujiesuan.vue'], resolve)
                },
                {
                    path: '/system/sysmg/pricemaintenance',
                    name: '支付控制开关管理',
                    component: resolve => require(['../components/finance/subscription/Salesearch.vue'], resolve)
                },
                {
                    path: '/system/sysmg/pricemaintenance',
                    name: '短信控制开关管理',
                    component: resolve => require(['../components/finance/subscription/Salereportday.vue'], resolve)
                },
                {
                    path: '/system/sysmg/pricemaintenance',
                    name: '更新所有表的编辑号',
                    component: resolve => require(['../components/finance/subscription/Salereportmonth.vue'], resolve)
                }
            ]
        },
        {
            path: '/index/home',
            name: '商务后台',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/business/workmanage/batchbooklist',
                    name: '作品信息处理',
                    component: resolve => require(['../components/business/workmanage/Batchbooklist.vue'], resolve)
                },
                {
                    path: '/business/workmanage/changesystag',
                    name: '批量修改作品标签',
                    component: resolve => require(['../components/business/workmanage/Changesystag.vue'], resolve)
                },
                {
                    path: '/business/workmanage/rsyncempwer',
                    name: '同步已授权书库版本4系统标签',
                    component: resolve => require(['../components/business/workmanage/Rsyncempwer.vue'], resolve)
                },
                {
                    path: '/business/workrevenue/quxiantu',
                    name: '作品收入曲线',
                    component: resolve => require(['../components/business/workrevenue/Quxiantu.vue'], resolve)
                }
            ]
        },
        {
            path: '/index/home',
            name: '系统管理',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/system/filtration/replaceword',
                    name: '章节替换管理',
                    component: resolve => require(['../components/system/filtration/Replaceword.vue'], resolve)
                },
                {
                    path: '/system/filtration/titlebadworda',
                    name: '章节标题-严重违禁词',
                    component: resolve => require(['../components/system/filtration/Titlebadworda.vue'], resolve)
                },
                {
                    path: '/system/filtration/titlebadwordb',
                    name: '章节标题-中级违禁词',
                    component: resolve => require(['../components/system/filtration/Titlebadwordb.vue'], resolve)
                },
                {
                    path: '/system/filtration/titlebadwordc',
                    name: '章节标题-初级违禁词',
                    component: resolve => require(['../components/system/filtration/Titlebadwordc.vue'], resolve)
                },
                {
                    path: '/system/filtration/bknamebadword',
                    name: '禁止使用的书名',
                    component: resolve => require(['../components/system/filtration/Bknamebadword.vue'], resolve)
                },
                {
                    path: '/system/filtration/contentbadword',
                    name: '章节内容违禁词',
                    component: resolve => require(['../components/system/filtration/Contentbadword.vue'], resolve)
                },
                {
                    path: '/system/filtration/usnamebadword',
                    name: '注册用户名禁用词',
                    component: resolve => require(['../components/system/filtration/Usnamebadword.vue'], resolve)
                },
                {
                    path: '/system/filtration/commentbadword',
                    name: '评论内容违禁词',
                    component: resolve => require(['../components/system/filtration/Commentbadword.vue'], resolve)
                },
                {
                    path: '/system/filtration/commentbadword',
                    name: '评论内容违禁词（新）',
                    component: resolve => require(['../components/system/filtration/Commentbadword.vue'], resolve)
                },
                {
                    path: '/system/sysmg/popedom',
                    name: '权限管理',
                    component: resolve => require(['../components/system/sysmg/Popedom.vue'], resolve)
                },
                {
                    path: '/system/sysmg/privilegearray',
                    name: '查看编辑权限数组',
                    component: resolve => require(['../components/system/sysmg/Privilegearray.vue'], resolve)
                },
                {
                    path: '/system/sysmg/privilegeindex',
                    name: '编辑三级权限管理',
                    component: resolve => require(['../components/system/sysmg/Privilegeindex.vue'], resolve)
                },
                {
                    path: '/system/sysmg/privilegespecial',
                    name: '编辑特殊权限管理',
                    component: resolve => require(['../components/system/sysmg/Privilegespecial.vue'], resolve)
                },
                {
                    path: '/system/sysmg/cache',
                    name: '缓存管理',
                    component: resolve => require(['../components/system/sysmg/Cache.vue'], resolve)
                },
                {
                    path: '/system/sysmg/flushallbookcache',
                    name: '书籍缓存更新',
                    component: resolve => require(['../components/system/sysmg/Flushallbookcache.vue'], resolve)
                },
                {
                    path: '/system/sysmg/systemlog',
                    name: '用户操作记录',
                    component: resolve => require(['../components/system/sysmg/Systemlog.vue'], resolve)
                },
                {
                    path: '/system/sysmg/gearmand',
                    name: 'gearmand监控',
                    component: resolve => require(['../components/system/sysmg/Gearmand.vue'], resolve)
                },
                {
                    path: '/system/sysmg/yarserver',
                    name: 'yar_rpc接口日调用量统计',
                    component: resolve => require(['../components/system/sysmg/Yarserver.vue'], resolve)
                },
                {
                    path: '/system/sysmg/redis',
                    name: 'redis缓存管理',
                    component: resolve => require(['../components/system/sysmg/Redis.vue'], resolve)
                },
                {
                    path: '/system/sysmg/controlswitch1',
                    name: '支付控制开关管理',
                    component: resolve => require(['../components/system/sysmg/Controlswitch1.vue'], resolve)
                },
                {
                    path: '/system/sysmg/controlswitch2',
                    name: '短信控制开关管理',
                    component: resolve => require(['../components/system/sysmg/Controlswitch2.vue'], resolve)
                },
                {
                    path: '/system/sysmg/updatebianjiid',
                    name: '更新所有表的编辑号',
                    component: resolve => require(['../components/system/sysmg/Updatebianjiid.vue'], resolve)
                }
            ]
        },
        {
            path: '/index/home',
            name: '榜单后台',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/rankmanage/bangshenji/bangshenji',
                    name: '升级榜单规则列表',
                    component: resolve => require(['../components/rankmanage/bangshenji/Bangshenji.vue'], resolve)
                },
                {
                    path: '/rankmanage/bangshenji/banghebing',
                    name: '合并榜单规则列表',
                    component: resolve => require(['../components/rankmanage/bangshenji/Banghebing.vue'], resolve)
                },
                {
                    path: '/rankmanage/bangshenji/sethebing',
                    name: '新增合并榜单规则',
                    component: resolve => require(['../components/rankmanage/bangshenji/Sethebing.vue'], resolve)
                },
                {
                    path: '/rankmanage/bangshenji/setshenji',
                    name: '新增升级榜单规则',
                    component: resolve => require(['../components/rankmanage/bangshenji/Setshenji.vue'], resolve)
                },
                {
                    path: '/rankmanage/bangmanage/daochubang',
                    name: '批量导出榜单设置',
                    component: resolve => require(['../components/rankmanage/bangmanage/Daochubang.vue'], resolve)
                },
                {
                    path: '/rankmanage/bangmanage/daorubang',
                    name: '批量导入榜单设置',
                    component: resolve => require(['../components/rankmanage/bangmanage/Daorubang.vue'], resolve)
                },
                {
                    path: '/rankmanage/other/blackbang',
                    name: '榜单黑名单',
                    component: resolve => require(['../components/rankmanage/other/Blackbang.vue'], resolve)
                },
                {
                    path: '/rankmanage/other/setbang',
                    name: '新增榜单',
                    component: resolve => require(['../components/rankmanage/other/Setbang.vue'], resolve)
                },
                {
                    path: '/rankmanage/other/menunmanage',
                    name: '榜单菜单管理',
                    component: resolve => require(['../components/rankmanage/other/Menunmanage.vue'], resolve)
                },
                {
                    path: '/rankmanage/other/refreshbang',
                    name: '刷新榜单缓存',
                    component: resolve => require(['../components/rankmanage/other/Refreshbang.vue'], resolve)
                },
                {
                    path: '/rankmanage/onescrtuij/nantuij',
                    name: '一屏男生推荐',
                    component: resolve => require(['../components/rankmanage/onescrtuij/Nantuij.vue'], resolve)
                },
                {
                    path: '/rankmanage/onescrtuij/dafengtuij',
                    name: '一屏大封推荐',
                    component: resolve => require(['../components/rankmanage/onescrtuij/Dafengtuij.vue'], resolve)
                },
                {
                    path: '/rankmanage/onescrtuij/gonggao',
                    name: '一屏公告推荐',
                    component: resolve => require(['../components/rankmanage/onescrtuij/Gonggao.vue'], resolve)
                },
                {
                    path: '/rankmanage/onescrtuij/nvtuij',
                    name: '一屏女生推荐',
                    component: resolve => require(['../components/rankmanage/onescrtuij/Nvtuij.vue'], resolve)
                },
                {
                    path: '/rankmanage/twosrcnan/dafengtuij',
                    name: '二屏大封推荐',
                    component: resolve => require(['../components/rankmanage/twosrcnan/Dafengtuij.vue'], resolve)
                },
                {
                    path: '/rankmanage/twosrcnan/xiaofengtuij',
                    name: '二屏小封推荐',
                    component: resolve => require(['../components/rankmanage/twosrcnan/Xiaofengtuij.vue'], resolve)
                },
                {
                    path: '/rankmanage/twosrcnan/wufengtuij',
                    name: '二屏无封推荐',
                    component: resolve => require(['../components/rankmanage/twosrcnan/Wufengtuij.vue'], resolve)
                },
                {
                    path: '/rankmanage/threesrcnv/dafengtuij',
                    name: '三屏大封推荐',
                    component: resolve => require(['../components/rankmanage/threesrcnv/Dafengtuij.vue'], resolve)
                },
                {
                    path: '/rankmanage/threesrcnv/xiaofengtuij',
                    name: '三屏小封推荐',
                    component: resolve => require(['../components/rankmanage/threesrcnv/Xiaofengtuij.vue'], resolve)
                },
                {
                    path: '/rankmanage/threesrcnv/wufengtuij',
                    name: '三屏无封推荐',
                    component: resolve => require(['../components/rankmanage/threesrcnv/Wufengtuij.vue'], resolve)
                },
                {
                    path: '/rankmanage/foursrctuij/xinshu',
                    name: '四屏新书上架',
                    component: resolve => require(['../components/rankmanage/foursrctuij/Xinshu.vue'], resolve)
                },
                {
                    path: '/rankmanage/foursrctuij/wanben',
                    name: '四屏完本推荐',
                    component: resolve => require(['../components/rankmanage/foursrctuij/Wanben.vue'], resolve)
                },
                {
                    path: '/rankmanage/nanonesrc/nanzonghe',
                    name: '男频分类-综合',
                    component: resolve => require(['../components/rankmanage/nanonesrc/Nanzonghe.vue'], resolve)
                },
                {
                    path: '/rankmanage/nanonesrc/nandushi',
                    name: '男频分类-都市小说',
                    component: resolve => require(['../components/rankmanage/nanonesrc/Nandushi.vue'], resolve)
                },
                {
                    path: '/rankmanage/nanonesrc/nanxuanhuan',
                    name: '男频分类-玄幻小说',
                    component: resolve => require(['../components/rankmanage/nanonesrc/Nanxuanhuan.vue'], resolve)
                },
                {
                    path: '/rankmanage/nanonesrc/nanlishi',
                    name: '男频分类-历史军事',
                    component: resolve => require(['../components/rankmanage/nanonesrc/Nanlishi.vue'], resolve)
                },
                {
                    path: '/rankmanage/nanonesrc/nankehuan',
                    name: '男频分类-科幻灵异',
                    component: resolve => require(['../components/rankmanage/nanonesrc/Nankehuan.vue'], resolve)
                },
                {
                    path: '/rankmanage/nanonesrc/nanwuxia',
                    name: '男频分类-武侠仙侠',
                    component: resolve => require(['../components/rankmanage/nanonesrc/Nanwuxia.vue'], resolve)
                },
                {
                    path: '/rankmanage/nanonesrc/nanother',
                    name: '男频分类-其他',
                    component: resolve => require(['../components/rankmanage/nanonesrc/Nanother.vue'], resolve)
                },
                {
                    path: '/rankmanage/nantonglan/nantonglan1',
                    name: '男频通栏推荐一',
                    component: resolve => require(['../components/rankmanage/nantonglan/Nantonglan1.vue'], resolve)
                },
                {
                    path: '/rankmanage/nantonglan/nantonglan2',
                    name: '男频通栏推荐二',
                    component: resolve => require(['../components/rankmanage/nantonglan/Nantonglan2.vue'], resolve)
                },
                {
                    path: '/rankmanage/nantwonew/nannew',
                    name: '男频新书推荐',
                    component: resolve => require(['../components/rankmanage/nantwonew/Nannew.vue'], resolve)
                },
                {
                    path: '/rankmanage/nanthreetuij/nanxianmian',
                    name: '男频本期限免',
                    component: resolve => require(['../components/rankmanage/nanthreetuij/Nanxianmian.vue'], resolve)
                },
                {
                    path: '/rankmanage/nanthreetuij/nanmianfei',
                    name: '男频下期免费',
                    component: resolve => require(['../components/rankmanage/nanthreetuij/Nanmianfei.vue'], resolve)
                },
                {
                    path: '/rankmanage/nvfirstsrc/nvzonghe',
                    name: '女频分类-综合',
                    component: resolve => require(['../components/rankmanage/nvfirstsrc/Nvzonghe.vue'], resolve)
                },
                {
                    path: '/rankmanage/nvfirstsrc/nvzongcai',
                    name: '女频分类-总裁豪门',
                    component: resolve => require(['../components/rankmanage/nvfirstsrc/Nvzongcai.vue'], resolve)
                },
                {
                    path: '/rankmanage/nvfirstsrc/nvdushi',
                    name: '女频分类-都市言情',
                    component: resolve => require(['../components/rankmanage/nvfirstsrc/Nvdushi.vue'], resolve)
                },
                {
                    path: '/rankmanage/nvfirstsrc/nvxiaoyuan',
                    name: '女频分类-青春校园',
                    component: resolve => require(['../components/rankmanage/nvfirstsrc/Nvxiaoyuan.vue'], resolve)
                },
                {
                    path: '/rankmanage/nvfirstsrc/nvlingyi',
                    name: '女频分类-悬疑灵异',
                    component: resolve => require(['../components/rankmanage/nvfirstsrc/Nvlingyi.vue'], resolve)
                },
                {
                    path: '/rankmanage/nvfirstsrc/nvchuanyue',
                    name: '女频分类-穿越时空',
                    component: resolve => require(['../components/rankmanage/nvfirstsrc/Nvchuanyue.vue'], resolve)
                },
                {
                    path: '/rankmanage/nvfirstsrc/nvlishi',
                    name: '女频分类-架空历史',
                    component: resolve => require(['../components/rankmanage/nvfirstsrc/Nvlishi.vue'], resolve)
                },
                {
                    path: '/rankmanage/nvfirstsrc/nvother',
                    name: '女频分类-其他',
                    component: resolve => require(['../components/rankmanage/nvfirstsrc/Nvother.vue'], resolve)
                },
                {
                    path: '/rankmanage/nvtonglan/nvtonglan1',
                    name: '女频通栏推荐一',
                    component: resolve => require(['../components/rankmanage/nvtonglan/Nvtonglan1.vue'], resolve)
                },
                {
                    path: '/rankmanage/nvtonglan/nvtonglan2',
                    name: '女频通栏推荐二',
                    component: resolve => require(['../components/rankmanage/nvtonglan/Nvtonglan2.vue'], resolve)
                },
                {
                    path: '/rankmanage/nvtwonew/nvtwonew',
                    name: '女频新书推荐',
                    component: resolve => require(['../components/rankmanage/nvtwonew/Nvtwonew.vue'], resolve)
                },
                {
                    path: '/rankmanage/nvthreetuij/nvxianmian',
                    name: '女频本期限免',
                    component: resolve => require(['../components/rankmanage/nvthreetuij/Nvxianmian.vue'], resolve)
                },
                {
                    path: '/rankmanage/nvthreetuij/nvmianfei',
                    name: '女频下期免费',
                    component: resolve => require(['../components/rankmanage/nvthreetuij/Nvmianfei.vue'], resolve)
                },
                {
                    path: '/rankmanage/nanduguo/nanduguo',
                    name: '男频读过推荐',
                    component: resolve => require(['../components/rankmanage/nanduguo/Nanduguo.vue'], resolve)
                },
                {
                    path: '/rankmanage/nvduguo/nvduguo',
                    name: '女频读过推荐',
                    component: resolve => require(['../components/rankmanage/nvduguo/Nvduguo.vue'], resolve)
                }
            ]
        },
        {
            path: '/index/home',
            name: 'M站后台',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/Mstation/bangmanage/wapmain',
                    name: '封面轮播',
                    component: resolve => require(['../components/Mstation/bangmanage/Wapmain.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/login/Login.vue'], resolve)
        }
    ]
});
