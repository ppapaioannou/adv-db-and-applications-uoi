package advdbapp.backendspringboot.persistence.model;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


/*
                    --Data--


Fundamental data entity that represents entries in our db
every field has a get method because we need to be able
to get specific measurements for the diagrams


*/

@Entity
@Table(name = "data")
public class Data {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;

    private String year;
    private String country;
    
    @Column(name="coal_consumption_total")
    private String coalConsumptionTotal;

    @Column(name="electricity_generation_total")
    private String electricityGenerationTotal;

    @Column(name="energy_production_total")
    private String energyProductionTotal;

    @Column(name="hydro_power_generation_total")
    private String hydroPowerGenerationTotal;

    @Column(name="natural_gas_production_total")
    private String naturalGasProductionTotal;

    @Column(name="natural_gas_proved_reserves_total")
    private String naturalGasProvedReservesTotal;

    @Column(name="nuclear_power_generation_total")
    private String nuclearPowerGenerationTotal;

    @Column(name="oil_consumption_total")
    private String oilConsumptionTotal;

    @Column(name="oil_production_total")
    private String oilProductionTotal;

    @Column(name="oil_proved_reserves_total")
    private String oilProvedReservesTotal;

    @Column(name="residential_electricity_use_total")
    private String residentialElectricityUseTotal;

    @Column(name="hapiscore_whr")
    private String hapiscoreWhr;

    @Column(name="hdi_human_development_index")
    private String hdiHumanDevelopmentIndex;

    @Column(name="income_per_person_gdppercapita_ppp_inflation_adjusted")
    private String incomePerPersonGdppercapitaPppInflationAdjusted;

    @Column(name="inequality_index_gini")
    private String inequalityIndexGini;

    @Column(name="population_total")
    private String populationTotal;
    

    public long getId() {
        return id;
    }

    public String getYear() {
        return year;
    }

    public String getCountry() {
        return country;
    }

    
    public String getCoalConsumptionTotal() {
        return coalConsumptionTotal;
    }

    public String getElectricityGenerationTotal() {
        return electricityGenerationTotal;
    }

    public String getEnergyProductionTotal() {
        return energyProductionTotal;
    }

    public String getHydroPowerGenerationTotal() {
        return hydroPowerGenerationTotal;
    }

    public String getNaturalGasProductionTotal() {
        return naturalGasProductionTotal;
    }

    public String getNaturalGasProvedReservesTotal() {
        return naturalGasProvedReservesTotal;
    }

    public String getNuclearPowerGenerationTotal() {
        return nuclearPowerGenerationTotal;
    }

    public String getOilConsumptionTotal() {
        return oilConsumptionTotal;
    }

    public String getOilProductionTotal() {
        return oilProductionTotal;
    }

    public String getOilProvedReservesTotal() {
        return oilProvedReservesTotal;
    }

    public String getResidentialElectricityUseTotal() {
        return residentialElectricityUseTotal;
    }

    public String getHdiHumanDevelopmentIndex() {
        return hdiHumanDevelopmentIndex;
    }

    public String getHapiscoreWhr() {
        return hapiscoreWhr;
    }

    public String getIncomePerPersonGdppercapitaPppInflationAdjusted() {
        return incomePerPersonGdppercapitaPppInflationAdjusted;
    }
    
    public String getInequalityIndexGini() {
        return inequalityIndexGini;
    }

    public String getPopulationTotal() {
        return populationTotal;
    }
    
}
