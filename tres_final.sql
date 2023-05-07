-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: tres
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `tres`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `tres` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `tres`;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(400) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `allergies`
--

DROP TABLE IF EXISTS `allergies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `allergies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `allergy` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `eng_allergy` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allergies`
--

LOCK TABLES `allergies` WRITE;
/*!40000 ALTER TABLE `allergies` DISABLE KEYS */;
/*!40000 ALTER TABLE `allergies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `allergy_foods`
--

DROP TABLE IF EXISTS `allergy_foods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `allergy_foods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `food_id` int DEFAULT NULL,
  `allergy_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `food_id` (`food_id`),
  KEY `allergy_id` (`allergy_id`),
  CONSTRAINT `allergy_foods_ibfk_1` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`),
  CONSTRAINT `allergy_foods_ibfk_2` FOREIGN KEY (`allergy_id`) REFERENCES `allergies` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allergy_foods`
--

LOCK TABLES `allergy_foods` WRITE;
/*!40000 ALTER TABLE `allergy_foods` DISABLE KEYS */;
/*!40000 ALTER TABLE `allergy_foods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `continents`
--

DROP TABLE IF EXISTS `continents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `continents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `continent` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `eng_continent` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `continents`
--

LOCK TABLES `continents` WRITE;
/*!40000 ALTER TABLE `continents` DISABLE KEYS */;
INSERT INTO `continents` VALUES (1,'Africa','아프리카'),(2,'Americas','아메리카'),(3,'Asia','아시아'),(4,'Europe','유럽'),(5,'Oceania','오세아니아');
/*!40000 ALTER TABLE `continents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `country` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `eng_country` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `continent_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `continent_id` (`continent_id`),
  CONSTRAINT `countries_ibfk_1` FOREIGN KEY (`continent_id`) REFERENCES `continents` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'에티오피아','Ethiopia',1),(2,'탄자니','Tanzania',1),(3,'나이지리아','Nigeria',1),(4,'가나','Ghana',1),(5,'세네갈','Senegal',1),(6,'미국','United States',2),(7,'멕시코','Mexico',2),(8,'콜롬비아','Colombia',2),(9,'브라질','Brazil',2),(10,'칠레','Chile',2),(11,'베트남','Vietnam',3),(12,'태국','Thailand',3),(13,'중국','China',3),(14,'일본','Japan',3),(15,'인도','India',3),(16,'독일','Germany',4),(17,'그리스','Greece',4),(18,'스페인','Spain',4),(19,'프랑스','France',4),(20,'이탈리아','Italy',4),(21,'사모아','Samoa',5),(22,'호주','Australia',5),(23,'마샬제도','Marshall Islands',5),(24,'뉴질랜드','New Zealand',5),(25,'괌','Guam',5);
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country_user`
--

DROP TABLE IF EXISTS `country_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `country_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `country_id` (`country_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `country_user_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`),
  CONSTRAINT `country_user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country_user`
--

LOCK TABLES `country_user` WRITE;
/*!40000 ALTER TABLE `country_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `country_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_images`
--

DROP TABLE IF EXISTS `food_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `food_image` varchar(2000) COLLATE utf8mb4_general_ci NOT NULL,
  `food_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_images` (`food_id`),
  CONSTRAINT `fk_images` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_images`
--

LOCK TABLES `food_images` WRITE;
/*!40000 ALTER TABLE `food_images` DISABLE KEYS */;
/*!40000 ALTER TABLE `food_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foods`
--

DROP TABLE IF EXISTS `foods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `food` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `eng_food` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `vegetarian` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `country_id` int NOT NULL,
  `spice_level` int NOT NULL DEFAULT '0',
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `eng_description` text COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `country_id` (`country_id`),
  CONSTRAINT `foods_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foods`
--

LOCK TABLES `foods` WRITE;
/*!40000 ALTER TABLE `foods` DISABLE KEYS */;
INSERT INTO `foods` VALUES (1,'베이에나','Beyenatu',14900.00,'Vegetarian',1,2,'베이에나투는 여러 가지 다른 요리로 구성된 채식주의자용 접시입니다. 보통 인제라 (신토불이 평면 빵), 렌틸콩, 분할된 완두콩, 병아리콩, 녹색 채소 및 양배추가 포함됩니다. 맛은 미디엄하고 고소합니다.','Beyenatu is a vegetarian platter consisting of several different dishes. It typically includes injera (a sourdough flatbread), lentils, split peas, chickpeas, greens, and cabbage. The flavors are mild and savory.','2023-05-03 17:57:50',NULL),(2,'키토포','Kitfo',16900.00,'Vegetarian',1,4,'키토포는 버터와 향신료가 섞인 날 것의 다진 소고기로 만든 전통적인 에티오피아 요리입니다. 보통 인제라와 함께 제공되며 종종 아이브(부드러운 치즈)와 함께합니다. 이 요리는 매운 맛과 풍부한 맛이 있습니다.','Kitfo is a traditional Ethiopian dish made of raw minced beef mixed with butter and spices. It is typically served with injera and often accompanied by ayib (a soft cheese). The dish has a spicy and rich flavor.','2023-05-03 17:59:33',NULL),(3,'도로 와트','Doro Wat',16900.00,'Not Vegetarian',1,3,'도로 와트는 버베레 스파이스로 만든 매운 에티오피아 치킨 스튜입니다. 버베레 스파이스는 칠리 페퍼, 생강, 마늘 및 기타 향신료의 혼합물입니다. 보통 인제라와 함께 제공되며 종종 아이브와 함께합니다. 이 요리는 매운 맛과 함께 풍부하고 복잡한 맛이 있습니다.','Doro Wat is a spicy Ethiopian chicken stew made with berbere spice, which is a blend of chili peppers, ginger, garlic, and other spices. It is typically served with injera and often accompanied by ayib. The dish has a rich, complex flavor with a spicy kick.','2023-05-03 18:01:03',NULL),(4,'차파티','Chapatti',5900.00,'Vegetarian',2,1,'차파티는 동아프리카에서 유명한 평면 빵입니다. 밀가루, 물, 소금으로 만든 간단한 반죽으로 만들어지며, 팬이나 불판에서 조리합니다. 차파티는 탄자니아의 주식이며, 다양한 요리와 함께 제공됩니다.','hapati is a type of flatbread that is popular in East Africa. It is made from a simple dough of flour, water, and salt, and is typically cooked on a griddle or in a pan. Chapati is a staple food in Tanzania and is often served with a variety of dishes.','2023-05-03 18:02:39',NULL),(5,'코코넛 소스에 문어 구이','Pweza nwa nazi',9900.00,'Not Vegetarian',2,2,'푸에자 엔 와지는 탄자니아에서 인기 있는 해산물 요리입니다. 대패를 코코넛 크림 소스로 조리하며, 마늘, 생강, 커리 파우더 등의 향신료를 사용합니다. 이 요리는 보통 밥이나 차파티와 함께 제공됩니다.','weza nwa nazi is a popular seafood dish in Tanzania. It consists of octopus cooked in a creamy coconut sauce, along with spices like garlic, ginger, and curry powder. This dish is typically served with rice or chapati.','2023-05-03 18:08:10',NULL),(6,'만다지','mandazi',5000.00,'vegetarian',2,1,'만다지는 동아프리카와 동인도 제도에서 매우 유명한 튀긴 반죽 간식입니다. 설탕 또는 허니와 같은 달콤한 소스와 함께 제공되는 경우가 많습니다.','Mandazi is a very popular fried dough snack in East Africa and the Indian Ocean islands. It is often served with a sweet sauce such as sugar or honey.','2023-05-03 18:13:03',NULL),(7,'사모사','samosa',3000.00,'vegetarian',2,3,'사모사는 인도와 동아프리카에서 매우 유명한 튀긴 삼각주입니다. 매콤한 감자와 채소로 만들어진 것이 일반적이지만 고기를 사용하는 경우도 있습니다.','Samosas are a very popular fried triangular pastry in India and East Africa. They are typically filled with spicy potatoes and vegetables, but meat may also be used.','2023-05-03 18:13:51',NULL),(8,'피라우','pilau',10000.00,'not vegetarian',2,2,'피라우는 인도네시아, 동아프리카, 중동 등에서 먹는 쌀 요리입니다. 고기나 해산물과 함께 조리되며 스파이스와 함께 조리되어 매우 향긋합니다.','Pilau is a rice dish eaten in Indonesia, East Africa, the Middle East, and other regions. It is typically cooked with meat or seafood and is very fragrant due to the use of spices.','2023-05-03 18:14:28',NULL),(9,'에포','efo',8000.00,'vegetarian',3,1,'에포는 나이지리아에서 유래한 채소 요리입니다. 주 재료는 이끼 가죽, 토마토, 양파, 양배추 등이며 토마토로 만든 소스로 맛을 낸다고 합니다.','Efo is a vegetable dish originated from Nigeria. The main ingredients are spinach, tomato, onion, cabbage, etc. and it is seasoned with tomato-based sauce.','2023-05-03 18:15:04',NULL),(10,'오파다 스튜','Ofada Stew',15000.00,'not vegetarian',3,3,'오파다 스튜는 주로 쌀과 고수, 오이와 함께 즐겨지는 닭고기 스튜 요리입니다.','Ofada stew is a chicken stew dish that is typically served with rice, spinach, and cucumbers.','2023-05-03 18:17:12',NULL),(11,'에구시','Egusi',12000.00,'vegetarian',3,2,'에구시는 호두나 씨앗 등을 으깨어 만든 파스타 형태의 요리입니다.','Egusi is a pasta-like dish made from ground melon seeds or nuts.','2023-05-03 18:18:09',NULL),(12,'칼데이루 데 카브리토','Caldeiro de Cabrito',35000.00,'not vegetarian',3,4,'칼데이루 데 카브리토는 어린 염소고기와 감자, 야채 등을 함께 조리한 요리입니다.','Caldeiro de Cabrito is a dish made with young goat meat, potatoes, vegetables, and spices.','2023-05-03 18:18:09',NULL),(13,'수야','Suya',10000.00,'not vegetarian',3,5,'수야는 양념한 소고기, 양념가루, 케밥 등으로 만든 아프리카의 유명한 육류 요리입니다.','Suya is a popular African meat dish made from seasoned beef, spices, and kebab.','2023-05-03 18:18:09',NULL),(14,'팜넛 소스와 화초 뿌띠','Palmnut Sauce with Plantain Fufu',20000.00,'not vegetarian',4,3,'팜넛 소스는 팜 오일에서 만들어진 소스로 식물성 요리입니다. 화초 뿌띠는 바나나 가루를 사용하여 만든 가루밥입니다.','Palmnut sauce is a sauce made from palm oil and is a vegetarian dish. Plantain fufu is a starchy dough made from plantain flour and is commonly eaten in West Africa.','2023-05-03 18:19:18',NULL),(15,'와아케','Waakye',8000.00,'not vegetarian',4,1,'와아케는 검정 콩과 쌀로 만든 가정식입니다.','Waakye is a homemade dish made with black-eyed beans and rice.','2023-05-03 18:19:18',NULL),(16,'티에부디엔','Thieboudienne',25000.00,'not vegetarian',4,4,'티에부디엔은 세네갈 국민 요리로, 라이스와 매운 소스, 야채, 생선 등이 함께 들어간 요리입니다.','Thieboudienne is a national dish of Senegal that consists of rice, spicy sauce, vegetables, and fish.','2023-05-03 18:19:18',NULL),(17,'얀사 기니안','Yassa Guinar',15000.00,'not vegetarian',5,3,'얀사는 세네갈 요리 중 하나로 치킨, 양고기 또는 생선을 레몬과 양파로 먹는다. 이 요리는 대체로 매우 맛있고 매콤하며 맛이 풍부하다.','Yassa is a Senegalese dish of chicken, lamb, or fish marinated in lemon and onions. The dish is generally very tasty, spicy and flavorful.','2023-05-03 18:20:27',NULL),(18,'티부디엔','Thieboudienne',18000.00,'not vegetarian',5,4,'티부디엔은 세네갈의 국민 요리이며 밥과 해산물 또는 생선과 채소가 들어간다. 토마토, 양파, 마늘, 청양고추 등의 양념으로 향을 낸다.','Thieboudienne is the national dish of Senegal and consists of rice with seafood or fish and vegetables. It is flavored with spices such as tomato, onion, garlic, and green pepper.','2023-05-03 18:20:27',NULL),(19,'햄버거','Hamburger',8000.00,'not vegetarian',6,2,'햄버거는 미국에서 유래한 대표적인 패스트푸드이며, 패티, 버거빵, 치즈, 야채, 소스 등을 조합해 먹는다.','A hamburger is a classic American fast food that typically consists of a patty, a bun, cheese, vegetables, and sauce.','2023-05-03 18:22:31',NULL),(20,'핫도그','Hot dog',5000.00,'not vegetarian',6,1,'핫도그는 소시지를 구운 후, 빵 안에 넣어 소스와 함께 먹는 미국의 대표적인 길거리 음식이다.','A hot dog is a popular street food in the United States that consists of a sausage that is cooked and served inside a bun with various toppings and condiments.','2023-05-03 18:22:31',NULL),(21,'마카로니 앤 치즈','Macaroni and cheese',12000.00,'vegetarian',6,1,'마카로니 앤 치즈는 마카로니와 치즈를 사용해 만든 쉬운 요리이다. 미국에서 유래한 대표적인 음식 중 하나이다.','Macaroni and cheese is a simple dish made with macaroni and cheese sauce. It is a classic American dish.','2023-05-03 18:22:31',NULL),(22,'프렌치 토스트','French toast',10000.00,'vegetarian',6,1,'프렌치 토스트는 식빵을 계란과 우유, 시나몬 등으로 푼 뒤 튀겨 먹는 미국의 대표적인 아침식사 메뉴이다.','French toast is a classic American breakfast dish made by dipping bread in an egg and milk mixture, and then frying it until golden brown.','2023-05-03 18:22:31',NULL),(23,'치킨 낫젯','Chicken nuggets',9000.00,'not vegetarian',6,3,'치킨 낫젯은 치킨을 찹쌀가루와 튀김옷으로 감싸 노릇하게 구운 미국의 대표적인 패스트푸드이다.','Chicken nuggets are a popular fast food in the United States made by coating chicken in a mixture of flour and spices, and then deep-frying it until crispy.','2023-05-03 18:22:31',NULL),(24,'Tacos al pastor','Tacos al pastor',8000.00,'not vegetarian',7,3,'돼지고기가 다진 양파와 함께 구운 후 토트차로 구워지는 터키식 케밥 타코입니다.','Tacos made with pork meat marinated in achiote, then cooked on a vertical spit and served with diced onions, pineapple and cilantro.','2023-05-03 18:24:02',NULL),(25,'Guacamole','Guacamole',7000.00,'vegetarian',7,1,'아보카도, 토마토, 양파, 청양고추와 식초, 소금, 후추를 함께 으깬 딥입니다.','A dip made from mashed avocados, tomatoes, onions, jalapeños, lime juice, salt and pepper.','2023-05-03 18:24:02',NULL),(26,'Enchiladas','Enchiladas',10000.00,'not vegetarian',7,2,'고기, 치즈, 야채가 채워진 쇠고기로 구운 새우와 새우입니다. 토마토 소스와 치즈로 가득 채워져 있습니다.','Tortillas filled with meat, cheese or vegetables, rolled up and baked with tomato sauce and cheese on top.','2023-05-03 18:24:02',NULL),(27,'Chiles en nogada','Chiles en nogada',25000.00,'not vegetarian',7,4,'고기와 견과류가 채워진 초록색 고추입니다. 백합 꽃과 유기농 케이퍼가 들어간 크림소스로 덮어져 있습니다.','Poblano chiles filled with meat and nuts, covered in a cream sauce made with walnuts, pomegranate seeds, and capers, and garnished with parsley.','2023-05-03 18:24:02',NULL),(28,'Tamales','Tamales',9000.00,'not vegetarian',7,2,'옥수수 반죽에 고기, 양파, 고추를 넣어 만든 식사입니다.','A traditional Mexican dish made of masa (a type of corn dough) that is filled with meat, onions, peppers, and sometimes cheese or other ingredients, and steamed or boiled in a corn husk.','2023-05-03 18:24:02',NULL),(29,'Arepas','Arepas',7000.00,'vegetarian',8,1,'아레파는 콜롬비아의 전통적인 빵입니다. 옥수수 가루로 만들어지며, 종종 치즈나 고기와 함께 먹습니다.','Arepas are a traditional bread in Colombia made from cornmeal and often served with cheese or meat.','2023-05-03 18:25:33',NULL),(30,'Bandeja Paisa','Bandeja Paisa',20000.00,'not vegetarian',8,4,'반데하 파이사는 콜롬비아의 안디나 지방에서 온 대표적인 음식입니다. 쌀, 콩, 스팸, 양파, 아보카도, 삶은 계란, 치즈, 아레파 등이 함께 제공됩니다.','Bandeja paisa is a typical dish from the Andean region of Colombia, which includes rice, beans, spam, onions, avocado, boiled egg, cheese, and arepas.','2023-05-03 18:25:33',NULL),(31,'Empanadas','Empanadas',5000.00,'not vegetarian',8,3,'엠파나다는 만들기 쉬우면서도 맛있는 콜롬비아의 분식입니다. 소고기, 닭고기, 고기, 채소 등 다양한 재료로 만들 수 있습니다.','Empanadas are a popular Colombian snack made from dough filled with beef, chicken, meat, or vegetables.','2023-05-03 18:25:33',NULL),(32,'Patacones','Patacones',6000.00,'vegetarian',8,2,'파타콘은 녹색 바나나를 곱게 다져서 노릇하게 구운 것입니다. 이것은 콜롬비아에서 대표적인 스낵 중 하나입니다.','Patacones are crispy fried green plantains, and are a popular snack in Colombia.','2023-05-03 18:25:33',NULL),(33,'Sancocho','Sancocho',15000.00,'not vegetarian',8,2,'산코초는 콜롬비아의 전통적인 수프입니다. 닭고기, 소고기 또는 생선 등과 녹색 바나나, 양파, 감자, 아보카도 등의 재료로 만들어집니다.','Sancocho is a traditional Colombian soup made with chicken, beef, or fish and ingredients such as green plantains, onions, potatoes, and avocado.','2023-05-03 18:25:33',NULL),(34,'프라이또스','Pão de queijo',5000.00,'vegetarian',9,2,'브라질 미나스 제라이스 주의 전통 빵으로, 치즈와 요구르트 등을 사용하여 만든다. 쫄깃한 식감과 독특한 치즈 향이 특징이다.','A traditional bread from Minas Gerais, Brazil, made with cheese and yogurt. It has a chewy texture and a unique cheese flavor.','2023-05-03 18:29:54',NULL),(35,'모크카','Moqueca',20000.00,'not vegetarian',9,3,'브라질 발리아 주에서 시작된 해산물 요리로, 카푸아수 강 주변 지역에서 유행한다. 양념이 가미된 해산물과 코코넛 밀크, 야채가 사용되며, 라이스나 매니오크 라이스와 함께 맛볼 수 있다.','A seafood stew originally from the state of Bahia in Brazil, popular in the Capoeira region. It is made with seasoned seafood, coconut milk, and vegetables and is typically served with rice or manioc flour.','2023-05-03 18:29:54',NULL),(36,'피케이데갈린하','Feijoada',15000.00,'not vegetarian',9,2,'브라질의 국민음식으로, 콩 요리와 돼지고기, 소시지 등의 육류가 들어간다. 브라질 각 지역에서 약간의 차이가 있으며, 김치 등을 곁들여 먹기도 한다.','The national dish of Brazil, a stew made with beans and pork, sausage, and other meats. There are regional variations across Brazil and it is sometimes served with kimchi or other side dishes.','2023-05-03 18:29:54',NULL),(37,'바이아드코카','Vatapá de coco',18000.00,'vegetarian',9,3,'코코넛 밀크, 빵 가루, 새우, 아몬드 등으로 만든 브라질 요리로, 바이아 주를 대표하는 전통 음식 중 하나이다. 특유의 향과 맛을 가지고 있으며, 라이스나 매니오크 라이스와 함께 맛볼 수 있다.','A Brazilian dish made with coconut milk, bread crumbs, shrimp, almonds, and other ingredients. It is a traditional dish from Bahia state and has a unique flavor and aroma. It is typically served with rice or manioc flour.','2023-05-03 18:29:54',NULL),(38,'애호박 엘 모로','Ajiaco de zapallo',12000.00,'vegetarian',10,2,'애호박, 옥수수, 감자, 설탕수염, 콩 등으로 만든 칠레 퓨어의 전통 음식입니다.','Ajiaco de zapallo is a traditional Chilean dish made with pumpkin, corn, potato, string beans, and beans.','2023-05-03 18:33:51',NULL),(39,'엠판나다','Empanadas',5000.00,'not vegetarian',10,3,'채소, 고기, 치즈 등으로 만든 파이 모양의 음식으로 칠레에서 가장 인기있는 스낵 음식 중 하나입니다.','Empanadas are pie-shaped pastries filled with vegetables, meat, cheese, and more. They are one of the most popular snack foods in Chile.','2023-05-03 18:33:51',NULL),(40,'포르투게사','Porotos con riendas',9000.00,'vegetarian',10,1,'콩, 스파게티, 호박, 감자 등으로 만든 전통적인 칠레 요리입니다.','Porotos con riendas is a traditional Chilean dish made with beans, spaghetti, squash, potatoes, and more.','2023-05-03 18:33:51',NULL),(41,'크루도르','Curanto',35000.00,'not vegetarian',10,4,'식물성 재료, 육류, 해산물 등 다양한 재료를 바위 위에 올려 누텔 수 없는 요리입니다. 산도와 함께 제공됩니다.','Curanto is an iconic Chilean dish that is cooked by placing various ingredients, such as plant-based materials, meats, and seafood, on top of hot rocks. It is served with pebre sauce.','2023-05-03 18:33:51',NULL),(42,'칠레 감자 크림 수프','Crema de Zapallo',8000.00,'vegetarian',10,2,'애호박, 감자, 우유, 설탕, 버터, 양파 등으로 만든 부드러운 크림 수프입니다.','Crema de Zapallo is a smooth cream soup made with pumpkin, potatoes, milk, sugar, butter, onions, and more.','2023-05-03 18:33:51',NULL),(43,'팟차','Pho',10000.00,'not vegetarian',11,2,'쌀 국수와 양지살, 양파, 생강 등의 향신료로 만든 베트남 국수요리입니다.','Pho is a Vietnamese noodle dish made with rice noodles and spices such as beef, onions, and ginger.','2023-05-03 18:42:34',NULL),(44,'반미','Banh mi',5000.00,'not vegetarian',11,3,'프랑스식 베이크드 롤 위에 다양한 채소, 고기, 양념 등을 올려 만든 베트남식 샌드위치입니다.','Banh mi is a Vietnamese sandwich made with a French-style baguette and filled with various vegetables, meats, and seasonings.','2023-05-03 18:42:34',NULL),(45,'봄 롤','Goi cuon',8000.00,'vegetarian',11,1,'국수, 새싹 채소, 새우, 돼지고기 등을 쌓아 만든 베트남식 냉국수입니다.','Goi cuon is a Vietnamese cold noodle dish made with rice noodles, fresh vegetables, shrimp, pork, and more.','2023-05-03 18:42:34',NULL),(46,'콩나물 샐러드','Nom đu đủ',7000.00,'vegetarian',11,2,'파인애플, 콩나물, 당근, 양파, 생강 등으로 만든 상큼한 샐러드입니다.','Nom du du is a refreshing salad made with pineapple, bean sprouts, carrots, onions, ginger, and more.','2023-05-03 18:42:34',NULL),(47,'부추 팬케이크','Banh khot',12000.00,'not vegetarian',11,4,'국내산 쌀가루, 콩가루, 부추, 새우 등을 사용해 만든 작고 귀여운 팬케이크입니다.','Banh khot is a small, cute pancake made with domestic rice flour, bean flour, chives, shrimp, and more.','2023-05-03 18:42:34',NULL),(48,'팟 타이','Pad Thai',8000.00,'not vegetarian',12,3,'쌀국수와 식용유, 대파, 땅콩, 대추, 망고, 라임 등으로 만든 태국의 대표적인 스트리리트 푸드입니다.','Pad Thai is a popular Thai street food made with rice noodles, vegetable oil, scallions, peanuts, tamarind, mango, lime, and more.','2023-05-03 18:46:27',NULL),(49,'쏘우 레콕','Tom Yum Goong',12000.00,'not vegetarian',12,5,'새우, 토마토, 레몬그라스, 갈랑갈랑, 청양고추, 라임 등을 넣어 만든 태국 대표 스프 요리입니다.','Tom Yum Goong is a famous Thai soup dish made with shrimp, tomatoes, lemongrass, galangal, chili peppers, lime, and more.','2023-05-03 18:46:27',NULL),(50,'카오 팟','Khao Pad',6000.00,'not vegetarian',12,2,'밥에 달걀, 양파, 청경채, 마늘 등을 볶아 만든 태국식 볶음밥입니다.','Khao Pad is a Thai-style fried rice dish made with rice, eggs, onions, Chinese kale, garlic, and more.','2023-05-03 18:46:27',NULL),(51,'사누앙','Som Tam',7000.00,'vegetarian',12,4,'푸아라쿠, 청양고추, 새콤달콤한 타마린드 등을 이용한 태국 대표 샐러드 요리입니다.','Som Tam is a Thai salad dish made with green papaya, chili peppers, and tangy tamarind.','2023-05-03 18:46:27',NULL),(52,'카오 소이','Khao Soi',10000.00,'not vegetarian',12,4,'누드들, 코코넛 밀크, 새우, 채소, 라임 등을 이용한 붉은 커리 계열의 전통 요리입니다.','Khao Soi is a traditional Thai dish made with egg noodles, coconut milk, shrimp, vegetables, lime, and a red curry-based broth.','2023-05-03 18:46:27',NULL),(53,'짜장면','Jajangmyeon',8000.00,'vegetarian',13,1,'짜장면은 중국의 대표적인 면 요리로 두꺼운 카페색의 짜장 소스를 곁들인 면요리이다.','Jajangmyeon is a representative noodle dish of China that is served with thick, dark brown sauce made with fermented soybeans.','2023-05-03 18:47:50',NULL),(54,'북경오리','Peking duck',40000.00,'not vegetarian',13,2,'북경오리는 중국 북경의 대표적인 요리로 구운 오리 살코기와 얇은 바싹에 싸서 먹는 요리이다.','Peking duck is a famous dish from Beijing, China, which is made by roasting duck and serving the tender meat with thin pancakes.','2023-05-03 18:47:50',NULL),(55,'마파두부','Mapo tofu',9000.00,'vegetarian',13,3,'마파두부는 두부와 쇠고기, 된장 등으로 만든 매운 소스를 곁들인 중국 요리이다.','Mapo tofu is a Chinese dish made with tofu, minced beef, fermented broad bean paste, and spicy sauce.','2023-05-03 18:47:50',NULL),(56,'샤오롱바오','Xiaolongbao',12000.00,'not vegetarian',13,2,'샤오롱바오는 얇은 밀가루 피로 만든 찐 만두이며, 속에는 돼지고기, 쇠고기, 대하 등이 들어있다.','Xiaolongbao is a type of steamed bun made of thin wheat flour dough, filled with pork, beef, or shrimp.','2023-05-03 18:47:50',NULL),(57,'딤섬','Dim sum',10000.00,'not vegetarian',13,1,'딤섬은 다양한 종류의 찐만두와 요리를 의미하며, 보통 아침에 먹는 중국식 브런치로 유명하다.','Dim sum refers to a variety of steamed dumplings and dishes and is famous as a Chinese-style brunch typically eaten in the morning.','2023-05-03 18:47:50',NULL),(58,'초밥','Sushi',20000.00,'vegetarian',14,1,'초밥은 일본의 대표적인 음식 중 하나로, 주로 회와 고기, 야채 등을 식초와 함께 식용하는 음식입니다.','Sushi is a representative food of Japan. It is a dish made with vinegar rice and various ingredients such as raw fish, seafood, and vegetables.','2023-05-03 18:49:13',NULL),(59,'초밥','Sushi',20000.00,'vegetarian',14,1,'초밥은 일본의 대표적인 음식 중 하나로, 주로 회와 고기, 야채 등을 식초와 함께 식용하는 음식입니다.','Sushi is a representative food of Japan. It is a dish made with vinegar rice and various ingredients such as raw fish, seafood, and vegetables.','2023-05-03 18:49:29',NULL),(60,'초밥','Sushi',20000.00,'vegetarian',14,2,'바다에서 잡은 신선한 회를 밥 위에 얹어 먹는 일본의 대표적인 음식입니다.','Sushi is a representative Japanese dish where fresh fish caught from the sea is placed on top of rice.','2023-05-03 18:54:16',NULL),(61,'우동','Udon',8000.00,'vegetarian',14,1,'국물과 함께 먹는 국수로, 일본에서 자주 먹는 대표적인 음식 중 하나입니다.','Udon is a type of noodle dish that is often eaten in Japan with soup.','2023-05-03 18:54:16',NULL),(62,'라멘','Ramen',10000.00,'not vegetarian',14,3,'고기 또는 해산물 국물과 함께 먹는 면 요리로, 일본에서 인기 있는 음식입니다.','Ramen is a popular Japanese dish that consists of noodles served with meat or seafood broth.','2023-05-03 18:54:16',NULL),(63,'오야꼬동','Oyakodon',12000.00,'not vegetarian',14,2,'닭고기와 달걀이 들어간 일본의 전통 음식입니다.','Oyakodon is a traditional Japanese dish made with chicken and egg.','2023-05-03 18:54:16',NULL),(64,'규동','Gyudon',9000.00,'not vegetarian',14,2,'소고기를 양념하여 밥 위에 올린 일본의 전통 음식입니다.','Gyudon is a traditional Japanese dish made by seasoning beef and placing it on top of rice.','2023-05-03 18:54:16',NULL),(65,'버터 치킨','Butter chicken',15000.00,'not vegetarian',15,3,'치킨 조각을 바게트와 함께 토마토 크림 소스에 버무린 인도의 대표적인 음식입니다.','Butter chicken is a popular Indian dish where pieces of chicken are cooked in a tomato cream sauce and served with naan.','2023-05-03 18:55:44',NULL),(66,'사모사','Samosa',1000.00,'vegetarian',15,1,'감자와 양파, 채소 등으로 만든 육즙이 맛있는 인도의 간단한 간식입니다.','Samosa is a delicious and simple Indian snack made with potatoes, onions, vegetables, and spices.','2023-05-03 18:55:44',NULL),(67,'파니르 마사라','Paneer makhani',18000.00,'vegetarian',15,2,'인도의 대표적인 채식 요리로, 치즈와 토마토 크림 소스가 어우러진 요리입니다.','Paneer makhani is a popular vegetarian Indian dish made with cheese and a tomato cream sauce.','2023-05-03 18:55:44',NULL),(68,'카레','Curry',12000.00,'vegetarian',15,4,'간단한 레시피로 만들어지며, 고추, 생강, 마늘 등의 향신료로 만든 인도의 대표적인 음식입니다.','Curry is a popular Indian dish made with a simple recipe and spices like chili, ginger, and garlic.','2023-05-03 18:55:44',NULL),(69,'티카 마사라','Tikka masala',20000.00,'not vegetarian',15,3,'인도의 대표적인 음식 중 하나로, 마리네이드한 육류가 크림과 토마토 소스에 버무려져 매우 맛있습니다.','Tikka masala is one of the most popular Indian dishes, made with marinated meat cooked in a creamy tomato sauce.','2023-05-03 18:55:44',NULL),(70,'브레츠','Bretzel',2000.00,'vegetarian',16,1,'독일의 대표적인 빵인 프레츨의 변형 버전으로, 소금과 버터로 만들어져 맛이 좋습니다.','Bretzel is a variation of the famous German bread pretzel, made with salt and butter for a delicious taste.','2023-05-03 18:57:10',NULL),(71,'포테이토 샐러드','Kartoffelsalat',8000.00,'vegetarian',16,1,'감자와 양파, 마요네즈, 식초 등으로 만든 독일의 전통 샐러드입니다.','Kartoffelsalat is a traditional German salad made with potatoes, onions, mayonnaise, vinegar, and other ingredients.','2023-05-03 18:57:10',NULL),(72,'송어','Forelle Müllerin',25000.00,'not vegetarian',16,2,'독일의 전통 생선 요리로, 송어를 버터와 시금치, 레몬 등과 함께 조리합니다.','Forelle Müllerin is a traditional German fish dish made with trout cooked in butter with spinach, lemon, and other ingredients.','2023-05-03 18:57:10',NULL),(73,'브라트부르스트','Bratwurst',10000.00,'not vegetarian',16,3,'독일의 대표적인 소시지 요리입니다. 돼지고기와 소고기, 양파, 마늘, 페퍼 등으로 만들어져 매우 맛있습니다.','Bratwurst is a popular German sausage dish made with pork and beef, onions, garlic, pepper, and other ingredients.','2023-05-03 18:57:10',NULL),(74,'비어','Bier',5000.00,'not vegetarian',16,0,'독일의 대표적인 알코올 음료입니다. 여러 가지 종류가 있으며, 독일의 문화와 밀접한 관련이 있습니다.','Bier is a popular German alcoholic beverage. There are many different types of beer and it is closely related to German culture.','2023-05-03 18:57:10',NULL),(75,'모우사카','Moussaka',15000.00,'not vegetarian',17,2,'토마토, 감자, 가지, 소고기, 치즈, 베시끼소스 등으로 만든 그리스의 대표적인 전통 요리입니다.','Moussaka is a famous traditional dish from Greece made with tomato, potato, eggplant, ground beef, cheese, and béchamel sauce.','2023-05-03 18:58:25',NULL),(76,'그리스 샐러드','Greek Salad',10000.00,'vegetarian',17,1,'토마토, 오이, 파프리카, 살라미, 올리브 등으로 만든 그리스의 대표적인 샐러드입니다.','Greek Salad is a famous salad from Greece made with tomato, cucumber, bell pepper, salami, olives, and other ingredients.','2023-05-03 18:58:25',NULL),(77,'스핀나크오파이','Spanakopita',8000.00,'vegetarian',17,1,'시금치, 피타빵, 리코타치즈 등으로 만든 그리스의 대표적인 패스트리 요리입니다.','Spanakopita is a famous pastry dish from Greece made with spinach, feta cheese, and phyllo pastry.','2023-05-03 18:58:25',NULL),(78,'살라미','Salamis',12000.00,'not vegetarian',17,2,'돼지고기와 양파, 마늘 등으로 만든 그리스의 대표적인 소시지 요리입니다.','Salamis is a famous sausage dish from Greece made with pork, onion, garlic, and other ingredients.','2023-05-03 18:58:25',NULL),(79,'옥타포디','Octapodi',20000.00,'not vegetarian',17,3,'오징어를 그리스식으로 조리한 요리입니다. 토마토, 마늘, 채소 등과 함께 먹습니다.','Octapodi is a traditional Greek dish made with octopus cooked in tomato sauce with garlic, vegetables, and other ingredients.','2023-05-03 18:58:25',NULL),(80,'파에야','Paella',15000.00,'not vegetarian',18,2,'파에야는 스페인 발렌시아 지방에서 유래된 국민적인 요리로, 살조 밥과 해산물, 살시사 등을 함께 조리한 요리입니다.','Paella is a traditional Spanish dish from the Valencia region, made with saffron rice, seafood, chorizo, and other meats.','2023-05-03 19:01:54',NULL),(81,'자몽소다','Sangria',10000.00,'not vegetarian',18,0,'자몽소다는 레몬즙, 포도주, 브랜디, 설탕, 탄산수 등을 섞어 만든 시원한 칵테일입니다.','Sangria is a refreshing cocktail made with lemon juice, wine, brandy, sugar, sparkling water, and fruit.','2023-05-03 19:01:54',NULL),(82,'자몽소다','Gazpacho',8000.00,'vegetarian',18,1,'가스파초는 스페인에서 유래된 차가운 수프입니다. 토마토, 오이, 파프리카 등을 갈아 만든 수프로, 빵 굽은 국수와 함께 즐기기도 합니다.','Gazpacho is a cold soup that originated in Spain. It is made by blending tomatoes, cucumbers, peppers, and other vegetables, and is often served with toasted croutons.','2023-05-03 19:01:54',NULL),(83,'파타스','Patatas Bravas',7000.00,'vegetarian',18,3,'파타스 브라바스는 감자를 깊게 튀긴 후, 토마토 소스와 마요네즈를 곁들인 요리입니다. 스페인에서는 술과 함께 즐기기도 합니다.','Patatas Bravas are deep-fried potatoes served with a spicy tomato sauce and mayonnaise. They are often enjoyed as a snack or appetizer, and are typically served with a cold beer or wine.','2023-05-03 19:01:54',NULL),(84,'크레페','Crepe',8000.00,'vegetarian',19,0,'크레페는 유래지가 프랑스로 알려진 음식입니다. 밀가루와 우유를 섞어 만든 반죽에 달걀, 설탕 등을 넣고 팬에서 부드럽게 굽는 것이 특징입니다. 딸기, 바나나, 쇠고기, 치즈 등 다양한 재료를 넣어 먹을 수 있습니다.','Crepe is a food that is known to originate from France. It is characterized by mixing flour and milk to make a batter, and adding eggs, sugar, etc. and cooking it on a pan until it is soft. You can eat it with a variety of ingredients such as strawberries, bananas, beef, cheese, etc.','2023-05-03 19:05:07',NULL),(85,'상트라타르','Steak Tartare',25000.00,'not vegetarian',19,3,'상트라타르는 소고기 등심에 양파, 케피, 달걀 노른자, 마늘, 마스터드, 토마토 소스 등을 함께 썰어 넣어 만든 프랑스 요리입니다. 양념을 함께 버무려 먹는 것이 일반적입니다.','Steak Tartare is a French dish made by slicing beef tenderloin with onions, capers, egg yolks, garlic, mustard, tomato sauce, etc. It is common to mix the seasoning together and eat it.','2023-05-03 19:05:07',NULL),(86,'바게트','Baguette',3000.00,'vegetarian',19,0,'바게트는 길쭉하게 구운 프랑스 빵입니다. 밀가루, 물, 소금, 이스트 등을 이용해 만들며, 평소에는 아침 식사나 간식으로 자주 먹습니다.','Baguette is a long, thin French bread that is baked. It is made using flour, water, salt, yeast, etc., and is often eaten for breakfast or as a snack.','2023-05-03 19:05:07',NULL),(87,'피자','Pizza',15000.00,'vegetarian',20,3,'이탈리아의 대표 음식으로, 두꺼운 바삭한 도우 위에 토마토 소스와 치즈를 올린 음식입니다.','Pizza is Italy\'s signature dish, made with thick crispy crust topped with tomato sauce and cheese.','2023-05-03 19:10:20',NULL),(88,'스파게티','Spaghetti',12000.00,'vegetarian',20,2,'면을 물에 삶아 토마토 소스와 함께 새콤하고 풍미 있는 이탈리안 파스타 요리입니다.','Spaghetti is a delicious and flavorful Italian pasta dish made by boiling noodles and serving them with a tangy tomato sauce.','2023-05-03 19:10:20',NULL),(89,'리조또','Risotto',20000.00,'vegetarian',20,2,'누릇하게 볶은 쌀에 치즈와 버섯, 와인 등을 넣어 살짝 풀어낸 풍미를 느낄 수 있는 이탈리안 요리입니다.','Risotto is a savory Italian dish made by sautéing rice until it\'s slightly crispy and then adding cheese, mushrooms, wine, and other ingredients to create a rich and flavorful taste.','2023-05-03 19:10:20',NULL),(90,'라자냐','Lasagna',18000.00,'not vegetarian',20,2,'층층이 쌓인 면과 고기, 치즈, 토마토 소스 등으로 만든 이탈리안 대표 파스타 요리입니다.','Lasagna is a classic Italian pasta dish made with layers of noodles, meat, cheese, and tomato sauce.','2023-05-03 19:10:20',NULL),(91,'오소 부코','Osso Buco',30000.00,'not vegetarian',20,2,'쇠고기의 족저를 끓인 이탈리안 요리로, 새콤한 토마토 소스와 함께하는 것이 일반적입니다.','Osso Buco is an Italian dish made by boiling beef shanks and serving them with a tangy tomato sauce. It is usually served with vegetables and bread.','2023-05-03 19:10:20',NULL),(92,'오타이','Ota ika',20000.00,'not vegetarian',21,2,'생선을 썰어 레몬과 코코넛 밀크, 양파, 청양고추, 고수 등을 넣어 만든 전통적인 새모아 요리입니다.','Ota ika is a traditional Samoan dish made by chopping fish and mixing it with lemon, coconut milk, onions, chili peppers, cilantro, and other ingredients.','2023-05-03 19:12:58',NULL),(93,'파라','Palusami',15000.00,'vegetarian',21,1,'무순, 코코넛 밀크, 양파를 겹겹이 쌓아서 구운 요리입니다.','Palusami is a baked dish made by layering taro leaves with coconut milk and onions.','2023-05-03 19:12:58',NULL),(94,'스팸무스비','Spam Musubi',5000.00,'not vegetarian',21,0,'스팸과 쌀밥, 일부 녹초를 넣고 해먹기 좋게 손질한 요리로, 일종의 샌드위치입니다.','Spam Musubi is a hand-held sandwich-like dish made by combining sliced spam with rice and nori.','2023-05-03 19:12:58',NULL),(95,'우베','Ulu poi',10000.00,'vegetarian',21,3,'우루(특정 열대지방의 열매)를 끓여서 으깬 뒤 발효시켜 만든 요리로, 샘오아의 전통적인 식사 중 하나입니다.','Ulu poi is a traditional Samoan dish made by boiling breadfruit and mashing it into a paste, which is then fermented.','2023-05-03 19:12:58',NULL),(96,'파이야','Pai fai',12000.00,'vegetarian',21,1,'콩과 코코넛을 이용한 달콤한 디저트로, 전통적인 샘오아 요리입니다.','Pai fai is a traditional Samoan dessert made with beans and coconut milk, creating a sweet and creamy taste.','2023-05-03 19:12:58',NULL),(97,'비프 파이','Beef pie',10000.00,'not vegetarian',22,3,'비프 파이는 호주에서 인기 있는 전통 음식입니다.','Beef pie is a popular traditional food in Australia.','2023-05-03 19:14:21',NULL),(98,'램 프라이','Lamington',5000.00,'vegetarian',22,2,'램 프라이는 초콜릿과 코코넛으로 덮여진 스폰지 케이크입니다.','Lamington is a sponge cake covered in chocolate and coconut.','2023-05-03 19:14:21',NULL),(99,'데미 글레이즈드','Damper bread',8000.00,'vegetarian',22,1,'데미 글레이즈드는 호주의 전통적인 빵입니다.','Damper bread is a traditional bread in Australia.','2023-05-03 19:14:21',NULL),(100,'비프 스튜','Beef stew',15000.00,'not vegetarian',22,4,'비프 스튜는 호주의 인기 있는 전통 음식 중 하나입니다.','Beef stew is one of the popular traditional foods in Australia.','2023-05-03 19:14:21',NULL),(101,'비틀즈 파이','Beetroot pie',12000.00,'vegetarian',22,2,'비틀즈 파이는 비트를 사용하여 만든 호주식 파이입니다.','Beetroot pie is an Australian pie made using beetroot.','2023-05-03 19:14:21',NULL),(102,'콩과 코코넛 밥','Kakamoras',8000.00,'vegetarian',23,2,'콩과 코코넛 밥은 코코넛 밥과 콩, 채소를 함께 끓여 만든 요리입니다.','Kakamoras is a dish made of coconut rice, beans, and vegetables.','2023-05-03 19:15:35',NULL),(103,'파라드','Palauan soup',12000.00,'not vegetarian',23,3,'파라드는 고등어, 레몬 그라스, 캐러웨이 씨드, 고추 등을 넣고 끓인 마샬 제도의 전통 스프입니다.','Palauan soup is a traditional soup in the Marshall Islands made with mackerel, lemongrass, caraway seeds, chili peppers, and other ingredients.','2023-05-03 19:15:35',NULL),(104,'케이크 나츠','Keke lāwal',10000.00,'vegetarian',23,1,'케이크 나츠는 코코넛과 땅콩으로 만든 마샬 제도의 전통 디저트입니다.','Keke lāwal is a traditional Marshallese dessert made with coconut and peanuts.','2023-05-03 19:15:35',NULL),(105,'투나','Tuna poke',15000.00,'not vegetarian',23,4,'투나 포케는 참치, 녹색 양파, 미나리, 대파, 미역 등으로 만든 전통적인 마샬 제도의 음식입니다.','Tuna poke is a traditional Marshallese dish made with tuna, green onions, parsley, scallions, seaweed, and other ingredients.','2023-05-03 19:15:35',NULL),(106,'쿠키즈','Kukumai',5000.00,'vegetarian',23,2,'쿠키즈는 마샬 제도의 전통 쿠키로, 코코넛, 박력분, 설탕, 바닐라 등을 사용하여 만듭니다.','Kukumai is a traditional Marshallese cookie made with coconut, flour, sugar, vanilla, and other ingredients.','2023-05-03 19:15:35',NULL),(107,'후아카','Huahua',13000.00,'not vegetarian',24,2,'후아카는 뉴질랜드 원주민 매아오리가 만든 찰기름 같은 떡입니다. 영양가가 높고 맛도 좋아서 뉴질랜드에서는 인기가 많은 음식 중 하나입니다.','Huahua is a sticky, doughy cake made by the Maori, the indigenous people of New Zealand. It is highly nutritious and delicious, and is a popular food in New Zealand.','2023-05-03 19:17:12',NULL),(108,'허키','Hāngī',25000.00,'not vegetarian',24,4,'허키는 땅 속에서 음식을 조리하는 전통적인 뉴질랜드 요리입니다. 돌로 땅을 덮고 그 위에 음식 재료를 올려 조리합니다. 주로 돼지고기, 양고기, 닭고기와 뿌리채소, 고구마 등을 함께 조리합니다.','Hāngī is a traditional New Zealand dish in which food is cooked in the ground. Stones are heated and placed over the food, which is then covered with soil and left to cook. It typically consists of meats such as pork, lamb, and chicken, as well as root vegetables and sweet potatoes.','2023-05-03 19:17:12',NULL),(109,'페이크 카이','Pāua Kai',35000.00,'not vegetarian',24,3,'페이크 카이는 바다에서 채취한 모래버섯을 요리한 음식입니다. 모래버섯은 부드러운 식감과 고소한 맛이 특징입니다.','Pāua Kai is a dish made from abalone, a type of sea snail found in New Zealand. It is known for its tender texture and savory flavor.','2023-05-03 19:17:12',NULL),(110,'라멘','Ramen',12000.00,'not vegetarian',24,2,'라멘은 일본에서 유래한 면 요리로, 뉴질랜드에서도 인기 있는 음식 중 하나입니다. 면발이 탄력있고 국물이 짭짤한 특징이 있습니다.','Ramen is a noodle dish that originated in Japan and is now popular in New Zealand. The noodles are known for their chewy texture and the broth is usually salty and flavorful.','2023-05-03 19:17:12',NULL),(111,'Kelaguen','Kelaguen',8000.00,'not vegetarian',25,3,'코코넛, 라임 주스, 녹색 양파, 후추와 함께 찹쌀가루로 만든 소고기 샐러드','Beef salad made with grated coconut, lime juice, green onions, and chili pepper','2023-05-03 19:18:27',NULL),(112,'Chalakiles','Chalakiles',9000.00,'vegetarian',25,2,'따뜻한 토마토 소스에 토마토 페이스트, 양파, 마늘, 후추와 함께 유색 부대찌개와 부드러운 옥수수 청을 섞어 만든 케이크','Cake made with colorful dumplings and soft corn green mixed with warm tomato sauce, tomato paste, onion, garlic, and pepper','2023-05-03 19:18:27',NULL),(113,'Apigigi','Apigigi',7500.00,'vegetarian',25,1,'코코넛과 옥수수 옥수수 반죽을 굽은 국수','Noodles baked with coconut and corn corn dough','2023-05-03 19:18:27',NULL),(114,'Titiyas','Titiyas',6000.00,'vegetarian',25,0,'코코넛과 곡물을 섞은 빵','Bread made with coconut and grains mixed','2023-05-03 19:18:27',NULL),(115,'Lumpia','Lumpia',10000.00,'vegetarian',25,2,'케이준, 양파, 당근, 양배추, 쌀 식초, 감자 전분, 후추와 함께 만든 야채 롤','Vegetable rolls made with cabbage, carrots, onions, and other vegetables, vinegar and potato starch, and pepper','2023-05-03 19:18:27',NULL);
/*!40000 ALTER TABLE `foods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `food_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `food_id` (`food_id`),
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meat_foods`
--

DROP TABLE IF EXISTS `meat_foods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meat_foods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `food_id` int NOT NULL,
  `meat_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `food_id` (`food_id`),
  KEY `meat_id` (`meat_id`),
  CONSTRAINT `meat_foods_ibfk_1` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`),
  CONSTRAINT `meat_foods_ibfk_2` FOREIGN KEY (`meat_id`) REFERENCES `meats` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meat_foods`
--

LOCK TABLES `meat_foods` WRITE;
/*!40000 ALTER TABLE `meat_foods` DISABLE KEYS */;
/*!40000 ALTER TABLE `meat_foods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meats`
--

DROP TABLE IF EXISTS `meats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `meat` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `eng_meat` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meats`
--

LOCK TABLES `meats` WRITE;
/*!40000 ALTER TABLE `meats` DISABLE KEYS */;
/*!40000 ALTER TABLE `meats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_price` decimal(12,2) NOT NULL DEFAULT '0.00',
  `order_count` int NOT NULL DEFAULT '0',
  `food_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `food_id` (`food_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_status`
--

DROP TABLE IF EXISTS `order_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status_code` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_status`
--

LOCK TABLES `order_status` WRITE;
/*!40000 ALTER TABLE `order_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_number` varchar(300) COLLATE utf8mb4_general_ci NOT NULL,
  `order_status_id` int NOT NULL,
  `user_id` int NOT NULL,
  `order_items_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `order_status_id` (`order_status_id`),
  KEY `user_id` (`user_id`),
  KEY `order_items_id` (`order_items_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`order_status_id`) REFERENCES `order_status` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`order_items_id`) REFERENCES `order_items` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `food_id` int NOT NULL,
  `review` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `food_id` (`food_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schema_migrations`
--

DROP TABLE IF EXISTS `schema_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schema_migrations` (
  `version` varchar(128) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schema_migrations`
--

LOCK TABLES `schema_migrations` WRITE;
/*!40000 ALTER TABLE `schema_migrations` DISABLE KEYS */;
INSERT INTO `schema_migrations` VALUES ('20230504011305'),('20230504011306'),('20230504011309'),('20230504011312'),('20230504011315'),('20230504011319'),('20230504011324'),('20230504011326'),('20230504011334'),('20230504011338'),('20230504011342'),('20230504011345'),('20230504011349'),('20230504011352'),('20230504011357'),('20230504011401'),('20230504054557');
/*!40000 ALTER TABLE `schema_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(400) COLLATE utf8mb4_general_ci NOT NULL,
  `first_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `address_id` int NOT NULL,
  `phone_number` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `gender` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `points` decimal(12,2) NOT NULL DEFAULT '0.00',
  `birth_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `address_id` (`address_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-04 17:27:24
