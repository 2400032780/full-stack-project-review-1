package com.farming.backend.controller;

import com.farming.backend.model.Crop;
import com.farming.backend.repository.CropRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/crops")
public class CropController {
    
    @Autowired
    private CropRepository cropRepository;
    
    @PostMapping
    public ResponseEntity<Crop> addCrop(@RequestBody Crop crop) {
        Crop savedCrop = cropRepository.save(crop);
        return ResponseEntity.ok(savedCrop);
    }
    
    @GetMapping("/{farmerId}")
    public ResponseEntity<List<Crop>> getFarmerCrops(@PathVariable String farmerId) {
        List<Crop> crops = cropRepository.findByFarmerId(farmerId);
        return ResponseEntity.ok(crops);
    }
}
