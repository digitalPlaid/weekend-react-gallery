CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path VARCHAR(128),
	description VARCHAR(1024),
	likes INT
);

INSERT INTO "gallery"
	("path", "description", "likes")
VALUES
	('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
	('images/egypt_kitty_social.jpeg', 'Cleopatras Cat', 0),
	('images/four_fundamental_subspaces.png', 'The four fundamental subspaces of a matrix.', 0),
	('images/pillars_of_creation.jpeg', 'The Pillars of Creation.', 0),
	('images/turgenev.jpeg', 'A portrait of Ivan Turgenev.', 0);