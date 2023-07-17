INSERT INTO Users (id, name, lastname, email, mobile_Phone, password, date_of_Birth, country, usertype)
VALUES
(1, 'Juan', 'Pérez', 'juan@example.com', '612345678', 'abc123', '1990-05-10', 'España', 'Normal'),
(2, 'María', 'García', 'maria@example.com', '612345679', 'def456', '1988-12-15', 'España', 'Normal'),
(3, 'Antonio', 'López', 'antonio@example.com', '612345680', 'ghi789', '1995-09-20', 'España', 'Normal'),
(4, 'Laura', 'Rodríguez', 'laura@example.com', '612345681', 'jkl012', '1987-07-04', 'España', 'Normal'),
(5, 'Manuel', 'Fernández', 'manuel@example.com', '612345682', 'mno345', '1992-03-29', 'España', 'Normal'),
(6, 'Isabel', 'Torres', 'isabel@example.com', '612345683', 'pqr678', '1998-11-12', 'España', 'Normal'),
(7, 'Sergio', 'Martínez', 'sergio@example.com', '612345684', 'stu901', '1991-06-25', 'España', 'Normal'),
(8, 'Paula', 'Sánchez', 'paula@example.com', '612345685', 'vwx234', '1989-02-18', 'España', 'Normal'),
(9, 'Javier', 'Romero', 'javier@example.com', '612345686', 'yza567', '1994-10-03', 'España', 'Normal'),
(10, 'Carmen', 'Jiménez', 'carmen@example.com', '612345687', 'bcd890', '1997-08-08', 'España', 'Normal');

/* 

//por el POSTMAN
 {
    "user_id": "1",
    "name": "Juan",
    "lastname": "Pérez",
    "email": "juan@g.com",
    "mobile_Phone": "612345678",
    "password": "123456789",
    "date_of_Birth": "1990-05-10",
    "country": "España",
    "usertype": "user"
  }
{
    "user_id": "2",
    "name": "María",
    "lastname": "García",
    "email": "maria@g.com",
    "mobile_Phone": "612345679",
    "password": "123456789",
    "date_of_Birth": "1988-12-15",
    "country": "España",
    "usertype": "user"
  }
  {
    "user_id": "3",
    "name": "Antonio",
    "lastname": "López",
    "email": "antonio@g.com",
    "mobile_Phone": "612345680",
    "password": "123456789",
    "date_of_Birth": "1995-09-20",
    "country": "España",
    "usertype": "user"
  }
  {
    "user_id": "4",
    "name": "Laura",
    "lastname": "Rodríguez",
    "email": "laura@g.com",
    "mobile_Phone": "612345681",
    "password": "123456789",
    "date_of_Birth": "1987-07-04",
    "country": "España",
    "usertype": "user"
  }
  {
    "user_id": "5",
    "name": "Manuel",
    "lastname": "Fernández",
    "email": "manuel@g.com",
    "mobile_Phone": "612345682",
    "password": "123456789",
    "date_of_Birth": "1992-03-29",
    "country": "España",
    "usertype": "user"
  }
  {
    "user_id": "6",
    "name": "Isabel",
    "lastname": "Torres",
    "email": "isabel@g.com",
    "mobile_Phone": "612345683",
    "password": "123456789",
    "date_of_Birth": "1998-11-12",
    "country": "España",
    "usertype": "user"
  }
  {
    "user_id": "7",
    "name": "Sergio",
    "lastname": "Martínez",
    "email": "sergio@g.com",
    "mobile_Phone": "612345684",
    "password": "123456789",
    "date_of_Birth": "1991-06-25",
    "country": "España",
    "usertype": "user"
  }
  {
    "user_id": "8",
    "name": "Paula",
    "lastname": "Sánchez",
    "email": "paula@g.com",
    "mobile_Phone": "612345685",
    "password": "123456789",
    "date_of_Birth": "1989-02-18",
    "country": "España",
    "usertype": "user"
  }
  {
    "user_id": "9",
    "name": "Javier",
    "lastname": "Romero",
    "email": "javier@g.com",
    "mobile_Phone": "612345686",
    "password": "123456789",
    "date_of_Birth": "1994-10-03",
    "country": "España",
    "usertype": "user"
  }
 
  {
    "user_id": "10",
    "name": "Carmen",
    "lastname": "Jiménez",
    "email": "carmen@g.com",
    "mobile_Phone": "612345687",
    "password": "123456789",
    "date_of_Birth": "1997-08-08",
    "country": "España",
    "usertype": "user"
  } */




