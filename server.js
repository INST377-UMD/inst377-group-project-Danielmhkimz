// hosting local server
const express = require('express');
const path = require('path');
const supabaseClient = require('@supabase/supabase-js');
const app = express();
const port = process.env.PORT || 4000;

// initialize Supabase data
const supabaseUrl = 'https://vtgkymnnvvuctfxoctuq.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0Z2t5bW5udnZ1Y3RmeG9jdHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4NzE4MzYsImV4cCI6MjAxODQ0NzgzNn0.XYBrZ3QSMIYvpoZyKKHNJ3z8o6_ddYZvtkBWKfuQt8o';
const supabase = createClient(supabaseUrl, supabaseKey);




// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Default route for serving the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Supabase interaction
app.get('/api/categories', async (req, res) => {
    const { data, error } = await supabase
        .from('categories') 
        .select('*');

    if (error) res.status(500).send(error);
    else res.json(data);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

