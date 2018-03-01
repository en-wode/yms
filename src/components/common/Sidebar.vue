<template>
    <div class="sidebar">
        <VueScrollbar  custom-class="my-scrollbar" ref="Scrollbar">
            <el-menu :default-active="$route.path" class=" " theme="dark" router>
                <el-autocomplete
                    size="small"
                    popper-class="my-autocomplete"
                    class="inline-input"
                    v-model="state2"
                    :fetch-suggestions="querySearch"
                    placeholder="请输入内容"
                    :trigger-on-focus="false"
                    @select="searchtap"
                >
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    <template slot-scope="props">
                        <div class="name" @click="searchrout(props.item.index)" >{{ props.item.name }}</div>
                    </template>
                </el-autocomplete>
                <template v-for="item in select">
                    <template v-if="item.subs">
                        <el-submenu :index="item.index"  :title="item.name">
                            <template slot="title"><i :class="item.icon"></i>{{ item.name }}</template>
                            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index" :title="subItem.name">{{ subItem.name }}
                            </el-menu-item>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :index="item.index" :title="item.name">
                            <i :class="item.icon"></i>{{ item.name }}
                        </el-menu-item>
                    </template>
                </template>
            </el-menu>
        </VueScrollbar>
    </div>
</template>

<script>
    import VueScrollbar from 'vue2-scrollbar';
    require('../../../node_modules/vue2-scrollbar/dist/style/vue2-scrollbar.css');
    require('../../../node_modules/vue2-scrollbar/dist/style/app.css');
    export default {
        components: {
            VueScrollbar
        },
        data () {
            return {
                restaurants: [],
                state2: '',
                select: [],
                bianji1: [
                    {
                        icon: 'el-icon-setting',
                        index: '/index/home',
                        name: '首页'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        name: '作者管理',
                        subs: [
                            {
                                index: '/bianji1/authermanage/searchauthor',
                                name: '作者查询'
                            },
                            {
                                index: '/bianji1/authermanage/whiteauthor',
                                name: '白名单作者'
                            },
                            {
                                index: '/bianji1/authermanage/blackauther',
                                name: '黑名单作者列表'
                            },
                            {
                                index: '/bianji1/authermanage/addblack',
                                name: '添加黑名单作者'
                            },
                            {
                                index: '/bianji1/authermanage/buyout',
                                name: '买断作者列表'
                            },
                            {
                                index: '/bianji1/authermanage/exportauthor',
                                name: '导出作者列表'
                            }
                        ]
                    },
                    {
                        icon: 'icon-workmanage',
                        index: '3',
                        name: '作品管理',
                        subs: [
                            {
                                index: '/bianji1/worksmanage/allworks',
                                name: '全部作品管理'
                            },
                            {
                                index: '/bianji1/worksmanage/worksprice',
                                name: '作品价格维护'
                            },
                            {
                                index: '/bianji1/worksmanage/worksmanage',
                                name: '作品信息批处理'
                            },
                            {
                                index: '/bianji1/worksmanage/booklist',
                                name: '书目下载'
                            },
                            {
                                index: '/bianji1/worksmanage/signworks',
                                name: '签约作品管理'
                            },
                            {
                                index: '/bianji1/worksmanage/vipworks',
                                name: 'VIP作品管理'
                            },
                            {
                                index: '/bianji1/worksmanage/buyworks',
                                name: '买断作品管理'
                            },
                            {
                                index: '/bianji1/worksmanage/checkworks',
                                name: '审核被拒小说'
                            },
                            {
                                index: '/bianji1/worksmanage//waitcheck',
                                name: '编辑待审新书管理'
                            },
                            {
                                index: '/bianji1/worksmanage/newworks',
                                name: '新增作品'
                            },
                            {
                                index: '/bianji1/worksmanage/workscover',
                                name: '作品封面上传'
                            },
                            {
                                index: '/bianji1/worksmanage/batchcover',
                                name: '批量无水印封面上传'
                            },
                            {
                                index: '/bianji1/worksmanage/morerecode',
                                name: '作品催更统计'
                            },
                            {
                                index: '/bianji1/worksmanage/qianyuelist',
                                name: '申请签约书列表'
                            },
                            {
                                index: '/bianji1/worksmanage/downtxt',
                                name: 'txt下载'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '4',
                        name: '作品收支统计',
                        subs: [
                            {
                                index: '/bianji1/budget/recycling',
                                name: '作品回本统计'
                            },
                            {
                                index: '/bianji1/budget/budget',
                                name: '作品收支统计'
                            },
                            {
                                index: '/bianji1/budget/bonus',
                                name: '责编奖金统计'
                            }
                        ]
                    },
                    {
                        icon: 'icon-contentshenge',
                        index: '5',
                        name: '内容审核',
                        subs: [
                            {
                                index: '/bianji1/contentaudit/rejectchapter',
                                name: '驳回章节列表（新）'
                            },
                            {
                                index: '/bianji1/contentaudit/timechapter',
                                name: '定时章节列表'
                            },
                            {
                                index: '/bianji1/contentaudit/chapterforbidden',
                                name: '章节名违禁词列表'
                            },
                            {
                                index: '/bianji1/contentaudit/contentforbidden',
                                name: '章节内容违禁词列表'
                            },
                            {
                                index: '/bianji1/contentaudit/reviewabstract',
                                name: '简介（作者的话）审核管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '6',
                        name: '书评审核',
                        subs: [
                            {
                                index: '/bianji1/commentaudit/searchcomment',
                                name: '书评主贴列表'
                            },
                            {
                                index: '/bianji1/commentaudit/searchreply',
                                name: '回复列表'
                            },
                            {
                                index: '/bianji1/commentaudit/searchreply',
                                name: '楼中楼列表'
                            },
                            {
                                index: '/bianji1/commentaudit/badwordcommentlist',
                                name: '书评先审'
                            },
                            {
                                index: '/bianji1/commentaudit/badwordreplylist',
                                name: '回复先审'
                            },
                            {
                                index: '/bianji1/commentaudit/badwordreplylist',
                                name: '楼中楼先审'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '7',
                        name: '销售查询',
                        subs: [
                            {
                                index: '/bianji1/salesearch/salesearch',
                                name: '作品销售查询'
                            },
                            {
                                index: '/bianji1/salesearch/allstatis',
                                name: '全站平均订阅统计'
                            },
                            {
                                index: '/bianji1/salesearch/welfarestatis',
                                name: '红书奖订阅统计'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '8',
                        name: '业绩管理',
                        subs: [
                            {
                                index: '/bianji1/yejimanage/eunuch',
                                name: '编辑太监文业绩统计'
                            },
                            {
                                index: '/bianji1/yejimanage/quanqin',
                                name: '全勤申请管理'
                            },
                            {
                                index: '/bianji1/yejimanage/ensure',
                                name: '保障申请管理'
                            },
                            {
                                index: '/bianji1/yejimanage/wangbian',
                                name: '网编业绩管理'
                            },
                            {
                                index: '/bianji1/yejimanage/yufu',
                                name: '预付稿费管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '9',
                        name: '作品数据调整',
                        subs: [
                            {
                                index: '/bianji1/workdata/clickmanage',
                                name: '调整点击管理'
                            },
                            {
                                index: '/bianji1/workdata/flowermanage',
                                name: '调整鲜花管理'
                            },
                            {
                                index: '/bianji1/workdata/addcollect',
                                name: '给新用户自动添加收藏'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '10',
                        name: '折扣书籍的管理',
                        subs: [
                            {
                                index: '/bianji1/discountbook/activetopic',
                                name: '活动专题管理'
                            },
                            {
                                index: '/bianji1/discountbook/discountmanage',
                                name: '折扣书目管理'
                            },
                            {
                                index: '/bianji1/discountbook/discountcharge',
                                name: '折扣扣费统计'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '11',
                        name: '自定义书籍价格管理',
                        subs: [
                            {
                                index: '/bianji1/setpricemanage/setprice',
                                name: '设置自定义价格书籍'
                            },
                            {
                                index: '/bianji1/setpricemanage/pricelist',
                                name: '自定义价格列表'
                            },
                            {
                                index: '/bianji1/setpricemanage/freebook',
                                name: '设置限时免费书籍'
                            },
                            {
                                index: '/bianji1/setpricemanage/freetopic',
                                name: '限时免费专题书籍'
                            },
                            {
                                index: '/bianji1/setpricemanage/freelist',
                                name: '限时免费列表'
                            },
                            {
                                index: '/bianji1/setpricemanage/freeclicklist',
                                name: '限时免费点击统计列表'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '12',
                        name: '专题汇总管理',
                        subs: [
                            {
                                index: '/bianji1/topicmanage/topicmanage',
                                name: '专题管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '13',
                        name: '粉丝值查询',
                        subs: [
                            {
                                index: '/bianji1/fanssearch/fanslist',
                                name: '粉丝积分列表'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '14',
                        name: '作者访谈专辑',
                        subs: [
                            {
                                index: '/bianji1/interview/naninterview',
                                name: '男频作者访谈专辑'
                            },
                            {
                                index: '/bianji1/interview/nvinterview',
                                name: '女频作者访谈专辑'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '15',
                        name: '书籍增长数据',
                        subs: [
                            {
                                index: '/bianji1/datamanage/datamanage',
                                name: '数据增长管理'
                            },
                            {
                                index: '/bianji1/datamanage/raiseday',
                                name: '数据按天增长管理'
                            },
                            {
                                index: '/bianji1/datamanage/raisemonth',
                                name: '数据按月增加管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '16',
                        name: '其他项',
                        subs: [
                            {
                                index: '/bianji1/other/qyinforlist',
                                name: '签约信息不全作品'
                            },
                            {
                                index: '/bianji1/other/editbatchbj',
                                name: '批量修改作者的编辑名'
                            },
                            {
                                index: '/bianji1/other/allotauthorview',
                                name: '分配编辑名下的作者'
                            },
                            {
                                index: '/bianji1/other/getallowbianjiid',
                                name: '获取推荐作者注册的url'
                            },
                            {
                                index: '/bianji1/other/nobj',
                                name: '没分配的作者列表'
                            },
                            {
                                index: '/bianji1/other/uploadimage',
                                name: '上传图片'
                            },
                            {
                                index: '/bianji1/other/booktxt',
                                name: 'TXT打包管理'
                            },
                            {
                                index: '/bianji1/other/duangen',
                                name: '手动榜断更列表'
                            },
                            {
                                index: '/bianji1/other/daochu',
                                name: '批量导出订阅信息'
                            },
                            {
                                index: '/bianji1/other/piliangbookview',
                                name: '批量书籍分配作者号'
                            },
                            {
                                index: '/bianji1/other/piliangsourceidview',
                                name: '批量书号设置来源ID'
                            },
                            {
                                index: '/bianji1/other/shortmessage',
                                name: '作者短信箱管理'
                            },
                            {
                                index: '/bianji1/other/booksystag',
                                name: '书籍系统标签管理'
                            },
                            {
                                index: '/bianji1/other/tagcen',
                                name: '书库常用标签管理'
                            },
                            {
                                index: '/bianji1/other/shouquantag',
                                name: '授权书库单本书标签修改'
                            },
                            {
                                index: '/bianji1/other/androidcountfav',
                                name: '客户端书籍日收藏数'
                            },
                            {
                                index: '/bianji1/other/interfacedata',
                                name: '接口数据检查'
                            },
                            {
                                index: '/bianji1/other/youledou',
                                name: '有乐豆统计'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '17',
                        name: '资源库',
                        subs: [
                            {
                                index: '/bianji1/resourcelibrary/primarydata',
                                name: '原始数据'
                            },
                            {
                                index: '/bianji1/resourcelibrary/resource',
                                name: '资源库'
                            },
                            {
                                index: '/bianji1/resourcelibrary/sysallocate',
                                name: '系统分配资源'
                            },
                            {
                                index: '/bianji1/resourcelibrary/collection',
                                name: '已收藏资源'
                            },
                            {
                                index: '/bianji1/resourcelibrary/lock',
                                name: '已锁定资源'
                            },
                            {
                                index: '/bianji1/resourcelibrary/sign',
                                name: '我的签约'
                            }
                        ]
                    }
                ],
                bianji2: [
                    {
                        icon: 'el-icon-setting',
                        index: '/index/home',
                        name: '首页'
                    },
                    {
                        icon: 'el-icon-date',
                        index: '2',
                        name: '采集掌阅对应书号列表',
                        subs: [
                            {
                                index: '/bianji2/collectionreview/bidlist',
                                name: '掌阅对应书号列表'
                            }
                        ]
                    }
                ],
                qudao: [
                    {
                        icon: 'el-icon-setting',
                        index: '/index/home',
                        name: '首页'
                    },
                    {
                        icon: 'el-icon-date',
                        index: '1',
                        name: '渠道收入管理',
                        subs: [
                            {
                                index: '/qudao/canalincome/canallist',
                                name: '渠道列表'
                            },
                            {
                                index: '/qudao/canalincome/batchenter',
                                name: '批量录入'
                            },
                            {
                                index: '/qudao/canalincome/canalshouru',
                                name: '渠道收入列表'
                            },
                            {
                                index: '/qudao/canalincome/shouruXLS',
                                name: '导出渠道收入XLS'
                            },
                            {
                                index: '/qudao/canalincome/canalcollect',
                                name: '渠道收入汇总'
                            },
                            {
                                index: '/qudao/canalincome/canalaccount',
                                name: '渠道收入结算'
                            },
                            {
                                index: '/qudao/canalincome/canalaccountlist',
                                name: '渠道收入结算列表'
                            },
                            {
                                index: '/qudao/canalincome/revisefreeze',
                                name: '批量修改冻结状态'
                            },
                            {
                                index: '/qudao/canalincome/freezelist',
                                name: '书籍渠道收入冻结列表'
                            },
                            {
                                index: '/qudao/canalincome/thawlist',
                                name: '书籍渠道收入解冻列表'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '2',
                        name: '掌阅客户端录入管理',
                        subs: [
                            {
                                index: '/qudao/ireadermanage/chapterluru',
                                name: '录入对应书号'
                            },
                            {
                                index: '/qudao/ireadermanage/revenueluru',
                                name: '录入收入'
                            },
                            {
                                index: '/qudao/ireadermanage/revenuelist',
                                name: '收入列表'
                            },
                            {
                                index: '/qudao/ireadermanage/bidlist',
                                name: '对应书号列表'
                            },
                            {
                                index: '/qudao/ireadermanage/flshview',
                                name: '刷新生成上月掌阅数据'
                            }
                        ]
                    }
                ],
                finance: [
                    {
                        icon: 'el-icon-setting',
                        index: '/index/home',
                        name: '首页'
                    },
                    {
                        icon: 'el-icon-date',
                        index: '1',
                        name: '全部作品管理',
                        subs: [
                            {
                                index: '/finance/allwork/worksmanage',
                                name: '全部作品管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '2',
                        name: '会员管理',
                        subs: [
                            {
                                index: '/finance/member/member',
                                name: '所有会员管理'
                            },
                            {
                                index: '/finance/member/VIPmanage',
                                name: 'VIP会员管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        name: '全勤管理',
                        subs: [
                            {
                                index: '/finance/attendancemanage/attendancedata',
                                name: '全勤作品数据'
                            },
                            {
                                index: '/finance/attendancemanage/previousdata',
                                name: '生成上月全勤数据'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '5',
                        name: '月票',
                        subs: [
                            {
                                index: '/finance/month/monthlyticket',
                                name: '月票数据'
                            },
                            {
                                index: '/finance/month/previousticket',
                                name: '生成上月月票数据'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '6',
                        name: '道具打赏',
                        subs: [
                            {
                                index: '/finance/reward/previousreward',
                                name: '道具打赏数据'
                            },
                            {
                                index: '/finance/reward/rewarddata',
                                name: '生成上月道具打赏数据'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '7',
                        name: '稿费管理（新）',
                        subs: [
                            {
                                index: '/finance/payment/pricemaintenance',
                                name: '价格维护'
                            },
                            {
                                index: '/finance/payment/maiduanbaodi',
                                name: '买断保底稿费'
                            },
                            {
                                index: '/finance/payment/jichu',
                                name: '基础稿费'
                            },
                            {
                                index: '/finance/payment/fuli',
                                name: '福利稿费'
                            },
                            {
                                index: '/finance/payment/disanfang',
                                name: '第三方渠道稿费'
                            },
                            {
                                index: '/finance/payment/qichuyue',
                                name: '期初余额'
                            },
                            {
                                index: '/finance/payment/dangyue',
                                name: '当月稿费'
                            },
                            {
                                index: '/finance/payment/dangyuejiesuan',
                                name: '当月结算稿费'
                            },
                            {
                                index: '/finance/payment/qimoyue',
                                name: '期末余额'
                            },
                            {
                                index: '/finance/payment/caiwujiesuan',
                                name: '财务当月结算'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '8',
                        name: '订阅查询',
                        subs: [
                            {
                                index: '/finance/subscription/salesearch',
                                name: '作品销售查询'
                            },
                            {
                                index: '/finance/subscription/salereportday',
                                name: '作品销售日报表'
                            },
                            {
                                index: '/finance/subscription/salereportmonth',
                                name: '作品销售月报表'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '9',
                        name: '充值记录',
                        subs: [
                            {
                                index: '/finance/recharge/paylog',
                                name: '充值记录查看'
                            },
                            {
                                index: '/finance/recharge/checkctcpayinfoform',
                                name: '天翼手机短信订单查询'
                            },
                            {
                                index: '/finance/recharge/querytransactions',
                                name: '查询订单交易状态'
                            },
                            {
                                index: '/finance/recharge/applepaylog',
                                name: '查询苹果支付交易状态'
                            },
                            {
                                index: '/finance/recharge/rechargeback',
                                name: '充值赠送活动记录'
                            },
                            {
                                index: '/finance/recharge/rechargereport',
                                name: '充值统计报表'
                            },
                            {
                                index: '/finance/recharge/countwangyin',
                                name: '统计充值占比例'
                            },
                            {
                                index: '/finance/recharge/countmhpay',
                                name: '统计盛峰充值'
                            }
                        ]
                    }
                ],
                business: [
                    {
                        icon: 'el-icon-setting',
                        index: '/index/home',
                        name: '首页'
                    },
                    {
                        icon: 'el-icon-date',
                        index: '1',
                        name: '作品管理',
                        subs: [
                            {
                                index: '/business/workmanage/batchbooklist',
                                name: '作品信息处理'
                            },
                            {
                                index: '/business/workmanage/changesystag',
                                name: '批量修改作品标签'
                            },
                            {
                                index: '/business/workmanage/rsyncempwer',
                                name: '同步已授权书库版本4系统标签'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '2',
                        name: '作品收入统计',
                        subs: [
                            {
                                index: '/business/workrevenue/quxiantu',
                                name: '作品收入曲线'
                            }
                        ]
                    }
                ],
                system: [
                    {
                        icon: 'el-icon-setting',
                        index: '/index/home',
                        name: '首页'
                    },
                    {
                        icon: 'el-icon-date',
                        index: '2',
                        name: '过滤词管理',
                        subs: [
                            {
                                index: '/system/filtration/replaceword',
                                name: '章节替换管理'
                            },
                            {
                                index: '/system/filtration/titlebadworda',
                                name: '章节标题-严重违禁词'
                            },
                            {
                                index: '/system/filtration/titlebadwordb',
                                name: '章节标题-中级违禁词'
                            },
                            {
                                index: '/system/filtration/titlebadwordc',
                                name: '章节标题-初级违禁词'
                            },
                            {
                                index: '/system/filtration/bknamebadword',
                                name: '禁止使用的书名'
                            },
                            {
                                index: '/system/filtration/contentbadword',
                                name: '章节内容违禁词'
                            },
                            {
                                index: '/system/filtration/usnamebadword',
                                name: '注册用户名禁用词'
                            },
                            {
                                index: '/system/filtration/commentbadword',
                                name: '评论内容违禁词'
                            },
                            {
                                index: '/system/filtration/commentbadword',
                                name: '评论内容违禁词（新）'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        name: '系统管理',
                        subs: [
                            {
                                index: '/system/sysmg/popedom',
                                name: '权限管理'
                            },
                            {
                                index: '/system/sysmg/privilegearray',
                                name: '查看编辑权限数组'
                            },
                            {
                                index: '/system/sysmg/privilegeindex',
                                name: '编辑三级权限管理'
                            },
                            {
                                index: '/system/sysmg/privilegespecial',
                                name: '编辑特殊权限管理'
                            },
                            {
                                index: '/system/sysmg/cache',
                                name: '缓存管理'
                            },
                            {
                                index: '/system/sysmg/flushallbookcache',
                                name: '书籍缓存更新'
                            },
                            {
                                index: '/system/sysmg/systemlog',
                                name: '用户操作记录'
                            },
                            {
                                index: '/system/sysmg/gearmand',
                                name: 'gearmand监控'
                            },
                            {
                                index: '/system/sysmg/yarserver',
                                name: 'yar_rpc接口日调用量统计'
                            },
                            {
                                index: '/system/sysmg/redis',
                                name: 'redis缓存管理'
                            },
                            {
                                index: '/system/sysmg/controlswitch1',
                                name: '支付控制开关管理'
                            },
                            {
                                index: '/system/sysmg/controlswitch2',
                                name: '短信控制开关管理'
                            },
                            {
                                index: '/system/sysmg/updatebianjiid',
                                name: '更新所有表的编辑号'
                            }
                        ]
                    }
                ],
                rankmanage: [
                    {
                        icon: 'el-icon-setting',
                        index: '/index/home',
                        name: '首页'
                    },
                    {
                        icon: 'el-icon-date',
                        index: '2',
                        name: '升级合并类榜单',
                        subs: [
                            {
                                index: '/rankmanage/bangshenji/bangshenji',
                                name: '升级榜单规则列表'
                            },
                            {
                                index: '/rankmanage/bangshenji/banghebing',
                                name: '合并榜单规则列表'
                            },
                            {
                                index: '/rankmanage/bangshenji/setshenji',
                                name: '新增升级榜单规则'
                            },
                            {
                                index: '/rankmanage/bangshenji/sethebing',
                                name: '新增合并榜单规则'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        name: '批量管理榜单内容',
                        subs: [
                            {
                                index: '/rankmanage/bangmanage/daochubang',
                                name: '批量导出榜单设置'
                            },
                            {
                                index: '/rankmanage/bangmanage/daorubang',
                                name: '批量导入榜单设置'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '4',
                        name: '其他',
                        subs: [
                            {
                                index: '/rankmanage/other/blackbang',
                                name: '榜单黑名单'
                            },
                            {
                                index: '/rankmanage/other/setbang',
                                name: '新增榜单'
                            },
                            {
                                index: '/rankmanage/other/menunmanage',
                                name: '榜单菜单管理'
                            },
                            {
                                index: '/rankmanage/other/refreshbang',
                                name: '刷新榜单缓存'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '5',
                        name: '首页一屏推荐',
                        subs: [
                            {
                                index: '/rankmanage/onescrtuij/nantuij',
                                name: '一屏男生推荐'
                            },
                            {
                                index: '/rankmanage/onescrtuij/dafengtuij',
                                name: '一屏大封推荐'
                            },
                            {
                                index: '/rankmanage/onescrtuij/gonggao',
                                name: '一屏公告推荐'
                            },
                            {
                                index: '/rankmanage/onescrtuij/nvtuij',
                                name: '一屏女生推荐'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '6',
                        name: '首页二屏男生',
                        subs: [
                            {
                                index: '/rankmanage/twosrcnan/dafengtuij',
                                name: '二屏大封推荐'
                            },
                            {
                                index: '/rankmanage/twosrcnan/xiaofengtuij',
                                name: '二屏小封推荐'
                            },
                            {
                                index: '/rankmanage/twosrcnan/wufengtuij',
                                name: '二屏无封推荐'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '7',
                        name: '首页三屏女生',
                        subs: [
                            {
                                index: '/rankmanage/threesrcnv/dafengtuij',
                                name: '三屏大封推荐'
                            },
                            {
                                index: '/rankmanage/threesrcnv/xiaofengtuij',
                                name: '三屏小封推荐'
                            },
                            {
                                index: '/rankmanage/threesrcnv/wufengtuij',
                                name: '三屏无封推荐'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '8',
                        name: '首页四屏推荐',
                        subs: [
                            {
                                index: '/rankmanage/foursrctuij/xinshu',
                                name: '四屏新书上架'
                            },
                            {
                                index: '/rankmanage/foursrctuij/wanben',
                                name: '四屏完本推荐'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '9',
                        name: '男频一屏分类',
                        subs: [
                            {
                                index: '/rankmanage/nanonesrc/nanzonghe',
                                name: '男频分类-综合'
                            },
                            {
                                index: '/rankmanage/nanonesrc/nandushi',
                                name: '男频分类-都市小说'
                            },
                            {
                                index: '/rankmanage/nanonesrc/nanxuanhuan',
                                name: '男频分类-玄幻小说'
                            },
                            {
                                index: '/rankmanage/nanonesrc/nanlishi',
                                name: '男频分类-历史军事'
                            },
                            {
                                index: '/rankmanage/nanonesrc/nankehuan',
                                name: '男频分类-科幻灵异'
                            },
                            {
                                index: '/rankmanage/nanonesrc/nanwuxia',
                                name: '男频分类-武侠仙侠'
                            },
                            {
                                index: '/rankmanage/nanonesrc/nanother',
                                name: '男频分类-其他'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '10',
                        name: '男频通栏推荐',
                        subs: [
                            {
                                index: '/rankmanage/nantonglan/nantonglan1',
                                name: '男频通栏推荐一'
                            },
                            {
                                index: '/rankmanage/nantonglan/nantonglan2',
                                name: '男频通栏推荐二'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '11',
                        name: '男频二屏新书',
                        subs: [
                            {
                                index: '/rankmanage/nantwonew/nannew',
                                name: '男频新书推荐'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '12',
                        name: '男频三屏推荐',
                        subs: [
                            {
                                index: '/rankmanage/nanthreetuij/nanxianmian',
                                name: '男频本期限免'
                            },
                            {
                                index: '/rankmanage/nanthreetuij/nanmianfei',
                                name: '男频下期免费'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '13',
                        name: '女频一屏分类',
                        subs: [
                            {
                                index: '/rankmanage/nvfirstsrc/nvzonghe',
                                name: '女频分类-综合'
                            },
                            {
                                index: '/rankmanage/nvfirstsrc/nvzongcai',
                                name: '女频分类-总裁豪门'
                            },
                            {
                                index: '/rankmanage/nvfirstsrc/nvdushi',
                                name: '女频分类-都市言情'
                            },
                            {
                                index: '/rankmanage/nvfirstsrc/nvxiaoyue',
                                name: '女频分类-青春校园'
                            },
                            {
                                index: '/rankmanage/nvfirstsrc/nvlingyi',
                                name: '女频分类-悬疑灵异'
                            },
                            {
                                index: '/rankmanage/nvfirstsrc/nvchuanyue',
                                name: '女频分类-穿越时空'
                            },
                            {
                                index: '/rankmanage/nvfirstsrc/nvlishi',
                                name: '女频分类-架空历史'
                            },
                            {
                                index: '/rankmanage/nvfirstsrc/nvother',
                                name: '女频分类-其他'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '14',
                        name: '女频通栏推荐',
                        subs: [
                            {
                                index: '/rankmanage/nvtonglan/nvtonglan1',
                                name: '女频通栏推荐一'
                            },
                            {
                                index: '/rankmanage/nvtonglan/nvtonglan2',
                                name: '女频通栏推荐二'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '15',
                        name: '女频二屏新书',
                        subs: [
                            {
                                index: '/rankmanage/nvtwonew/nvtwonew',
                                name: '女频新书推荐'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '16',
                        name: '女频三屏推荐',
                        subs: [
                            {
                                index: '/rankmanage/nvthreetuij/nvxianmian',
                                name: '女频本期限免'
                            },
                            {
                                index: '/rankmanage/nvthreetuij/nvmianfei',
                                name: '女频下期免费'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '17',
                        name: '男频书页推荐',
                        subs: [
                            {
                                index: '/rankmanage/nanduguo/nanduguo',
                                name: '男频读过推荐'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '18',
                        name: '女频书页推荐',
                        subs: [
                            {
                                index: '/rankmanage/nvduguo/nvduguo',
                                name: '女频读过推荐'
                            }
                        ]
                    }],
                Mstation: [
                    {
                        icon: 'el-icon-setting',
                        index: '/index/home',
                        name: '首页'
                    },
                    {
                        icon: 'el-icon-date',
                        index: '2',
                        name: '手动榜-男',
                        subs: [
                            {
                                index: '/Mstation/bangmanage/wapmain',
                                name: '封面轮播'
                            }
                        ]
                    }
                ]
            };
        },
        created () {
            this.select = this[sessionStorage.fadmin];
            this.$nextTick(() => {
            });
        },
        computed: {
            options () {
                return this.$store.state.options;
            },
            fadmin () {
                return this.$store.state.fadmin;
            }
        },
        methods: {
            searchrout (routpath) {
                this.$router.push({path: routpath});
            },
            querySearch (queryString, cb) {
                var restaurants = this.select;
                var that = this;
                var results = [];
                console.log(restaurants);
                restaurants.forEach(function (value, index, array) {
                    if (value.subs) {
                        results = results.concat(queryString ? value.subs.filter(that.createFilter(queryString)) : restaurants);
                    }
                });
// 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter (queryString) {
                return (restaurant) => {
                    return (restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) >= 0);
                };
            },
            searchtap () {
                console.log(1);
            }
        },
        watch: {
            fadmin: function (val) {
                this.select = this[val];
            }
        },
        mounted () {
// 刷新时以当前路由做为tab加入tabs
            if (this.$route.path !== '/' && this.$route.path.indexOf('home') === -1) {
                this.$store.commit('add_tabs', {route: '/index/home', name: '首页'});
                this.$store.commit('add_tabs', { route: this.$route.path, name: this.$route.name });
                this.$store.commit('set_active_index', this.$route.path);
            } else {
                this.$store.commit('add_tabs', {route: '/index/home', name: '首页'});
                this.$store.commit('set_active_index', '/index/home');
            }
            this.restaurants = this.items;
        }
    };
</script>

<style scoped>
    .name{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }

    .el-autocomplete{
        margin: 10px 0 6px 8px;
    }
    .vue-scrollbar__wrapper{
        max-height: 800px;
    }

    [class*="icon-"]{
        vertical-align: middle;
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 18px;
    }
    .inline-input{
        width: 158px;
    }
</style>
