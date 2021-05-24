-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2021 at 07:25 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `_hms`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_log_tbl`
--

CREATE TABLE `activity_log_tbl` (
  `id` int(11) NOT NULL,
  `description` mediumtext NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `userid` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `activity_log_tbl`
--

INSERT INTO `activity_log_tbl` (`id`, `description`, `date`, `userid`) VALUES
(1, 'Stock Updated for Facility ID: 1234 ', '2021-04-30 12:51:46', '1'),
(2, 'Stock Updated for Facility ID: 1234 ', '2021-04-30 12:52:01', '1'),
(3, 'Stock Updated for Facility ID: 1234 ', '2021-04-30 12:52:58', '1'),
(4, 'Stock Updated for Facility ID: 1234 ', '2021-04-30 15:37:49', '1'),
(5, 'Stock Updated for Facility ID: 1234 ', '2021-04-30 15:44:15', '1'),
(6, 'Tried to update Bed stock:  ', '2021-04-30 16:19:13', '3'),
(7, 'Tried to update Bed stock Facility ID:  ', '2021-04-30 16:19:57', '3'),
(8, 'Tried to update Bed stock Facility ID: 1234 ', '2021-04-30 16:21:16', '3'),
(9, 'Tried to update Bed stock Facility ID: 1234 ', '2021-04-30 16:21:24', '3'),
(10, 'Stock Updated for Facility ID: 1234 ', '2021-04-30 16:21:47', '3'),
(11, 'Stock Updated for Facility ID: 4321 ', '2021-04-30 16:22:19', '3'),
(12, 'Stock Updated for Facility ID: 4321 ', '2021-04-30 16:22:27', '3'),
(13, 'Tried to update Bed stock Facility ID:  ', '2021-04-30 16:24:22', '4'),
(14, 'Tried to update Bed stock Facility ID: 1234 ', '2021-04-30 16:25:09', '4'),
(15, 'Tried to update Bed stock Facility ID: 1234 ', '2021-04-30 16:30:49', '4'),
(16, 'Tried to update Medicine stock Facility ID: 1234 ', '2021-04-30 16:31:07', '4'),
(17, 'Stock Updated for Facility ID: 4321 ', '2021-04-30 16:31:50', '3'),
(18, 'Tried to update Medicine stock Facility ID: 1234 ', '2021-04-30 16:55:10', '4'),
(19, 'Tried to update Medicine stock Facility ID: 1234 ', '2021-04-30 16:55:12', '4'),
(20, 'Medicine Stock Updated for Facility ID: 1234 ', '2021-05-01 13:35:39', '1'),
(21, 'Bed Stock Updated for Facility ID: 1234 ', '2021-05-06 12:22:25', '1'),
(22, 'Bed Stock Updated for Facility ID: 1234 ', '2021-05-06 12:23:07', '1');

-- --------------------------------------------------------

--
-- Table structure for table `bed_alloc_history_tbl`
--

CREATE TABLE `bed_alloc_history_tbl` (
  `id` int(11) NOT NULL,
  `surveillance_id` varchar(50) NOT NULL,
  `icmr_id` varchar(50) NOT NULL,
  `facility_id` varchar(50) NOT NULL,
  `facility_name` varchar(100) NOT NULL,
  `p_name` varchar(100) NOT NULL,
  `p_contact` varchar(100) NOT NULL,
  `bed_no` varchar(50) NOT NULL,
  `bed_type` varchar(100) NOT NULL,
  `p_id` int(11) NOT NULL,
  `allocated_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `removed_on` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bed_alloc_history_tbl`
--

INSERT INTO `bed_alloc_history_tbl` (`id`, `surveillance_id`, `icmr_id`, `facility_id`, `facility_name`, `p_name`, `p_contact`, `bed_no`, `bed_type`, `p_id`, `allocated_on`, `removed_on`) VALUES
(23, '12334', '321', '123456', 'abcde', 'Kadir Rizwan Sheikh', 'contact', '123qwe', 'O2 Bed', 1, '2021-05-04 12:33:18', '2021-05-04 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `bed_tbl`
--

CREATE TABLE `bed_tbl` (
  `id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `bed_name` varchar(255) NOT NULL,
  `added_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bed_tbl`
--

INSERT INTO `bed_tbl` (`id`, `type`, `bed_name`, `added_on`) VALUES
(1, 'o2', 'BED WITH OXYGEN', '2021-04-30 13:14:07'),
(2, 'non o2', 'BED WITHOUT OXYGEN', '2021-04-30 13:14:07'),
(3, 'icu', 'ICU BED', '2021-04-30 13:14:07');

-- --------------------------------------------------------

--
-- Table structure for table `doctor_tbl`
--

