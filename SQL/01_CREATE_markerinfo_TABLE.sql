-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 01, 2017 at 09:24 AM
-- Server version: 10.0.31-MariaDB-cll-lve
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `poxpoint_steemitworldmap`
--

-- --------------------------------------------------------

--
-- Table structure for table `markerinfo`
--

CREATE TABLE `markerinfo` (
  `postLink` varchar(1000) NOT NULL,
  `steemName` varchar(200) DEFAULT NULL,
  `postTitle` varchar(500) DEFAULT NULL,
  `postImageLink` varchar(1000) DEFAULT NULL,
  `postUpvote` int(11) DEFAULT NULL,
  `postValue` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `lattitude` double DEFAULT NULL,
  `postDate` timestamp NULL DEFAULT NULL,
  `postDescription` varchar(150) DEFAULT NULL,
  `postPermLink` varchar(500) DEFAULT NULL,
  `editorsChoice` tinyint(1) DEFAULT NULL,
  `tags` varchar(500) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `markerinfo`
--
ALTER TABLE `markerinfo`
  ADD PRIMARY KEY (`postLink`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
