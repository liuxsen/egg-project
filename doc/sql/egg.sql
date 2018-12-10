/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : egg

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 10/12/2018 17:20:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for card_type
-- ----------------------------
DROP TABLE IF EXISTS `card_type`;
CREATE TABLE `card_type` (
  `id` varchar(255) NOT NULL,
  `name` varchar(30) DEFAULT NULL COMMENT '卡名字',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

-- ----------------------------
-- Table structure for member
-- ----------------------------
DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pasword` varchar(0) DEFAULT NULL COMMENT '卡密码',
  `card_type` int(30) NOT NULL COMMENT '卡类型',
  `card_id` char(18) DEFAULT NULL COMMENT '卡号',
  `give_many` int(20) DEFAULT NULL COMMENT '赠送金额',
  `recharge` int(100) DEFAULT NULL COMMENT '充值金额',
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

-- ----------------------------
-- Table structure for profile
-- ----------------------------
DROP TABLE IF EXISTS `profile`;
CREATE TABLE `profile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(255) DEFAULT NULL COMMENT '姓名',
  `email` char(80) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COMMENT='系统可以登录的人\n';

-- ----------------------------
-- Records of profile
-- ----------------------------
BEGIN;
INSERT INTO `profile` VALUES (17, NULL, 'wyliuxsen@163.com', '123123', '2018-12-03 11:32:48', '2018-12-03 11:32:48');
COMMIT;

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `profile_id` int(11) DEFAULT NULL COMMENT '所有者id',
  `name` char(30) DEFAULT NULL COMMENT '门店名称',
  `address` char(80) DEFAULT NULL COMMENT '门店地址',
  `is_head` int(1) DEFAULT NULL COMMENT '是否总店',
  `latitude` varchar(80) DEFAULT NULL COMMENT '纬度',
  `phone` char(15) DEFAULT NULL COMMENT '店铺联系电话',
  `longitude` varchar(255) DEFAULT NULL COMMENT '经度',
  `avatar` varchar(200) DEFAULT NULL COMMENT '店铺头像',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `is_default` int(1) DEFAULT NULL,
  `show_wx` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COMMENT='门店';

-- ----------------------------
-- Records of shop
-- ----------------------------
BEGIN;
INSERT INTO `shop` VALUES (106, 17, '第一剪刀', '123', 1, '123', '123', '123', 'http://127.0.0.1:7001/public/static/1355d221-cf53-4e62-abf8-5da86974525a.jpg', '', '2018-12-09 15:17:35', '2018-12-09 15:16:34', 1, 1);
COMMIT;

-- ----------------------------
-- Table structure for staff
-- ----------------------------
DROP TABLE IF EXISTS `staff`;
CREATE TABLE `staff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `profile_id` int(11) DEFAULT NULL COMMENT '所有者id',
  `shop_id` int(11) DEFAULT NULL COMMENT '店铺id',
  `name` varchar(40) DEFAULT NULL COMMENT '员工姓名',
  `job_num` varchar(20) DEFAULT NULL COMMENT '工号',
  `work_type_id` int(30) DEFAULT NULL COMMENT '工种 id',
  `phone` char(11) DEFAULT NULL COMMENT '手机号',
  `weixin` varchar(255) DEFAULT NULL COMMENT '微信',
  `good_at` varchar(255) DEFAULT NULL COMMENT '擅长',
  `base_salary` int(10) DEFAULT NULL COMMENT '底薪',
  `quit_time` datetime DEFAULT NULL COMMENT '离职时间',
  `quit_reson` varchar(255) DEFAULT NULL COMMENT '离职原因',
  `quit` int(1) DEFAULT NULL COMMENT '是否 离职',
  `intro` varchar(255) DEFAULT NULL COMMENT '基本简介',
  `receipt_num` int(11) DEFAULT NULL COMMENT '接单数',
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COMMENT='员工';

-- ----------------------------
-- Records of staff
-- ----------------------------
BEGIN;
INSERT INTO `staff` VALUES (30, 17, 0, '', NULL, 0, '', '', '', NULL, NULL, NULL, NULL, '', NULL, '2018-12-09 15:24:48', '2018-12-09 15:24:48');
INSERT INTO `staff` VALUES (31, 17, 0, '', NULL, 0, '', '', '', NULL, NULL, NULL, NULL, '', NULL, '2018-12-09 15:24:51', '2018-12-09 15:24:51');
INSERT INTO `staff` VALUES (32, 17, 106, '123', NULL, 4, '123', '123123123', '123', NULL, NULL, NULL, NULL, '123123', NULL, '2018-12-09 15:27:56', '2018-12-09 15:25:04');
INSERT INTO `staff` VALUES (33, 17, 106, 'hhhhhh垃圾分类', NULL, 4, '123', '123', '123', NULL, NULL, NULL, NULL, '123123', NULL, '2018-12-09 15:26:36', '2018-12-09 15:26:36');
INSERT INTO `staff` VALUES (34, 18, 106, 'hhhhhh撒地方1', NULL, 4, '123', '123', '123', NULL, NULL, NULL, NULL, '123123', NULL, '2018-12-09 15:28:01', '2018-12-09 15:26:49');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(11) DEFAULT NULL COMMENT '姓名',
  `sex` enum('male','female','unknow') DEFAULT 'unknow' COMMENT '性别',
  `balance` int(255) DEFAULT NULL COMMENT '余额',
  `birthday` datetime DEFAULT NULL COMMENT '生日',
  `member_id` int(11) DEFAULT NULL COMMENT '会员信息',
  `phone` char(11) DEFAULT NULL COMMENT '手机',
  `introducer` int(100) DEFAULT NULL COMMENT '介绍人',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COMMENT='用户表';

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (2, '李四', 'unknow', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL);
INSERT INTO `user` VALUES (3, 'wangwu', 'unknow', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL);
INSERT INTO `user` VALUES (4, 'zhaoliu', 'unknow', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL);
INSERT INTO `user` VALUES (5, '陌生人', 'unknow', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL);
INSERT INTO `user` VALUES (6, NULL, 'unknow', NULL, NULL, NULL, NULL, 0, NULL, '2018-11-30 04:03:13', '2018-11-30 04:03:13');
INSERT INTO `user` VALUES (7, NULL, 'unknow', NULL, NULL, NULL, NULL, 0, NULL, '2018-11-30 04:03:27', '2018-11-30 04:03:27');
INSERT INTO `user` VALUES (8, NULL, 'unknow', NULL, NULL, NULL, NULL, 0, NULL, '2018-11-30 04:03:28', '2018-11-30 04:03:28');
INSERT INTO `user` VALUES (9, NULL, 'unknow', NULL, NULL, NULL, NULL, 0, NULL, '2018-11-30 04:03:29', '2018-11-30 04:03:29');
INSERT INTO `user` VALUES (10, NULL, 'unknow', NULL, NULL, NULL, NULL, 0, NULL, '2018-11-30 04:03:34', '2018-11-30 04:03:34');
INSERT INTO `user` VALUES (11, NULL, 'unknow', NULL, NULL, NULL, NULL, 0, NULL, '2018-11-30 04:03:35', '2018-11-30 04:03:35');
INSERT INTO `user` VALUES (12, NULL, 'unknow', NULL, NULL, NULL, NULL, 0, NULL, '2018-11-30 04:04:19', '2018-11-30 04:04:19');
INSERT INTO `user` VALUES (13, NULL, 'unknow', NULL, NULL, NULL, NULL, 0, NULL, '2018-11-30 04:04:21', '2018-11-30 04:04:21');
INSERT INTO `user` VALUES (14, NULL, 'unknow', NULL, NULL, NULL, NULL, 0, NULL, '2018-11-30 04:04:51', '2018-11-30 04:04:51');
INSERT INTO `user` VALUES (15, NULL, 'unknow', NULL, NULL, NULL, NULL, 0, NULL, '2018-11-30 04:05:03', '2018-11-30 04:05:03');
INSERT INTO `user` VALUES (16, NULL, 'unknow', NULL, NULL, NULL, NULL, 0, NULL, '2018-11-30 04:05:19', '2018-11-30 04:05:19');
INSERT INTO `user` VALUES (17, '123', 'unknow', NULL, NULL, NULL, NULL, 0, NULL, '2018-11-30 04:05:31', '2018-11-30 04:05:31');
INSERT INTO `user` VALUES (18, 'hhhhh', 'unknow', NULL, NULL, NULL, NULL, 0, NULL, '2018-11-30 04:05:50', '2018-11-30 04:05:50');
COMMIT;

-- ----------------------------
-- Table structure for worktype
-- ----------------------------
DROP TABLE IF EXISTS `worktype`;
CREATE TABLE `worktype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_id` int(11) DEFAULT NULL COMMENT '所属门店',
  `profile_id` int(20) DEFAULT NULL COMMENT '所属店长',
  `order` int(30) DEFAULT NULL COMMENT '排序',
  `remark` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '备注',
  `name` char(50) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '工种类型',
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

-- ----------------------------
-- Records of worktype
-- ----------------------------
BEGIN;
INSERT INTO `worktype` VALUES (1, 1, 1, 1, '备注', '洗发', '2018-12-09 05:03:48', '2018-12-09 05:03:48');
INSERT INTO `worktype` VALUES (2, 89, NULL, 0, '', '11', '2018-12-09 09:23:13', '2018-12-09 09:23:13');
INSERT INTO `worktype` VALUES (3, 90, NULL, 123, '123', '123', '2018-12-09 09:24:04', '2018-12-09 09:24:04');
INSERT INTO `worktype` VALUES (4, 106, 17, 11, '111', '123', '2018-12-09 15:18:22', '2018-12-09 15:18:22');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
