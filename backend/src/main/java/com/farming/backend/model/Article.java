package com.farming.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "articles")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String title;
    
    @Column(length = 2000)
    private String description;
    
    @Column(columnDefinition = "TEXT")
    private String content;
    
    private String author;
    private String category;
    private String image;
    private String readTime;
    private LocalDateTime publishedDate;

    public Article() {}

    public Article(String id, String title, String description, String content, String author, String category, String image, String readTime, LocalDateTime publishedDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.content = content;
        this.author = author;
        this.category = category;
        this.image = image;
        this.readTime = readTime;
        this.publishedDate = publishedDate;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
    public String getReadTime() { return readTime; }
    public void setReadTime(String readTime) { this.readTime = readTime; }
    public LocalDateTime getPublishedDate() { return publishedDate; }
    public void setPublishedDate(LocalDateTime publishedDate) { this.publishedDate = publishedDate; }
}
