package com.farming.backend.repository;

import com.farming.backend.model.Consultation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ConsultationRepository extends JpaRepository<Consultation, String> {
    List<Consultation> findByFarmerId(String farmerId);
}
