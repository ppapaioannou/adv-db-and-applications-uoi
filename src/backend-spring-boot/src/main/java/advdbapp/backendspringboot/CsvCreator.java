package advdbapp.backendspringboot;

import java.util.HashMap;
import java.util.List;

/*
                    --csv Creator--

Data for the diagrams can be fed by .csv files, so for each
type of diagram we create a specific csv file with the information
that is needed for the plotting


*/

public class CsvCreator {

    private String csv;

    private HashMap<String, String> csvData;
    private List<String> sortedYears;
    private List<String> sortedIndexes;
    private List<String> sortedCountries;

    public void init(HashMap<String, String> csvData, List<String> sortedYears,
                        List<String> sortedIndexes, List<String> sortedCountries){
        this.csvData = csvData;
        this.sortedYears = sortedYears;
        this.sortedIndexes = sortedIndexes;
        this.sortedCountries = sortedCountries;
    }

    public String lineCsv() {
        csv = "";
        for (String year : sortedYears) {
            String row = "";
            for (String index : sortedIndexes) {
                for (String country : sortedCountries) {
                    String key = year + country + index;

                    row += year + "," + country + " " + index + ",";
                    row += csvData.get(key) + "\n";
                }
            }
            csv += row;
            
        }
        String collumn = "year,index,measurement";
        csv = collumn + "\n" + csv;
        csv = csv.substring(0, csv.length() - 1);

        return csv;
    }

    public String barCsv() {
        csv = "";
        int counter = 0;
        String collumn = "";
        for (String year : sortedYears) {
            String row = year + ",";
            for (String index : sortedIndexes) {
                for (String country : sortedCountries) {
                    String key = year + country + index;
                    if (counter == 0) {
                        collumn += country + " " + index + ",";

                        row += csvData.get(key) + ",";
                    }
                    else {                        
                        row += csvData.get(key) + ",";
                    }
                }
            }
            row = row.substring(0, row.length() - 1);
            counter += 1;
            csv += row + "\n";
            
        }
        collumn = collumn.substring(0, collumn.length() - 1);
        csv = "year," + collumn + "\n" + csv;
        csv = csv.substring(0, csv.length() - 1);

        return csv;
    }


    public String scatterCsv() {
        csv = "";
        for (String year : sortedYears) {
            //String row = year + ",";
            for (String country : sortedCountries) {
                String row = "";
                for (String index : sortedIndexes) {
                    String key = year + country + index;
                    row += csvData.get(key) + ",";
                }
                row += country;
                csv += row + "\n";
            }
            
        }
        String collumn = "index1,index2,country";
        csv = collumn + "\n" + csv;

        return csv;
    }
    
}
