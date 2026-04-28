-- Farming Awareness Website Database Schema
-- MySQL 8.0+ compatible
-- Features: Proper data types, constraints, indexes, foreign keys, and best practices for data management

-- Create database if not exists
CREATE DATABASE IF NOT EXISTS farming_awareness_db
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE farming_awareness_db;

-- Users table
-- Stores user accounts with role-based access
CREATE TABLE users (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, -- Should be hashed
    role ENUM('FARMER', 'ADMIN', 'EXPERT') NOT NULL DEFAULT 'FARMER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    -- Constraints
    CHECK (CHAR_LENGTH(username) >= 3),
    CHECK (email REGEXP '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),

    -- Indexes
    INDEX idx_username (username),
    INDEX idx_email (email),
    INDEX idx_role (role)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Articles table
-- Stores farming articles and educational content
CREATE TABLE articles (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    title VARCHAR(255) NOT NULL,
    description VARCHAR(2000),
    content TEXT,
    author VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    image VARCHAR(500), -- URL or path to image
    read_time VARCHAR(20), -- e.g., "5 min read"
    published_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    -- Constraints
    CHECK (CHAR_LENGTH(title) >= 1),
    CHECK (CHAR_LENGTH(author) >= 1),
    CHECK (category IN ('Irrigation', 'Market Trends', 'Pest Control', 'Soil Health', 'Crop Management', 'Weather', 'Technology', 'Other')),

    -- Indexes
    INDEX idx_title (title),
    INDEX idx_category (category),
    INDEX idx_author (author),
    INDEX idx_published_date (published_date),
    FULLTEXT idx_content_fulltext (title, description, content)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Consultations table
-- Manages farmer-expert consultation requests
CREATE TABLE consultations (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    farmer_id CHAR(36) NOT NULL,
    farmer_name VARCHAR(100) NOT NULL,
    expert_id CHAR(36),
    topic VARCHAR(100) NOT NULL,
    question TEXT NOT NULL,
    answer TEXT,
    status ENUM('PENDING', 'ANSWERED', 'COMPLETED', 'SCHEDULED') NOT NULL DEFAULT 'PENDING',
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    -- Foreign keys
    FOREIGN KEY (farmer_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (expert_id) REFERENCES users(id) ON DELETE SET NULL,

    -- Constraints
    CHECK (CHAR_LENGTH(topic) >= 1),
    CHECK (CHAR_LENGTH(question) >= 10),

    -- Indexes
    INDEX idx_farmer_id (farmer_id),
    INDEX idx_expert_id (expert_id),
    INDEX idx_status (status),
    INDEX idx_date (date),
    INDEX idx_topic (topic),
    FULLTEXT idx_question_fulltext (question, answer)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Crops table
-- Tracks farmer's crops and farming activities
CREATE TABLE crops (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    farmer_id CHAR(36) NOT NULL,
    name VARCHAR(100) NOT NULL,
    area DECIMAL(10,2) NOT NULL, -- in acres/hectares
    expected_yield DECIMAL(10,2), -- in tons/quintals
    planting_date DATE,
    harvest_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    -- Foreign keys
    FOREIGN KEY (farmer_id) REFERENCES users(id) ON DELETE CASCADE,

    -- Constraints
    CHECK (area > 0),
    CHECK (expected_yield >= 0),
    CHECK (harvest_date IS NULL OR harvest_date >= planting_date),

    -- Indexes
    INDEX idx_farmer_id (farmer_id),
    INDEX idx_name (name),
    INDEX idx_planting_date (planting_date),
    INDEX idx_harvest_date (harvest_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Contact messages table
-- Stores contact form submissions
CREATE TABLE contact_messages (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    submitted_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    -- Constraints
    CHECK (CHAR_LENGTH(name) >= 1),
    CHECK (email REGEXP '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
    CHECK (CHAR_LENGTH(subject) >= 1),
    CHECK (CHAR_LENGTH(message) >= 10),

    -- Indexes
    INDEX idx_email (email),
    INDEX idx_submitted_date (submitted_date),
    INDEX idx_is_read (is_read),
    FULLTEXT idx_message_fulltext (subject, message)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Audit log table for data management
-- Tracks important changes for compliance and debugging
CREATE TABLE audit_log (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    table_name VARCHAR(50) NOT NULL,
    record_id CHAR(36) NOT NULL,
    action ENUM('INSERT', 'UPDATE', 'DELETE') NOT NULL,
    old_values JSON,
    new_values JSON,
    user_id CHAR(36),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    -- Foreign keys
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,

    -- Indexes
    INDEX idx_table_record (table_name, record_id),
    INDEX idx_user_id (user_id),
    INDEX idx_timestamp (timestamp)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Views for common queries
-- Active consultations view
CREATE VIEW active_consultations AS
SELECT c.*, u.username as expert_username
FROM consultations c
LEFT JOIN users u ON c.expert_id = u.id
WHERE c.status IN ('PENDING', 'ANSWERED');

-- Farmer crop summary view
CREATE VIEW farmer_crop_summary AS
SELECT
    farmer_id,
    COUNT(*) as total_crops,
    SUM(area) as total_area,
    AVG(expected_yield) as avg_expected_yield
FROM crops
GROUP BY farmer_id;

-- Article statistics view
CREATE VIEW article_statistics AS
SELECT
    category,
    COUNT(*) as article_count,
    AVG(CHAR_LENGTH(content)) as avg_content_length
FROM articles
GROUP BY category;

-- Triggers for audit logging
DELIMITER //

-- Trigger for users table
CREATE TRIGGER users_audit_trigger AFTER UPDATE ON users
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (table_name, record_id, action, old_values, new_values, user_id)
    VALUES ('users', NEW.id, 'UPDATE',
        JSON_OBJECT('username', OLD.username, 'email', OLD.email, 'role', OLD.role),
        JSON_OBJECT('username', NEW.username, 'email', NEW.email, 'role', NEW.role),
        NEW.id);
END//

-- Trigger for consultations table
CREATE TRIGGER consultations_audit_trigger AFTER INSERT ON consultations
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (table_name, record_id, action, new_values, user_id)
    VALUES ('consultations', NEW.id, 'INSERT',
        JSON_OBJECT('farmer_id', NEW.farmer_id, 'topic', NEW.topic, 'status', NEW.status),
        NEW.farmer_id);
END//

DELIMITER ;

-- Sample data insertion (optional - remove in production)
-- Insert sample users
INSERT INTO users (id, username, email, password, role) VALUES
(UUID(), 'admin', 'admin@farming.com', '$2a$10$hashedpassword', 'ADMIN'),
(UUID(), 'expert1', 'expert1@farming.com', '$2a$10$hashedpassword', 'EXPERT'),
(UUID(), 'farmer1', 'farmer1@farming.com', '$2a$10$hashedpassword', 'FARMER');

-- Insert sample articles
INSERT INTO articles (id, title, description, content, author, category, read_time) VALUES
(UUID(), 'Sustainable Farming Practices', 'Learn about eco-friendly farming methods', 'Detailed content about sustainable farming...', 'Dr. Anita Rao', 'Crop Management', '8 min read'),
(UUID(), 'Weather Impact on Crops', 'Understanding weather patterns for better yields', 'Weather analysis and crop management...', 'Dr. Rajesh Kumar', 'Weather', '6 min read');

-- Performance optimization
-- Analyze tables for better query performance
ANALYZE TABLE users, articles, consultations, crops, contact_messages;