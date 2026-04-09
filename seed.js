const fetch = require('node-fetch');

async function seed() {
    const consultations = [
        {
            farmerId: "f1",
            farmerName: "Ramesh Kumar",
            topic: "Pest Control",
            question: "My rice plants have small black bugs on the leaves. What organic spray can I use?",
            status: "PENDING"
        },
        {
            farmerId: "f2",
            farmerName: "Suresh Patel",
            topic: "Soil Health",
            question: "Is it good to mix cow dung with urea for my wheat fields?",
            status: "PENDING"
        }
    ];

    const articles = [
        {
            title: "Advanced Drip Irrigation",
            description: "How to save 80% water using new pressure-compensated emitters.",
            category: "Irrigation",
            author: "Dr. Anita Rao",
            readTime: "6 min read"
        },
        {
            title: "Market Price Forecast 2026",
            description: "Why wheat prices are expected to rise this winter.",
            category: "Market Trends",
            author: "Sanjay Gupta",
            readTime: "4 min read"
        }
    ];

    for (const c of consultations) {
        await fetch('http://localhost:8080/api/consultations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(c)
        });
    }

    for (const a of articles) {
        await fetch('http://localhost:8080/api/articles', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(a)
        });
    }

    console.log("Seeding complete!");
}

seed();
