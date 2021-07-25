-- \c travel_packages_dev;


INSERT INTO travel_packages (package_name, description, img_url, location, in_stock, price) VALUES 
('Ciao Bella','13 day trip where you visit Tuscany, Rome, Florence & the Amalfi Coast. Tour Guide included','https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180221133013/iStock-479218920.jpg','Italy', true, 2500),
('Rum Away With Us','5 day trip, includes hike through national park and bar crawl introducing country favorite rums','https://www.sandals.com/blog/content/images/2020/04/Sandals-Royal-Barbados-Main-Pool.jpg','Barbados', false, 1800),
('Around the World', 'Stay under a waterfall','https://spectralcodex.com/x/taiwan-xindian-yinhe-cave-2-900x600.jpg', 'Taiwan', true , 2000),
('Follow Your Seoul', '10 day trip, visit ', 'https://cdn.shrm.org/image/upload/c_crop,h_705,w_1254,x_0,y_49/c_fit,f_auto,q_auto,w_767/v1/Global%20HR/Seoul1m_usakpg?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjQ5LCJ4MiI6MTI1NCwieTIiOjc1NCwidyI6MTI1NCwiaCI6NzA1fX0%3D','South Korea', true, 5460)
; 

INSERT INTO travel_reviews (travel_package_id , title , reviewer , content , date , rating) VALUES
(1,	'Adoro questo',	'Brian Lucas',	'Why I learned to speak Italian','Wednesday, March 2nd at 12:16pm',	5),
(2, 'Drinking Rum!!', 'Damien Yule','Drinking Mount Gay on my boat','Tuesday, March 2nd at 12:16pm',5 ),
(2, 'Barbados Always', 'Maria Whiting', 'I will only drink Bajan rum','Monday, March 2nd at 12:16pm', 4),
(4, 'Soju dreams','Kiara Rodriguez', 'Trip was great. There were so many things to do and the tour guide Hyun Jae was AMAZING!','Monday, March 2nd at 12:16pm', 5)

;
 