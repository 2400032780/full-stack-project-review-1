package com.farming.backend.controller;

import com.farming.backend.model.ContactMessage;
import com.farming.backend.service.ContactMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactMessageService contactMessageService;

    @PostMapping
    public ResponseEntity<ContactMessage> submit(@RequestBody ContactMessage message) {
        return ResponseEntity.ok(contactMessageService.submitMessage(message));
    }
}
