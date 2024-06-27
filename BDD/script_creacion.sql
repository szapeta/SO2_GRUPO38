use memoriadb;

create table memoria_proceso(
	id INT AUTO_INCREMENT PRIMARY KEY,
    pid VARCHAR(16),
    nombre_proceso VARCHAR(256),
    tipo VARCHAR(16),
    size BIGINT,
    timestamp DATETIME
);


select * from memoria_proceso;