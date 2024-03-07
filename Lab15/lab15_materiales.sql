-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: lab15
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `materiales`
--

DROP TABLE IF EXISTS `materiales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiales` (
  `clave` int NOT NULL,
  `descripcion` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `impuesto` float NOT NULL,
  PRIMARY KEY (`clave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiales`
--

LOCK TABLES `materiales` WRITE;
/*!40000 ALTER TABLE `materiales` DISABLE KEYS */;
INSERT INTO `materiales` VALUES (1000,'Varilla 3/16',100,10),(1010,'Varilla 4/32',115,11.5),(1020,'Varilla 3/17',130,13),(1030,'Varilla 4/33',145,14.5),(1040,'Varilla 3/18',160,16),(1050,'Varilla 4/34',175,17.5),(1060,'Varilla 3/19',190,19),(1070,'Varilla 4/35',205,20.5),(1080,'Ladrillos rojos',50,5),(1090,'Ladrillos grises',35,3.5),(1100,'Block',30,3),(1110,'Megablock',40,4),(1120,'Sillar rosa',100,10),(1130,'Sillar gris',110,11),(1140,'Cantera blanca',200,20),(1150,'Cantera gris',1210,121),(1160,'Cantera rosa',1420,142),(1170,'Cantera amarilla',230,23),(1180,'Recubrimiento P1001',200,20),(1190,'Recubrimiento P1010',220,22),(1200,'Recubrimiento P1019',240,24),(1210,'Recubrimiento P1028',250,25),(1220,'Recubrimiento P1037',280,28),(1230,'Cemento ',300,30),(1240,'Arena',200,20),(1250,'Grava',100,10),(1260,'Gravilla',90,9),(1270,'Tezontle',80,8),(1280,'Tepetate',34,3.4),(1290,'Tubería 3.5',200,20),(1300,'Tubería 4.3',210,21),(1310,'Tubería 3.6',220,22),(1320,'Tubería 4.4',230,23),(1330,'Tubería 3.7',240,24),(1340,'Tubería 4.5',250,25),(1350,'Tubería 3.8',260,26),(1360,'Pintura C1010',125,12.5),(1370,'Pintura B1020',125,12.5),(1380,'Pintura C1011',725,72.5),(1390,'Pintura B1021',125,12.5),(1400,'Pintura C1011',125,12.5),(1410,'Pintura B1021',125,12.5),(1420,'Pintura C1012',125,12.5),(1430,'Pintura B1022',125,12.5),(2000,'Jabón',125,12.5);
/*!40000 ALTER TABLE `materiales` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-07  9:59:31
