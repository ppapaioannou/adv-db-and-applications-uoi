import os
import sys
import csv

# creates a list of all the files from our data
def get_filepaths(directory_name):
    filepaths = []
    for entity in os.listdir(directory_name):
        # get the full path
        path = os.path.join(directory_name, entity)
        # if an entity is a directory then get the list of files in this directory
        if os.path.isdir(path):
            filepaths = filepaths + get_filepaths(path)
        else:
            filepaths.append(path)

    return filepaths


# will create a dictionary for each data file
# and then return a list of all those dictionaries
# the keys are the country+year combo
# and the value is the specific index for that coutry that year
def read_data(filepaths):
    # max and min date will be needed when we write our combined .tsv file
    max_date = '0'
    min_date = '9999'
    # the same for the countries
    countries = set()
    list_of_dics = []

    for filepath in filepaths:
        with open(filepath, 'r') as current_file:
            current_dic = {}
            # dictionary name is the index type so that we can create the collumns
            # for our final .tsv file containg all the data
            filename = filepath.split('/')[-1].split('.')[0]
            current_dic['filename'] = filename
            reader = csv.reader(current_file)
            line = 0
            all_the_dates = []
            for row in reader:
                if line == 0:
                    # top line is like country,year1,year2...yearN
                    all_the_dates = row[1:]
                    new_max_date = max(all_the_dates)
                    new_min_date = min(all_the_dates)
                    if new_max_date > max_date:
                        max_date = new_max_date
                    if new_min_date < min_date:
                        min_date = new_min_date
                else:
                    current_country = row[0]
                    countries.add(current_country)
                    for i in range(len(row)-1):
                        key = current_country + all_the_dates[i]
                        current_dic[key] = row[i+1]
                line += 1
            list_of_dics.append(current_dic)

    return [max_date, min_date, countries, list_of_dics]




# command line argument for the directory name
args = sys.argv[1:]
directory_name = args[0]

print("Getting all the data filepaths...")
filepaths = get_filepaths(directory_name)

print("Reading all the data files and creating the data dictionary")
[max_date, min_date, countries, data_dic]  = read_data(filepaths)


# final.tsv will contain our complete collection of data as a single .tsv file
# we chose a tab seperated values file because some countries contained commas
# and MySQL had problems eg. 'Congo, Dem. Rep.'
# the format will be
###
# countryX    yearX    indexX    indexY    indexZ...
# countryX    yearY    indexX    indexY    indexZ...
# ...
# countryY    yearX    indexX    indexY    indexZ,...
###
# countries that don't have a specific index for that year
# will get a 'None' index_value and we will handle this later

print("Now writing all the information to final.tsv")

with open('final.tsv', 'w', newline='') as F:
    first_row = 'country\tyear'
    # each dictionary has each type of index as a value for the filename key
    # that way we can create the first row without a problem
    for dic in data_dic:
        index = dic.get('filename')
        first_row += '\t' + index
    F.write(first_row + '\n')

    for country in countries:
        for date in range(int(min_date),int(max_date)+1):
            key = country+str(date)
            row = str(country) + '\t' + str(date)
            for dic in data_dic:
                if dic.get(key) != None and dic.get(key) != '':
                    index_value = dic[key]
                    row += '\t' + str(index_value)
                else:
                    row += '\tNone'

            F.write(row + '\n')
print("final.tsv created")
