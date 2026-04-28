const mysql = require('mysql2/promise');

async function displayDatabaseInfo() {
    let connection;

    try {
        // Create connection
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'farmingdb'
        });

        console.log('=== FARMING AWARENESS DATABASE INFORMATION ===\n');

        // Display Users
        console.log('📋 USERS TABLE:');
        console.log('─'.repeat(80));
        const [users] = await connection.execute('SELECT id, username, email, role, created_at FROM users');
        console.table(users);

        // Display Articles
        console.log('\n📄 ARTICLES TABLE:');
        console.log('─'.repeat(80));
        const [articles] = await connection.execute('SELECT id, title, author, category, read_time, published_date FROM articles');
        console.table(articles);

        // Display Consultations
        console.log('\n💬 CONSULTATIONS TABLE:');
        console.log('─'.repeat(80));
        const [consultations] = await connection.execute('SELECT id, farmer_name, topic, status, date FROM consultations');
        console.table(consultations);

        // Display Crops
        console.log('\n🌾 CROPS TABLE:');
        console.log('─'.repeat(80));
        const [crops] = await connection.execute('SELECT id, farmer_id, name, area, expected_yield FROM crops');
        console.table(crops);

        // Display Contact Messages
        console.log('\n📧 CONTACT MESSAGES TABLE:');
        console.log('─'.repeat(80));
        const [messages] = await connection.execute('SELECT id, name, email, subject, submitted_date FROM contact_messages');
        console.table(messages);

        // Summary Statistics
        console.log('\n📊 DATABASE SUMMARY:');
        console.log('─'.repeat(40));

        const [userCount] = await connection.execute('SELECT COUNT(*) as count FROM users');
        const [articleCount] = await connection.execute('SELECT COUNT(*) as count FROM articles');
        const [consultationCount] = await connection.execute('SELECT COUNT(*) as count FROM consultations');
        const [cropCount] = await connection.execute('SELECT COUNT(*) as count FROM crops');
        const [messageCount] = await connection.execute('SELECT COUNT(*) as count FROM contact_messages');

        console.log(`👥 Total Users: ${userCount[0].count}`);
        console.log(`📄 Total Articles: ${articleCount[0].count}`);
        console.log(`💬 Total Consultations: ${consultationCount[0].count}`);
        console.log(`🌾 Total Crops: ${cropCount[0].count}`);
        console.log(`📧 Total Contact Messages: ${messageCount[0].count}`);

    } catch (error) {
        console.error('❌ Error connecting to database:', error.message);
        console.log('\n💡 Make sure:');
        console.log('   1. MySQL server is running');
        console.log('   2. Database "farmingdb" exists');
        console.log('   3. MySQL credentials are correct (root/root)');
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

displayDatabaseInfo();