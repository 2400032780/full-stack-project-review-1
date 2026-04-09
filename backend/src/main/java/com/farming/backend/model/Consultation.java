package com.farming.backend.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "consultations")
public class Consultation {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String farmerId;
    private String farmerName;
    private String expertId;
    private String topic;
    
    @Column(columnDefinition = "TEXT")
    private String question;
    
    @Column(columnDefinition = "TEXT")
    private String answer;
    
    private String status; // PENDING, COMPLETED, SCHEDULED, ANSWERED
    private Date date;

    public Consultation() {}

    public Consultation(String id, String farmerId, String farmerName, String expertId, String topic, String question, String answer, String status, Date date) {
        this.id = id;
        this.farmerId = farmerId;
        this.farmerName = farmerName;
        this.expertId = expertId;
        this.topic = topic;
        this.question = question;
        this.answer = answer;
        this.status = status;
        this.date = date;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getFarmerId() { return farmerId; }
    public void setFarmerId(String farmerId) { this.farmerId = farmerId; }
    public String getFarmerName() { return farmerName; }
    public void setFarmerName(String farmerName) { this.farmerName = farmerName; }
    public String getExpertId() { return expertId; }
    public void setExpertId(String expertId) { this.expertId = expertId; }
    public String getTopic() { return topic; }
    public void setTopic(String topic) { this.topic = topic; }
    public String getQuestion() { return question; }
    public void setQuestion(String question) { this.question = question; }
    public String getAnswer() { return answer; }
    public void setAnswer(String answer) { this.answer = answer; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public Date getDate() { return date; }
    public void setDate(Date date) { this.date = date; }
}
