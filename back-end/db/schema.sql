-- DROP DATABASE IF EXISTS travel_packages_dev;
-- CREATE DATABASE travel_packages_dev;
-- \c travel_packages_dev;

DROP TABLE IF EXISTS travel_packages;


CREATE TABLE travel_packages (
    id SERIAL PRIMARY KEY, 
    package_name TEXT NOT NULL,
    description TEXT NOT NULL, 
    img_url TEXT NOT NULL,
    location TEXT NOT NULL, 
    in_stock BOOLEAN NOT NULL DEFAULT TRUE, 
    price INT
);
CREATE TABLE travel_reviews(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    reviewer TEXT NOT NULL,
    content TEXT NOT NULL,
    date TEXT NOT NULL,
    rating NUMERIC NOT NULL, CHECK (rating >=0 AND rating <= 5),
    travel_package_id INT REFERENCES travel_packages (id) 
        ON DELETE CASCADE 
);