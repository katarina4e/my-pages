const i18n = {
    // 从 sessionStorage 读取当前会话的语言设置，默认中文
    // 关闭浏览器标签后自动重置为中文
    currentLang: sessionStorage.getItem('worldcup_lang') || 'zh',

    translations: {
        zh: {
            '2026美加墨世界杯': '2026美加墨世界杯',
            '首页': '首页',
            '赛事': '赛事',
            '赛程': '赛程',
            '球队': '球队',
            '数据': '数据',
            '开赛倒计时：': '开赛倒计时：',
            '天': '天',
            '时': '时',
            '分': '分',
            '秒': '秒',
            '2026': '2026',
            '美加墨世界杯官方指南': '美加墨世界杯官方指南',
            'main_title': '美加墨世界杯 足球盛宴再升级',
            '了解详情': '了解详情',
            '赛事赛程': '赛事赛程',
            '历史回顾': '历史回顾',
            '2026世界杯前瞻': '2026世界杯前瞻',
            '2026世界杯核心信息': '2026世界杯核心信息',
            '赛事天数': '赛事天数',
            '参赛球队': '参赛球队',
            '总比赛场': '总比赛场',
            '主办国家': '主办国家',
            '查看完整核心信息': '查看完整核心信息',
            '2026世界杯参赛球队': '2026世界杯参赛球队',
            '查看更多球队信息': '查看更多球队信息',
            '值得关注的顶级球星': '值得关注的顶级球星',
            '查看更多球星数据': '查看更多球星数据',
            '利昂内尔·梅西': '利昂内尔·梅西',
            '前锋 / 进攻中场': '前锋 / 进攻中场',
            '#10': '#10',
            '阿根廷 | 迈阿密国际 | 年龄：38岁': '阿根廷 | 迈阿密国际 | 年龄：38岁',
            '克里斯蒂亚诺·罗纳尔多': '克里斯蒂亚诺·罗纳尔多',
            '前锋': '前锋',
            '#7': '#7',
            '葡萄牙 | 利雅得胜利 | 年龄：41岁': '葡萄牙 | 利雅得胜利 | 年龄：41岁',
            '基利安·姆巴佩': '基利安·姆巴佩',
            '法国 | 皇家马德里 | 年龄：27岁': '法国 | 皇家马德里 | 年龄：27岁',
            '埃尔林·哈兰德': '埃尔林·哈兰德',
            '中锋': '中锋',
            '#9': '#9',
            '挪威 | 曼城 | 年龄：26岁': '挪威 | 曼城 | 年龄：26岁',
            '2026世界杯赛事': '2026世界杯赛事',
            '查看完整赛程表': '查看完整赛程表',
            '2026-06-12 3:00': '2026-06-12 3:00',
            'VS': 'VS',
            '揭幕战 | 墨西哥城': '揭幕战 | 墨西哥城',
            '2026-06-18 4:00': '2026-06-18 4:00',
            '小组赛L组 | 达拉斯AT&T': '小组赛L组 | 达拉斯AT&T',
            '2026-06-27 3:00': '2026-06-27 3:00',
            '小组赛I组 | 波士顿体育场': '小组赛I组 | 波士顿体育场',
            '快速导航': '快速导航',
            '赛事信息': '赛事信息',
            '赛程安排': '赛程安排',
            '参赛球队': '参赛球队',
            '数据洞察': '数据洞察',
            '主办信息': '主办信息',
            '美国足协': '美国足协',
            '加拿大足协': '加拿大足协',
            '墨西哥足协': '墨西哥足协',
            '国际足联(FIFA)': '国际足联(FIFA)',
            '联系我们': '联系我们',
            '邮箱：contact@2026worldcup.com': '邮箱：contact@2026worldcup.com',
            '电话：+1 202-555-0199': '电话：+1 202-555-0199',
            '地址：美国纽约曼哈顿第五大道': '地址：美国纽约曼哈顿第五大道',
            '📱': '📱',
            '🔵': '🔵',
            '📷': '📷',
            '𝕏': '𝕏',
            '© 2026 美加墨世界杯官方网站 版权所有': '© 2026 美加墨世界杯官方网站 版权所有',
            '本网站仅用于展示，非官方赛事网站 | 赛事最终解释权归国际足联所有': '本网站仅用于展示，非官方赛事网站 | 赛事最终解释权归国际足联所有',
            '美国': '美国',
            '加拿大': '加拿大',
            '墨西哥': '墨西哥',
            '德国': '德国',
            '法国': '法国',
            '英格兰': '英格兰',
            '西班牙': '西班牙',
            '葡萄牙': '葡萄牙',
            '荷兰': '荷兰',
            '比利时': '比利时',
            '克罗地亚': '克罗地亚',
            '瑞士': '瑞士',
            '奥地利': '奥地利',
            '苏格兰': '苏格兰',
            '挪威': '挪威',
            '波黑': '波黑',
            '瑞典': '瑞典',
            '土耳其': '土耳其',
            '捷克': '捷克',
            '日本': '日本',
            '韩国': '韩国',
            '伊朗': '伊朗',
            '澳大利亚': '澳大利亚',
            '沙特阿拉伯': '沙特阿拉伯',
            '卡塔尔': '卡塔尔',
            '乌兹别克斯坦': '乌兹别克斯坦',
            '约旦': '约旦',
            '伊拉克': '伊拉克',
            '摩洛哥': '摩洛哥',
            '塞内加尔': '塞内加尔',
            '科特迪瓦': '科特迪瓦',
            '埃及': '埃及',
            '加纳': '加纳',
            '南非': '南非',
            '突尼斯': '突尼斯',
            '阿尔及利亚': '阿尔及利亚',
            '佛得角': '佛得角',
            '民主刚果': '民主刚果',
            '阿根廷': '阿根廷',
            '巴西': '巴西',
            '乌拉圭': '乌拉圭',
            '哥伦比亚': '哥伦比亚',
            '厄瓜多尔': '厄瓜多尔',
            '巴拉圭': '巴拉圭',
            '巴拿马': '巴拿马',
            '库拉索': '库拉索',
            '海地': '海地',
            '新西兰': '新西兰',
            '查看更多':'查看更多',
            '▶': '▶',
            '✕': '✕',
            'desc_1': `2026年美加墨世界杯不仅是一场足球盛宴，更是全球体育格局的全新里程碑。作为世界杯历史上首次三国联办、首次扩军至48支球队的划时代赛事，它打破了传统举办模式，让更多足球新星与黑马球队站上世界之巅。全新的赛制结构、横跨北美的顶级球场、更密集的强强对话，让悬念与激情贯穿全程。这场盛会不仅重新定义现代足球的影响力，更将足球文化、城市魅力与全球热爱融为一体，成为一代人心中最难忘的足球记忆。`,
            'desc_2': `本届世界杯赛事将于2026年6月12日至7月20日举行，横跨北美三大国家，共计16座承办城市、104场精彩对决。其中73场比赛在美国举办，加拿大与墨西哥各承办13场。揭幕战便充满"宿命感"：墨西哥与南非继2010年后再次在揭幕战相遇。此外，尽管扩军，仍有强队遗憾缺席，如连续无缘三届大赛的传统劲旅意大利，以及波兰与尼日利亚等。卫冕冠军阿根廷、拥有姆巴佩的法国以及西班牙等依旧是夺冠大热。超长赛程、更多强队对决、更激烈的晋级悬念，将为全球球迷带来前所未有的足球盛宴，也让2026年成为世界杯历史上极具里程碑意义的一年。`,
            'desc_messi': `2022年卡塔尔世界杯冠军队长，足坛公认的第三代球王。拥有历史级的盘带、视野、传球与终结能力，球感与技术完美无瑕。2026年美加墨世界杯将是他职业生涯最后一届世界杯，全力带队冲击卫冕，书写传奇终章。`,
            'desc_ronaldo': `足坛历史顶级射手与传奇巨星，国家队历史射手王，五座金球奖得主。以极致自律、超强身体素质和恐怖进球效率闻名。2026年将是他第六次征战世界杯，继续刷新纪录，冲击职业生涯最后一座世界杯冠军。`,
            'desc_mbappe': `当今足坛速度与爆发力的天花板，2018年世界杯冠军核心成员，世界杯历史最年轻进球者之一。技术全面、门前终结能力极强，2026年将以法国队领军人物身份，带队冲击卫冕，立志成为新一代足坛领军者。`,
            'desc_haaland': `现役足坛第一中锋，身体强壮如坦克，抢点、头球、远射样样精通，门前终结效率冠绝欧洲。作为挪威队绝对核心，他将带领北欧劲旅征战2026世界杯，力争实现挪威足球的历史性突破。`,

            // ==================== data.html JS内部文字翻译 ====================
            'radar_attack': '进攻',
            'radar_defense': '防守',
            'radar_speed': '速度',
            'radar_stamina': '体能',
            'radar_pass': '传球',
            'heatmap_shoot': '射门',
            'heatmap_pass': '传球',
            'heatmap_speed': '速度',
            'heatmap_defend': '防守',
            'heatmap_stamina': '体能',
            'trend_yaxis_title': '累计冠军数',
            'heatmap_rank_title': '球员排名（按选中指标降序）',
            'matrix_current_team': '当前球队',
            'matrix_opponent_team': '对手球队',
            'sankey_tooltip': '{b}: {c}次',
            'continent_south_america': '南美洲',
            'continent_europe': '欧洲',
            'continent_north_america': '北美洲',
            'stars_5': '5星',
            'stars_4': '4星',
            'stars_3': '3星',
            'stars_2': '2星',
            'stars_1': '1星',
            'win_suffix': '胜',
            'player_mbappe': '姆巴佩',
            'player_haaland': '哈兰德',
            'player_messi': '梅西',
            'player_kane': '凯恩',
            'player_vinicius': '维尼修斯',
            'player_ronaldo': 'C罗',
            'player_yamal': '亚马尔',
            'player_lautaro': '劳塔罗',
            'player_saka': '萨卡',
            'player_rodrigo': '罗德里戈',
            'player_griezmann': '格列兹曼',
            'player_bellingham': '贝林厄姆',
            'player_debruyne': '德布劳内',
            'player_modric': '莫德里奇',
            'player_bruno': 'B费',
            'player_pedri': '佩德里',
            'player_rodri': '罗德里',
            'player_valverde': '巴尔韦德',
            'player_odegaard': '厄德高',
            'player_wirtz': '维尔茨',
            'player_depaul': '德保罗',
            'player_kroos': '克罗斯',
            'player_courtois': '库尔图瓦',
            'player_alisson': '阿利松',
            'player_neuer': '诺伊尔',
            'player_martinez': '马丁内斯',
            'player_pickford': '皮克福德',
            'player_maignan': '迈尼昂',
            'player_costa': '科斯塔',
            'player_raya': '拉亚',
            'player_bounou': '布努',
            'player_donnarumma': '多纳鲁马',
            'player_oblak': '奥布拉克',
            'player_ederson': '埃德森',
            'player_jorginho': '若日尼奥',
            'player_kimmich': '基米希',
            'player_rice': '赖斯',
            'player_tchouameni': '琼阿梅尼',
            'player_casemiro': '卡塞米罗',
            'player_goretzka': '格雷茨卡',
            // ==================== 球队名英文键映射 ====================
            'team_argentina': '阿根廷',
            'team_brazil': '巴西',
            'team_germany': '德国',
            'team_france': '法国',
            'team_italy': '意大利',
            'team_england': '英格兰',
            'team_spain': '西班牙',
            'team_portugal': '葡萄牙',
            'team_netherlands': '荷兰',
            'team_uruguay': '乌拉圭',
            'team_belgium': '比利时',
            'team_croatia': '克罗地亚',
            'team_switzerland': '瑞士',
            'team_norway': '挪威',
            'team_morocco': '摩洛哥',
            'team_usa': '美国',
            'team_canada': '加拿大',
            'team_mexico': '墨西哥',
            'team_austria': '奥地利',
            'team_scotland': '苏格兰',
            'team_bosnia': '波黑',
            'team_sweden': '瑞典',
            'team_turkey': '土耳其',
            'team_czech': '捷克',
            'team_japan': '日本',
            'team_korea': '韩国',
            'team_iran': '伊朗',
            'team_australia': '澳大利亚',
            'team_saudi': '沙特',
            'team_qatar': '卡塔尔',
            'team_uzbekistan': '乌兹别克斯坦',
            'team_jordan': '约旦',
            'team_iraq': '伊拉克',
            'team_senegal': '塞内加尔',
            'team_ivory': '科特迪瓦',
            'team_egypt': '埃及',
            'team_ghana': '加纳',
            'team_south_africa': '南非',
            'team_tunisia': '突尼斯',
            'team_algeria': '阿尔及利亚',
            'team_cape_verde': '佛得角',
            'team_dr_congo': '民主刚果',
            'team_colombia': '哥伦比亚',
            'team_ecuador': '厄瓜多尔',
            'team_paraguay': '巴拉圭',
            'team_panama': '巴拿马',
            'team_curacao': '库拉索',
            'team_haiti': '海地',
            'team_new_zealand': '新西兰',

            // ==================== data.html 页面标题与模块 ====================
            'page_header_title': '2026世界杯数据洞察中心',
            'page_header_desc': '用数据讲述足球故事 — 从历届王朝更迭到实时战力博弈',
            'page_tag': '📊 深度数据分析',
            'page_title': '数据洞察 - 2026美加墨世界杯',
            'back_home': '返回首页',

            // 模块标题
            'module1_title': '历届冠军荣誉殿堂',
            'module1_desc': '⭐ 星级代表该国家队累计获得的世界杯冠军次数（五星巴西为历史最高）',
            'module2_title': '冠军流向图谱',
            'module2_subtitle': '各大洲冠军归属与夺冠次数流向',
            'module3_title': '球队战力多维博弈',
            'module3_subtitle': '攻防速度体能传球五维雷达对比',
            'module4_title': '球员表现热力矩阵',
            'module4_subtitle': 'TOP12球星五维能力值可视化',
            'module5_title': '豪门交锋矩阵',
            'module5_subtitle': '8支传统强队历史对战胜率热力图',
            'module6_title': '夺冠势力变迁',
            'module6_subtitle': '各大洲冠军数量随时间演变趋势',

            // 控制按钮与标签
            'team_a_label': '球队A',
            'team_b_label': '球队B',
            'vs_label': 'VS',
            'btn_shoot': '⚽ 射门',
            'btn_pass': '🅰️ 传球',
            'btn_speed': '📈 速度',
            'btn_defend': '🧤 防守',
            'btn_stamina': '🏃 体能',

            // 带国旗的球队名（下拉选项）
            'team_france_flag': '🇫🇷 法国',
            'team_spain_flag': '🇪🇸 西班牙',
            'team_england_flag': '🏴󠁧󠁢󠁥󠁮󠁧󠁿 英格兰',
            'team_argentina_flag': '🇦🇷 阿根廷',
            'team_brazil_flag': '🇧🇷 巴西',
            'team_germany_flag': '🇩🇪 德国',
            'team_portugal_flag': '🇵🇹 葡萄牙',
            'team_netherlands_flag': '🇳🇱 荷兰',

            // 说明文字
            'heatmap_note': '说明：数字代表能力值，颜色越亮表示能力值越高',
            'matrix_note': '说明：数字代表胜场数，颜色越亮表示胜场越多。',


            // ==================== info.html 页面专属 ====================

            // 页面标题
            'page_info_title': '2026世界杯 · 赛事全介绍',
            'page_info_subtitle': '赛事文化 | 赛制规则 | 场馆分布 | 中国观赛指南',

            // 赛事文化
            'section_culture': '赛事文化',
            'badge_official_ball': '官方用球',
            'tag_2026_wc': '2026 世界杯',
            'ball_title': '比赛用球 · TRIONDA',
            'ball_chip': '500Hz 传感芯片',
            'ball_material': '超轻科技材质',
            'ball_desc1': '2026世界杯官方比赛用球名称：阿迪达斯 TRIONDA（三重浪），设计：红/绿/蓝三色，嵌枫叶、美洲豹纹、白头海雕元素；采用轻量化科技材质与稳定飞行结构，兼顾速度与精准。',
            'ball_desc2': '球身配色融合现代美学与足球传统，象征团结、创新与突破，是世界杯扩军新时代的标志性比赛装备。',

            'badge_three_countries': '三国联名',
            'tag_2025_release': '2025 正式发布',
            'mascot_title': '赛事吉祥物',
            'mascot_usacamex': '美加墨联合',
            'mascot_3roles': '3 大角色',
            'mascot_desc1': '本届吉祥物由美加墨三国联合设计，以北美特色动物为原型，充满活力、勇气与友好气质。',
            'mascot_desc2': '萨尤（Zayu）：墨西哥美洲豹，绿色，前锋（9号），寓意团结欢乐。梅普尔（Maple）：加拿大驼鹿，红色，门将（1号），象征枫叶与创造力。克拉奇（Clutch）：美国白头海雕，蓝色，中场（10号），象征无畏与领导力。',

            // 场馆
            'section_stadiums': '十六大赛场介绍',
            'stadium_ny': '纽约大都会人寿体育场',
            'stadium_ny_desc': '决赛举办地！容量8.2w+',
            'stadium_la': '洛杉矶SoFi体育场',
            'stadium_la_desc': '造价55亿美元，8场比赛含一场半决赛',
            'stadium_dallas': '达拉斯AT&T体育场',
            'stadium_dallas_desc': '容量最大！可塞进10W人，橄榄球圣殿',
            'stadium_miami': '迈阿密硬石体育场',
            'stadium_miami_desc': '举办7场比赛，阿根廷小组赛大概率在此',
            'stadium_atlanta': '亚特兰大奔驰体育场',
            'stadium_atlanta_desc': '可开合屋顶，烈日暴雨都不怕',
            'stadium_boston': '波士顿吉列体育场',
            'stadium_boston_desc': '六座新英格兰风情场馆',
            'stadium_philly': '费城林肯金融球场',
            'stadium_philly_desc': '美国经典专业足球场',
            'stadium_houston': '休斯顿NRG体育场',
            'stadium_houston_desc': '德州最大体育场馆之一',
            'stadium_kc': '堪萨斯城箭头体育场',
            'stadium_kc_desc': '美式足球氛围最热烈主场',
            'stadium_seattle': '西雅图流明体育场',
            'stadium_seattle_desc': '海景球场，观赛体验极佳',
            'stadium_sf': '旧金山李维斯体育场',
            'stadium_sf_desc': '硅谷科技感现代化球场',
            'stadium_van': '温哥华BC体育馆',
            'stadium_van_desc': '标志性充气圆顶，加拿大地标',
            'stadium_toronto': '多伦多BMO球场',
            'stadium_toronto_desc': '加拿大最"潮"主场',
            'stadium_mexico_city': '墨西哥城阿兹特克',
            'stadium_mexico_city_desc': '足球圣殿！两次世界杯决赛场地',
            'stadium_guadalajara': '瓜达拉哈拉阿克伦体育场',
            'stadium_guadalajara_desc': '墨西哥现代化专业球场',
            'stadium_monterrey': '蒙特雷BBVA体育场',
            'stadium_monterrey_desc': '墨西哥北部顶级球场',

            // 赛制
            'section_system': '赛制 · 晋级流程',
            'system_scale_title': '⚽ 赛制规模',
            'system_scale_desc': '2026世界杯共48支球队，分为16个小组，每组3队，单循环对决。每场比赛90分钟，分上下半场。',
            'system_points_title': '📊 积分规则',
            'system_points_desc': '90分钟内进球多的一方获胜，进球一样则为平局。胜一场3分，平一场1分，负0分。小组积分前两名晋级淘汰赛。',
            'system_team_title': '👥 球队组成',
            'system_team_desc': '每队26人，上场11人，位置：门将、后卫、中场、前锋。后卫负责防守，中场负责组织传球，前锋负责进攻射门，门将负责守门。',
            'system_penalty_title': '🥅 点球规则',
            'system_penalty_desc': '禁区内犯规会判罚球点球：球员在12码处无人阻挡直接射门。小组赛平局直接结束；淘汰赛90分钟打平→踢30分钟加时，再平就进入点球大战，轮流罚球分胜负。',

            // 晋级流程
            'flow_group': '小组赛',
            'flow_32': '32强',
            'flow_16': '16强',
            'flow_8': '8强',
            'flow_semi': '半决赛',
            'flow_final': '决赛 🏆',

            // 观赛指南
            'section_guide': '🇨🇳 中国球迷观赛指南',
            'guide_time_title': '北京时间 · 焦点战',
            'guide_opener': '揭幕战：',
            'guide_opener_time': '6月12日 周四 3:00 (北京时间)',
            'guide_most': '多数比赛：',
            'guide_most_time': '凌晨3:00 / 上午9:00 / 中午11:30',
            'guide_golden': '黄金时段：',
            'guide_golden_desc': '周末上午场次友好，适合中国球迷',
            'guide_note': '*因北美时差，部分重要淘汰赛安排在美东时间下午，对应北京凌晨至上午。',

            'guide_watch_title': '哪里看比赛',
            'guide_watch_desc': '国内持权转播商预计为：',
            'platform_cctv': '央视CCTV5',
            'platform_migu': '咪咕视频',
            'platform_douyin': '抖音',
            'platform_yangshipin': '央视频APP',
            'guide_offline': '线下观赛活动：北京、上海、广州等城市将设立官方球迷广场，大屏直播+足球嘉年华。',
            'guide_travel_title': '赴美现场观赛：',
            'guide_travel_desc': '需持有效美国签证/加拿大签证，建议通过FIFA官网抽签购票。',

            'guide_dates_title': '关键日期提醒',
            'date_opener': '• 6.12 揭幕战 美国vs墨西哥',
            'date_group_end': '• 6.25 小组赛结束',
            'date_quarter': '• 7.4-7.8 四分之一决赛',
            'date_semi': '• 7.15 半决赛',
            'date_final': '• 7.20 决赛 (北京凌晨3:00)',

            'btn_back_home': '返回首页',

             'page_schedule_title': '2026世界杯 · 完整赛程',
            'page_schedule_subtitle': '12组48强分组积分榜 | 104场全赛程 | 淘汰赛晋级之路',
            'section_standings': '小组赛积分榜',
            'standings_desc': '每组前2名 + 8个成绩最好的第3名晋级32强淘汰赛',
            'legend_qualified': '直接晋级',
            'legend_possible': '待定/可能晋级',
            'legend_eliminated': '淘汰边缘',
            'th_rank': '排名',
            'th_team': '球队',
            'th_played': '场次',
            'th_won': '胜',
            'th_drawn': '平',
            'th_lost': '负',
            'th_gd': '净胜',
            'th_points': '积分',
            'section_schedule': '完整赛程表',
            'date_6_12': '6月12日',
            'date_6_13': '6月13日',
            'date_6_14': '6月14日',
            'date_6_15': '6月15日',
            'date_6_16': '6月16日',
            'date_6_17': '6月17日',
            'date_6_18': '6月18日',
            'date_6_19': '6月19日',
            'date_6_20': '6月20日',
            'date_6_21': '6月21日',
            'date_6_22': '6月22日',
            'date_6_23': '6月23日',
            'date_6_24': '6月24日',
            'date_6_25': '6月25日',
            'date_6_26': '6月26日',
            'date_6_27': '6月27日',
            'date_6_28': '6月28日',
            'date_6_29': '6月29日',
            'date_6_30': '6月30日',
            'date_7_1': '7月1日',
            'date_7_2': '7月2日',
            'date_7_3': '7月3日',
            'date_7_4': '7月4日',
            'date_7_5': '7月5日',
            'date_7_6': '7月6日',
            'date_7_7': '7月7日',
            'date_7_8': '7月8日',
            'date_7_9': '7月9日',
            'date_7_10': '7月10日',
            'date_7_11': '7月11日',
            'date_7_12': '7月12日',
            'date_7_13': '7月13日',
            'date_7_14': '7月14日',
            'date_7_15': '7月15日',
            'date_7_16': '7月16日',
            'date_7_17': '7月17日',
            'date_7_18': '7月18日',
            'date_7_19': '7月19日',
            'date_7_20': '7月20日',
            'group_a': 'A组',
            'group_b': 'B组',
            'group_c': 'C组',
            'group_d': 'D组',
            'group_e': 'E组',
            'group_f': 'F组',
            'group_g': 'G组',
            'group_h': 'H组',
            'group_i': 'I组',
            'group_j': 'J组',
            'group_k': 'K组',
            'group_l': 'L组',
            'stage_r32': '1/16决赛',
            'stage_r16': '1/8决赛',
            'stage_qf': '1/4决赛',
            'stage_sf': '半决赛',
            'stage_3rd': '季军赛',
            'stage_final': '决赛',
            'team_a1': 'A组第1',
            'team_a2': 'A组第2',
            'team_b1': 'B组第1',
            'team_b2': 'B组第2',
            'team_c1': 'C组第1',
            'team_c2': 'C组第2',
            'team_d1': 'D组第1',
            'team_d2': 'D组第2',
            'team_e1': 'E组第1',
            'team_e2': 'E组第2',
            'team_f1': 'F组第1',
            'team_f2': 'F组第2',
            'team_g1': 'G组第1',
            'team_g2': 'G组第2',
            'team_h1': 'H组第1',
            'team_h2': 'H组第2',
            'team_i1': 'I组第1',
            'team_i2': 'I组第2',
            'team_j1': 'J组第1',
            'team_j2': 'J组第2',
            'team_k1': 'K组第1',
            'team_k2': 'K组第2',
            'team_l1': 'L组第1',
            'team_l2': 'L组第2',
            'team_3rd': '第3名',
            'team_congo_dr': '刚果(金)',
            'team_uzbekistan': '乌兹别克',
            'winner_81': '81场胜者',
            'winner_82': '82场胜者',
            'winner_83': '83场胜者',
            'winner_84': '84场胜者',
            'winner_85': '85场胜者',
            'winner_86': '86场胜者',
            'winner_87': '87场胜者',
            'winner_88': '88场胜者',
            'winner_89': '89场胜者',
            'winner_90': '90场胜者',
            'winner_91': '91场胜者',
            'winner_92': '92场胜者',
            'winner_93': '93场胜者',
            'winner_94': '94场胜者',
            'winner_95': '95场胜者',
            'winner_96': '96场胜者',
            'winner_97': '97场胜者',
            'winner_98': '98场胜者',
            'winner_99': '99场胜者',
            'winner_100': '100场胜者',
            'winner_101': '101场胜者',
            'winner_102': '102场胜者',
            'winner_103': '103场胜者',
            'winner_104': '104场胜者',
            'winner_105': '105场胜者',
            'winner_106': '106场胜者',
            'winner_107': '107场胜者',
            'winner_108': '108场胜者',
            'loser_sf': '半决赛负者',
            'winner_sf': '半决赛胜者',
            'venue_mexico_city': '墨西哥城',
            'venue_guadalajara': '瓜达拉哈拉',
            'venue_toronto': '多伦多',
            'venue_la': '洛杉矶',
            'venue_ny': '纽约/新泽西',
            'venue_boston': '波士顿',
            'venue_vancouver': '温哥华',
            'venue_sf': '旧金山湾区',
            'venue_houston': '休斯顿',
            'venue_philly': '费城',
            'venue_dallas': '达拉斯',
            'venue_monterrey': '蒙特雷',
            'venue_atlanta': '亚特兰大',
            'venue_seattle': '西雅图',
            'venue_miami': '迈阿密',
            'venue_kc': '堪萨斯城',
            'round_thu_g1': '周四 · 小组赛第1轮',
            'round_fri_g1': '周五 · 小组赛第1轮',
            'round_sat_g1': '周六 · 小组赛第1轮',
            'round_sun_g1': '周日 · 小组赛第1轮',
            'round_mon_g1': '周一 · 小组赛第1轮',
            'round_tue_g1': '周二 · 小组赛第1轮',
            'round_wed_g1': '周三 · 小组赛第1轮',
            'round_thu_g2': '周四 · 小组赛第2轮',
            'round_fri_g2': '周五 · 小组赛第2轮',
            'round_sat_g2': '周六 · 小组赛第2轮',
            'round_sun_g2': '周日 · 小组赛第2轮',
            'round_mon_g2': '周一 · 小组赛第2轮',
            'round_tue_g2': '周二 · 小组赛第2轮',
            'round_wed_g2': '周三 · 小组赛第2轮',
            'round_wed_g3': '周三 · 小组赛第3轮',
            'round_thu_g3': '周四 · 小组赛第3轮',
            'round_fri_g3': '周五 · 小组赛第3轮',
            'round_sat_g3': '周六 · 小组赛第3轮',
            'round_sun_r32': '周日 · 1/16决赛',
            'round_mon_r32': '周一 · 1/16决赛',
            'round_tue_r32': '周二 · 1/16决赛',
            'round_wed_r32': '周三 · 1/16决赛',
            'round_thu_r32': '周四 · 1/16决赛',
            'round_fri_r32': '周五 · 1/16决赛',
            'round_sat_r16': '周六 · 1/8决赛',
            'round_sun_r16': '周日 · 1/8决赛',
            'round_mon_r16': '周一 · 1/8决赛',
            'round_tue_r16': '周二 · 1/8决赛',
            'round_thu_qf': '周四 · 1/4决赛',
            'round_fri_qf': '周五 · 1/4决赛',
            'round_sat_qf': '周六 · 1/4决赛',
            'round_tue_sf': '周二 · 半决赛',
            'round_wed_sf': '周三 · 半决赛',
            'round_sat_3rd': '周六 · 季军赛',
            'round_sun_final': '周日 · 决赛',

             'page_teams_title': '2026世界杯 · 48强参赛球队',
            'page_teams_subtitle': '点击球队卡片查看详细介绍',
            'section_teams_list': '参赛球队',
  // 1 美国
  team_usa: "美国",
  desc_usa: "东道主 | 年轻活力",
  team_usa_title: "美国队",
  team_usa_content: "### 球队概况\n美国作为2026世界杯东道主之一，坐拥主场优势，球队以年轻球员为核心，体能充沛、边路突破能力突出，整体打法极具冲击力，攻防转换速度快，是中北美地区实力最强的队伍之一。\n\n 世界杯历史\n共10次晋级世界杯决赛圈，最佳成绩为1930年首届世界杯季军，2022年卡塔尔世界杯成功打入16强，近年来青训体系完善，人才储备充足。\n\n 核心阵容\n- 普利西奇（切尔西）\n- 麦肯尼（尤文图斯）\n- 雷纳（多特蒙德）",

  // 2 加拿大
  team_canada: "加拿大",
  desc_canada: "东道主 | 飞速崛起",
  team_canada_title: "加拿大队",
  team_canada_content: "### 球队概况\n加拿大是2026世界杯东道主，近年足球实力飞速崛起，依靠高压逼抢和快速反击战术成为中北美顶级强队，球员身体素质出色，边路冲击力极强，整体战术纪律性优秀。\n\n 世界杯历史\n1986年首次晋级世界杯决赛圈，2022年卡塔尔世界杯时隔36年重返世界杯舞台，2026年以东道主身份出战，迎来队史黄金时期。\n\n 核心阵容\n- 阿方索·戴维斯（拜仁）\n- 乔纳森·戴维（里尔）\n- 利亚姆·米勒（巴塞尔）",

  // 3 墨西哥
  team_mexico: "墨西哥",
  desc_mexico: "东道主 | 中北美霸主",
  team_mexico_title: "墨西哥队",
  team_mexico_content: "### 球队概况\n墨西哥是中北美足坛绝对霸主，同时也是2026世界杯东道主之一，球队技术细腻，配合流畅，擅长地面传控和快速转移球，大赛经验丰富，是世界杯常客。\n\n 世界杯历史\n共计17次晋级世界杯决赛圈，7次成功打入16强，最佳成绩为世界杯八强，是中北美地区世界杯战绩最出色的球队。\n\n 核心阵容\n- 希门尼斯（狼队）\n- 洛萨诺（那不勒斯）\n- 罗德里格斯（蓝十字）",

  // 4 德国
  team_germany: "德国",
  desc_germany: "四届冠军 | 铁血战车",
  team_germany_title: "德国队",
  team_germany_content: "### 球队概况\n四届世界杯冠军得主，传统铁血强队，战术整体性极强，攻防体系均衡完善，球员身体素质与战术素养兼备，擅长高强度对抗和高效攻防转换，是世界足坛传统顶级豪门。\n\n 世界杯历史\n19次晋级世界杯决赛圈，斩获4次世界杯冠军，夺冠次数位居历史前列，是世界杯历史上成绩最稳定的球队之一。\n\n 核心阵容\n- 哈弗茨\n- 基米希\n- 穆勒",

  // 5 法国
  team_france: "法国",
  desc_france: "豪华阵容 | 卫冕热门",
  team_france_title: "法国队",
  team_france_content: "### 球队概况\n2018年世界杯冠军、2022年世界杯亚军，坐拥世界顶级阵容，攻防两端实力无解，球员天赋出众，战术选择丰富，是2026世界杯最大夺冠热门之一。\n\n 世界杯历史\n16次晋级世界杯决赛圈，斩获2次世界杯冠军，近年来阵容深度冠绝全球，青训体系产出大量顶级球星。\n\n 核心阵容\n- 姆巴佩（皇马）\n- 格列兹曼（马竞）\n- 坎特（吉达联合）",

  // 6 英格兰
  team_england: "英格兰",
  desc_england: "年轻豪华 | 凯恩领衔",
  team_england_title: "英格兰队",
  team_england_content: "### 球队概况\n年轻阵容豪华，由世界级射手凯恩领衔，球队边路突破犀利，中场创造力充足，大赛成绩稳定，战术打法兼具技术与冲击力，是欧洲传统强队。\n\n 世界杯历史\n15次晋级世界杯决赛圈，1966年本土举办世界杯斩获冠军，近年来年轻球员快速成长，整体实力稳步提升。\n\n 核心阵容\n- 凯恩\n- 福登\n- 贝林厄姆",

  // 7 西班牙
  team_spain: "西班牙",
  desc_spain: "传控足球 | 技术流",
  team_spain_title: "西班牙队",
  team_spain_content: "### 球队概况\n传控足球的代表球队，技术细腻，配合流畅默契，年轻阵容成长迅速，中场控球能力顶级，擅长通过控球掌控比赛节奏，是欧洲技术流球队的标杆。\n\n 世界杯历史\n15次晋级世界杯决赛圈，2010年南非世界杯夺得冠军，开创了传控足球的黄金时代，青训体系持续输出天才球员。\n\n 核心阵容\n- 佩德里\n- 加维\n- 莫拉塔",

  // 8 葡萄牙
  team_portugal: "葡萄牙",
  desc_portugal: "C罗领衔 | 火力强劲",
  team_portugal_title: "葡萄牙队",
  team_portugal_content: "### 球队概况\n由传奇球星C罗领衔，球队进攻火力极强，边路速度优势明显，中场组织能力出色，反击效率高，是欧洲足坛极具竞争力的球队。\n\n 世界杯历史\n7次晋级世界杯决赛圈，最佳成绩为世界杯季军，球队大赛表现稳定，进攻端人才储备丰富。\n\n 核心阵容\n- C罗\n- B费\n- 莱奥",

  // 9 荷兰
  team_netherlands: "荷兰",
  desc_netherlands: "无冕之王 | 全攻全守",
  team_netherlands_title: "荷兰队",
  team_netherlands_content: "### 球队概况\n被誉为无冕之王，全攻全守战术的开创者，比赛观赏性极高，球员技术全面，攻防两端极具层次感，后防线实力雄厚，多次冲击世界杯冠军。\n\n 世界杯历史\n11次晋级世界杯决赛圈，3次获得世界杯亚军，是世界杯历史上最具悲情色彩的顶级强队，战术风格影响世界足坛。\n\n 核心阵容\n- 德容\n- 德里赫特\n- 范戴克",

  // 10 比利时
  team_belgium: "比利时",
  desc_belgium: "欧洲红魔 | 黄金一代",
  team_belgium_title: "比利时队",
  team_belgium_content: "### 球队概况\n绰号欧洲红魔，迎来队史黄金一代，中场创造力顶级，锋线得分能力出色，门将位置实力顶尖，整体阵容配置均衡，是欧洲顶级强队。\n\n 世界杯历史\n14次晋级世界杯决赛圈，最佳成绩为世界杯季军，近年来世界排名长期位居前列，大赛竞争力十足。\n\n 核心阵容\n- 德布劳内\n- 卢卡库\n- 库尔图瓦",

  // 11 克罗地亚
  team_croatia: "克罗地亚",
  desc_croatia: "中场强阵 | 铁血韧性",
  team_croatia_title: "克罗地亚队",
  team_croatia_content: "### 球队概况\n2018年世界杯亚军，中场实力雄厚，球员技术细腻且韧性极强，大赛抗压能力出色，擅长硬仗，是东欧足坛的代表性强队。\n\n 世界杯历史\n6次晋级世界杯决赛圈，最佳成绩为世界杯亚军，球队以中场核心群为支柱，战术执行力拉满。\n\n 核心阵容\n- 莫德里奇\n- 布罗佐维奇\n- 佩里西奇",

  // 12 瑞士
  team_switzerland: "瑞士",
  desc_switzerland: "欧洲劲旅 | 防守强硬",
  team_switzerland_title: "瑞士队",
  team_switzerland_content: "### 球队概况\n欧洲实力派劲旅，防守强硬且体系严密，发挥极其稳定，球员战术素养高，反击简洁高效，是世界杯上不容小觑的防守型强队。\n\n 世界杯历史\n12次晋级世界杯决赛圈，多次在世界杯赛场逼平甚至击败顶级豪门，以铁血防守著称。\n\n 核心阵容\n- 索默\n- 扎卡",

  // 13 奥地利
  team_austria: "奥地利",
  desc_austria: "稳步崛起 | 欧洲中游",
  team_austria_title: "奥地利队",
  team_austria_content: "### 球队概况\n欧洲中游球队，近年来稳步崛起，队内多名球员效力于欧洲五大联赛，球员个人能力不俗，打法硬朗，进攻端具备一定的冲击力。\n\n### 世界杯历史\n2次晋级世界杯决赛圈，球队正处于新老交替阶段，整体实力持续提升中。\n\n### 核心阵容\n- 阿瑙托维奇\n- 萨比策",

  // 14 苏格兰
  team_scotland: "苏格兰",
  desc_scotland: "北欧风格 | 硬朗拼抢",
  team_scotland_title: "苏格兰队",
  team_scotland_content: "### 球队概况\n打法偏向北欧风格，球员身体硬朗，拼抢积极主动，中场对抗能力强，战术风格务实直接，大赛经验丰富，是英伦足坛的特色球队。\n\n### 世界杯历史\n多次晋级世界杯决赛圈，球队作风顽强，擅长身体对抗，在欧洲赛场具备一定竞争力。\n\n### 核心阵容\n- 罗伯逊\n- 麦克托米奈",

  // 15 挪威
  team_norway: "挪威",
  desc_norway: "北欧劲旅 | 高中锋战术",
  team_norway_title: "挪威队",
  team_norway_content: "### 球队概况\n北欧传统劲旅，主打高中锋战术，前场冲击力极强，球员身体素质顶级，边路与中路配合直接高效，进攻端威胁巨大。\n\n### 世界杯历史\n多次晋级世界杯决赛圈，队内拥有世界级球星，是北欧足坛进攻火力最猛的球队之一。\n\n### 核心阵容\n- 哈兰德\n- 厄德高",

  // 16 波黑
  team_bosnia: "波黑",
  desc_bosnia: "技术流 | 中场创造力",
  team_bosnia_title: "波黑队",
  team_bosnia_content: "### 球队概况\n典型的技术流球队，中场创造力极强，球员脚下技术细腻，传球配合流畅，进攻端组织能力出色，是东欧技术型球队代表。\n\n### 世界杯历史\n多次晋级世界杯决赛圈，依靠中场核心球员带动整体进攻，打法极具观赏性。\n\n### 核心阵容\n- 皮亚尼奇\n- 哲科",

  // 17 瑞典
  team_sweden: "瑞典",
  desc_sweden: "北欧劲旅 | 身体强悍",
  team_sweden_title: "瑞典队",
  team_sweden_content: "### 球队概况\n北欧传统劲旅，球员身体强悍，主打防守反击战术，战术纪律严明，防守体系严密，反击简洁致命，是典型的北欧实用型强队。\n\n### 世界杯历史\n12次晋级世界杯决赛圈，最佳成绩为世界杯亚军，球队大赛发挥稳定，擅长对抗高强度比赛。\n\n### 核心阵容\n- 伊萨克\n- 库卢塞夫斯基",

  // 18 土耳其
  team_turkey: "土耳其",
  desc_turkey: "凶悍球风 | 黑马潜质",
  team_turkey_title: "土耳其队",
  team_turkey_content: "### 球队概况\n球风凶悍硬朗，具备十足的黑马潜质，青训体系出色，年轻球员成长迅速，攻防两端都具备极强的侵略性，大赛时常制造惊喜。\n\n### 世界杯历史\n2次晋级世界杯决赛圈，最佳成绩为世界杯季军，是欧洲足坛风格最鲜明的球队之一。\n\n### 核心阵容\n- 恰尔汉奥卢\n- 伊尔迪里姆",

  // 19 捷克
  team_czech: "捷克",
  desc_czech: "东欧技术流 | 配合流畅",
  team_czech_title: "捷克队",
  team_czech_content: "### 球队概况\n东欧技术流代表球队，传球配合流畅，中场组织能力出色，大赛经验丰富，球员战术执行力强，是东欧足坛的传统强队。\n\n### 世界杯历史\n多次晋级世界杯决赛圈，球队打法成熟稳健，攻防两端均衡，具备不俗的竞争力。\n\n### 核心阵容\n- 绍切克\n- 希克",

  // 20 日本
  team_japan: "日本",
  desc_japan: "亚洲顶级 | 技术细腻",
  team_japan_title: "日本队",
  team_japan_content: "### 球队概况\n亚洲足坛顶级强队，技术细腻流畅，传控能力突出，队内旅欧球员众多，战术理念接轨欧洲，攻防转换快速，是亚洲足球的标杆球队。\n\n### 世界杯历史\n7次晋级世界杯决赛圈，最佳成绩为世界杯16强，多次在世界杯击败欧洲南美强队。\n\n### 核心阵容\n- 久保健英\n- 三笘薫\n- 富安健洋",

  // 21 韩国
  team_korea: "韩国",
  desc_korea: "孙兴慜领衔 | 速度反击",
  team_korea_title: "韩国队",
  team_korea_content: "### 球队概况\n由亚洲巨星孙兴慜领衔，球队整体速度极快，反击犀利，球员跑动积极，体能充沛，是亚洲足坛反击打法最具威胁的球队。\n\n### 世界杯历史\n11次晋级世界杯决赛圈，最佳成绩为世界杯四强，是亚洲世界杯战绩最出色的球队之一。\n\n### 核心阵容\n- 孙兴慜\n- 金玟哉\n- 李刚仁",

  // 22 伊朗
  team_iran: "伊朗",
  desc_iran: "亚洲劲旅 | 防守稳固",
  team_iran_title: "伊朗队",
  team_iran_content: "### 球队概况\n亚洲顶级劲旅，球员身体强壮，防守体系稳固严密，对抗能力出色，擅长立足防守寻找反击机会，是亚洲足坛防守最强的球队之一。\n\n### 世界杯历史\n6次晋级世界杯决赛圈，球队作风硬朗，大赛中常给豪门球队制造巨大麻烦。\n\n### 核心阵容\n- 阿兹蒙\n- 塔雷米",

  // 23 澳大利亚
  team_australia: "澳大利亚",
  desc_australia: "身体硬朗 | 直接高效",
  team_australia_title: "澳大利亚队",
  team_australia_content: "### 球队概况\n球员身体硬朗，打法直接高效，擅长高空球争夺和边路冲击，战术风格务实，体能优势明显，是大洋洲与亚洲足坛的实力派球队。\n\n### 世界杯历史\n6次晋级世界杯决赛圈，球队作风顽强，适应高强度对抗比赛。\n\n### 核心阵容\n- 赫鲁斯蒂奇\n- 马比尔",

  // 24 沙特
  team_saudi: "沙特",
  desc_saudi: "西亚强队 | 技术流畅",
  team_saudi_title: "沙特队",
  team_saudi_content: "### 球队概况\n西亚传统强队，技术流畅细腻，球员脚下灵活，团队配合默契，控球能力出色，是西亚技术流足球的代表球队。\n\n### 世界杯历史\n6次晋级世界杯决赛圈，球队打法观赏性强，青训体系完善。\n\n### 核心阵容\n- 萨勒姆\n- 菲尔斯",

  // 25 卡塔尔
  team_qatar: "卡塔尔",
  desc_qatar: "西亚新贵 | 青训建队",
  team_qatar_title: "卡塔尔队",
  team_qatar_content: "### 球队概况\n2022年世界杯东道主，依靠青训体系建队，技术风格偏向南美足球，控球与短传配合成熟，是西亚足坛新兴的实力派球队。\n\n### 世界杯历史\n1次晋级世界杯决赛圈，通过青训与归化结合的模式快速提升实力。\n\n### 核心阵容\n- 阿菲夫\n- 阿里",

  // 26 乌兹别克斯坦
  team_uzbekistan: "乌兹别克斯坦",
  desc_uzbekistan: "中亚劲旅 | 身体强壮",
  team_uzbekistan_title: "乌兹别克斯坦队",
  team_uzbekistan_content: "### 球队概况\n中亚顶级劲旅，球员身体强壮，中场对抗能力强，近年来进步迅速，战术打法日趋成熟，是中亚足球的领军球队。\n\n### 世界杯历史\n多次晋级世界杯决赛圈，球队整体风格硬朗，攻防两端稳步提升。\n\n### 核心阵容\n- 艾哈迈多夫\n- 舒库罗夫",

  // 27 约旦
  team_jordan: "约旦",
  desc_jordan: "西亚劲旅 | 防守稳固",
  team_jordan_title: "约旦队",
  team_jordan_content: "### 球队概况\n西亚实力派劲旅，防守稳固，战术风格务实，球员执行力强，擅长以防守为基础寻找进攻机会，是西亚足坛不可忽视的球队。\n\n### 世界杯历史\n多次晋级世界杯决赛圈，球队作风顽强，大赛表现稳定。\n\n### 核心阵容\n- 哈姆多恩\n- 法迪勒",

  // 28 伊拉克
  team_iraq: "伊拉克",
  desc_iraq: "亚洲老牌 | 斗志旺盛",
  team_iraq_title: "伊拉克队",
  team_iraq_content: "### 球队概况\n亚洲老牌传统强队，球员斗志旺盛，团队凝聚力极强，曾夺得亚洲杯冠军，球风硬朗，大赛精神属性拉满。\n\n### 世界杯历史\n2次晋级世界杯决赛圈，球队以顽强的斗志和拼搏精神著称。\n\n### 核心阵容\n- 阿里\n- 侯赛因",

  // 29 摩洛哥
  team_morocco: "摩洛哥",
  desc_morocco: "非洲顶级 | 防守铁军",
  team_morocco_title: "摩洛哥队",
  team_morocco_content: "### 球队概况\n2022年世界杯四强球队，非洲足坛顶级强队，被誉为防守铁军，防守体系严密，反击快速致命，旅欧球员众多，实力接轨欧洲球队。\n\n### 世界杯历史\n6次晋级世界杯决赛圈，最佳成绩为世界杯四强，是非洲足球在世界杯的标杆球队。\n\n### 核心阵容\n- 齐耶赫\n- 阿什拉夫",

  // 30 塞内加尔
  team_senegal: "塞内加尔",
  desc_senegal: "非洲冠军 | 马内领衔",
  team_senegal_title: "塞内加尔队",
  team_senegal_content: "### 球队概况\n非洲国家杯冠军，由马内领衔，球员身体强壮，速度与力量兼备，攻防两端极具冲击力，是非洲足坛实力最强的球队之一。\n\n### 世界杯历史\n3次晋级世界杯决赛圈，最佳成绩为世界杯八强，球队天赋出众，大赛竞争力十足。\n\n### 核心阵容\n- 马内\n- 库利巴利",

  // 31 科特迪瓦
  team_ivory: "科特迪瓦",
  desc_ivory: "非洲强队 | 球星众多",
  team_ivory_title: "科特迪瓦队",
  team_ivory_content: "### 球队概况\n非洲传统强队，队内球星众多，球员身体天赋顶级，爆发力与对抗能力出色，进攻端人才济济，是非洲足坛的豪门球队。\n\n### 世界杯历史\n多次晋级世界杯决赛圈，依靠球星个人能力与团队配合立足世界杯赛场。\n\n### 核心阵容\n- 扎哈\n- 凯西",

  // 32 埃及
  team_egypt: "埃及",
  desc_egypt: "非洲传统 | 萨拉赫领衔",
  team_egypt_title: "埃及队",
  team_egypt_content: "### 球队概况\n非洲传统顶级强队，由萨拉赫领衔，进攻端创造力十足，球员技术细腻，是北非足球的代表球队。\n\n### 世界杯历史\n3次晋级世界杯决赛圈，球队大赛经验丰富，进攻核心能力突出。\n\n### 核心阵容\n- 萨拉赫",

  // 33 加纳
  team_ghana: "加纳",
  desc_ghana: "非洲青年军 | 天赋出众",
  team_ghana_title: "加纳队",
  team_ghana_content: "### 球队概况\n被誉为非洲青年军，球员天赋出众，跑动能力强，进攻打法开放，冲击力十足，是非洲足坛最具活力的球队。\n\n### 世界杯历史\n4次晋级世界杯决赛圈，最佳成绩为世界杯八强，年轻球员储备充足。\n\n### 核心阵容\n- 托马斯\n- 库杜斯",

  // 34 南非
  team_south_africa: "南非",
  desc_south_africa: "非洲传统 | 东道主底蕴",
  team_south_africa_title: "南非队",
  team_south_africa_content: "### 球队概况\n非洲传统强队，2010年世界杯东道主，拥有深厚的足球底蕴，球员战术素养良好，打法务实，是非洲足坛的代表性球队。\n\n### 世界杯历史\n多次晋级世界杯决赛圈，凭借东道主身份积累了丰富的大赛经验。\n\n### 核心阵容\n- 塔瓦雷斯\n- 姆菲拉",

  // 35 突尼斯
  team_tunisia: "突尼斯",
  desc_tunisia: "非洲常客 | 欧式打法",
  team_tunisia_title: "突尼斯队",
  team_tunisia_content: "### 球队概况\n世界杯常客，打法接轨欧洲足球，防守稳固，战术纪律严明，球员旅欧经验丰富，是北非足坛的实力派球队。\n\n### 世界杯历史\n6次晋级世界杯决赛圈，球队发挥稳定，擅长防守反击战术。\n\n### 核心阵容\n- 斯希里\n- 哈兹里",

  // 36 阿尔及利亚
  team_algeria: "阿尔及利亚",
  desc_algeria: "技术流畅 | 中场创造力",
  team_algeria_title: "阿尔及利亚队",
  team_algeria_content: "### 球队概况\n球员技术流畅，中场创造力极强，传球配合细腻，进攻组织能力出色，是北非技术流足球的代表。\n\n### 世界杯历史\n4次晋级世界杯决赛圈，队内拥有多名五大联赛球员，实力不容小觑。\n\n### 核心阵容\n- 马赫雷斯\n- 本纳赛尔",

  // 37 佛得角
  team_cape_verde: "佛得角",
  desc_cape_verde: "非洲新兴 | 反击快速",
  team_cape_verde_title: "佛得角队",
  team_cape_verde_content: "### 球队概况\n非洲新兴实力球队，技术细腻，反击快速高效，球员机动性强，是非洲足坛冉冉升起的新星球队。\n\n### 世界杯历史\n队史首次晋级世界杯决赛圈，迎来足球发展的黄金时期。\n\n### 核心阵容\n- 热尔松\n- 门德斯",

  // 38 民主刚果
  team_dr_congo: "民主刚果",
  desc_dr_congo: "非洲强队 | 身体天赋",
  team_dr_congo_title: "民主刚果队",
  team_dr_congo_content: "### 球队概况\n非洲实力派强队，球员身体天赋出色，爆发力与对抗能力顶级，进攻犀利，边路冲击力强，是中非足球的领军球队。\n\n### 世界杯历史\n多次晋级世界杯决赛圈，球队依靠身体优势和犀利进攻立足赛场。\n\n### 核心阵容\n- 邦戈\n- 姆本巴",

  // 39 阿根廷
  team_argentina: "阿根廷",
  desc_argentina: "卫冕冠军 | 梅西领衔",
  team_argentina_title: "阿根廷队",
  team_argentina_content: "### 球队概况\n2022年卡塔尔世界杯冠军，由传奇球星梅西领衔，球队攻守均衡，团队凝聚力极强，战术配合默契，打法兼具技术与韧性，是世界足坛顶级豪门。\n\n### 世界杯历史\n18次晋级世界杯决赛圈，斩获3次世界杯冠军（1978/1986/2022），是世界杯历史上最成功的球队之一。\n\n### 核心阵容\n- 梅西（迈阿密）\n- 劳塔罗（国米）\n- 德保罗（马竞）",

  // 40 巴西
  team_brazil: "巴西",
  desc_brazil: "五星巴西 | 技术华丽",
  team_brazil_title: "巴西队",
  team_brazil_content: "### 球队概况\n五星巴西，世界杯历史夺冠次数第一，技术风格华丽，进攻天赋顶级，中前场人才济济，攻防体系完善，2026世界杯目标直指第六座冠军奖杯。\n\n### 世界杯历史\n22次晋级世界杯决赛圈，5次夺得世界杯冠军，是唯一一支从未缺席过世界杯的球队，足球底蕴无人能及。\n\n### 核心阵容\n- 维尼修斯（皇马）\n- 罗德里戈（皇马）\n- 卡塞米罗（曼联）",

  // 41 乌拉圭
  team_uruguay: "乌拉圭",
  desc_uruguay: "两届冠军 | 球风强硬",
  team_uruguay_title: "乌拉圭队",
  team_uruguay_content: "### 球队概况\n两届世界杯冠军得主，球风强硬硬朗，球员斗志旺盛，攻防两端极具韧性，锋线与中场人才储备充足，是南美足坛传统豪门。\n\n### 世界杯历史\n13次晋级世界杯决赛圈，2次夺得世界杯冠军，是南美足球的开创者之一，大赛底蕴深厚。\n\n### 核心阵容\n- 苏亚雷斯\n- 巴尔韦德\n- 努涅斯",

  // 42 哥伦比亚
  team_colombia: "哥伦比亚",
  desc_colombia: "进攻犀利 | 边路快马",
  team_colombia_title: "哥伦比亚队",
  team_colombia_content: "### 球队概况\n南美实力派劲旅，进攻犀利，边路快马众多，反击速度极快，球员技术出色，是南美足坛进攻最具威胁的球队之一。\n\n### 世界杯历史\n6次晋级世界杯决赛圈，最佳成绩为世界杯八强，球队打法观赏性强，球星特点鲜明。\n\n### 核心阵容\n- 迪亚斯\n- J罗",

  // 43 厄瓜多尔
  team_ecuador: "厄瓜多尔",
  desc_ecuador: "年轻活力 | 体能充沛",
  team_ecuador_title: "厄瓜多尔队",
  team_ecuador_content: "### 球队概况\n球队以年轻球员为主，活力十足，体能充沛，是南美足坛新势力，打法硬朗，中场防守强硬，整体实力稳步提升。\n\n### 世界杯历史\n4次晋级世界杯决赛圈，年轻球员成长迅速，是南美足坛的潜力球队。\n\n### 核心阵容\n- 凯塞多\n- 因卡皮耶",

  // 44 巴拉圭
  team_paraguay: "巴拉圭",
  desc_paraguay: "防守坚固 | 务实战术",
  team_paraguay_title: "巴拉圭队",
  team_paraguay_content: "### 球队概况\n被誉为南美铁军，防守坚固严密，战术务实高效，主打防守反击，球员执行力极强，是南美足坛最擅长防守的球队之一。\n\n### 世界杯历史\n4次晋级世界杯决赛圈，球队以铁血防守立足世界杯赛场，擅长逼平强敌。\n\n### 核心阵容\n- 阿尔米隆\n- 萨瓦里塔",

  // 45 巴拿马
  team_panama: "巴拿马",
  desc_panama: "中北美新贵 | 活力年轻",
  team_panama_title: "巴拿马队",
  team_panama_content: "### 球队概况\n中北美足坛新贵，球队年轻活力十足，球员拼抢积极，战术风格务实，是中北美地区快速崛起的新兴球队。\n\n### 世界杯历史\n1次晋级世界杯决赛圈，队史世界杯经验正在逐步积累。\n\n### 核心阵容\n- 埃里克\n- 巴尔塞纳斯",

  // 46 库拉索
  team_curacao: "库拉索",
  desc_curacao: "中北美 | 技术细腻",
  team_curacao_title: "库拉索队",
  team_curacao_content: "### 球队概况\n中北美地区特色球队，技术细腻，反击快速灵活，球员个人技术出色，是中北美足坛的技术流代表。\n\n### 世界杯历史\n队史首次晋级世界杯决赛圈，迎来足球发展的突破期。\n\n### 核心阵容\n- 莱安德罗\n- 朱尼尼奥",

  // 47 海地
  team_haiti: "海地",
  desc_haiti: "中北美 | 身体强壮",
  team_haiti_title: "海地队",
  team_haiti_content: "### 球队概况\n中北美地区实力派球队，球员身体强壮，拼抢积极主动，跑动能力强，打法硬朗，是中北美足坛的顽强型球队。\n\n### 世界杯历史\n多次晋级世界杯决赛圈，球队作风顽强，具备一定的竞争力。\n\n### 核心阵容\n- 拉沃尼尔\n- 皮埃尔",

  // 48 新西兰
  team_new_zealand: "新西兰",
  desc_new_zealand: "大洋洲霸主 | 身体强悍",
  team_new_zealand_title: "新西兰队",
  team_new_zealand_content: "### 球队概况\n大洋洲足坛绝对霸主，球员身体强悍，主打高举高打战术，高空球优势明显，打法直接高效，是大洋洲足球的领军球队。\n\n### 世界杯历史\n2次晋级世界杯决赛圈，依靠身体优势和务实打法立足世界杯赛场。\n\n### 核心阵容\n- 伍德\n- 斯密茨"
  
  

        },
        en: {
            '2026美加墨世界杯': '2026 FIFA World Cup',
            '首页': 'Home',
            '赛事': 'Tournament',
            '赛程': 'Schedule',
            '球队': 'Teams',
            '数据': 'Data',
            '开赛倒计时：': 'Countdown: ',
            '天': 'd',
            '时': 'h',
            '分': 'm',
            '秒': 's',
            '2026': '2026',
            '美加墨世界杯官方指南': 'World Cup Official Guide',
            'main_title': '2026 World Cup: The Ultimate Football Festival',
            '了解详情': 'Learn More',
            '赛事赛程': 'Fixtures',
            '历史回顾': 'History',
            '2026世界杯前瞻': '2026 Preview',
            '2026世界杯核心信息': '2026 World Cup Key Info',
            '赛事天数': 'Tournament Days',
            '参赛球队': 'Qualified Teams',
            '总比赛场': 'Total Matches',
            '主办国家': 'Host Countries',
            '查看完整核心信息': 'View Full Details',
            '2026世界杯参赛球队': '2026 World Cup Teams',
            '查看更多球队信息': 'View More Teams',
            '值得关注的顶级球星': 'Top Players to Watch',
            '查看更多球星数据': 'View Player Stats',
            '利昂内尔·梅西': 'Lionel Messi',
            '前锋 / 进攻中场': 'Forward / Attacking Mid',
            '#10': '#10',
            '阿根廷 | 迈阿密国际 | 年龄：38岁': 'Argentina | Inter Miami | Age: 38',
            '克里斯蒂亚诺·罗纳尔多': 'Cristiano Ronaldo',
            '前锋': 'Forward',
            '#7': '#7',
            '葡萄牙 | 利雅得胜利 | 年龄：41岁': 'Portugal | Al-Nassr | Age: 41',
            '基利安·姆巴佩': 'Kylian Mbappé',
            '法国 | 皇家马德里 | 年龄：27岁': 'France | Real Madrid | Age: 27',
            '埃尔林·哈兰德': 'Erling Haaland',
            '中锋': 'Striker',
            '#9': '#9',
            '挪威 | 曼城 | 年龄：26岁': 'Norway | Man City | Age: 26',
            '2026世界杯赛事': '2026 World Cup Matches',
            '查看完整赛程表': 'View Full Schedule',
            '2026-06-12 3:00': 'Jun 12, 3:00 AM',
            'VS': 'VS',
            '揭幕战 | 墨西哥城': 'Opener | Mexico City',
            '2026-06-18 4:00': 'Jun 18, 4:00 AM',
            '小组赛L组 | 达拉斯AT&T': 'Group L | Dallas AT&T',
            '2026-06-27 3:00': 'Jun 27, 3:00 AM',
            '小组赛I组 | 波士顿体育场': 'Group I | Boston Stadium',
            '快速导航': 'Quick Links',
            '赛事信息': 'Tournament Info',
            '赛程安排': 'Schedule',
            '参赛球队': 'Teams',
            '数据洞察': 'Data Insights',
            '主办信息': 'Host Info',
            '美国足协': 'US Soccer',
            '加拿大足协': 'Canada Soccer',
            '墨西哥足协': 'FMF Mexico',
            '国际足联(FIFA)': 'FIFA Official',
            '联系我们': 'Contact Us',
            '邮箱：contact@2026worldcup.com': 'Email: contact@2026worldcup.com',
            '电话：+1 202-555-0199': 'Tel: +1 202-555-0199',
            '地址：美国纽约曼哈顿第五大道': 'Address: 5th Ave, Manhattan, NY',
            '📱': '📱',
            '🔵': '🔵',
            '📷': '📷',
            '𝕏': '𝕏',
            '© 2026 美加墨世界杯官方网站 版权所有': '© 2026 FIFA World Cup. All Rights Reserved.',
            '本网站仅用于展示，非官方赛事网站 | 赛事最终解释权归国际足联所有': 'Demo site only. All rights reserved by FIFA.',
            '美国': 'USA',
            '加拿大': 'Canada',
            '墨西哥': 'Mexico',
            '德国': 'Germany',
            '法国': 'France',
            '英格兰': 'England',
            '西班牙': 'Spain',
            '葡萄牙': 'Portugal',
            '荷兰': 'Netherlands',
            '比利时': 'Belgium',
            '克罗地亚': 'Croatia',
            '瑞士': 'Switzerland',
            '奥地利': 'Austria',
            '苏格兰': 'Scotland',
            '挪威': 'Norway',
            '波黑': 'Bosnia',
            '瑞典': 'Sweden',
            '土耳其': 'Turkey',
            '捷克': 'Czechia',
            '日本': 'Japan',
            '韩国': 'South Korea',
            '伊朗': 'Iran',
            '澳大利亚': 'Australia',
            '沙特阿拉伯': 'Saudi Arabia',
            '卡塔尔': 'Qatar',
            '乌兹别克斯坦': 'Uzbekistan',
            '约旦': 'Jordan',
            '伊拉克': 'Iraq',
            '摩洛哥': 'Morocco',
            '塞内加尔': 'Senegal',
            '科特迪瓦': 'Ivory Coast',
            '埃及': 'Egypt',
            '加纳': 'Ghana',
            '南非': 'South Africa',
            '突尼斯': 'Tunisia',
            '阿尔及利亚': 'Algeria',
            '佛得角': 'Cape Verde',
            '民主刚果': 'DR Congo',
            '阿根廷': 'Argentina',
            '巴西': 'Brazil',
            '乌拉圭': 'Uruguay',
            '哥伦比亚': 'Colombia',
            '厄瓜多尔': 'Ecuador',
            '巴拉圭': 'Paraguay',
            '巴拿马': 'Panama',
            '库拉索': 'Curaçao',
            '海地': 'Haiti',
            '新西兰': 'New Zealand',
            '查看更多':'learn more',
            '▶': '▶',
            '✕': '✕',
            'desc_1': `The 2026 FIFA World Cup is not only a grand football feast but also a brand-new milestone in the global sports landscape. As the first-ever World Cup hosted by three countries and the first to expand to 48 teams, it breaks the traditional hosting model, allowing more rising stars and underdog teams to shine on the world stage.`,
            'desc_2': `The 2026 World Cup runs from June 12 to July 20 across three North American countries, with 16 host cities and 104 matches in total.The U.S. will host 73 games, Canada and Mexico 13 each.Mexico will face South Africa in the opening clash, repeating their 2010 opener.Several traditional powerhouses missed out, including Italy, Poland and Nigeria.Defending champion Argentina, France led by Mbappé, and Spain are the main title favorites.With more fixtures, stronger rivalries and tighter qualifying drama, the 2026 edition is set to be a landmark World Cup.`,
            'desc_messi': `Captain of the 2022 Qatar World Cup champions and the recognized third-generation king of football. He possesses world-class dribbling, vision, passing, and finishing skills, with flawless ball control and technique.`,
            'desc_ronaldo': `One of the greatest strikers and legends in football history, the all-time top scorer for his country, and a five-time Ballon d'Or winner. Famous for extreme self-discipline and ruthless scoring efficiency.`,
            'desc_mbappe': `The pinnacle of speed and explosive power in modern football, a key member of the 2018 World Cup-winning French team. He will lead France as the undisputed star in 2026, aiming to defend the title.`,
            'desc_haaland': `The best striker in world football today, built like a tank, with elite positioning, heading, and long-range shooting. As Norway's undisputed leader, he will carry the Nordic side into the 2026 World Cup.`,

            // ==================== data.html JS internal text translations ====================
            'radar_attack': 'Attack',
            'radar_defense': 'Defense',
            'radar_speed': 'Speed',
            'radar_stamina': 'Stamina',
            'radar_pass': 'Passing',
            'heatmap_shoot': 'Shooting',
            'heatmap_pass': 'Passing',
            'heatmap_speed': 'Speed',
            'heatmap_defend': 'Defense',
            'heatmap_stamina': 'Stamina',
            'trend_yaxis_title': 'Total Championships',
            'heatmap_rank_title': 'Player Ranking (by selected metric)',
            'matrix_current_team': 'Current Team',
            'matrix_opponent_team': 'Opponent Team',
            'sankey_tooltip': '{b}: {c} times',
            'continent_south_america': 'South America',
            'continent_europe': 'Europe',
            'continent_north_america': 'North America',
            'stars_5': '5 Stars',
            'stars_4': '4 Stars',
            'stars_3': '3 Stars',
            'stars_2': '2 Stars',
            'stars_1': '1 Star',
            'win_suffix': 'Wins',
            'player_mbappe': 'Mbappé',
            'player_haaland': 'Haaland',
            'player_messi': 'Messi',
            'player_kane': 'Kane',
            'player_vinicius': 'Vinícius',
            'player_ronaldo': 'Ronaldo',
            'player_yamal': 'Yamal',
            'player_lautaro': 'Lautaro',
            'player_saka': 'Saka',
            'player_rodrigo': 'Rodrygo',
            'player_griezmann': 'Griezmann',
                        'player_bellingham': 'Bellingham',
            'player_debruyne': 'De Bruyne',
            'player_modric': 'Modrić',
            'player_bruno': 'Bruno',
            'player_pedri': 'Pedri',
            'player_rodri': 'Rodri',
            'player_valverde': 'Valverde',
            'player_odegaard': 'Ødegaard',
            'player_wirtz': 'Wirtz',
            'player_depaul': 'De Paul',
            'player_kroos': 'Kroos',
            'player_courtois': 'Courtois',
            'player_alisson': 'Alisson',
            'player_neuer': 'Neuer',
            'player_martinez': 'Martínez',
            'player_pickford': 'Pickford',
            'player_maignan': 'Maignan',
            'player_costa': 'Costa',
            'player_raya': 'Raya',
            'player_bounou': 'Bounou',
            'player_donnarumma': 'Donnarumma',
            'player_oblak': 'Oblak',
            'player_ederson': 'Ederson',
            'player_jorginho': 'Jorginho',
            'player_kimmich': 'Kimmich',
            'player_rice': 'Rice',
            'player_tchouameni': 'Tchouaméni',
            'player_casemiro': 'Casemiro',
            'player_goretzka': 'Goretzka',
            // ==================== Team name English key mappings ====================
            'team_argentina': 'Argentina',
            'team_brazil': 'Brazil',
            'team_germany': 'Germany',
            'team_france': 'France',
            'team_italy': 'Italy',
            'team_england': 'England',
            'team_spain': 'Spain',
            'team_portugal': 'Portugal',
            'team_netherlands': 'Netherlands',
            'team_uruguay': 'Uruguay',
            'team_belgium': 'Belgium',
            'team_croatia': 'Croatia',
            'team_switzerland': 'Switzerland',
            'team_norway': 'Norway',
            'team_morocco': 'Morocco',
            'team_usa': 'USA',
            'team_canada': 'Canada',
            'team_mexico': 'Mexico',
            'team_austria': 'Austria',
            'team_scotland': 'Scotland',
            'team_bosnia': 'Bosnia',
            'team_sweden': 'Sweden',
            'team_turkey': 'Turkey',
            'team_czech': 'Czechia',
            'team_japan': 'Japan',
            'team_korea': 'South Korea',
            'team_iran': 'Iran',
            'team_australia': 'Australia',
            'team_saudi': 'Saudi Arabia',
            'team_qatar': 'Qatar',
            'team_uzbekistan': 'Uzbekistan',
            'team_jordan': 'Jordan',
            'team_iraq': 'Iraq',
            'team_senegal': 'Senegal',
            'team_ivory': 'Ivory Coast',
            'team_egypt': 'Egypt',
            'team_ghana': 'Ghana',
            'team_south_africa': 'South Africa',
            'team_tunisia': 'Tunisia',
            'team_algeria': 'Algeria',
            'team_cape_verde': 'Cape Verde',
            'team_dr_congo': 'DR Congo',
            'team_colombia': 'Colombia',
            'team_ecuador': 'Ecuador',
            'team_paraguay': 'Paraguay',
            'team_panama': 'Panama',
            'team_curacao': 'Curaçao',
            'team_haiti': 'Haiti',
            'team_new_zealand': 'New Zealand',

            // ==================== data.html page titles & modules ====================
            'page_header_title': '2026 World Cup Data Insights Center',
            'page_header_desc': 'Telling football stories with data — from dynasty changes to real-time strength battles',
            'page_tag': '📊 Deep Data Analysis',
            'page_title': 'Data Insights - 2026 FIFA World Cup',
            'back_home': 'Back to Home',

            // Module titles
            'module1_title': 'Hall of World Cup Champions',
            'module1_desc': '⭐ Stars represent total World Cup championships (5-star Brazil is the highest in history)',
            'module2_title': 'Champion Flow Map',
            'module2_subtitle': 'Continental distribution and championship count flow',
            'module3_title': 'Team Strength Multi-dimensional Comparison',
            'module3_subtitle': 'Five-dimensional radar: Attack, Defense, Speed, Stamina, Passing',
            'module4_title': 'Player Performance Heat Matrix',
            'module4_subtitle': 'TOP12 Star Players Five-dimensional Ability Visualization',
            'module5_title': 'Elite Clash Matrix',
            'module5_subtitle': 'Historical win rate heatmap of 8 traditional powerhouses',
            'module6_title': 'Championship Power Shift',
            'module6_subtitle': 'Evolution trend of championship counts by continent over time',

            // Control buttons & labels
            'team_a_label': 'Team A',
            'team_b_label': 'Team B',
            'vs_label': 'VS',
            'btn_shoot': '⚽ Shooting',
            'btn_pass': '🅰️ Passing',
            'btn_speed': '📈 Speed',
            'btn_defend': '🧤 Defense',
            'btn_stamina': '🏃 Stamina',

            // Team names with flags (dropdown options)
            'team_france_flag': 'France',
            'team_spain_flag': 'Spain',
            'team_england_flag': 'England',
            'team_argentina_flag': 'Argentina',
            'team_brazil_flag': 'Brazil',
            'team_germany_flag': 'Germany',
            'team_portugal_flag': 'Portugal',
            'team_netherlands_flag': 'Netherlands',

            // Notes
            'heatmap_note': 'Note: Numbers represent ability values, brighter colors indicate higher values',
            'matrix_note': 'Note: Numbers represent wins, brighter colors indicate more wins.',


            'page_info_title': '2026 World Cup · Tournament Guide',
            'page_info_subtitle': 'Culture | Format | Venues | China Viewing Guide',

            'section_culture': 'Tournament Culture',
            'badge_official_ball': 'Official Ball',
            'tag_2026_wc': '2026 World Cup',
            'ball_title': 'Match Ball · TRIONDA',
            'ball_chip': '500Hz Sensor Chip',
            'ball_material': 'Ultra-Light Tech Material',
            'ball_desc1': 'The 2026 World Cup official match ball: adidas TRIONDA (Triple Wave), featuring red/green/blue colors with maple leaf, jaguar pattern, and bald eagle elements. Built with lightweight tech materials and stable flight structure for speed and precision.',
            'ball_desc2': 'The color scheme blends modern aesthetics with football tradition, symbolizing unity, innovation, and breakthrough — an iconic piece for the expanded World Cup era.',

            'badge_three_countries': 'Three-Nation Collab',
            'tag_2025_release': '2025 Official Release',
            'mascot_title': 'Tournament Mascots',
            'mascot_usacamex': 'USA-Canada-Mexico',
            'mascot_3roles': '3 Characters',
            'mascot_desc1': 'Designed jointly by the three host nations, inspired by North American wildlife, full of energy, courage, and friendliness.',
            'mascot_desc2': 'Zayu: Mexican jaguar, green, forward (#9), symbolizing unity and joy. Maple: Canadian moose, red, goalkeeper (#1), representing maple leaves and creativity. Clutch: American bald eagle, blue, midfielder (#10), symbolizing fearlessness and leadership.',

            'section_stadiums': '16 Host Stadiums',
            'stadium_ny': 'New York MetLife Stadium',
            'stadium_ny_desc': 'Final venue! Capacity 82,000+',
            'stadium_la': 'Los Angeles SoFi Stadium',
            'stadium_la_desc': '$5.5B construction, 8 matches incl. one semi-final',
            'stadium_dallas': 'Dallas AT&T Stadium',
            'stadium_dallas_desc': 'Largest capacity! Fits 100K, football cathedral',
            'stadium_miami': 'Miami Hard Rock Stadium',
            'stadium_miami_desc': '7 matches, likely Argentina group stage venue',
            'stadium_atlanta': 'Atlanta Mercedes-Benz Stadium',
            'stadium_atlanta_desc': 'Retractable roof, rain or shine',
            'stadium_boston': 'Boston Gillette Stadium',
            'stadium_boston_desc': 'Six New England style venues',
            'stadium_philly': 'Philadelphia Lincoln Financial Field',
            'stadium_philly_desc': 'Classic American pro football stadium',
            'stadium_houston': 'Houston NRG Stadium',
            'stadium_houston_desc': 'One of the largest stadiums in Texas',
            'stadium_kc': 'Kansas City Arrowhead Stadium',
            'stadium_kc_desc': 'Most passionate American football atmosphere',
            'stadium_seattle': 'Seattle Lumen Field',
            'stadium_seattle_desc': 'Seaside stadium, excellent viewing experience',
            'stadium_sf': 'San Francisco Levi\'s Stadium',
            'stadium_sf_desc': 'Silicon Valley tech-modern stadium',
            'stadium_van': 'Vancouver BC Place',
            'stadium_van_desc': 'Iconic inflatable dome, Canadian landmark',
            'stadium_toronto': 'Toronto BMO Field',
            'stadium_toronto_desc': 'Canada\'s coolest home ground',
            'stadium_mexico_city': 'Mexico City Azteca',
            'stadium_mexico_city_desc': 'Football temple! Two World Cup finals hosted',
            'stadium_guadalajara': 'Guadalajara Akron Stadium',
            'stadium_guadalajara_desc': 'Modern professional stadium in Mexico',
            'stadium_monterrey': 'Monterrey BBVA Stadium',
            'stadium_monterrey_desc': 'Top-tier stadium in northern Mexico',

            'section_system': 'Format · Knockout Path',
            'system_scale_title': '⚽ Tournament Scale',
            'system_scale_desc': '48 teams divided into 16 groups of 3, single round-robin. Each match is 90 minutes, two halves.',
            'system_points_title': '📊 Points Rules',
            'system_points_desc': 'More goals wins; equal goals is a draw. Win=3pts, Draw=1pt, Loss=0pt. Top 2 from each group advance.',
            'system_team_title': '👥 Squad Composition',
            'system_team_desc': '26 players per squad, 11 on field. Positions: GK, DEF, MID, FWD. DEF defend, MID organize passes, FWD attack and shoot, GK keeps goal.',
            'system_penalty_title': '🥅 Penalty Rules',
            'system_penalty_desc': 'Fouls in the box = penalty kick from 12 yards, unopposed. Group stage draws end directly; knockout draws go to 30min extra time, then penalty shootout.',

            'flow_group': 'Group Stage',
            'flow_32': 'Round of 32',
            'flow_16': 'Round of 16',
            'flow_8': 'Quarter-Finals',
            'flow_semi': 'Semi-Finals',
            'flow_final': 'Final 🏆',

            'section_guide': '🇨🇳 China Fan Viewing Guide',
            'guide_time_title': 'Beijing Time · Key Matches',
            'guide_opener': 'Opener: ',
            'guide_opener_time': 'Jun 12, Thu 3:00 AM (BJT)',
            'guide_most': 'Most Matches: ',
            'guide_most_time': '3:00 AM / 9:00 AM / 11:30 AM',
            'guide_golden': 'Prime Time: ',
            'guide_golden_desc': 'Weekend morning matches are fan-friendly for China',
            'guide_note': '*Due to North American time difference, some key knockouts are scheduled in US afternoon, corresponding to early morning in Beijing.',

            'guide_watch_title': 'Where to Watch',
            'guide_watch_desc': 'Expected domestic broadcasters:',
            'platform_cctv': 'CCTV5',
            'platform_migu': 'Migu Video',
            'platform_douyin': 'Douyin',
            'platform_yangshipin': 'Yangshipin App',
            'guide_offline': 'Offline events: Official fan zones in Beijing, Shanghai, Guangzhou with big screens and football carnivals.',
            'guide_travel_title': 'Attending in person: ',
            'guide_travel_desc': 'Valid US/Canada visa required. Recommended to enter FIFA official ticket lottery.',

            'guide_dates_title': 'Key Dates',
            'date_opener': '• Jun 12 Opener USA vs Mexico',
            'date_group_end': '• Jun 25 Group stage ends',
            'date_quarter': '• Jul 4-8 Quarter-finals',
            'date_semi': '• Jul 15 Semi-finals',
            'date_final': '• Jul 20 Final (3:00 AM Beijing)',

            'btn_back_home': 'Back to Home',

            'page_schedule_title': '2026 World Cup · Full Schedule',
            'page_schedule_subtitle': '12 Groups 48 Teams Standings | 104 Matches | Knockout Path',
            'section_standings': 'Group Stage Standings',
            'standings_desc': 'Top 2 from each group + 8 best 3rd-place teams advance to Round of 32',
            'legend_qualified': 'Qualified',
            'legend_possible': 'Possible',
            'legend_eliminated': 'Eliminated',
            'th_rank': 'Rank',
            'th_team': 'Team',
            'th_played': 'Pld',
            'th_won': 'W',
            'th_drawn': 'D',
            'th_lost': 'L',
            'th_gd': 'GD',
            'th_points': 'Pts',
            'section_schedule': 'Full Match Schedule',
            'date_6_12': 'Jun 12',
            'date_6_13': 'Jun 13',
            'date_6_14': 'Jun 14',
            'date_6_15': 'Jun 15',
            'date_6_16': 'Jun 16',
            'date_6_17': 'Jun 17',
            'date_6_18': 'Jun 18',
            'date_6_19': 'Jun 19',
            'date_6_20': 'Jun 20',
            'date_6_21': 'Jun 21',
            'date_6_22': 'Jun 22',
            'date_6_23': 'Jun 23',
            'date_6_24': 'Jun 24',
            'date_6_25': 'Jun 25',
            'date_6_26': 'Jun 26',
            'date_6_27': 'Jun 27',
            'date_6_28': 'Jun 28',
            'date_6_29': 'Jun 29',
            'date_6_30': 'Jun 30',
            'date_7_1': 'Jul 1',
            'date_7_2': 'Jul 2',
            'date_7_3': 'Jul 3',
            'date_7_4': 'Jul 4',
            'date_7_5': 'Jul 5',
            'date_7_6': 'Jul 6',
            'date_7_7': 'Jul 7',
            'date_7_8': 'Jul 8',
            'date_7_9': 'Jul 9',
            'date_7_10': 'Jul 10',
            'date_7_11': 'Jul 11',
            'date_7_12': 'Jul 12',
            'date_7_13': 'Jul 13',
            'date_7_14': 'Jul 14',
            'date_7_15': 'Jul 15',
            'date_7_16': 'Jul 16',
            'date_7_17': 'Jul 17',
            'date_7_18': 'Jul 18',
            'date_7_19': 'Jul 19',
            'date_7_20': 'Jul 20',
            'group_a': 'Group A',
            'group_b': 'Group B',
            'group_c': 'Group C',
            'group_d': 'Group D',
            'group_e': 'Group E',
            'group_f': 'Group F',
            'group_g': 'Group G',
            'group_h': 'Group H',
            'group_i': 'Group I',
            'group_j': 'Group J',
            'group_k': 'Group K',
            'group_l': 'Group L',
            'stage_r32': 'Round of 32',
            'stage_r16': 'Round of 16',
            'stage_qf': 'Quarter-Finals',
            'stage_sf': 'Semi-Finals',
            'stage_3rd': 'Third Place',
            'stage_final': 'Final',
            'team_a1': 'Group A 1st',
            'team_a2': 'Group A 2nd',
            'team_b1': 'Group B 1st',
            'team_b2': 'Group B 2nd',
            'team_c1': 'Group C 1st',
            'team_c2': 'Group C 2nd',
            'team_d1': 'Group D 1st',
            'team_d2': 'Group D 2nd',
            'team_e1': 'Group E 1st',
            'team_e2': 'Group E 2nd',
            'team_f1': 'Group F 1st',
            'team_f2': 'Group F 2nd',
            'team_g1': 'Group G 1st',
            'team_g2': 'Group G 2nd',
            'team_h1': 'Group H 1st',
            'team_h2': 'Group H 2nd',
            'team_i1': 'Group I 1st',
            'team_i2': 'Group I 2nd',
            'team_j1': 'Group J 1st',
            'team_j2': 'Group J 2nd',
            'team_k1': 'Group K 1st',
            'team_k2': 'Group K 2nd',
            'team_l1': 'Group L 1st',
            'team_l2': 'Group L 2nd',
            'team_3rd': '3rd Place',
            'team_congo_dr': 'DR Congo',
            'team_uzbekistan': 'Uzbekistan',
            'winner_81': 'Match 81 Winner',
            'winner_82': 'Match 82 Winner',
            'winner_83': 'Match 83 Winner',
            'winner_84': 'Match 84 Winner',
            'winner_85': 'Match 85 Winner',
            'winner_86': 'Match 86 Winner',
            'winner_87': 'Match 87 Winner',
            'winner_88': 'Match 88 Winner',
            'winner_89': 'Match 89 Winner',
            'winner_90': 'Match 90 Winner',
            'winner_91': 'Match 91 Winner',
            'winner_92': 'Match 92 Winner',
            'winner_93': 'Match 93 Winner',
            'winner_94': 'Match 94 Winner',
            'winner_95': 'Match 95 Winner',
            'winner_96': 'Match 96 Winner',
            'winner_97': 'Match 97 Winner',
            'winner_98': 'Match 98 Winner',
            'winner_99': 'Match 99 Winner',
            'winner_100': 'Match 100 Winner',
            'winner_101': 'Match 101 Winner',
            'winner_102': 'Match 102 Winner',
            'winner_103': 'Match 103 Winner',
            'winner_104': 'Match 104 Winner',
            'winner_105': 'Match 105 Winner',
            'winner_106': 'Match 106 Winner',
            'winner_107': 'Match 107 Winner',
            'winner_108': 'Match 108 Winner',
            'loser_sf': 'SF Loser',
            'winner_sf': 'SF Winner',
            'venue_mexico_city': 'Mexico City',
            'venue_guadalajara': 'Guadalajara',
            'venue_toronto': 'Toronto',
            'venue_la': 'Los Angeles',
            'venue_ny': 'New York/New Jersey',
            'venue_boston': 'Boston',
            'venue_vancouver': 'Vancouver',
            'venue_sf': 'San Francisco Bay',
            'venue_houston': 'Houston',
            'venue_philly': 'Philadelphia',
            'venue_dallas': 'Dallas',
            'venue_monterrey': 'Monterrey',
            'venue_atlanta': 'Atlanta',
            'venue_seattle': 'Seattle',
            'venue_miami': 'Miami',
            'venue_kc': 'Kansas City',
            'round_thu_g1': 'Thu · Group Stage R1',
            'round_fri_g1': 'Fri · Group Stage R1',
            'round_sat_g1': 'Sat · Group Stage R1',
            'round_sun_g1': 'Sun · Group Stage R1',
            'round_mon_g1': 'Mon · Group Stage R1',
            'round_tue_g1': 'Tue · Group Stage R1',
            'round_wed_g1': 'Wed · Group Stage R1',
            'round_thu_g2': 'Thu · Group Stage R2',
            'round_fri_g2': 'Fri · Group Stage R2',
            'round_sat_g2': 'Sat · Group Stage R2',
            'round_sun_g2': 'Sun · Group Stage R2',
            'round_mon_g2': 'Mon · Group Stage R2',
            'round_tue_g2': 'Tue · Group Stage R2',
            'round_wed_g2': 'Wed · Group Stage R2',
            'round_wed_g3': 'Wed · Group Stage R3',
            'round_thu_g3': 'Thu · Group Stage R3',
            'round_fri_g3': 'Fri · Group Stage R3',
            'round_sat_g3': 'Sat · Group Stage R3',
            'round_sun_r32': 'Sun · Round of 32',
            'round_mon_r32': 'Mon · Round of 32',
            'round_tue_r32': 'Tue · Round of 32',
            'round_wed_r32': 'Wed · Round of 32',
            'round_thu_r32': 'Thu · Round of 32',
            'round_fri_r32': 'Fri · Round of 32',
            'round_sat_r16': 'Sat · Round of 16',
            'round_sun_r16': 'Sun · Round of 16',
            'round_mon_r16': 'Mon · Round of 16',
            'round_tue_r16': 'Tue · Round of 16',
            'round_thu_qf': 'Thu · Quarter-Finals',
            'round_fri_qf': 'Fri · Quarter-Finals',
            'round_sat_qf': 'Sat · Quarter-Finals',
            'round_tue_sf': 'Tue · Semi-Finals',
            'round_wed_sf': 'Wed · Semi-Finals',
            'round_sat_3rd': 'Sat · Third Place',
            'round_sun_final': 'Sun · Final',

            'page_teams_title': '2026 World Cup · 48 Qualified Teams',
            'page_teams_subtitle': 'Click team cards to view details',
            'section_teams_list': 'Qualified Teams',

  // 1 USA
  team_usa: "USA",
  desc_usa: "Host | Young & Dynamic",
  team_usa_title: "United States Men's National Team",
  team_usa_content: "### Team Overview\nAs one of the hosts of the 2026 World Cup, the USA has home advantage. The team focuses on young players, with abundant physical fitness, outstanding wing breakthrough ability, extremely impactful playing style, fast attack-defense transition, and is one of the strongest teams in CONCACAF.\n\n World Cup History\nQualified for the World Cup finals 10 times. The best result was the third place in the first World Cup in 1930. They successfully reached the round of 16 in the 2022 Qatar World Cup. In recent years, the youth training system has been improved with sufficient talent reserve.\n\n Core Squad\n- Christian Pulisic (Chelsea)\n- Weston McKennie (Juventus)\n- Giovanni Reyna (Borussia Dortmund)",

  // 2 Canada
  team_canada: "Canada",
  desc_canada: "Host | Rapidly Rising",
  team_canada_title: "Canada Men's National Team",
  team_canada_content: "### Team Overview\nCanada is the host of the 2026 World Cup. Its football strength has risen rapidly in recent years. It has become a top team in CONCACAF by relying on high pressing and fast counterattack tactics. The players have excellent physical fitness, strong wing impact, and excellent overall tactical discipline.\n\n World Cup History\nFirst qualified for the World Cup finals in 1986. It returned to the World Cup after 36 years in the 2022 Qatar World Cup. It will participate as the host in 2026, ushering in the golden period of the team's history.\n\n Core Squad\n- Alphonso Davies (Bayern Munich)\n- Jonathan David (Lille)\n- Liam Miller (Basel)",

  // 3 Mexico
  team_mexico: "Mexico",
  desc_mexico: "Host | CONCACAF Giant",
  team_mexico_title: "Mexico Men's National Team",
  team_mexico_content: "### Team Overview\nMexico is the absolute hegemon in CONCACAF and one of the hosts of the 2026 World Cup. The team has delicate skills, smooth coordination, good at ground passing and fast ball switching, rich competition experience, and is a regular World Cup participant.\n\n World Cup History\nQualified for the World Cup finals 17 times, successfully reached the round of 16 for 7 times, and the best result was the World Cup quarterfinals. It is the team with the best World Cup record in CONCACAF.\n\n Core Squad\n- Raúl Jiménez (Wolverhampton Wanderers)\n- Hirving Lozano (Napoli)\n- Rodríguez (Cruz Azul)",

  // 4 Germany
  team_germany: "Germany",
  desc_germany: "4-Time Champions | Iron Warriors",
  team_germany_title: "Germany Men's National Team",
  team_germany_content: "### Team Overview\nFour-time World Cup champion, a traditional iron strong team with extremely strong tactical integrity, balanced and perfect attack and defense system, players with both physical fitness and tactical literacy, good at high-intensity confrontation and efficient attack-defense transition, and is a traditional top giant in world football.\n\n World Cup History\nQualified for the World Cup finals 19 times, won 4 World Cup championships, ranking among the top in history, and is one of the most stable teams in World Cup history.\n\n Core Squad\n- Kai Havertz\n- Joshua Kimmich\n- Thomas Müller",

  // 5 France
  team_france: "France",
  desc_france: "Star-Studded | Defending Favorite",
  team_france_title: "France Men's National Team",
  team_france_content: "### Team Overview\n2018 World Cup champion and 2022 World Cup runner-up, with a world-class squad, unmatched strength in both offense and defense, outstanding player talent, rich tactical options, and is one of the biggest favorites to win the 2026 World Cup.\n\n World Cup History\nQualified for the World Cup finals 16 times, won 2 World Cup championships. In recent years, the squad depth is unparalleled in the world, and the youth training system has produced a large number of top stars.\n\n Core Squad\n- Kylian Mbappé (Real Madrid)\n- Antoine Griezmann (Atlético Madrid)\n- N'Golo Kanté (Al-Ittihad)",

  // 6 England
  team_england: "England",
  desc_england: "Young & Luxury | Led by Kane",
  team_england_title: "England Men's National Team",
  team_england_content: "### Team Overview\nLuxury young squad led by world-class striker Harry Kane. The team has sharp wing breakthroughs, sufficient midfield creativity, stable competition results, and playing style with both technology and impact. It is a traditional strong team in Europe.\n\n World Cup History\nQualified for the World Cup finals 15 times, won the championship in the 1966 home World Cup. In recent years, young players have grown rapidly, and the overall strength has steadily improved.\n\n Core Squad\n- Harry Kane\n- Phil Foden\n- Jude Bellingham",

  // 7 Spain
  team_spain: "Spain",
  desc_spain: "Tiki-Taka | Technical Football",
  team_spain_title: "Spain Men's National Team",
  team_spain_content: "### Team Overview\nRepresentative team of possession football, with delicate skills, smooth and tacit coordination, rapid growth of young squad, top-class midfield ball control ability, good at controlling the game rhythm through ball possession, and is the benchmark of European technical teams.\n\n World Cup History\nQualified for the World Cup finals 15 times, won the championship in the 2010 South Africa World Cup, creating the golden age of possession football. The youth training system continues to output talented players.\n\n Core Squad\n- Pedri\n- Gavi\n- Álvaro Morata",

  // 8 Portugal
  team_portugal: "Portugal",
  desc_portugal: "Led by Ronaldo | Powerful Attack",
  team_portugal_title: "Portugal Men's National Team",
  team_portugal_content: "### Team Overview\nLed by legendary star Cristiano Ronaldo, the team has extremely strong offensive firepower, obvious wing speed advantage, excellent midfield organization ability, high counterattack efficiency, and is a highly competitive team in European football.\n\n World Cup History\nQualified for the World Cup finals 7 times, the best result is the World Cup third place. The team has stable competition performance and rich talent reserve in the offensive end.\n\n Core Squad\n- Cristiano Ronaldo\n- Bruno Fernandes\n- Rafael Leão",

  // 9 Netherlands
  team_netherlands: "Netherlands",
  desc_netherlands: "Uncrowned Kings | Total Football",
  team_netherlands_title: "Netherlands Men's National Team",
  team_netherlands_content: "### Team Overview\nKnown as the Uncrowned Kings, the founder of total attack and total defense tactics, with extremely high game viewing value, comprehensive player skills, layered attack and defense, strong defensive line strength, and has repeatedly challenged for the World Cup championship.\n\n World Cup History\nQualified for the World Cup finals 11 times, won the World Cup runner-up 3 times, is the top strong team with the most tragic color in World Cup history, and its tactical style has influenced world football.\n\n Core Squad\n- Frenkie de Jong\n- Matthijs de Ligt\n- Virgil van Dijk",

  // 10 Belgium
  team_belgium: "Belgium",
  desc_belgium: "Red Devils | Golden Generation",
  team_belgium_title: "Belgium Men's National Team",
  team_belgium_content: "### Team Overview\nNicknamed the Red Devils, ushering in the golden generation of the team's history, top-class midfield creativity, excellent forward scoring ability, top strength in the goalkeeper position, balanced overall squad configuration, and is a top strong team in Europe.\n\n World Cup History\nQualified for the World Cup finals 14 times, the best result is the World Cup third place. In recent years, it has been ranked high in the world for a long time, with full competition competitiveness.\n\n Core Squad\n- Kevin De Bruyne\n- Romelu Lukaku\n- Thibaut Courtois",

  // 11 Croatia
  team_croatia: "Croatia",
  desc_croatia: "Strong Midfield | Iron Toughness",
  team_croatia_title: "Croatia Men's National Team",
  team_croatia_content: "### Team Overview\n2018 World Cup runner-up, with strong midfield strength, delicate player skills and extreme toughness, excellent competition pressure resistance, good at tough games, and is a representative strong team in Eastern European football.\n\n World Cup History\nQualified for the World Cup finals 6 times, the best result is the World Cup runner-up. The team is supported by the midfield core group with full tactical execution.\n\n Core Squad\n- Luka Modrić\n- Marcelo Brozović\n- Ivan Perišić",

  // 12 Switzerland
  team_switzerland: "Switzerland",
  desc_switzerland: "European Force | Solid Defense",
  team_switzerland_title: "Switzerland Men's National Team",
  team_switzerland_content: "### Team Overview\nA strong European team with tough and tight defense, extremely stable performance, high player tactical literacy, simple and efficient counterattack, and is a defensive strong team not to be underestimated in the World Cup.\n\n World Cup History\nQualified for the World Cup finals 12 times, many times drew or even defeated top giants in the World Cup, famous for iron defense.\n\n Core Squad\n- Yann Sommer\n- Granit Xhaka",

  // 13 Austria
  team_austria: "Austria",
  desc_austria: "Steadily Rising | European Mid-Tier",
  team_austria_title: "Austria Men's National Team",
  team_austria_content: "### Team Overview\nA mid-tier European team that has risen steadily in recent years. Many players in the team play in Europe's top five leagues, with good individual abilities, tough playing style, and certain impact in the offensive end.\n\n### World Cup History\nQualified for the World Cup finals 2 times. The team is in the stage of transition between old and new players, and its overall strength is continuously improving.\n\n### Core Squad\n- Marko Arnautović\n- Marcel Sabitzer",

  // 14 Scotland
  team_scotland: "Scotland",
  desc_scotland: "Nordic Style | Tough Tackling",
  team_scotland_title: "Scotland Men's National Team",
  team_scotland_content: "### Team Overview\nThe playing style tends to be Nordic, with tough players, active tackling, strong midfield confrontation ability, practical and direct tactical style, rich competition experience, and is a characteristic team in British football.\n\n### World Cup History\nQualified for the World Cup finals many times. The team has a tenacious style, good at physical confrontation, and has certain competitiveness in the European arena.\n\n### Core Squad\n- Andrew Robertson\n- Scott McTominay",

  // 15 Norway
  team_norway: "Norway",
  desc_norway: "Nordic Force | Target Man Tactics",
  team_norway_title: "Norway Men's National Team",
  team_norway_content: "### Team Overview\nA traditional Nordic strong team focusing on the center forward tactic, with extremely strong frontcourt impact, top-class player physical fitness, direct and efficient cooperation between wings and center, and huge threat in the offensive end.\n\n### World Cup History\nQualified for the World Cup finals many times. The team has world-class stars and is one of the teams with the strongest offensive firepower in Nordic football.\n\n### Core Squad\n- Erling Haaland\n- Martin Ødegaard",

  // 16 Bosnia
  team_bosnia: "Bosnia and Herzegovina",
  desc_bosnia: "Technical Style | Creative Midfield",
  team_bosnia_title: "Bosnia and Herzegovina Men's National Team",
  team_bosnia_content: "### Team Overview\nA typical technical team with extremely strong midfield creativity, delicate player foot skills, smooth passing cooperation, excellent offensive organization ability, and is a representative of Eastern European technical teams.\n\n### World Cup History\nQualified for the World Cup finals many times, relying on midfield core players to drive the overall offense, with a highly ornamental playing style.\n\n### Core Squad\n- Miralem Pjanić\n- Edin Džeko",

  // 17 Sweden
  team_sweden: "Sweden",
  desc_sweden: "Nordic Power | Strong Physique",
  team_sweden_title: "Sweden Men's National Team",
  team_sweden_content: "### Team Overview\nA traditional Nordic strong team with strong players, focusing on defensive counterattack tactics, strict tactical discipline, tight defensive system, simple and deadly counterattack, and is a typical Nordic practical strong team.\n\n### World Cup History\nQualified for the World Cup finals 12 times, the best result is the World Cup runner-up. The team has stable competition performance and good at high-intensity confrontation games.\n\n### Core Squad\n- Alexander Isak\n- Dejan Kulusevski",

  // 18 Turkey
  team_turkey: "Turkey",
  desc_turkey: "Tough Style | Dark Horse Potential",
  team_turkey_title: "Turkey Men's National Team",
  team_turkey_content: "### Team Overview\nTough and tough playing style, full of dark horse potential, excellent youth training system, rapid growth of young players, extremely strong aggression in both offense and defense, and often creates surprises in major competitions.\n\n### World Cup History\nQualified for the World Cup finals 2 times, the best result is the World Cup third place, and is one of the teams with the most distinctive style in European football.\n\n### Core Squad\n- Hakan Calhanoglu\n- Yıldırım",

  // 19 Czech
  team_czech: "Czech Republic",
  desc_czech: "Eastern Europe Technical | Smooth Play",
  team_czech_title: "Czech Republic Men's National Team",
  team_czech_content: "### Team Overview\nRepresentative team of Eastern European technical football, smooth passing cooperation, excellent midfield organization ability, rich competition experience, strong player tactical execution, and is a traditional strong team in Eastern European football.\n\n### World Cup History\nQualified for the World Cup finals many times. The team has a mature and steady playing style, balanced offense and defense, and has good competitiveness.\n\n### Core Squad\n- Tomáš Souček\n- Patrik Schick",

  // 20 Japan
  team_japan: "Japan",
  desc_japan: "Asian Top | Delicate Skills",
  team_japan_title: "Japan Men's National Team",
  team_japan_content: "### Team Overview\nTop strong team in Asian football, delicate and smooth skills, outstanding possession ability, many overseas players in the team, tactical concept in line with Europe, fast attack-defense transition, and is the benchmark team of Asian football.\n\n### World Cup History\nQualified for the World Cup finals 7 times, the best result is the World Cup round of 16, and has defeated many strong European and South American teams in the World Cup.\n\n### Core Squad\n- Takefusa Kubo\n- Kaoru Mitoma\n- Takehiro Tomiyasu",

  // 21 Korea
  team_korea: "Korea Republic",
  desc_korea: "Led by Son | Fast Counterattacks",
  team_korea_title: "Korea Republic Men's National Team",
  team_korea_content: "### Team Overview\nLed by Asian superstar Son Heung-min, the team has extremely fast overall speed, sharp counterattack, active player running, abundant physical fitness, and is the most threatening team in Asian football with counterattack playing style.\n\n### World Cup History\nQualified for the World Cup finals 11 times, the best result is the World Cup semi-finals, and is one of the teams with the best World Cup record in Asia.\n\n### Core Squad\n- Son Heung-min\n- Kim Min-jae\n- Lee Kang-in",

  // 22 Iran
  team_iran: "Iran",
  desc_iran: "Asian Force | Solid Defense",
  team_iran_title: "Iran Men's National Team",
  team_iran_content: "### Team Overview\nTop strong team in Asia, strong players, tight and solid defensive system, excellent confrontation ability, good at looking for counterattack opportunities based on defense, and is one of the strongest defensive teams in Asian football.\n\n### World Cup History\nQualified for the World Cup finals 6 times. The team has a tough style and often causes great trouble to giant teams in major competitions.\n\n### Core Squad\n- Sardar Azmoun\n- Mehdi Taremi",

  // 23 Australia
  team_australia: "Australia",
  desc_australia: "Strong Physique | Direct & Efficient",
  team_australia_title: "Australia Men's National Team",
  team_australia_content: "### Team Overview\nStrong players, direct and efficient playing style, good at aerial ball competition and wing impact, practical tactical style, obvious physical advantage, and is a strong team in Oceania and Asian football.\n\n### World Cup History\nQualified for the World Cup finals 6 times. The team has a tenacious style and adapts to high-intensity confrontation games.\n\n### Core Squad\n- Ajdin Hrustic\n- Martin Boyle",

  // 24 Saudi
  team_saudi: "Saudi Arabia",
  desc_saudi: "West Asia Power | Smooth Skills",
  team_saudi_title: "Saudi Arabia Men's National Team",
  team_saudi_content: "### Team Overview\nTraditional strong team in West Asia, delicate and smooth skills, flexible player feet, tacit team cooperation, excellent ball control ability, and is a representative team of West Asian technical football.\n\n### World Cup History\nQualified for the World Cup finals 6 times. The team has a highly ornamental playing style and a perfect youth training system.\n\n### Core Squad\n- Salem Al-Dawsari\n- Firas Al-Buraikan",

  // 25 Qatar
  team_qatar: "Qatar",
  desc_qatar: "West Asia Newcomer | Youth-Focused",
  team_qatar_title: "Qatar Men's National Team",
  team_qatar_content: "### Team Overview\nHost of the 2022 World Cup, building the team through the youth training system, technical style tends to South American football, mature ball control and short pass cooperation, and is an emerging strong team in West Asian football.\n\n### World Cup History\nQualified for the World Cup finals once, rapidly improving strength through the combination of youth training and naturalization.\n\n### Core Squad\n- Akram Afif\n- Almoez Ali",

  // 26 Uzbekistan
  team_uzbekistan: "Uzbekistan",
  desc_uzbekistan: "Central Asia Power | Strong Physique",
  team_uzbekistan_title: "Uzbekistan Men's National Team",
  team_uzbekistan_content: "### Team Overview\nTop strong team in Central Asia, strong players, strong midfield confrontation ability, rapid progress in recent years, increasingly mature tactical style, and is the leading team in Central Asian football.\n\n### World Cup History\nQualified for the World Cup finals many times. The team has an overall tough style, and both offense and defense are steadily improving.\n\n### Core Squad\n- Ahmedov\n- Shukurov",

  // 27 Jordan
  team_jordan: "Jordan",
  desc_jordan: "West Asia Force | Solid Defense",
  team_jordan_title: "Jordan Men's National Team",
  team_jordan_content: "### Team Overview\nStrong team in West Asia, solid defense, practical tactical style, strong player execution ability, good at looking for offensive opportunities based on defense, and is a team not to be ignored in West Asian football.\n\n### World Cup History\nQualified for the World Cup finals many times. The team has a tenacious style and stable competition performance.\n\n### Core Squad\n- Hamdoune\n- Fadil",

  // 28 Iraq
  team_iraq: "Iraq",
  desc_iraq: "Asian Veteran | Strong Spirit",
  team_iraq_title: "Iraq Men's National Team",
  team_iraq_content: "### Team Overview\nTraditional strong team in Asia, high morale of players, extremely strong team cohesion, once won the Asian Cup championship, tough playing style, full of spiritual attributes in major competitions.\n\n### World Cup History\nQualified for the World Cup finals 2 times. The team is famous for its tenacious morale and fighting spirit.\n\n### Core Squad\n- Ali\n- Hussein",

  // 29 Morocco
  team_morocco: "Morocco",
  desc_morocco: "African Top | Defensive Wall",
  team_morocco_title: "Morocco Men's National Team",
  team_morocco_content: "### Team Overview\n2022 World Cup semi-finalist, top strong team in African football, known as the defensive iron army, tight defensive system, fast and deadly counterattack, many overseas players, strength in line with European teams.\n\n### World Cup History\nQualified for the World Cup finals 6 times, the best result is the World Cup semi-finals, and is the benchmark team of African football in the World Cup.\n\n### Core Squad\n- Hakim Ziyech\n- Achraf Hakimi",

  // 30 Senegal
  team_senegal: "Senegal",
  desc_senegal: "African Champion | Led by Mané",
  team_senegal_title: "Senegal Men's National Team",
  team_senegal_content: "### Team Overview\nAfrican Cup champion, led by Sadio Mané, strong players, both speed and strength, extremely impactful in both offense and defense, and is one of the strongest teams in African football.\n\n### World Cup History\nQualified for the World Cup finals 3 times, the best result is the World Cup quarterfinals. The team has outstanding talent and full competition competitiveness.\n\n### Core Squad\n- Sadio Mané\n- Kalidou Koulibaly",

  // 31 Ivory Coast
  team_ivory: "Ivory Coast",
  desc_ivory: "African Power | Many Stars",
  team_ivory_title: "Ivory Coast Men's National Team",
  team_ivory_content: "### Team Overview\nTraditional strong team in Africa, many stars in the team, top-class player physical talent, excellent explosive power and confrontation ability, abundant talents in the offensive end, and is a giant team in African football.\n\n### World Cup History\nQualified for the World Cup finals many times, relying on star individual abilities and team cooperation to gain a foothold in the World Cup.\n\n### Core Squad\n- Wilfried Zaha\n- Franck Kessié",

  // 32 Egypt
  team_egypt: "Egypt",
  desc_egypt: "African Traditional | Led by Salah",
  team_egypt_title: "Egypt Men's National Team",
  team_egypt_content: "### Team Overview\nTraditional top strong team in Africa, led by Mohamed Salah, full of creativity in the offensive end, delicate player skills, and is a representative team of North African football.\n\n### World Cup History\nQualified for the World Cup finals 3 times. The team has rich competition experience and outstanding offensive core abilities.\n\n### Core Squad\n- Mohamed Salah",

  // 33 Ghana
  team_ghana: "Ghana",
  desc_ghana: "African Young Team | Outstanding Talent",
  team_ghana_title: "Ghana Men's National Team",
  team_ghana_content: "### Team Overview\nKnown as the African Youth Army, outstanding player talent, strong running ability, open offensive playing style, full of impact, and is the most dynamic team in African football.\n\n### World Cup History\nQualified for the World Cup finals 4 times, the best result is the World Cup quarterfinals, and sufficient young player reserve.\n\n### Core Squad\n- Thomas Partey\n- Mohammed Kudus",

  // 34 South Africa
  team_south_africa: "South Africa",
  desc_south_africa: "African Traditional | Host Heritage",
  team_south_africa_title: "South Africa Men's National Team",
  team_south_africa_content: "### Team Overview\nTraditional strong team in Africa, host of the 2010 World Cup, with profound football heritage, good player tactical literacy, practical playing style, and is a representative team in African football.\n\n### World Cup History\nQualified for the World Cup finals many times, accumulating rich competition experience by virtue of the host status.\n\n### Core Squad\n- Tavares\n- Mphela",

  // 35 Tunisia
  team_tunisia: "Tunisia",
  desc_tunisia: "African Regular | European Style",
  team_tunisia_title: "Tunisia Men's National Team",
  team_tunisia_content: "### Team Overview\nRegular World Cup participant, playing style in line with European football, solid defense, strict tactical discipline, rich overseas experience of players, and is a strong team in North African football.\n\n### World Cup History\nQualified for the World Cup finals 6 times. The team has stable performance and good at defensive counterattack tactics.\n\n### Core Squad\n- Ellyes Skhiri\n- Wahbi Khazri",

  // 36 Algeria
  team_algeria: "Algeria",
  desc_algeria: "Smooth Skills | Creative Midfield",
  team_algeria_title: "Algeria Men's National Team",
  team_algeria_content: "### Team Overview\nSmooth player skills, extremely strong midfield creativity, delicate passing cooperation, excellent offensive organization ability, and is a representative of North African technical football.\n\n### World Cup History\nQualified for the World Cup finals 4 times. The team has many players from the top five leagues, and its strength cannot be underestimated.\n\n### Core Squad\n- Riyad Mahrez\n- Ismaël Bennacer",

  // 37 Cape Verde
  team_cape_verde: "Cape Verde",
  desc_cape_verde: "African Newcomer | Fast Counter",
  team_cape_verde_title: "Cape Verde Men's National Team",
  team_cape_verde_content: "### Team Overview\nEmerging strong team in Africa, delicate skills, fast and efficient counterattack, strong player mobility, and is a rising star team in African football.\n\n### World Cup History\nQualified for the World Cup finals for the first time in team history, ushering in the golden period of football development.\n\n### Core Squad\n- Gelson\n- Mendes",

  // 38 DR Congo
  team_dr_congo: "DR Congo",
  desc_dr_congo: "African Power | Physical Talent",
  team_dr_congo_title: "DR Congo Men's National Team",
  team_dr_congo_content: "### Team Overview\nStrong team in Africa, excellent player physical talent, top-class explosive power and confrontation ability, sharp offense, strong wing impact, and is the leading team in Central African football.\n\n### World Cup History\nQualified for the World Cup finals many times. The team gains a foothold on the field by virtue of physical advantages and sharp offense.\n\n### Core Squad\n- Bong\n- Mbemba",

  // 39 Argentina
  team_argentina: "Argentina",
  desc_argentina: "Defending Champion | Led by Messi",
  team_argentina_title: "Argentina Men's National Team",
  team_argentina_content: "### Team Overview\nChampion of the 2022 Qatar World Cup, led by legendary star Lionel Messi, balanced offense and defense, extremely strong team cohesion, tacit tactical cooperation, playing style with both technology and toughness, and is a top giant in world football.\n\n### World Cup History\nQualified for the World Cup finals 18 times, won 3 World Cup championships (1978/1986/2022), and is one of the most successful teams in World Cup history.\n\n### Core Squad\n- Lionel Messi (Inter Miami)\n- Lautaro Martínez (Inter Milan)\n- Rodrigo De Paul (Atlético Madrid)",

  // 40 Brazil
  team_brazil: "Brazil",
  desc_brazil: "5-Star Brazil | Gorgeous Skills",
  team_brazil_title: "Brazil Men's National Team",
  team_brazil_content: "### Team Overview\nFive-star Brazil, the team with the most World Cup championships in history, gorgeous technical style, top-class offensive talent, abundant talents in the front and midfield, perfect attack and defense system, and the goal of the 2026 World Cup is to win the sixth championship trophy.\n\n### World Cup History\nQualified for the World Cup finals 22 times, won 5 World Cup championships, is the only team that has never missed the World Cup, and no one can match its football heritage.\n\n### Core Squad\n- Vinícius Júnior (Real Madrid)\n- Rodrygo (Real Madrid)\n- Casemiro (Manchester United)",

  // 41 Uruguay
  team_uruguay: "Uruguay",
  desc_uruguay: "2-Time Champions | Tough Style",
  team_uruguay_title: "Uruguay Men's National Team",
  team_uruguay_content: "### Team Overview\nTwo-time World Cup champion, tough and strong playing style, high morale of players, extremely tough in both offense and defense, sufficient talent reserve in forward and midfield, and is a traditional giant in South American football.\n\n### World Cup History\nQualified for the World Cup finals 13 times, won 2 World Cup championships, is one of the founders of South American football, with profound competition heritage.\n\n### Core Squad\n- Luis Suárez\n- Federico Valverde\n- Darwin Núñez",

  // 42 Colombia
  team_colombia: "Colombia",
  desc_colombia: "Sharp Attack | Fast Wingers",
  team_colombia_title: "Colombia Men's National Team",
  team_colombia_content: "### Team Overview\nStrong team in South America, sharp offense, many fast wingers, extremely fast counterattack speed, excellent player skills, and is one of the most threatening teams in South American football.\n\n### World Cup History\nQualified for the World Cup finals 6 times, the best result is the World Cup quarterfinals. The team has a highly ornamental playing style and distinctive star characteristics.\n\n### Core Squad\n- Luis Díaz\n- James Rodríguez",

  // 43 Ecuador
  team_ecuador: "Ecuador",
  desc_ecuador: "Young & Dynamic | High Stamina",
  team_ecuador_title: "Ecuador Men's National Team",
  team_ecuador_content: "### Team Overview\nThe team is mainly composed of young players, full of vitality and physical fitness, a new force in South American football, tough playing style, strong midfield defense, and steady improvement of overall strength.\n\n### World Cup History\nQualified for the World Cup finals 4 times. Young players grow rapidly and are a potential team in South American football.\n\n### Core Squad\n- Moisés Caicedo\n- Piero Hincapié",

  // 44 Paraguay
  team_paraguay: "Paraguay",
  desc_paraguay: "Solid Defense | Practical Tactics",
  team_paraguay_title: "Paraguay Men's National Team",
  team_paraguay_content: "### Team Overview\nKnown as the South American Iron Army, solid and tight defense, practical and efficient tactics, focusing on defensive counterattack, extremely strong player execution ability, and is one of the best defensive teams in South American football.\n\n### World Cup History\nQualified for the World Cup finals 4 times. The team gains a foothold in the World Cup by virtue of iron defense and is good at drawing strong opponents.\n\n### Core Squad\n- Miguel Almirón\n- Juan Pablo Villarroel",

  // 45 Panama
  team_panama: "Panama",
  desc_panama: "CONCACAF Newcomer | Young Energy",
  team_panama_title: "Panama Men's National Team",
  team_panama_content: "### Team Overview\nEmerging force in CONCACAF, full of young vitality, active player tackling, practical tactical style, and a rapidly rising emerging team in CONCACAF.\n\n### World Cup History\nQualified for the World Cup finals once, and the team's World Cup experience is gradually accumulating.\n\n### Core Squad\n- Eric\n- Barcenas",

  // 46 Curaçao
  team_curacao: "Curaçao",
  desc_curacao: "CONCACAF | Delicate Skills",
  team_curacao_title: "Curaçao Men's National Team",
  team_curacao_content: "### Team Overview\nCharacteristic team in CONCACAF, delicate skills, fast and flexible counterattack, excellent individual player skills, and a representative of technical flow in CONCACAF.\n\n### World Cup History\nQualified for the World Cup finals for the first time in team history, ushering in a breakthrough period of football development.\n\n### Core Squad\n- Leandro\n- Juninho",

  // 47 Haiti
  team_haiti: "Haiti",
  desc_haiti: "CONCACAF | Strong Physique",
  team_haiti_title: "Haiti Men's National Team",
  team_haiti_content: "### Team Overview\nStrong team in CONCACAF, strong players, active tackling, strong running ability, tough playing style, and a tenacious team in CONCACAF.\n\n### World Cup History\nQualified for the World Cup finals many times. The team has a tenacious style and certain competitiveness.\n\n### Core Squad\n- Lavorné\n- Pierre",

  // 48 New Zealand
  team_new_zealand: "New Zealand",
  desc_new_zealand: "Oceania Giant | Strong Physique",
  team_new_zealand_title: "New Zealand Men's National Team",
  team_new_zealand_content: "### Team Overview\nAbsolute hegemon in Oceania football, strong players, focusing on high-ball tactics, obvious aerial advantage, direct and efficient playing style, and is the leading team in Oceania football.\n\n### World Cup History\nQualified for the World Cup finals 2 times, gaining a foothold in the World Cup by virtue of physical advantages and practical playing style.\n\n### Core Squad\n- Chris Wood\n- Smits"
        }
    },

    init() {
        this.injectFabStyle();
        this.createFabButton();
        this.bindFabEvents();

        // 页面加载时自动应用当前会话保存的语言（默认中文）
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.translatePage());
        } else {
            this.translatePage();
        }

        console.log("[i18n] 初始化完成 — 当前语言：" + this.currentLang);
    },

    injectFabStyle() {
        // 避免重复注入
        if (document.getElementById('i18n-fab-style')) return;

        const style = document.createElement('style');
        style.id = 'i18n-fab-style';
        style.textContent = `
            .lang-switch-fab {
                position: fixed;
                bottom: 28px;
                right: 28px;
                z-index: 99999;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 12px;
                font-family: 'Segoe UI', sans-serif;
            }
            .lang-main-btn {
                width: 56px;
                height: 56px;
                border-radius: 50%;
                background: linear-gradient(135deg, #acff07, #8bc34a);
                border: 2px solid rgba(255,255,255,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.25s ease;
                color: #fff;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            }
            .lang-main-btn i {
                font-size: 24px;
                color: #fff;
            }
            .lang-main-btn:hover {
                transform: scale(1.08);
                box-shadow: 0 6px 20px rgba(0,0,0,0.4);
            }
            .lang-options {
                display: none;
                flex-direction: column;
                gap: 8px;
                margin-bottom: 4px;
                animation: slideUp 0.2s ease;
            }
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .lang-option {
                background: rgba(255,255,255,0.95);
                border: none;
                border-radius: 48px;
                padding: 10px 20px;
                font-weight: 600;
                font-size: 14px;
                color: #333;
                text-align: center;
                cursor: pointer;
                transition: 0.2s;
                min-width: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.15);
            }
            .lang-option:hover {
                background: #acff07;
                color: #111;
                transform: scale(1.05);
            }
            .lang-option.active {
                background: #acff07;
                color: #111;
            }
            @media (max-width: 550px) {
                .lang-switch-fab { bottom: 18px; right: 18px; }
                .lang-main-btn { width: 50px; height: 50px; }
                .lang-main-btn i { font-size: 20px; }
            }
        `;
        document.head.appendChild(style);
    },

    createFabButton() {
        if (document.getElementById('lang-switch-fab')) return;

        const fab = document.createElement('div');
        fab.id = 'lang-switch-fab';
        fab.className = 'lang-switch-fab';
        fab.innerHTML = `
            <div class="lang-options" id="langOptions">
                <button class="lang-option ${this.currentLang === 'zh' ? 'active' : ''}" data-lang="zh">
                    <i class="bi bi-chat-text-fill"></i>
                    <span>中文</span>
                </button>
                <button class="lang-option ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">
                    <i class="bi bi-globe2"></i>
                    <span>English</span>
                </button>
            </div>
            <button class="lang-main-btn" id="langFabBtn" title="切换语言">
                <i class="bi bi-translate"></i>
            </button>
        `;
        document.body.appendChild(fab);
    },

    bindFabEvents() {
        const self = this;
        const fabBtn = document.getElementById('langFabBtn');
        const langOptionsDiv = document.getElementById('langOptions');

        if (!fabBtn || !langOptionsDiv) {
            console.error('[i18n] FAB按钮未找到');
            return;
        }

        let isOpen = false;

        // 点击主按钮展开/关闭
        fabBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            isOpen = !isOpen;
            langOptionsDiv.style.display = isOpen ? 'flex' : 'none';
            console.log('[i18n] 菜单状态:', isOpen ? '打开' : '关闭');
        });

        // 点击页面其他地方关闭
        document.addEventListener('click', function () {
            if (isOpen) {
                langOptionsDiv.style.display = 'none';
                isOpen = false;
            }
        });

        // 点击语言选项切换
        document.querySelectorAll('.lang-option').forEach(function (opt) {
            opt.addEventListener('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                const lang = this.dataset.lang;
                console.log('[i18n] 切换到:', lang);
                self.switchLang(lang);

                // 更新激活状态
                document.querySelectorAll('.lang-option').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                langOptionsDiv.style.display = 'none';
                isOpen = false;
            });
        });
    },

    /**
     * 获取元素原始文本（如果是首次翻译，则缓存原始文本）
     */
    _cacheOriginalText(el) {
        if (!el.dataset.original) {
            // 保存原始内容（innerHTML以保留子元素结构）
            el.dataset.original = el.innerHTML;
        }
    },

    /**
     * 翻译单个元素
     * @param {HTMLElement} el - 需要翻译的元素
     * @param {Object} texts - 语言包对象
     * @returns {boolean} - 是否成功翻译
     */
    _translateElement(el, texts) {
        // 获取翻译key
        let key = el.dataset.i18n;
        
        // 如果没有 data-i18n 属性，尝试使用元素内的英文文本（适用于 class="i18n"）
        if (!key) {
            // 只对纯文本节点获取其内容，如果包含子元素则不作处理
            if (el.children.length > 0) {
                return false; // 有子元素且无 data-i18n，跳过避免破坏结构
            }
            key = el.textContent.trim();
        }

        if (!key) return false;

        // 查找翻译
        let translation = texts[key];
        if (!translation) return false;

        // 缓存原始文本
        this._cacheOriginalText(el);

        // 执行翻译，根据是否有子元素选择更新方式
        if (el.children.length === 0) {
            // 纯文本节点，直接替换
            el.textContent = translation;
        } else {
            // 有子节点，尝试替换文本节点
            let textNode = null;
            // 遍历子节点找到第一个只包含文本的节点
            for (const node of el.childNodes) {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
                    textNode = node;
                    break;
                }
            }
            if (textNode) {
                textNode.textContent = translation;
            } else {
                // 兜底：直接替换整个内容
                el.innerHTML = translation;
            }
        }
        return true;
    },

    translatePage() {
        const texts = this.translations[this.currentLang];
        if (!texts) {
            console.error('[i18n] 语言包不存在:', this.currentLang);
            return;
        }

        let translatedCount = 0;
        // 优先处理有 data-i18n 属性的元素，再处理 class="i18n" 的元素
        const elements = document.querySelectorAll('[data-i18n]');
        const i18nClassElements = document.querySelectorAll('.i18n:not([data-i18n])');

        // 合并后去重
        const allElements = [...elements, ...i18nClassElements];

        allElements.forEach((el) => {
            if (this._translateElement(el, texts)) {
                translatedCount++;
            }
        });

        console.log('[i18n] 翻译完成，共翻译 ' + translatedCount + ' 个元素');
    },

    switchLang(lang) {
        if (!this.translations[lang]) {
            console.error('[i18n] 不支持的语言:', lang);
            return;
        }

        // 先恢复所有带有原始文本缓存的元素
        const elementsWithOriginal = document.querySelectorAll('[data-original]');
        elementsWithOriginal.forEach((el) => {
            el.innerHTML = el.dataset.original;
        });

        this.currentLang = lang;
        
        // ★ 关键：保存到 sessionStorage，同一会话内所有页面共享
        sessionStorage.setItem('worldcup_lang', lang);
        
        this.translatePage();

        // 派发语言切换事件，通知图表重新渲染
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));

        console.log('[i18n] 已切换到:', lang);
    },

    /**
     * 获取翻译文本（供JS内部调用）
     * @param {string} key - 翻译键
     * @returns {string} - 翻译后的文本
     */
    getText(key) {
        const texts = this.translations[this.currentLang];
        if (!texts) return key;
        return texts[key] || key;
    },

    /**
     * 批量获取翻译文本
     * @param {Array<string>} keys - 翻译键数组
     * @returns {Array<string>} - 翻译后的文本数组
     */
    getTexts(keys) {
        return keys.map(k => this.getText(k));
    }
};

// 自动初始化
i18n.init();