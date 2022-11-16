-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-03-2020 a las 01:27:16
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gidonidv`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentario` int(50) NOT NULL,
  `id_usuario` int(50) NOT NULL,
  `id_producto` int(50) NOT NULL,
  `comentario` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id_comentario`, `id_usuario`, `id_producto`, `comentario`, `fecha`) VALUES
(33, 17, 9, 'Puede que en ese precio hayan influido las numerosas críticas de la comunidad de usuarios, pero lo cierto es que nos encontramos ante unas buenas candidatas para muchos usuarios que están buscando nuevas gráficas para sus PCs de sobremesa.', '2020-02-16'),
(34, 18, 9, 'Teniendo en cuenta que es difícil ver estas gráficas por debajo de los 400 euros, puede que tengamos aquí la más interesante de todas las integrantes de la nueva familia GeForce RTX 2000', '2020-02-16'),
(35, 18, 1, 'Una de las placas mas base actualmente. Buen rendimiento y a buen precio.', '2020-02-16'),
(36, 18, 2, 'Una placa que fue bastante criticada. Es accesible pero si pueden, vayan por una NO -Founder Edition-, ya que estas calientan mucho.  ', '2020-02-16'),
(37, 19, 4, 'Esta web-cam es super recomendada. Tiene una calidad de 1080p y es 16:9  con 60-fps. ', '2020-02-16'),
(38, 19, 1, 'Buen producto. Para la actualidad, tiene buen rendimiento y precio accesible.', '2020-02-16'),
(39, 1, 2, 'uh, que placa de mierda.', '2020-03-07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localidades`
--