INSERT INTO Projects (id, creator_id, title, subtitle, Project_Description, Deadline, Status, Project_Creation_Date, Project_Update_Date, Project_Type)
VALUES
(1, 1, 'Construcción de Casa', 'Una nueva casa para una familia feliz', 'Estamos construyendo una casa moderna', '2023-08-31', 'Activo', '2023-07-01', '2023-07-08', 'Construcción'),
(2, 2, 'Desarrollo de App', 'Crea una app revolucionaria para dispositivos', 'Buscamos programadores para crear una app', '2023-09-15', 'Activo', '2023-07-03', '2023-07-10', 'Tecnología'),
(3, 3, 'Proyecto Ecológico', 'Ayudemos al medio ambiente con energía solar', 'Instalaremos paneles solares en edificios', '2023-08-15', 'Activo', '2023-07-05', '2023-07-12', 'Medio Ambiente'),
(4, 4, 'Producción Musical', 'Graba tu álbum en nuestro estudio profesional', 'Ofrecemos servicios de grabación y producción', '2023-10-31', 'Activo', '2023-07-07', '2023-07-14', 'Arte'),
(5, 5, 'Campaña Solidaria', 'Dona para ayudar a personas necesitadas', 'Recolectaremos donaciones para causas benéficas', '2023-09-30', 'Activo', '2023-07-10', '2023-07-17', 'Solidaridad'),
(6, 6, 'Docategory_idcumental Fotográfico', 'Capturando momentos históricos', 'Realizaremos un documental fotográfico', '2023-10-15', 'Activo', '2023-07-12', '2023-07-19', 'Arte'),
(7, 7, 'Diseño de Moda', 'Crea tu propia línea de ropa', 'Diseñaremos prendas únicas y originales', '2023-08-30', 'Activo', '2023-07-15', '2023-07-22', 'Moda'),
(8, 8, 'Investigación Médica', 'Descubre avances en la medicina', 'Realizaremos investigaciones médicas', '2023-11-30', 'Activo', '2023-07-18', '2023-07-25', 'Salud'),
(9, 9, 'Exposición de Arte', 'Descubre obras de artistas locales', 'Organizaremos una exposición de arte', '2023-09-15', 'Activo', '2023-07-20', '2023-07-27', 'Arte'),
(10, 10, 'Startup Innovadora', 'Únete a nuestro equipo emprendedor', 'Buscamos inversionistas para nuestra startup', '2023-10-31', 'Activo', '2023-07-23', '2023-07-30', 'Tecnología');

INSERT INTO Financing_Goals (id, project_id, goal_amount, goal_creation_date)
VALUES
(1, 1, 50000, '2023-07-01'),
(2, 2, 10000, '2023-07-03'),
(3, 3, 25000, '2023-07-05'),
(4, 4, 15000, '2023-07-07'),
(5, 5, 20000, '2023-07-10'),
(6, 6, 3000, '2023-07-12'),
(7, 7, 5000, '2023-07-15'),
(8, 8, 80000, '2023-07-18'),
(9, 9, 1000, '2023-07-20'),
(10, 10, 500000, '2023-07-23');

INSERT INTO Contributions (id, user_id, project_id, contributed_amount, contribution_date)
VALUES
(1, 1, 1, 1000, '2023-07-02'),
(2, 2, 1, 500, '2023-07-03'),
(3, 3, 2, 200, '2023-07-04'),
(4, 4, 2, 1000, '2023-07-05'),
(5, 5, 3, 300, '2023-07-06'),
(6, 6, 4, 150, '2023-07-07'),
(7, 7, 5, 1000, '2023-07-08'),
(8, 8, 6, 2000, '2023-07-09'),
(9, 9, 7, 500, '2023-07-10'),
(10, 10, 8, 10000, '2023-07-11');




