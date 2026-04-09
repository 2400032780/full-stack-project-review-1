package com.farming.backend.controller;

import com.farming.backend.model.Consultation;
import com.farming.backend.repository.ConsultationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/consultations")
public class ConsultationController {
    
    @Autowired
    private ConsultationRepository consultationRepository;
    
    @PostMapping
    public ResponseEntity<Consultation> addConsultation(@RequestBody Consultation consultation) {
        consultation.setDate(new Date());
        consultation.setStatus("PENDING");
        return ResponseEntity.ok(consultationRepository.save(consultation));
    }

    @GetMapping
    public ResponseEntity<List<Consultation>> getAllConsultations() {
        return ResponseEntity.ok(consultationRepository.findAll());
    }

    @PutMapping("/{id}/answer")
    public ResponseEntity<Consultation> answerConsultation(
            @PathVariable String id, 
            @RequestBody java.util.Map<String, String> body) {
        
        Consultation consultation = consultationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Consultation not found"));
        
        consultation.setAnswer(body.get("answer"));
        consultation.setExpertId(body.get("expertId"));
        consultation.setStatus("ANSWERED");
        
        return ResponseEntity.ok(consultationRepository.save(consultation));
    }

    @GetMapping("/{farmerId}")
    public ResponseEntity<List<Consultation>> getFarmerConsultations(@PathVariable String farmerId) {
        List<Consultation> consultations = consultationRepository.findByFarmerId(farmerId);
        return ResponseEntity.ok(consultations);
    }
}
