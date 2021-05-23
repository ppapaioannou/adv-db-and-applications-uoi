package advdbapp.backendspringboot.persistence.model;

import java.util.ArrayList;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


public class Result {
    private String country;
    private String maxYear;
    private String minYear;
    private ArrayList<Integer> ids = new ArrayList<Integer>(); 
    /*
    private long id;

    private String year;
    private String country;

    private ArrayList<String> indexes = new ArrayList<String>();
    */
    public Result(String country) {
        this.country = country;
        maxYear = "-1";
        minYear = "9999";
    }

    public String getCountry() {
        return country;
    }

    public void setNewMaxYear(String year) {
        int oldYear=Integer.parseInt(maxYear);
        int newYear=Integer.parseInt(year);  
        if (newYear > oldYear) {
            maxYear = year;
        }
    }

    public int getMaxYear() {
        return Integer.parseInt(maxYear);
    }

    public void setNewMinYear(String year) {
        int oldYear=Integer.parseInt(minYear);
        int newYear=Integer.parseInt(year);  
        if (newYear < oldYear) {
            minYear = year;
        }
    }

    public int getMinYear() {
        return Integer.parseInt(minYear);
    }

    public void addNewId(String id) {
        ids.add(Integer.parseInt(id));
    }

    public ArrayList<Integer> getIds() {
        return ids;
    }
    /*
    public String toString() {
        String out = "";
        out += country + "\n";
        out += minYear + " - " + maxYear + "\n";
        for (int id : ids) {
            out += id +" ";
        }
        return out + "\n";
    }
    */
    
}