INSERT INTO Rewards (id, project_id, title, description, amount, time_limit)
VALUES
(1, 1, 'Agradecimiento', 'Recibirás un agradecimiento personalizado', 0, 'Sin límite'),
(2, 1, 'Avance Exclusivo', 'Acceso anticipado a las fotos de la construcción', 50, '30 días'),
(3, 2, 'Versión Premium', 'Obtén la versión premium de la app', 100, '60 días'),
(4, 3, 'Reconocimiento', 'Tu nombre aparecerá en los paneles solares', 20, 'Sin límite'),
(5, 4, 'Grabación Profesional', 'Graba tu canción en nuestro estudio', 500, '90 días'),
(6, 5, 'Agradecimiento', 'Recibirás un agradecimiento personalizado', 0, 'Sin límite'),
(7, 6, 'Edición Especial', 'Obtén una copia firmada del documental', 30, '30 días'),
(8, 7, 'Diseño Personalizado', 'Crea tu propio diseño de moda', 200, '60 días'),
(9, 8, 'Nombre en Publicación', 'Tu nombre aparecerá en nuestras publicaciones', 10, 'Sin límite'),
(10, 9, 'Visita Guiada', 'Realiza una visita guiada a la exposición', 15, '90 días');

INSERT INTO Comments (id, user_id, project_id, content, publication_date)
VALUES
(1, 1, 1, '¡Excelente proyecto!', '2023-07-03'),
(2, 2, 1, 'Me encanta la arquitectura', '2023-07-04'),
(3, 3, 2, '¿Cuál es el lenguaje de programación?', '2023-07-05'),
(4, 4, 2, '¡Estoy emocionado por esta app!', '2023-07-06'),
(5, 5, 3, 'Gran iniciativa', '2023-07-07'),
(6, 6, 4, '¿Ofrecen servicios de mezcla y masterización?', '2023-07-08'),
(7, 7, 5, 'Quiero contribuir con este proyecto', '2023-07-09'),
(8, 8, 6, '¡Las fotos son impresionantes!', '2023-07-10'),
(9, 9, 7, '¿Cómo puedo participar en el diseño?', '2023-07-11'),
(10, 10, 8, 'Me gustaría saber más sobre la investigación', '2023-07-12');


INSERT INTO Ratings (id, user_id, project_id, score, rating_date)
VALUES
(1, 1, 1, 5, '2023-07-04'),
(2, 2, 1, 4, '2023-07-05'),
(3, 3, 2, 4, '2023-07-06'),
(4, 4, 2, 5, '2023-07-07'),
(5, 5, 3, 4, '2023-07-08'),
(6, 6, 4, 5, '2023-07-09'),
(7, 7, 5, 4, '2023-07-10'),
(8, 8, 6, 5, '2023-07-11'),
(9, 9, 7, 4, '2023-07-12'),
(10, 10, 8, 5, '2023-07-13');

INSERT INTO Project_Followers (id, user_id, project_id, follow_date)
VALUES
(1, 1, 1, '2023-07-03'),
(2, 2, 1, '2023-07-04'),
(3, 3, 2, '2023-07-05'),
(4, 4, 2, '2023-07-06'),
(5, 5, 3, '2023-07-07'),
(6, 6, 4, '2023-07-08'),
(7, 7, 5, '2023-07-09'),
(8, 8, 6, '2023-07-10'),
(9, 9, 7, '2023-07-11'),
(10, 10, 8, '2023-07-12');

