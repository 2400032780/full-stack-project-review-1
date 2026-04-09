package com.farming.backend.service;

import com.farming.backend.model.Article;
import com.farming.backend.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class ArticleService {
    @Autowired
    private ArticleRepository articleRepository;
    
    @PostConstruct
    public void seedArticles() {
        if (articleRepository.count() == 0) {
            Article a1 = new Article();
            a1.setTitle("10 Essential Tips for Organic Vegetable Farming");
            a1.setDescription("Learn the fundamentals of growing healthy vegetables without chemicals, including soil preparation and natural pest control methods.");
            a1.setCategory("Organic Farming");
            a1.setAuthor("Dr. Rajesh Kumar");
            a1.setReadTime("5 min read");
            a1.setImage("https://images.unsplash.com/photo-1722810767143-40a6a7a74b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZyUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzcxOTQ4ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080");
            a1.setPublishedDate(LocalDateTime.now());
            articleRepository.save(a1);

            Article a2 = new Article();
            a2.setTitle("Maximizing Water Efficiency with Drip Irrigation");
            a2.setDescription("A comprehensive guide to installing and maintaining drip irrigation systems for better water conservation and crop yields.");
            a2.setCategory("Irrigation");
            a2.setAuthor("Priya Sharma");
            a2.setReadTime("7 min read");
            a2.setImage("https://images.unsplash.com/photo-1738598665698-7fd7af4b5e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmlwJTIwaXJyaWdhdGlvbiUyMHN5c3RlbXxlbnwxfHx8fDE3NzE5OTYwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080");
            a2.setPublishedDate(LocalDateTime.now());
            articleRepository.save(a2);

            Article a3 = new Article();
            a3.setTitle("Understanding Crop Rotation for Soil Health");
            a3.setDescription("Discover how strategic crop rotation can improve soil fertility, reduce pests, and increase long-term farm productivity.");
            a3.setCategory("Crop Management");
            a3.setAuthor("Anil Verma");
            a3.setReadTime("6 min read");
            a3.setImage("https://images.unsplash.com/photo-1741665604513-392643cd42fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9wJTIwcm90YXRpb24lMjBmaWVsZHxlbnwxfHx8fDE3NzE5OTYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080");
            a3.setPublishedDate(LocalDateTime.now());
            articleRepository.save(a3);

            Article a4 = new Article();
            a4.setTitle("Natural Pest Control: Alternatives to Chemicals");
            a4.setDescription("Effective biological and organic methods to control pests without harming beneficial insects or the environment.");
            a4.setCategory("Pest Control");
            a4.setAuthor("Dr. Meena Patel");
            a4.setReadTime("8 min read");
            a4.setImage("https://images.unsplash.com/photo-1635831973943-41c27b6d7f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBmaWVsZCUyMGFncmljdWx0dXJlJTIwc3VucmlzZXxlbnwxfHx8fDE3NzE5OTYwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080");
            a4.setPublishedDate(LocalDateTime.now());
            articleRepository.save(a4);

            Article a5 = new Article();
            a5.setTitle("Market Price Trends: What Farmers Need to Know");
            a5.setDescription("Stay informed about current market trends and pricing strategies to maximize profits from your agricultural produce.");
            a5.setCategory("Market Trends");
            a5.setAuthor("Suresh Reddy");
            a5.setReadTime("4 min read");
            a5.setImage("https://images.unsplash.com/photo-1755719523098-227f4c486eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGhhcnZlc3QlMjBjb21iaW5lfGVufDF8fHx8MTc3MTk5NjA5Nnww&ixlib=rb-4.1.0&q=80&w=1080");
            a5.setPublishedDate(LocalDateTime.now());
            articleRepository.save(a5);

            Article a6 = new Article();
            a6.setTitle("Smart Farming: Using Technology in Agriculture");
            a6.setDescription("Explore how mobile apps, sensors, and data analytics are revolutionizing modern farming practices.");
            a6.setCategory("Technology");
            a6.setAuthor("Kavita Singh");
            a6.setReadTime("6 min read");
            a6.setImage("https://images.unsplash.com/photo-1548741395-2ac0057be631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwcGFkZHklMjB0ZXJyYWNlc3xlbnwxfHx8fDE3NzE5OTYwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080");
            a6.setPublishedDate(LocalDateTime.now());
            articleRepository.save(a6);

            Article a7 = new Article();
            a7.setTitle("Traditional Irrigation Systems: Still Relevant Today");
            a7.setDescription("How ancient water management techniques can complement modern irrigation for sustainable farming.");
            a7.setCategory("Irrigation");
            a7.setAuthor("Ramesh Gupta");
            a7.setReadTime("5 min read");
            a7.setImage("https://images.unsplash.com/photo-1761201509055-30c04b68901c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGlycmlnYXRpb24lMjB3YXRlcnxlbnwxfHx8fDE3NzE5OTYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080");
            a7.setPublishedDate(LocalDateTime.now());
            articleRepository.save(a7);

            Article a8 = new Article();
            a8.setTitle("Composting 101: Creating Your Own Natural Fertilizer");
            a8.setDescription("Step-by-step guide to making high-quality compost from farm waste and household materials.");
            a8.setCategory("Organic Farming");
            a8.setAuthor("Dr. Anjali Desai");
            a8.setReadTime("7 min read");
            a8.setImage("https://images.unsplash.com/photo-1686579341853-2effa68407e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZmVydGlsaXplciUyMGNvbXBvc3R8ZW58MXx8fHwxNzcxOTk2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080");
            a8.setPublishedDate(LocalDateTime.now());
            articleRepository.save(a8);

            Article a9 = new Article();
            a9.setTitle("Seasonal Crop Planning for Maximum Yield");
            a9.setDescription("Learn which crops to plant in different seasons based on climate, market demand, and soil conditions.");
            a9.setCategory("Crop Management");
            a9.setAuthor("Vijay Deshmukh");
            a9.setReadTime("6 min read");
            a9.setImage("https://images.unsplash.com/photo-1635831973943-41c27b6d7f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBmaWVsZCUyMGFncmljdWx0dXJlJTIwc3VucmlzZXxlbnwxfHx8fDE3NzE5OTYwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080");
            a9.setPublishedDate(LocalDateTime.now());
            articleRepository.save(a9);
            
            // Add more as needed
        }
    }
    
    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }
    
    public Article createArticle(Article article) {
        article.setPublishedDate(LocalDateTime.now());
        return articleRepository.save(article);
    }
}
