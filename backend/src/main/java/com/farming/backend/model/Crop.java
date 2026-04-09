package com.farming.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "crops")
public class Crop {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String farmerId;
    private String name;
    private Double area;
    private Double expectedYield;

    public Crop() {}

    public Crop(String id, String farmerId, String name, Double area, Double expectedYield) {
        this.id = id;
        this.farmerId = farmerId;
        this.name = name;
        this.area = area;
        this.expectedYield = expectedYield;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getFarmerId() { return farmerId; }
    public void setFarmerId(String farmerId) { this.farmerId = farmerId; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public Double getArea() { return area; }
    public void setArea(Double area) { this.area = area; }
    public Double getExpectedYield() { return expectedYield; }
    public void setExpectedYield(Double expectedYield) { this.expectedYield = expectedYield; }
}
