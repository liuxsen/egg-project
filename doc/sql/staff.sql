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

 Date: 08/12/2018 23:12:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for staff
-- ----------------------------
DROP TABLE IF EXISTS `staff`;
CREATE TABLE `staff` (
  `id` int(11) NOT NULL,
  `name` varchar(40) DEFAULT NULL COMMENT '员工姓名',
  `job_num` varchar(20) DEFAULT NULL COMMENT '工号',
  `work_type_id` int(30) DEFAULT NULL COMMENT '工种 id',
  `phone` char(11) DEFAULT NULL COMMENT '手机号',
  `weixin` varchar(255) DEFAULT NULL COMMENT '微信',
  `good_at` varchar(255) DEFAULT NULL COMMENT '擅长',
  `quit_time` datetime DEFAULT NULL COMMENT '离职时间',
  `quit_reson` varchar(255) DEFAULT NULL COMMENT '离职原因',
  `quit` enum('0','1') DEFAULT NULL COMMENT '是否 离职',
  `intro` varchar(255) DEFAULT NULL COMMENT '基本简介',
  `receipt_num` int(11) DEFAULT NULL COMMENT '接单数',
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='员工';

SET FOREIGN_KEY_CHECKS = 1;
