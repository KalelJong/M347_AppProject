DROP DATABASE IF EXISTS `ChatDB`;
CREATE DATABASE IF NOT EXISTS `ChatDB`;
USE `ChatDB`;

CREATE TABLE IF NOT EXISTS `chat` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE
);

CREATE TABLE IF NOT EXISTS `message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idchat` INT NOT NULL,
  `iduser` INT NOT NULL,
  `message` VARCHAR(250) NOT NULL,
  `senddate` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idmessage_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `FK_message_chat_idx` (`idchat` ASC) VISIBLE,
  INDEX `FK_message_user_idx` (`iduser` ASC) VISIBLE,
  CONSTRAINT `FK_message_chat` FOREIGN KEY (`idchat`) REFERENCES `chat` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_message_user` FOREIGN KEY (`iduser`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS `userhistory` (
  `iduser` INT NOT NULL,
  `idchat` INT NOT NULL,
  `lasttimeviewed` DATETIME NOT NULL,
  INDEX `FK_userhistory_user_idx` (`iduser` ASC) VISIBLE,
  INDEX `FK_userhostory_chat_idx` (`idchat` ASC) VISIBLE,
  CONSTRAINT `FK_userhistory_user` FOREIGN KEY (`iduser`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_userhostory_chat` FOREIGN KEY (`idchat`) REFERENCES `chat` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE
);