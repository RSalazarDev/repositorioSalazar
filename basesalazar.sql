-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2021 at 03:12 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `basesalazar`
--
CREATE DATABASE IF NOT EXISTS `basesalazar` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `basesalazar`;

-- --------------------------------------------------------

--
-- Table structure for table `cita`
--

CREATE TABLE `cita` (
  `id` int(11) NOT NULL,
  `medico_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `estado` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sala_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cita`
--

INSERT INTO `cita` (`id`, `medico_id`, `usuario_id`, `fecha`, `estado`, `sala_id`) VALUES
(36, 3, 16, '2021-06-29', 'Activa', 4),
(39, 4, 16, '2021-08-11', 'Activa', 4),
(40, 4, 16, '2021-08-11', 'Activa', 7),
(41, 1, 16, '2021-08-27', 'Activa', 2);

-- --------------------------------------------------------

--
-- Table structure for table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20210311195744', '2021-03-11 20:58:03', 286),
('DoctrineMigrations\\Version20210516165202', '2021-05-16 18:52:16', 29),
('DoctrineMigrations\\Version20210516165832', '2021-05-16 18:58:38', 27),
('DoctrineMigrations\\Version20210524142133', '2021-05-24 16:23:26', 69);

-- --------------------------------------------------------

--
-- Table structure for table `especialidad`
--

CREATE TABLE `especialidad` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `especialidad`
--

INSERT INTO `especialidad` (`id`, `nombre`) VALUES
(1, 'Alergología'),
(2, 'Anatomía Patológica'),
(3, 'Anestesiología y Reanimación \r\n'),
(4, 'Cardiología'),
(5, 'Cirugía Torácica'),
(6, 'Geriatría '),
(7, 'Neumología'),
(8, 'Neurología'),
(9, 'Oftalmología'),
(10, 'Psiquiatría '),
(11, 'Urología'),
(12, 'Oncología');

-- --------------------------------------------------------

--
-- Table structure for table `medico`
--

CREATE TABLE `medico` (
  `id` int(11) NOT NULL,
  `especialidad_id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `medico`
--

INSERT INTO `medico` (`id`, `especialidad_id`, `nombre`, `apellidos`) VALUES
(1, 1, 'Alfredo', 'Gonzalez Elche'),
(2, 2, 'Marta', 'Calvo Andorra'),
(3, 3, 'Jorge', 'Alvarez Manzano'),
(4, 4, 'Sandra', 'Prueba Alejo'),
(5, 5, 'Marta', 'Area Ande'),
(6, 6, 'Francisco', 'Roman Alve'),
(7, 7, 'Nuria', 'González González'),
(8, 8, 'Daniel', 'Pérez Jiménez'),
(9, 9, 'Carmen', 'Hernández Dimin'),
(10, 10, 'Raquel', 'Romero Navarro'),
(11, 11, 'Manuel', 'Torres Torres'),
(12, 12, 'Alfredo', 'Ramos Bedoya');

-- --------------------------------------------------------

--
-- Table structure for table `otro`
--

CREATE TABLE `otro` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `localidad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitud` decimal(15,10) NOT NULL,
  `longitud` decimal(15,10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `otro`
--

INSERT INTO `otro` (`id`, `nombre`, `direccion`, `localidad`, `telefono`, `latitud`, `longitud`) VALUES
(1, 'Centro Medico Santa María', 'Avenida Paz Numero 98', 'Quintanar De La Orden', '999999999', '39.5920170000', '-3.0386920000'),
(2, 'Centro Medico Santa Lucia', 'Plaza de España', 'Villa De Don Fadrique', '999999999', '39.6179040000', '-3.2177570000'),
(3, 'Centro Médico Santa Catalina', 'Calle Talavera de La Reina', 'Toledo', '999999999', '39.8663700000', '-4.0279180000'),
(4, 'Centro Médico Santa Luisa', 'Calle Fray Luis de León Baja', 'Mota del Cuervo', '999999999', '39.5001590000', '-2.8702780000'),
(5, 'Centro Médico Santa Mariana', 'Calle Cánovas', 'Miguel Esteban', '999999999', '39.5223080000', '-3.0772050000'),
(6, 'Centro Médico Santa Tobosa', 'Calle Dulcinea', 'El Toboso', '999999999', '39.5134850000', '-2.9961170000'),
(7, 'Centro Médico Santa Lupita', 'Calle Peralta', 'Lillo', '999999999', '39.7224290000', '-3.3033780000');

-- --------------------------------------------------------

--
-- Table structure for table `sala`
--

CREATE TABLE `sala` (
  `id` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sala`
--

INSERT INTO `sala` (`id`, `estado`) VALUES
(1, 0),
(2, 1),
(3, 1),
(4, 1),
(5, 0),
(6, 1),
(7, 1);

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seguridad_social` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `email`, `roles`, `password`, `nombre`, `apellidos`, `telefono`, `seguridad_social`) VALUES
(16, 'testing@gmail.com', '[]', '$2y$10$kjOjWyKJmqy9arLPzSl1I.8VGYYoSAPku07Iy0v80fH50jQWzjMfe', 'ra', 'da', '654333212', '555555555555');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_3E379A62A7FB1C0C` (`medico_id`),
  ADD KEY `IDX_3E379A62DB38439E` (`usuario_id`),
  ADD KEY `IDX_3E379A62C51CDF3F` (`sala_id`);

--
-- Indexes for table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `especialidad`
--
ALTER TABLE `especialidad`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_34E5914C16A490EC` (`especialidad_id`);

--
-- Indexes for table `otro`
--
ALTER TABLE `otro`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sala`
--
ALTER TABLE `sala`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_2265B05DE7927C74` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cita`
--
ALTER TABLE `cita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `especialidad`
--
ALTER TABLE `especialidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `medico`
--
ALTER TABLE `medico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `otro`
--
ALTER TABLE `otro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `sala`
--
ALTER TABLE `sala`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cita`
--
ALTER TABLE `cita`
  ADD CONSTRAINT `FK_3E379A62A7FB1C0C` FOREIGN KEY (`medico_id`) REFERENCES `medico` (`id`),
  ADD CONSTRAINT `FK_3E379A62C51CDF3F` FOREIGN KEY (`sala_id`) REFERENCES `sala` (`id`),
  ADD CONSTRAINT `FK_3E379A62DB38439E` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`);

--
-- Constraints for table `medico`
--
ALTER TABLE `medico`
  ADD CONSTRAINT `FK_34E5914C16A490EC` FOREIGN KEY (`especialidad_id`) REFERENCES `especialidad` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
