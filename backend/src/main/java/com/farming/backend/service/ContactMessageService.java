package com.farming.backend.service;

import com.farming.backend.model.ContactMessage;
import com.farming.backend.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ContactMessageService {
    @Autowired
    private ContactMessageRepository contactMessageRepository;
    
    public ContactMessage submitMessage(ContactMessage message) {
        message.setSubmittedDate(LocalDateTime.now());
        return contactMessageRepository.save(message);
    }
}