INSERT INTO Notifications (id, user_id, project_id, content, sending_date, `check`)
VALUES
(1, 1, 1, '¡Nuevo avance en el proyecto!', '2023-07-04', true),
(2, 2, 1, 'Recordatorio de contribución', '2023-07-05', false),
(3, 3, 2, '¡Gracias por unirte a nuestra app!', '2023-07-06', true),
(4, 4, 2, 'Actualización del proyecto', '2023-07-07', false),
(5, 5, 3, 'Recuerda donar para ayudar al medio ambiente', '2023-07-08', true),
(6, 6, 4, '¡Ven a nuestro estudio a grabar!', '2023-07-09', true),
(7, 7, 5, 'Últimos días para contribuir', '2023-07-10', false),
(8, 8, 6, 'Descubre nuestro documental', '2023-07-11', true),
(9, 9, 7, 'Nuevos diseños disponibles', '2023-07-12', false),
(10, 10, 8, 'Participa en nuestra investigación', '2023-07-13', true);


-INSERT INTO Categories (id, category_name, subcategory_name) 
VALUES
(1, 'Arte', 'Arte'),
(2, 'Cómics', 'Cómics'),
(3, 'Artesanía', 'Artesanía'),
(4, 'Diseño y tecnología', 'Diseño y tecnología'),
(5, 'Cine y video', 'Cine y video'),
(6, 'Comida y bebida', 'Comida y bebida'),
(7, 'Juegos', 'Juegos'),
(8, 'Música', 'Música'),
(9, 'Publicaciones', 'Publicaciones'),
(10, 'Moda', 'Moda'),
(11, 'Teatro', 'Teatro'),
(12, 'Danza', 'Danza'),
(13, 'Fotografía', 'Fotografía'),
(14, 'Diseño gráfico', 'Diseño gráfico'),
(15, 'Periodismo', 'Periodismo'),
(16, 'Tecnología de hardware', 'Tecnología de hardware'),
(17, 'Software', 'Software'),
(18, 'Espacios', 'Espacios'),
(19, 'Arquitectura', 'Arquitectura'),
(20, 'Manualidades', 'Manualidades'),
(21, 'Eventos', 'Eventos'),
(22, 'Educación', 'Educación'),
(23, 'Medio ambiente', 'Medio ambiente'),
(24, 'Salud y bienestar', 'Salud y bienestar'),
(25, 'Niños y familia', 'Niños y familia'),
(26, 'Deportes', 'Deportes'),
(27, 'Viajes', 'Viajes'),
(28, 'Transporte', 'Transporte'),
(29, 'Finanzas', 'Finanzas'),
(30, 'Agricultura', 'Agricultura');




INSERT INTO Categories (id, category_name) VALUES
(1, 'Arte'),
(2, 'Cómics'),
(3, 'Artesanía'),
(4, 'Diseño y tecnología'),
(5, 'Cine y video'),
(6, 'Comida y bebida'),
(7, 'Juegos'),
(8, 'Música'),
(9, 'Publicaciones'),
(10, 'Moda'),
(11, 'Teatro'),
(12, 'Danza'),
(13, 'Fotografía'),
(14, 'Diseño gráfico'),
(15, 'Periodismo'),
(16, 'Tecnología de hardware'),
(17, 'Software'),
(18, 'Espacios'),
(19, 'Arquitectura'),
(20, 'Manualidades'),
(21, 'Eventos'),
(22, 'Educación'),
(23, 'Medio ambiente'),
(24, 'Salud y bienestar'),
(25, 'Niños y familia'),
(26, 'Deportes'),
(27, 'Viajes'),
(28, 'Transporte'),
(29, 'Finanzas'),
(30, 'Agricultura');



INSERT INTO ProjectCategories (ProjectId, CategoryId, createdAt, updatedAt) VALUES
-- Projects 1
(1, 2, DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY), DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY)),
-- Projects 2
(2, 1, DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY), DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY)),
-- Projects 3
(3, 6, DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY), DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY)),
-- Projects 4
(4, 3, DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY), DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY)),
-- Projects 5
(5, 5, DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY), DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY)),
-- Projects 6
(6, 10, DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY), DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY)),
-- Projects 7
(7, 9, DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY), DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY)),
-- Projects 8
(8, 19, DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY), DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY)),
-- Projects 9
(9, 21, DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY), DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY)),
-- Projects 10
(10, 22, DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY), DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 365) DAY));
