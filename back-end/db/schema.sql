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