CREATE TABLE `doctor_tbl` (
  `id` int(11) NOT NULL,
  `facility_id` varchar(50) NOT NULL,
  `facility_name` varchar(100) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `staff_code` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `contact_no` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `doctor_tbl`
--

INSERT INTO `doctor_tbl` (`id`, `facility_id`, `facility_name`, `user_name`, `password`, `staff_code`, `name`, `contact_no`, `email`, `create_date`) VALUES
(1, '123456', 'abc', 'Kadir', '$2y$10$Zddy3lkzLBwLioeuWyTq8.A/DuBMA6nUFHD1tOvO5DOUjMAp5Q9Qq', '123tyy', 'Kadir Rizwan Sheikh', '78787878787', 'sheikhkadir02@gmail.com', '2021-04-21 04:05:20'),
(2, '123456', 'abcde', 'Doctor', '$2y$10$01s5O/Yv5Yi6fBHBF08UMurabP/a.wcTw6YGU6CRRwO8p1Mtf32li', '123tyy', 'Doctor', '7972112804', 'doctor@gmail.com', '2021-04-25 11:12:44');

-- --------------------------------------------------------

--
-- Table structure for table `facility_tbl`
--

CREATE TABLE `facility_tbl` (
  `id` int(11) NOT NULL,
  `facility_id` varchar(50) NOT NULL,
  `facility_name` varchar(200) NOT NULL,
  `facility_address` varchar(500) NOT NULL,
  `facility_pin_code` varchar(50) NOT NULL,
  `categorisation` varchar(100) NOT NULL,
  `facility_catagory` varchar(50) NOT NULL,
  `functionality_status` varchar(50) NOT NULL,
  `facility_type` varchar(50) NOT NULL,
  `com_bio_med_sys` varchar(20) NOT NULL,
  `o2_capacity` double NOT NULL,
  `no_toilets` int(11) NOT NULL,
  `food_facility` varchar(20) NOT NULL,
  `no_single_room` int(11) NOT NULL,
  `no_double_room` int(11) NOT NULL,
  `no_dormitories` int(11) NOT NULL,
  `added_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `facility_tbl`
--

INSERT INTO `facility_tbl` (`id`, `facility_id`, `facility_name`, `facility_address`, `facility_pin_code`, `categorisation`, `facility_catagory`, `functionality_status`, `facility_type`, `com_bio_med_sys`, `o2_capacity`, `no_toilets`, `food_facility`, `no_single_room`, `no_double_room`, `no_dormitories`, `added_on`) VALUES
(1, '123456789', 'abc', 'Ward No. 1 , Old Town , Butibori , Nagpur', '441108', 'Cat. II - Dedicated COVID Health Center / DCHC', 'Other than hospital', 'Being Made Functional', 'Private Hospitals', 'No', 45, 5, 'No', 10, 5, 10, '2021-04-20 08:25:24'),
(2, '1234', 'abcd', 'Ward No. 1 , Old Town , Butibori , Nagpur', '441108', 'Cat. II - Dedicated COVID Health Center / DCHC', 'Hospital', 'Being Made Functional', 'Govt Hospitals', 'No', 84, 4, 'Yes', 7, 8, 9, '2021-04-20 05:00:14'),
(3, '123456', 'abcde', 'Ward No. 1 , Old Town , Butibori , Nagpur', '441108', 'Cat. II - Dedicated COVID Health Center / DCHC', 'Other than hospital', 'Being Made Functional', 'Govt Hospitals', 'No', 90, 5, 'No', 2, 2, 2, '2021-04-20 08:25:04'),
(4, '123', 'abc', 'Ward No. 1 , Old Town , Butibori , Nagpur', '441108', 'Cat. II - Dedicated COVID Health Center / DCHC', 'Hospital', 'Functional', 'Central Ministry Hospital', 'Yes', 90, 1, 'Yes', 1, 1, 1, '2021-04-20 08:26:26'),
(12, '4321', 'Ritwik', 'mahada', '440023', 'Cat. II - Dedicated COVID Health Center / DCHC', 'Hospital', 'Functional', 'Central Ministry Hospital', 'Yes', 200, 10, 'Yes', 10, 20, 5, '2021-04-30 09:40:31');

-- --------------------------------------------------------

--
-- Table structure for table `inventory_bed_tbl`
--

CREATE TABLE `inventory_bed_tbl` (
  `id` int(11) NOT NULL,
  `facility_id` varchar(50) NOT NULL,
  `bed_id` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `used` int(11) NOT NULL DEFAULT '0',
  `last_update` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inventory_bed_tbl`
--

INSERT INTO `inventory_bed_tbl` (`id`, `facility_id`, `bed_id`, `total`, `used`, `last_update`) VALUES
(4, '4321', 1, 10, 0, '2021-04-30 15:10:32'),
(5, '4321', 2, 20, 0, '2021-04-30 15:10:32'),
(6, '4321', 3, 40, -3, '2021-05-05 01:58:01'),
(7, '1234', 1, 5, 0, '2021-04-30 15:37:48'),
(8, '1234', 2, 5, 0, '2021-04-30 15:37:49'),
(9, '1234', 3, 5, 0, '2021-04-30 15:37:49');

-- --------------------------------------------------------

--
-- Table structure for table `inventory_stock_tbl`
--

CREATE TABLE `inventory_stock_tbl` (
  `id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `opening_stock` float NOT NULL DEFAULT '0',
  `receipt` float NOT NULL DEFAULT '0',
  `consumption` float NOT NULL DEFAULT '0',
  `closing_stock` float NOT NULL DEFAULT '0',
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inventory_stock_tbl`
--

INSERT INTO `inventory_stock_tbl` (`id`, `type`, `opening_stock`, `receipt`, `consumption`, `closing_stock`, `date`) VALUES
(3, 'ppe', 8, 1, 3, 9, '2021-04-27'),
(4, 'n95', 10, 10, 3, 20, '2021-04-27'),
(5, 'hcq400', 10, 0, 3.5, 10, '2021-04-27'),
(6, 'azy', 20, 0, 4.5, 20, '2021-04-27'),
(10, 'hcq200', 0, 5, 4.4, 5, '2021-04-27'),
(16, 'o2', 27.8, 0, 112, -63.2, '2021-04-27'),
(20, 'ppe', 9, 0, 0, 9, '2021-04-28'),
(21, 'n95', 20, 0, 0, 20, '2021-04-28'),
(22, 'hcq400', 10, 0, 0, 10, '2021-04-28'),
(23, 'azy', 20, 0, 0, 20, '2021-04-28'),
(24, 'hcq200', 5, 0, 0, 5, '2021-04-28'),
(25, 'o2', -63.2, 100, 2, 34.8, '2021-04-28'),
(27, 'o2', 0, 1177, 44, 1133, '2021-05-03'),
(28, 'o2', 1133, 0, 0, 1133, '2021-05-04'),
(29, 'o2', 1133, 0, 0, 1133, '2021-05-05'),
(30, 'o2', 1133, 0, 0, 1133, '2021-05-06'),
(31, 'o2', 1133, 0, 0, 1133, '2021-05-07');

-- --------------------------------------------------------

--
-- Table structure for table `inventory_tbl`
--

CREATE TABLE `inventory_tbl` (
  `id` int(11) NOT NULL,
  `facility_id` int(11) NOT NULL,
  `medicine_id` int(11) NOT NULL,
  `quantity` varchar(10) NOT NULL,
  `last_update` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inventory_tbl`
--

INSERT INTO `inventory_tbl` (`id`, `facility_id`, `medicine_id`, `quantity`, `last_update`) VALUES
(1, 1234, 1, '10', '2021-04-30 11:42:24'),
(2, 1234, 2, '30', '2021-04-30 12:52:58'),
(3, 1234, 3, '10', '2021-05-01 01:35:39'),
(4, 1234, 4, '2', '2021-04-30 08:11:00'),
(5, 1234, 5, '2', '2021-04-30 08:11:00'),
(6, 1234, 6, '2', '2021-04-30 08:11:00'),
(7, 1234, 7, '2', '2021-04-30 08:11:00'),
(8, 1234, 8, '2', '2021-04-30 08:11:00'),
(9, 1234, 9, '2', '2021-04-30 08:11:00'),
(10, 1234, 10, '2', '2021-04-30 08:11:00'),
(11, 1234, 11, '2', '2021-04-30 08:11:00'),
(12, 1234, 12, '2', '2021-04-30 08:11:00'),
(13, 1234, 13, '2', '2021-04-30 08:11:00'),
(14, 1234, 14, '2', '2021-04-30 08:11:00'),
(15, 1234, 15, '2', '2021-04-30 08:11:00'),
(16, 1234, 16, '2', '2021-04-30 08:11:00'),
(17, 1234, 17, '2', '2021-04-30 08:11:00'),
(18, 1234, 18, '2', '2021-04-30 08:11:00'),
(19, 1234, 19, '2', '2021-04-30 08:11:00'),
(20, 1234, 20, '2', '2021-04-30 08:11:00'),
(21, 1234, 21, '2', '2021-04-30 08:11:00'),
(22, 1234, 22, '2', '2021-04-30 08:11:00'),
(23, 1234, 23, '2', '2021-04-30 08:11:00'),
(24, 1234, 24, '2', '2021-04-30 08:11:00'),
(25, 1234, 25, '2', '2021-04-30 08:11:00'),
(26, 1234, 26, '2', '2021-04-30 08:11:00'),
(27, 1234, 27, '2', '2021-04-30 08:11:00'),
(28, 1234, 28, '2', '2021-04-30 08:11:00'),
(29, 1234, 29, '2', '2021-04-30 08:11:00'),
(30, 1234, 30, '2', '2021-04-30 08:11:00'),
(31, 1234, 31, '2', '2021-04-30 08:11:00'),
(32, 1234, 32, '2', '2021-04-30 08:11:00'),
(33, 1234, 33, '2', '2021-04-30 08:11:00'),
(34, 1234, 34, '2', '2021-04-30 08:11:00'),
(35, 1234, 35, '2', '2021-04-30 08:11:00'),
(36, 1234, 36, '2', '2021-04-30 08:11:00'),
(37, 1234, 37, '2', '2021-04-30 08:11:00'),
(38, 1234, 38, '2', '2021-04-30 08:11:00'),
(39, 1234, 39, '2', '2021-04-30 08:11:00'),
(40, 1234, 40, '2', '2021-04-30 08:11:00'),
(41, 1234, 41, '2', '2021-04-30 08:11:00'),
(42, 1234, 42, '2', '2021-04-30 08:11:00'),
(43, 1234, 43, '2', '2021-04-30 08:11:00'),
(44, 1234, 44, '2', '2021-04-30 08:11:00'),
(45, 1234, 45, '2', '2021-04-30 08:11:00'),
(46, 1234, 46, '2', '2021-04-30 08:11:00'),
(47, 1234, 47, '2', '2021-04-30 08:11:00'),
(48, 1234, 48, '2', '2021-04-30 08:11:00'),
(49, 4321, 1, '10', '2021-04-30 04:31:50'),
(50, 4321, 2, '10', '2021-04-30 04:31:50'),
(51, 4321, 3, '10', '2021-04-30 04:31:50'),
(52, 4321, 4, '30', '2021-04-30 11:44:25');

-- --------------------------------------------------------

--
-- Table structure for table `medicine_tbl`
--

CREATE TABLE `medicine_tbl` (
  `id` int(11) NOT NULL,
  `type` varchar(20) NOT NULL,
  `med_name` varchar(200) NOT NULL,
  `added_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `medicine_tbl`
--

INSERT INTO `medicine_tbl` (`id`, `type`, `med_name`, `added_on`) VALUES
(1, 'injection', 'INJ CEFTRIAXONE', '2021-04-29 15:08:12'),
(2, 'injection', 'INJ PRECIZE (CERTRIAXONE SUBULTUM) 1.5 GM', '2021-04-29 15:08:12'),
(3, 'injection', 'INJ MEROPENEM 1GM', '2021-04-29 15:08:12'),
(4, 'injection', 'INJ REMDESIVIR 100MG', '2021-04-29 15:08:12'),
(5, 'injection', 'INJ METHYLPREDNISOLONE 40MG/80MG/120MG', '2021-04-29 15:08:12'),
(6, 'injection', 'INJ DEXA 8MG', '2021-04-29 15:08:12'),
(7, 'injection', 'INJ LMWH ENOXAPARIN 0.4/0.6 LOW MOLUCULAR WIEIGHT HEPARIN', '2021-04-29 15:08:12'),
(8, 'injection', 'PANTOPREZOL 40MG', '2021-04-29 15:08:12'),
(9, 'injection', 'INJ ONDENSETRON 8 MG', '2021-04-29 15:08:12'),
(10, 'injection', 'INJ PARACETAMOL 1MG', '2021-04-29 15:08:12'),
(11, 'injection', 'INJ NORADRENALINE', '2021-04-29 15:08:12'),
(12, 'injection', 'INJ ADRENALINE', '2021-04-29 15:08:12'),
(13, 'injection', 'INJ ATROPINE', '2021-04-29 15:08:12'),
(14, 'injection', 'INJ LASIX 20MG', '2021-04-29 15:08:12'),
(15, 'injection', 'INJ TOCILIZUMAB 400 MG', '2021-04-29 15:08:12'),
(16, 'injection', 'HUMAN ACTRAPID', '2021-04-29 15:08:12'),
(17, 'injection', 'HUMAN INSULATARD', '2021-04-29 15:08:12'),
(18, 'injection', 'INJ MIDAZOLAM', '2021-04-29 15:08:12'),
(19, 'injection', 'INJ DEPRIPHYLINE', '2021-04-29 15:08:12'),
(20, 'injection', 'INJ PAUSE', '2021-04-29 15:08:12'),
(21, 'injection', 'INJ PARACETAMOL IV', '2021-04-29 15:08:12'),
(22, 'injection', 'INJ MANNITOL 100MG', '2021-04-29 15:08:12'),
(23, 'injection', 'INJ LIGNOCAINE 2%', '2021-04-29 15:08:12'),
(24, 'injection', 'INJ TRAMADOL 100MG', '2021-04-29 15:08:12'),
(25, 'injection', 'INJ TT', '2021-04-29 15:08:12'),
(26, 'injection', 'INJ METRONIDAZOLE 400', '2021-04-29 15:08:12'),
(27, 'injection', 'INJ CEPRO 500', '2021-04-29 15:08:12'),
(28, 'injection', 'INJ TAXIM 1G', '2021-04-29 15:08:12'),
(29, 'injection', 'ORS', '2021-04-29 15:08:12'),
(30, 'tablet', 'TAP DOXY CYLINE 100MG', '2021-04-29 15:08:12'),
(31, 'tablet', 'T INVERMACTINE 12MG', '2021-04-29 15:08:12'),
(32, 'tablet', 'T MONTEK LC 100MG', '2021-04-29 15:08:12'),
(33, 'tablet', 'SYP ASCORYL D 10ML', '2021-04-29 15:08:12'),
(34, 'tablet', 'T Paracetamol 500MG', '2021-04-29 15:08:12'),
(35, 'tablet', 'T VIT C + ZINC', '2021-04-29 15:08:12'),
(36, 'tablet', 'T AMOXICLAV 625 MG', '2021-04-29 15:08:12'),
(37, 'tablet', 'CAP PAN D 100MG', '2021-04-29 15:08:12'),
(38, 'tablet', 'T FAVIPIRAVIR 200/400/800MG', '2021-04-29 15:08:12'),
(39, 'tablet', 'T AZEE 500MG', '2021-04-29 15:08:12'),
(40, 'injection', 'INJ SOLAMEDRL 125MG', '2021-04-29 15:08:12'),
(41, 'tablet', 'GT ONDEM 4MG', '2021-04-29 15:08:12'),
(42, 'tablet', 'T MOCINAC 600MG', '2021-04-29 15:08:12'),
(43, 'tablet', 'T AMLODIPINE', '2021-04-29 15:08:12'),
(44, 'tablet', 'T LEVECETRIZINE', '2021-04-29 15:08:12'),
(45, 'tablet', 'T LABETALOL', '2021-04-29 15:08:12'),
(46, 'tablet', 'T ATORVASTATIN', '2021-04-29 15:08:12'),
(47, 'tablet', 'T ASPIRIN 75', '2021-04-29 15:08:12'),
(48, 'tablet', 'T CLOPIDOGREL', '2021-04-29 15:08:12');

-- --------------------------------------------------------

--
-- Table structure for table `nodal_person_tbl`
--

CREATE TABLE `nodal_person_tbl` (
  `id` int(11) NOT NULL,
  `facility_id` varchar(50) NOT NULL,
  `facility_name` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `designation` varchar(100) NOT NULL,
  `cell_no` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact_no` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nodal_person_tbl`
--

INSERT INTO `nodal_person_tbl` (`id`, `facility_id`, `facility_name`, `name`, `designation`, `cell_no`, `email`, `contact_no`, `password`, `create_date`) VALUES
(14, '123', 'abc', 'Kadir Rizwan Sheikh', 'Designation', '12qwe456', 'sheikhkadir02@gmail.com', '78787878787', '$2y$10$7T.izyC6uoYf9q0rVP3OG.9v3QocMMTL.C5BMPyXsqypwZXp6HIgO', '2021-04-25 06:23:23');

-- --------------------------------------------------------

--
-- Table structure for table `patient_tbl`
--

CREATE TABLE `patient_tbl` (
  `id` int(11) NOT NULL,
  `surveillance_id` varchar(50) NOT NULL,
  `icmr_id` varchar(50) NOT NULL,
  `lab_patient_id` varchar(50) NOT NULL,
  `facility_id` varchar(50) NOT NULL,
  `facility_name` varchar(100) NOT NULL,
  `p_name` varchar(100) NOT NULL,
  `p_age` varchar(50) NOT NULL,
  `p_gender` varchar(50) NOT NULL,
  `p_occupation` varchar(100) NOT NULL,
  `p_nationality` varchar(50) NOT NULL,
  `p_contact` varchar(50) NOT NULL,
  `p_aadhar_no` varchar(50) NOT NULL,
  `p_catagory` varchar(100) NOT NULL,
  `p_morbidity` varchar(100) NOT NULL,
  `symptomatic` varchar(50) NOT NULL,
  `symptoms_at_admission` varchar(200) NOT NULL,
  `risk` varchar(50) NOT NULL,
  `o2_level` float NOT NULL,
  `body_temp` float NOT NULL,
  `ct` varchar(100) NOT NULL,
  `ambulance_no` varchar(50) NOT NULL,
  `ambulance_driver_name` varchar(100) NOT NULL,
  `ambulance_driver_contact` varchar(50) NOT NULL,
  `ever_dev_symptoms_before` varchar(50) NOT NULL,
  `date_outset_sym` date NOT NULL,
  `date_sample_coll` date NOT NULL,
  `result_sample` varchar(50) NOT NULL,
  `lab_sample_sent` varchar(50) NOT NULL,
  `date_of_report` date NOT NULL,
  `date_of_add` date NOT NULL,
  `date_of_discharge` date NOT NULL,
  `name_person_pat` varchar(100) NOT NULL,
  `con_person_pat` varchar(50) NOT NULL,
  `rel_person_pat` varchar(50) NOT NULL,
  `outcome` varchar(50) NOT NULL,
  `last_outcome_date_change` datetime DEFAULT CURRENT_TIMESTAMP,
  `is_bed_alloc` tinyint(4) NOT NULL DEFAULT '0',
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient_tbl`
--

INSERT INTO `patient_tbl` (`id`, `surveillance_id`, `icmr_id`, `lab_patient_id`, `facility_id`, `facility_name`, `p_name`, `p_age`, `p_gender`, `p_occupation`, `p_nationality`, `p_contact`, `p_aadhar_no`, `p_catagory`, `p_morbidity`, `symptomatic`, `symptoms_at_admission`, `risk`, `o2_level`, `body_temp`, `ct`, `ambulance_no`, `ambulance_driver_name`, `ambulance_driver_contact`, `ever_dev_symptoms_before`, `date_outset_sym`, `date_sample_coll`, `result_sample`, `lab_sample_sent`, `date_of_report`, `date_of_add`, `date_of_discharge`, `name_person_pat`, `con_person_pat`, `rel_person_pat`, `outcome`, `last_outcome_date_change`, `is_bed_alloc`, `created_on`) VALUES
(1, '12334', '321', '567', '123456', 'abcde', 'Kadir Rizwan Sheikh', '10', 'Female', 'occupation', 'nationality', 'contact', '123123123123', 'Frontline worker', 'Hypertension', 'Symptomatic', 'Symptoms at Admission', 'Moderate', 0, 0, 'ct', '786', 'Ambulance Driver Name', 'Ambulance Driver contact', 'No', '2021-04-24', '2021-04-25', 'Result of sample', '45454', '2021-04-25', '2021-04-30', '2021-04-30', 'Name of Person with patient', '1212121212', 'Relationship with the Patien', 'Active', '2021-05-06 12:06:03', 1, '2021-04-24 03:38:11'),
(2, '43321', '321', '567', '12345', 'abcde', 'Nidhi Nitin Indurkar', '20', 'Female', 'occupation', 'nationality', 'contact', '123123123123', 'Frontline worker', 'Hypertension', 'Symptomatic', 'Symptoms at Admission', 'Moderate', 0, 0, 'ct', '786', 'Ambulance Driver Name', 'Ambulance Driver contact', 'No', '2021-04-24', '2021-04-25', 'Result of sample', '45454', '2021-04-25', '2021-04-30', '2021-04-30', 'Name of Person with patient', '1212121212', 'Relationship with the Patien', 'Death', '2021-05-14 00:00:00', 0, '2021-05-01 16:45:32'),
(3, '12334', '321', '567', '123456', 'abcde', 'Kadir Rizwan Sheikh', '10', 'Female', 'occupation', 'nationality', 'contact', '123123123123', 'Frontline worker', 'Hypertension', 'Symptomatic', 'Symptoms at Admission', 'Moderate', 0, 0, 'ct', '786', 'Ambulance Driver Name', 'Ambulance Driver contact', 'No', '2021-04-24', '2021-04-25', 'Result of sample', '45454', '2021-04-25', '2021-04-30', '2021-04-30', 'Name of Person with patient', '1212121212', 'Relationship with the Patien', 'Active', '2021-05-04 01:26:11', 1, '2021-04-24 03:38:11'),
(4, '43321', '321', '567', '12345', 'abcde', 'Nidhi Nitin Indurkar', '20', 'Female', 'occupation', 'nationality', 'contact', '123123123123', 'Frontline worker', 'Hypertension', 'Symptomatic', 'Symptoms at Admission', 'Moderate', 0, 0, 'ct', '786', 'Ambulance Driver Name', 'Ambulance Driver contact', 'No', '2021-04-24', '2021-04-25', 'Result of sample', '45454', '2021-04-25', '2021-04-30', '2021-04-30', 'Name of Person with patient', '1212121212', 'Relationship with the Patien', 'Active', '2021-05-14 00:00:00', 0, '2021-05-01 16:45:32'),
(5, '12334', '321', '567', '123456', 'abcde', 'Kadir Rizwan Sheikh', '10', 'Female', 'occupation', 'nationality', 'contact', '123123123123', 'Frontline worker', 'Hypertension', 'Symptomatic', 'Symptoms at Admission', 'Moderate', 0, 0, 'ct', '786', 'Ambulance Driver Name', 'Ambulance Driver contact', 'No', '2021-04-24', '2021-04-25', 'Result of sample', '45454', '2021-04-25', '2021-04-30', '2021-04-30', 'Name of Person with patient', '1212121212', 'Relationship with the Patien', 'Death', '2021-06-04 01:26:11', 1, '2021-04-24 03:38:11'),
(6, '43321', '321', '567', '12345', 'abcde', 'Nidhi Nitin Indurkar', '20', 'Female', 'occupation', 'nationality', 'contact', '123123123123', 'Frontline worker', 'Hypertension', 'Symptomatic', 'Symptoms at Admission', 'Moderate', 0, 0, 'ct', '786', 'Ambulance Driver Name', 'Ambulance Driver contact', 'No', '2021-04-24', '2021-04-25', 'Result of sample', '45454', '2021-04-25', '2021-04-30', '2021-04-30', 'Name of Person with patient', '1212121212', 'Relationship with the Patien', 'Death', '2021-05-14 00:00:00', 0, '2021-06-01 16:45:32'),
(7, '12334', '321', '567', '123456', 'abcde', 'Kadir Rizwan Sheikh', '10', 'Female', 'occupation', 'nationality', 'contact', '123123123123', 'Frontline worker', 'Hypertension', 'Symptomatic', 'Symptoms at Admission', 'Moderate', 0, 0, 'ct', '786', 'Ambulance Driver Name', 'Ambulance Driver contact', 'No', '2021-04-24', '2021-04-25', 'Result of sample', '45454', '2021-04-25', '2021-04-30', '2021-04-30', 'Name of Person with patient', '1212121212', 'Relationship with the Patien', 'Active', '2021-07-04 01:26:11', 1, '2021-04-24 03:38:11'),
(8, '43321', '321', '567', '12345', 'abcde', 'Nidhi Nitin Indurkar', '20', 'Female', 'occupation', 'nationality', 'contact', '123123123123', 'Frontline worker', 'Hypertension', 'Symptomatic', 'Symptoms at Admission', 'Moderate', 0, 0, 'ct', '786', 'Ambulance Driver Name', 'Ambulance Driver contact', 'No', '2021-04-24', '2021-04-25', 'Result of sample', '45454', '2021-04-25', '2021-04-30', '2021-04-30', 'Name of Person with patient', '1212121212', 'Relationship with the Patien', 'Active', '2021-07-14 00:00:00', 0, '2021-05-01 16:45:32'),
(9, '12334', '321', '567', '123456', 'abcde', 'Kadir Rizwan Sheikh', '10', 'Female', 'occupation', 'nationality', 'contact', '123123123123', 'Frontline worker', 'Hypertension', 'Symptomatic', 'Symptoms at Admission', 'Moderate', 0, 0, 'ct', '786', 'Ambulance Driver Name', 'Ambulance Driver contact', 'No', '2021-04-24', '2021-04-25', 'Result of sample', '45454', '2021-04-25', '2021-04-30', '2021-04-30', 'Name of Person with patient', '1212121212', 'Relationship with the Patien', 'Active', '2022-07-04 01:26:11', 1, '2021-04-24 03:38:11'),
(10, '43321', '321', '567', '12345', 'abcde', 'Nidhi Nitin Indurkar', '20', 'Female', 'occupation', 'nationality', 'contact', '123123123123', 'Frontline worker', 'Hypertension', 'Symptomatic', 'Symptoms at Admission', 'Moderate', 0, 0, 'ct', '786', 'Ambulance Driver Name', 'Ambulance Driver contact', 'No', '2021-04-24', '2021-04-25', 'Result of sample', '45454', '2021-04-25', '2021-04-30', '2021-04-30', 'Name of Person with patient', '1212121212', 'Relationship with the Patien', 'Active', '2022-07-04 00:00:00', 0, '2021-05-01 16:45:32');

-- --------------------------------------------------------

--
-- Table structure for table `patient_treatment_tbl`
--

CREATE TABLE `patient_treatment_tbl` (
  `id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `particular` varchar(1000) NOT NULL,
  `quantity` varchar(20) NOT NULL,
  `prescribed_by_id` int(11) DEFAULT NULL,
  `given_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_approved` tinyint(4) NOT NULL DEFAULT '0',
  `approved_by_id` int(11) DEFAULT NULL,
  `approved_on` datetime DEFAULT NULL,
  `bed_removed_on` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient_treatment_tbl`
--

INSERT INTO `patient_treatment_tbl` (`id`, `patient_id`, `type`, `particular`, `quantity`, `prescribed_by_id`, `given_on`, `is_approved`, `approved_by_id`, `approved_on`, `bed_removed_on`) VALUES
(12, 1, 'bed', '3', '2', 4, '2021-05-04 22:50:40', 1, NULL, '2021-05-04 02:19:07', NULL),
(13, 1, 'med', '46', '1', 4, '2021-05-01 22:50:40', 1, NULL, '2021-05-04 02:22:11', '0000-00-00 00:00:00'),
(14, 1, 'med', '15', '1', 4, '2021-05-01 22:50:40', 0, NULL, '2021-05-04 00:00:00', '0000-00-00 00:00:00'),
(15, 1, 'bed', '3', '1', 4, '2021-05-01 23:04:47', 1, NULL, '2021-05-04 02:19:15', NULL),
(16, 1, 'med', '4', '1', 4, '2021-05-01 23:04:47', 0, NULL, '2021-05-04 00:00:00', '0000-00-00 00:00:00'),
(17, 1, 'bed', '3', '1', 4, '2021-05-01 23:04:47', 0, NULL, '2021-05-04 00:00:00', NULL),
(18, 1, 'med', '4', '1', 4, '2021-05-01 23:04:47', 0, NULL, '2021-05-04 00:00:00', '0000-00-00 00:00:00'),
(19, 1, 'bed', '3', '1', 4, '2021-05-01 23:04:47', 1, NULL, '2021-05-03 02:19:33', '2021-05-05 01:58:01'),
(20, 1, 'med', '6', '1', 4, '2021-05-01 23:04:47', 0, NULL, '2021-05-04 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `staff_tbl`
--

CREATE TABLE `staff_tbl` (
  `id` int(11) NOT NULL,
  `facility_id` varchar(100) NOT NULL,
  `facility_name` varchar(200) NOT NULL,
  `staff_code` varchar(100) NOT NULL,
  `name_of_staff` varchar(100) NOT NULL,
  `staff_designation` varchar(50) NOT NULL,
  `contact_no` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `staff_tbl`
--

INSERT INTO `staff_tbl` (`id`, `facility_id`, `facility_name`, `staff_code`, `name_of_staff`, `staff_designation`, `contact_no`, `email`, `created_on`) VALUES
(1, '123456', 'abc', '123tyy', 'Kadir Rizwan Sheikh', 'Ward Boy', '78787878787', 'sheikhkadir02@gmail.com', '2021-04-21 03:33:19'),
(2, '123', '23', '234', 'Yoyo', 'Nurse', '1234567890', 'yo@gmail.com', '2021-04-28 09:04:43');

-- --------------------------------------------------------

--
-- Table structure for table `super_admin_tbl`
--

CREATE TABLE `super_admin_tbl` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `added_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `super_admin_tbl`
--

INSERT INTO `super_admin_tbl` (`id`, `username`, `password`, `added_on`) VALUES
(1, 'superadmin@demo.com', '$2y$10$s6w4Q/MuMZnXmRejgEwKAeRMvPka/zL2hTmyMEPWMro3rs1xZ07h2', '2021-04-20 07:00:02');

-- --------------------------------------------------------

--
-- Table structure for table `supplies_history_tbl`
--

CREATE TABLE `supplies_history_tbl` (
  `id` int(11) NOT NULL,
  `surveillance_id` varchar(50) NOT NULL,
  `icmr_id` varchar(50) NOT NULL,
  `facility_id` varchar(50) NOT NULL,
  `facility_name` varchar(100) NOT NULL,
  `p_name` varchar(100) NOT NULL,
  `p_contact` varchar(100) NOT NULL,
  `ppe_q` varchar(50) NOT NULL,
  `n95_q` varchar(50) NOT NULL,
  `hcq_400_q` varchar(50) NOT NULL,
  `hcq_200_q` varchar(50) NOT NULL,
  `azythromycin_q` varchar(50) NOT NULL,
  `p_id` int(11) NOT NULL,
  `given_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supplies_history_tbl`
--

INSERT INTO `supplies_history_tbl` (`id`, `surveillance_id`, `icmr_id`, `facility_id`, `facility_name`, `p_name`, `p_contact`, `ppe_q`, `n95_q`, `hcq_400_q`, `hcq_200_q`, `azythromycin_q`, `p_id`, `given_on`) VALUES
(1, '12334', '321', '123456', 'abcde', 'Kadir Rizwan Sheikh', 'contact', '1', '1', '1', '1', '1', 0, '2021-04-24 06:52:59'),
(3, '12334', '321', '123456', 'abcde', 'Kadir Rizwan Sheikh', 'contact', '3', '3', '3', '3', '3', 0, '2021-04-25 05:23:54'),
(4, '12334', '321', '123456', 'abcde', 'Kadir Rizwan Sheikh', 'contact', '1', '1', '1', '1', '1', 0, '2021-04-27 09:48:04'),
(5, '12334', '321', '123456', 'abcde', 'Kadir Rizwan Sheikh', 'contact', '1', '1', '1', '1', '1', 0, '2021-04-27 09:49:11'),
(6, '12334', '321', '123456', 'abcde', 'Kadir Rizwan Sheikh', 'contact', '1', '1', '1', '1', '1', 0, '2021-04-27 09:50:16'),
(7, '12334', '321', '123456', 'abcde', 'Kadir Rizwan Sheikh', 'contact', '2', '2', '2', '2', '2', 0, '2021-04-27 09:52:04'),
(8, '12334', '321', '123456', 'abcde', 'Kadir Rizwan Sheikh', 'contact', '1', '1', '1.5', '2.4', '2.5', 0, '2021-04-27 09:53:05');

-- --------------------------------------------------------

--
-- Table structure for table `user_tbl`
--

CREATE TABLE `user_tbl` (
  `userid` int(11) NOT NULL,
  `facility_id` varchar(50) NOT NULL,
  `staff_code` varchar(50) NOT NULL,
  `person_id` int(11) DEFAULT NULL,
  `person_group_id` int(11) DEFAULT NULL,
  `faceUploaded` int(11) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `middlename` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `phonenumber` varchar(30) DEFAULT NULL,
  `password` varchar(250) NOT NULL,
  `datecreated` datetime NOT NULL,
  `profile_image` varchar(191) DEFAULT NULL,
  `last_ip` varchar(40) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `last_activity` datetime DEFAULT NULL,
  `last_password_change` datetime DEFAULT NULL,
  `new_pass_key` varchar(32) DEFAULT NULL,
  `new_pass_key_requested` datetime DEFAULT NULL,
  `admin` int(11) NOT NULL DEFAULT '0',
  `nodal` int(11) NOT NULL DEFAULT '0',
  `doctor` int(11) NOT NULL DEFAULT '0',
  `role` int(11) DEFAULT NULL,
  `active` int(11) NOT NULL DEFAULT '1',
  `is_not_staff` int(11) NOT NULL DEFAULT '0',
  `birthday` date DEFAULT NULL,
  `sex` varchar(15) DEFAULT NULL,
  `marital_status` varchar(25) DEFAULT NULL,
  `current_address` varchar(200) DEFAULT NULL,
  `job_position` int(11) DEFAULT NULL,
  `workplace` int(11) DEFAULT NULL,
  `status_work` varchar(100) DEFAULT NULL,
  `date_update` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_tbl`
--

INSERT INTO `user_tbl` (`userid`, `facility_id`, `staff_code`, `person_id`, `person_group_id`, `faceUploaded`, `email`, `firstname`, `middlename`, `lastname`, `phonenumber`, `password`, `datecreated`, `profile_image`, `last_ip`, `last_login`, `last_activity`, `last_password_change`, `new_pass_key`, `new_pass_key_requested`, `admin`, `nodal`, `doctor`, `role`, `active`, `is_not_staff`, `birthday`, `sex`, `marital_status`, `current_address`, `job_position`, `workplace`, `status_work`, `date_update`) VALUES
(1, '', '', NULL, NULL, NULL, 'superadmin@demo.com', 'Admin', 'Admin', 'Admin', NULL, '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '0000-00-00 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, '4321', 'facility1', NULL, NULL, NULL, 'nodal@gmail.com', 'Nodal', 'Mundal', 'Godal', NULL, '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', '2021-04-28 09:28:10', NULL, NULL, '2021-04-28 09:28:10', '2021-04-28 09:28:10', '2021-04-28 09:28:10', NULL, '2021-04-28 09:28:10', 0, 1, 0, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, '1234', 'doc#1', NULL, NULL, NULL, 'doctor@gmail.com', 'Doctor', 'Doctor', 'Doctor', NULL, '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', '2021-04-29 09:09:32', NULL, NULL, '2021-04-29 09:09:32', '2021-04-29 09:09:32', '2021-04-29 09:09:32', NULL, '2021-04-29 09:09:32', 0, 0, 1, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_log_tbl`
--
ALTER TABLE `activity_log_tbl`
  ADD PRIMARY KEY (`id`),
  ADD KEY `staffid` (`userid`);

--
-- Indexes for table `bed_alloc_history_tbl`
--
ALTER TABLE `bed_alloc_history_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bed_tbl`
--
ALTER TABLE `bed_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor_tbl`
--
ALTER TABLE `doctor_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `facility_tbl`
--
ALTER TABLE `facility_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inventory_bed_tbl`
--
ALTER TABLE `inventory_bed_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inventory_stock_tbl`
--
ALTER TABLE `inventory_stock_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inventory_tbl`
--
ALTER TABLE `inventory_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicine_tbl`
--
ALTER TABLE `medicine_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nodal_person_tbl`
--
ALTER TABLE `nodal_person_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient_tbl`
--
ALTER TABLE `patient_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient_treatment_tbl`
--
ALTER TABLE `patient_treatment_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `staff_tbl`
--
ALTER TABLE `staff_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `super_admin_tbl`
--
ALTER TABLE `super_admin_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supplies_history_tbl`
--
ALTER TABLE `supplies_history_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_tbl`
--
ALTER TABLE `user_tbl`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_log_tbl`
--
ALTER TABLE `activity_log_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `bed_alloc_history_tbl`
--
ALTER TABLE `bed_alloc_history_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `bed_tbl`
--
ALTER TABLE `bed_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `doctor_tbl`
--
ALTER TABLE `doctor_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `facility_tbl`
--
ALTER TABLE `facility_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `inventory_bed_tbl`
--
ALTER TABLE `inventory_bed_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `inventory_stock_tbl`
--
ALTER TABLE `inventory_stock_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `inventory_tbl`
--
ALTER TABLE `inventory_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `medicine_tbl`
--
ALTER TABLE `medicine_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `nodal_person_tbl`
--
ALTER TABLE `nodal_person_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `patient_tbl`
--
ALTER TABLE `patient_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `patient_treatment_tbl`
--
ALTER TABLE `patient_treatment_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `staff_tbl`
--
ALTER TABLE `staff_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `super_admin_tbl`
--
ALTER TABLE `super_admin_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `supplies_history_tbl`
--
ALTER TABLE `supplies_history_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user_tbl`
--
ALTER TABLE `user_tbl`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `o2_consumption` ON SCHEDULE EVERY 1 MINUTE STARTS '2021-04-26 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE `inventory_stock_tbl`  SET  `consumption` = inventory_stock_tbl.consumption + 7*
        (
          SELECT COUNT(id) AS bed_count 
          FROM patient_tbl 
          WHERE patient_tbl.is_bed_alloc = 1 
        ) , `closing_stock`=inventory_stock.opening_stock+inventory_stock.receipt-inventory_stock.consumption
        
        WHERE inventory_stock_tbl.type='o2' AND CONVERT(inventory_stock_tbl.date , DATE) = CURRENT_DATE()$$

CREATE DEFINER=`root`@`localhost` EVENT `midnight_func_closing_to_opening_stock` ON SCHEDULE EVERY 24 HOUR STARTS '2021-04-27 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO INSERT INTO inventory_stock_tbl (`type`, `opening_stock`, `receipt`, `consumption`, `closing_stock`,`date`)
SELECT `type`, `closing_stock`, '0', '0', `closing_stock`,CURRENT_DATE() FROM inventory_stock_tbl WHERE CONVERT(`date`,DATE) = CURRENT_DATE - INTERVAL 1 day$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
