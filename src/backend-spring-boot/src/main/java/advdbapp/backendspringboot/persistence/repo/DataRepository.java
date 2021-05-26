package advdbapp.backendspringboot.persistence.repo;


import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import advdbapp.backendspringboot.persistence.model.Data;

/*
                    --Data Repository--


Interface that the Data Controller uses to manipulate data
some functions are already implemented from the Crud Repository
but there was need for some more


*/


public interface DataRepository extends CrudRepository<Data, Long> {
    Iterable<Data> findByCountry(String country);
    Iterable<Data> findByYear(String year);


    // MySQL queries for each index type that return id and country
    // we will use this information to periodically prune the returned data
    // based on user choise from the frontend

    // Since we have one big data table containing everything 
    // we need to check for the rows that have a measurement and not 'None'

    @Query("SELECT DISTINCT d.id, d.country from Data d where d.coalConsumptionTotal != 'None'")
    public List<String> coalConsumptionTotalCountryQuery();

    @Query("SELECT DISTINCT d.id, d.country from Data d where d.electricityGenerationTotal != 'None'")
    public List<String> electricityGenerationTotalCountryQuery();

    @Query("SELECT DISTINCT d.id, d.country from Data d where d.energyProductionTotal != 'None'")
    public List<String> energyProductionTotalQuery();

    @Query("SELECT DISTINCT d.id, d.country from Data d where d.hydroPowerGenerationTotal != 'None'")
    public List<String> hydroPowerGenerationTotalQuery();

    @Query("SELECT DISTINCT d.id, d.country from Data d where d.naturalGasProductionTotal != 'None'")
    public List<String> naturalGasProductionTotalQuery();

    @Query("SELECT DISTINCT d.id, d.country from Data d where d.naturalGasProvedReservesTotal != 'None'")
    public List<String> naturalGasProvedReservesTotalQuery();

    @Query("SELECT DISTINCT d.id, d.country from Data d where d.nuclearPowerGenerationTotal != 'None'")
    public List<String> nuclearPowerGenerationTotalQuery();

    @Query("SELECT DISTINCT d.id, d.country from Data d where d.oilConsumptionTotal != 'None'")
    public List<String> oilConsumptionTotalQuery();

    @Query("SELECT DISTINCT d.id, d.country from Data d where d.oilProductionTotal != 'None'")
    public List<String> oilProductionTotalQuery();

    @Query("SELECT DISTINCT d.id, d.country from Data d where d.oilProvedReservesTotal != 'None'")
    public List<String> oilProvedReservesTotalQuery();

    @Query("SELECT DISTINCT d.id, d.country from Data d where d.residentialElectricityUseTotal != 'None'")
    public List<String> residentialElectricityUseTotalQuery();

    @Query("SELECT DISTINCT d.id, d.country from Data d where d.hapiscoreWhr != 'None'")
    public List<String> hapiscoreWhrQuery();

    @Query("SELECT DISTINCT d.id, d.country from Data d where d.hdiHumanDevelopmentIndex != 'None'")
    public List<String> hdiHumanDevelopmentIndexQuery();

    @Query("SELECT DISTINCT d.id, d.country from Data d where d.incomePerPersonGdppercapitaPppInflationAdjusted != 'None'")
    public List<String> incomePerPersonGdppercapitaPppInflationAdjustedQuery();

    @Query("SELECT DISTINCT d.id, d.country from Data d where d.inequalityIndexGini != 'None'")
    public List<String> inequalityIndexGiniQuery();

    @Query("SELECT DISTINCT d.id, d.country from Data d where d.populationTotal != 'None'")
    public List<String> populationTotalQuery();

}