CREATE TABLE `localidades` (
  `id_localidad` int(50) NOT NULL,
  `localidad` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `localidades`
--

INSERT INTO `localidades` (`id_localidad`, `localidad`) VALUES
(1, 'Argentina'),
(2, 'Chile'),
(3, 'Uruguay'),
(4, 'Paraguay');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

CREATE TABLE `marcas` (
  `id_marca` int(50) NOT NULL,
  `marca` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `marcas`
--

INSERT INTO `marcas` (`id_marca`, `marca`) VALUES
(1, 'AMD'),
(2, 'ASUS'),
(3, 'INTEL'),
(4, 'NVIDIA'),
(5, 'MSI'),
(6, 'LOGITECH'),
(7, 'ROG'),
(14, 'GENIUS'),
(15, 'SAMSUNG'),
(16, 'RAZER'),
(17, 'XP-Pen'),
(18, 'Amazon'),
(19, 'GIGABYTE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `niveles`
--

CREATE TABLE `niveles` (
  `id_nivel` int(10) NOT NULL,
  `nivel` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `niveles`
--

INSERT INTO `niveles` (`id_nivel`, `nivel`) VALUES
(1, 'admin'),
(2, 'usuario'),
(3, 'visitante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(50) NOT NULL,
  `id_marca` int(50) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `presentacion` varchar(100) DEFAULT NULL,
  `precio` decimal(9,2) DEFAULT NULL,
  `foto` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `id_marca`, `nombre`, `presentacion`, `precio`, `foto`) VALUES
(1, 5, 'MSI GTX 1070 8GB', 'Placa de video MSI GTX 1070 de 8GB. Ideal para tu PC Gaming', '19499.99', '1.jpg'),
(2, 4, 'NVIDIA GTX 1080Ti 8GB', 'La nueva placa de NVIDIA GTX 1080Ti de 8GB! Ideal para tu PC Gamer!', '32800.00', '2.jpg'),
(3, 2, 'ASUS Strix 1080Ti 8GB', 'Ideal para tu pc gamer, ASUS Strix 1080Ti 8GB', '43550.00', '3.jpg'),
(4, 6, 'Webcam Logitech c922 1080p HD', 'Webcam Logitech c922 1080p HD', '5600.00', '4.jpg'),
(5, 17, 'Tableta gráfica XP-Pen Star G430S Black', '¡Explotá tu creatividad! Con tu tableta gráfica lograrás animaciones en 3D y dibujos de otro nivel. ', '2595.00', '5.jpg'),
(6, 18, 'Tablet Amazon Fire 7 KFMUWI 7\"', 'Gracias a su tecnología innovadora y versátil, esta tablet te brindará una nueva forma de entretenim', '4679.99', '6.jpg'),
(7, 15, 'Disco sólido externo Samsung T5 MU-PA1T0 1TB', 'Con el disco sólido Samsung vas a incrementar la capacidad de respuesta de tu equipo. Invertí en vel', '20000.00', '7.jpg'),
(8, 19, 'Placa de video Gigabyte GeForce GTX 10', 'Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el ', '11399.00', '8.jpg'),
(9, 2, 'Placa de video Asus GeForce RTX 20 Series', 'ROG-STRIX-RTX2080TI-O11G-GAMING 11GB', '140000.00', '9.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(50) NOT NULL,
  `usuario` varchar(30) DEFAULT NULL,
  `clave` varchar(10) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `apellido` varchar(20) DEFAULT NULL,
  `id_localidad` int(50) NOT NULL,
  `id_nivel` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `usuario`, `clave`, `nombre`, `apellido`, `id_localidad`, `id_nivel`) VALUES
(1, 'admin@swing.com', 'admin', 'Swing', 'Agencia', 1, 1),
(2, 'juan.gidoni@gmail.com', '123', 'Juan Ignacio', 'Gidoni', 1, 1),
(3, 'facundo.ibarzabal@davinci.edu.', 'facundo', 'Facundo', 'Ibarzabal', 1, 1),
(4, 'hugo.brizuela@davinci.edu.ar', 'hugo', 'Hugo', 'Brizuela', 1, 1),
(6, 'juan.perez@gmail.com', 'juan', 'Juan', 'Perez', 1, 2),
(8, 'test@dv', 'test', 'Test', 'DV', 1, 1),
(11, 'juan@test', 'juan', 'Juan', 'test', 1, 2),
(14, '123@123', '123', 'Prueba', 'DV', 1, 2),
(15, '123@gmail.123', '123', '123', '123', 1, 2),
(17, 'jorge@gmail.com', 'jorge', 'Jorge', 'Fernandez', 1, 2),
(18, 'ricardo@gmail.com', 'ricardo', 'Ricardo', 'Alfonsín', 1, 2),
(19, 'lucas@gmail.com', 'lucas', 'Lucas', 'Ruiz', 2, 2),
(20, 'diego@gmail.com', 'diego', 'Diego', 'Varas', 1, 2),
(21, '123@123.com', '123', '123', '123', 1, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`),
  ADD UNIQUE KEY `id_comentario` (`id_comentario`),
  ADD KEY `com_usuarios` (`id_usuario`),
  ADD KEY `com_productos` (`id_producto`);

--
-- Indices de la tabla `localidades`
--
ALTER TABLE `localidades`
  ADD PRIMARY KEY (`id_localidad`),
  ADD UNIQUE KEY `id_localidad` (`id_localidad`);

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id_marca`),
  ADD UNIQUE KEY `id_marca` (`id_marca`);

--
-- Indices de la tabla `niveles`
--
ALTER TABLE `niveles`
  ADD PRIMARY KEY (`id_nivel`),
  ADD UNIQUE KEY `id_nivel` (`id_nivel`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`),
  ADD UNIQUE KEY `id_producto` (`id_producto`),
  ADD KEY `productos_marcas` (`id_marca`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `id_usuario` (`id_usuario`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD KEY `usuarios_localidades` (`id_localidad`),
  ADD KEY `usuarios_niveles` (`id_nivel`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `localidades`
--
ALTER TABLE `localidades`
  MODIFY `id_localidad` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id_marca` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `niveles`
--
ALTER TABLE `niveles`
  MODIFY `id_nivel` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `com_productos` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `com_usuarios` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_marcas` FOREIGN KEY (`id_marca`) REFERENCES `marcas` (`id_marca`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_localidades` FOREIGN KEY (`id_localidad`) REFERENCES `localidades` (`id_localidad`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuarios_niveles` FOREIGN KEY (`id_nivel`) REFERENCES `niveles` (`id_nivel`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
