-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-05-16 17:11:48
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `mi_account`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL COMMENT '商品id',
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '商品名称',
  `showtip` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '商品简介',
  `showprice` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '商品展示价格',
  `showpicture` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '商品展示小图',
  `picture` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '商品大图',
  `detail` text COLLATE utf8_unicode_ci NOT NULL COMMENT '商品描述',
  `edition` text COLLATE utf8_unicode_ci NOT NULL COMMENT '商品版本',
  `color` text COLLATE utf8_unicode_ci NOT NULL COMMENT '商品颜色',
  `subs` text COLLATE utf8_unicode_ci NOT NULL COMMENT '商品套装',
  `price` float NOT NULL COMMENT '商品价格'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `showtip`, `showprice`, `showpicture`, `picture`, `detail`, `edition`, `color`, `subs`, `price`) VALUES
(1, '小米MIX FOLD', '折叠大屏 | 自研芯片', '9999元起', '{ \"data-original\": \"img/mimixfold.png\", \"alt\": \"small\",\"class\":\"lazy\" }', '{ \"data-original\": \"img/mimixfold-big.jpg\", \"alt\": \"big\",\"class\":\"lazy\" }', '<span style=\"color:#ff4a00 \">「陶瓷特别版限量开售中」</span>8.01\'\'折叠大屏｜澎湃C1自研专业影像芯片｜液态镜头｜1亿像素｜骁龙888｜67W快充｜5020mAh超大电池｜LPDDR5满血版｜WiFi6（增强版）｜哈曼卡顿立体声四扬声器', '[<li class=\"bcg\">12GB+512GB</li>,\r\n<li class=\"bcg\">12GB+256GB</li>,\r\n<li class=\"bcg\">16GB+512GB</li>]', '[<li class=\"bcg\">陶瓷特别版</li>]', '[<li class=\"bcg\">标准版</li>,\r\n<li class=\"bcg\">套装版（赠充电器）</li>]', 9999),
(2, '小米11 Ultra', '1.12GN2 | 2K四微曲面', '5999元起', '{ \"data-original\": \"img/mi11ultra.png\", \"alt\": \"small\",\"class\":\"lazy\" }', '{ \"data-original\": \"img/mi11ultra-big.jpg\", \"alt\": \"big\",\"class\":\"lazy\" }', '<span style=\"color:#ff4a00 \">「最高享24期分期，低至8.3元/天；+1元得小米环保袋；评价晒单送价值29元小背包；赠价值897元三人体检套餐」</span>1.12\'GN2｜128°超广角｜120X超长焦｜2K四微曲屏｜骁龙888｜IP68级防水｜67W 有线闪充｜67W 无线闪充｜10W 无线反充｜5000mAh超大电池｜LPDDR5｜WiFi6（增强版）｜哈曼卡顿音频认证｜立体声双扬声器', '[<li class=\"bcg\">12GB+512GB</li>,\r\n<li class=\"bcg\">12GB+256GB</li>,\r\n<li class=\"bcg\">16GB+512GB</li>]', '[<li class=\"bcg\">陶瓷黑</li>,\r\n<li class=\"bcg\">陶瓷白</li>]', '[<li class=\"bcg\">标准版</li>,\r\n<li class=\"bcg\">套装版（赠充电器）</li>]', 5999),
(3, '小米11 Pro', '1.12GN2 | 骁龙888', '4999元起', '{ \"data-original\": \"img/mi11pro.png\", \"alt\": \"small\",\"class\":\"lazy\" }', '{ \"data-original\": \"img/mi11pro-big.jpg\", \"alt\": \"big\",\"class\":\"lazy\" }', '<span style=\"color:#ff4a00 \">「+1元得小米环保袋；最高享24期免息；尊享真无线耳机Air 2 Pro优惠加价购」</span>1.12\'\'GN2｜骁龙888｜2K四微曲屏｜IP68级防水｜67W 有线闪充｜67W 无线闪充｜10W 无线反充｜5000mAh超大电池｜LPDDR5｜WiFi6（增强版）｜哈曼卡顿音频认证｜立体声双扬声器', '[<li class=\"bcg\">8GB+256GB</li>,\r\n<li class=\"bcg\">8GB+128GB</li>,\r\n<li class=\"bcg\">12GB+256GB</li>]', '[<li class=\"bcg\">黑色</li>,\r\n<li class=\"bcg\">绿色</li>,\r\n<li class=\"bcg\">紫色</li>]', '[<li class=\"bcg\">标准版</li>,\r\n<li class=\"bcg\">套装版（赠充电器）</li>]', 4999),
(4, '小米11 青春版', '小米11 青春版 轻薄', '2299元起', '{ \"data-original\": \"img/mi11qingchunban.png\", \"alt\": \"small\",\"class\":\"lazy\" }', '{ \"data-original\": \"img/mi11qingchunban-big.jpg\", \"alt\": \"big\",\"class\":\"lazy\" }', '<span style=\"color:#ff4a00 \">「购机享6期免息，买赠价值897元三人体检套餐，加1元得定制马克杯，加购物车享多款特惠加价购！仅套装版含充电器」</span>轻薄、多彩 / 骁龙780G / 专业电影相机，前置超级夜景 / AMOLED 柔性直屏 / 超线性立体声双扬声器', '[<li class=\"bcg\">12GB+512GB</li>,\r\n<li class=\"bcg\">16GB+512GB</li>]', '[<li class=\"bcg\">清凉薄荷</li>,\r\n<li class=\"bcg\">清甜荔枝</li>,\r\n<li class=\"bcg\">冰峰黑提</li>,\r\n<li class=\"bcg\">樱花蜜粉</li>]', '[<li class=\"bcg\">标准版</li>,\r\n<li class=\"bcg\">套装版（赠充电器）</li>]', 2299),
(5, 'K40 游戏增强版', '轻薄电竞设计', '1999元起', '{ \"data-original\": \"img/mik40zengqiang.png\", \"alt\": \"small\",\"class\":\"lazy\" }', '{ \"data-original\": \"img/k40youxizengqiangban-big.jpg\", \"alt\": \"big\",\"class\":\"lazy\" }', '<span style=\"color:#ff4a00 \">「陶瓷特别版限量开售中」</span>8.01\'\'折叠大屏｜澎湃C1自研专业影像芯片｜液态镜头｜1亿像素｜骁龙888｜67W快充｜5020mAh超大电池｜LPDDR5满血版｜WiFi6（增强版）｜哈曼卡顿立体声四扬声器', '[<li class=\"bcg\">12GB+512GB</li>,\r\n<li class=\"bcg\">12GB+256GB</li>,\r\n<li class=\"bcg\">16GB+512GB</li>,\r\n<li class=\"bcg\">6GB+128GB</li>]', '[<li class=\"bcg\">光刃</li>,\r\n<li class=\"bcg\">暗影</li>,\r\n<li class=\"bcg\">银翼</li>,\r\n<li class=\"bcg\">李小龙特别版</li>]', '[<li class=\"bcg\">标准版</li>,\r\n<li class=\"bcg\">套装版（赠充电器）</li>]', 1999),
(6, '黑鲨4 Pro', '黑鲨4 Pro', '3999元起', '{ \"data-original\": \"img/miheishapro.png\", \"alt\": \"small\",\"class\":\"lazy\" }', '{ \"data-original\": \"img/heisha4pro-big.jpg\", \"alt\": \"big\",\"class\":\"lazy\" }', '<span style=\"color:#ff4a00 \">「5月14日上午9点30火热开售！赠3.5mm弯头音频转接线，购机享12期分期免息，加179元得199元黑鲨冰封散热背夹」</span>骁龙888 | 增强版UFS3.1+SSD磁盘阵列系统 | 高品质双扬声器，DXOMARK音频总分第一名 | 120W极速闪充+4500mAh双电竞电池 | 磁动力升降肩键 | 144Hz 三星E4屏幕', '[<li class=\"bcg\">12GB+512GB</li>,\r\n<li class=\"bcg\">12GB+256GB</li>,\r\n<li class=\"bcg\">16GB+512GB</li>]', '[<li class=\"bcg\">墨海黑</li>]', '[<li class=\"bcg\">标准版</li>,\r\n<li class=\"bcg\">套装版（赠充电器）</li>]', 3999),
(7, '黑鲨4', '黑鲨4 | 磁动力升降肩键', '2499元起', '{ \"data-original\": \"img/miheisah.png\", \"alt\": \"small\",\"class\":\"lazy\" }', '{ \"data-original\": \"img/heisha4-big.jpg\", \"alt\": \"big\",\"class\":\"lazy\" }', '<span style=\"color:#ff4a00 \">「5月14日上午9点30火热开售！赠3.5mm弯头音频转接线，购机享12期分期免息，加179元得199元黑鲨冰封散热背夹」</span>骁龙870 | 120W极速闪充+4500mAh双电竞电池 | 磁动力升降肩键 | 720Hz触控采样率+144Hz 三星E4屏幕 | 高品质双扬声器', '[<li class=\"bcg\">12GB+512GB</li>,\r\n<li class=\"bcg\">12GB+256GB</li>,\r\n<li class=\"bcg\">16GB+512GB</li>,\r\n<li class=\"bcg\">6GB+128GB</li>]', '[<li class=\"bcg\">幻境黑</li>,\r\n<li class=\"bcg\">墨海黑</li>,\r\n<li class=\"bcg\">风暴蓝</li>,\r\n<li class=\"bcg\">凌光灰</li>]', '[<li class=\"bcg\">标准版</li>,\r\n<li class=\"bcg\">套装版（赠充电器）</li>]', 2499),
(8, '小米10S', '骁龙870 | 对称式双扬声器', '3299元起', '{ \"data-original\": \"img/mi10s.png\", \"alt\": \"small\",\"class\":\"lazy\" }', '{ \"data-original\": \"img/mi10s-big.jpg\", \"alt\": \"big\",\"class\":\"lazy\" }', '<span style=\"color:#ff4a00 \">「下单立减30元！至高享24期免息，赠169元蓝牙耳机，赠新冠保险权益，赠897元善诊体检卡；仅套装版含充电器」</span>骁龙870 | 对称式双扬立体声 | 1亿像素 8K电影相机 | 33W有线快充 | 30W无线快充 | 10W反向充电 | 4780mAh超大电池 | LPDDR5+UFS3.0+Wi-Fi 6 | VC液冷散热 | 双模5G', '[<li class=\"bcg\">12GB+512GB</li>,\r\n<li class=\"bcg\">12GB+256GB</li>,\r\n<li class=\"bcg\">16GB+512GB</li>]', '[<li class=\"bcg\">黑色</li>,\r\n<li class=\"bcg\">白色</li>,\r\n<li class=\"bcg\">蓝色</li>]', '[<li class=\"bcg\">标准版</li>,\r\n<li class=\"bcg\">套装版（赠充电器）</li>]', 3299);

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL COMMENT '用户id',
  `phone` bigint(20) NOT NULL COMMENT '手机'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `phone`) VALUES
(1, 13603834214),
(15, 13839260281),
(14, 17739356383),
(16, 13999999999);

--
-- 转储表的索引
--

--
-- 表的索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id', AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
