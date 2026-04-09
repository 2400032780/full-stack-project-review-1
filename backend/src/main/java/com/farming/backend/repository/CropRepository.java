package com.farming.backend.repository;

import com.farming.backend.model.Crop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CropRepository extends JpaRepository<Crop, String> {
    List<Crop> findByFarmerId(String farmerId);
}
