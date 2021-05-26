# adv-db-and-applications-uoi

## Description
A data driven application using the GapMinder datasets developed for the Advanced Topics of Database Technology and Applications course at the deparment of Comp Science &amp; Eng UoI 


## Project Target
Handle multiple data files and create a managable Database, after that design and implement the backend that connects to the db and creates the API function. Finaly create an usable frontend that makes request from user input to the backend and draws diagrams using the d3.js library.


## Index

#### data/
folder containing all the starting .csv data files

#### deliverables/
folder containing the requested reports for the project by P. Vassiliadis

#### src/data-manipulation/
combine_data_files.py -- python script to merge the multiple data files from the data folder into a signle .tsv file</br>
final.tsv -- the file containing our complete data</br>
schema_creation.py -- python script to connect to MySQL and create the database by loading the final.tsv file</br>
project-database-backup.sql.zip -- database backup exported from MySQL</br>

#### src/backend-spring-boot/
parent folder for the backend written with java spring boot framework

#### src/frontend-react/
parent folder for the frontend written in React


## Credits
Marios Zixnalis</br>
Eleni Mouzaki</br>
Panagiotis Papaioannou</br>
