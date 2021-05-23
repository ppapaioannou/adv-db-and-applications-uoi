import pymysql
import sys

## some commands to prepare MySQL for the data load ##
# SET GLOBAL local_infile = 1;
# SET GLOBAL validate_password.policy=LOW;
# ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

password = 'password'

def tsv_to_mysql(table_command, load_command):
    try:
        con = pymysql.connect(host='127.0.0.1', user='root', password=password, autocommit=True, local_infile=1)
        print('Connected to DB')

        cursor = con.cursor()
        # the cursor executes mysql commands from python
        # we will create and use the testdb database
        cursor.execute("CREATE DATABASE testdb;")
        cursor.execute("USE testdb;")

        # table_command contains all the indexes from our data
        # so that we can create the first row of the table
        cursor.execute("CREATE TABLE data("+table_command+",id INT NOT NULL AUTO_INCREMENT,primary key (id))")

        # the load_command is the LOAD DATA INFILE command below
        cursor.execute(load_command)
        print('Successfully loaded the table from final.tsv')

        # close the connection
        con.close()

    except Exception as e:
        print('Error: {}'.format(str(e)))
        sys.exit(1)


def create_mysql_command():
    columns = ''
    table_command = ''
    # read only the first line of final.tsv to get the indexes
    # so that we can use them for the data table creation
    with open('final.tsv', 'r') as F:
        for line in F:
            columns = line
            break
    columns = columns.split("\t")
    for field in columns:
        table_command += field + " VARCHAR(255),"
    table_command = table_command[:-1] # remove last ','

    load_command = "("
    for field in columns:
        load_command += field +","
    load_command = load_command[:-1] + ")"

    # field terminated by '\t' means that every seperated by tab field in the
    # tsv will be considered as a seperate value,enclosed by "" and terminated
    # in a new line to seperate rows, also ignore the first row because we dont need
    # the name of the indexes

    load_command = """LOAD DATA LOCAL INFILE "final.tsv"
    INTO TABLE data
    FIELDS TERMINATED BY '\t'
    ENCLOSED BY '"'
    LINES TERMINATED BY '\n'
    IGNORE 1 ROWS
    """+load_command+";"

    return [table_command, load_command]




[table_command, load_command] = create_mysql_command()
tsv_to_mysql(table_command, load_command)

