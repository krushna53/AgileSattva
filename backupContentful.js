require('dotenv').config(); // Load the .env.local file
const contentful = require('contentful');
const fs = require('fs');
const { exec } = require('child_process'); // For running Git commands
const cron = require('node-cron'); // Schedule jobs
const moment = require('moment'); // For formatting the date

// Fetch the environment variables
const spaceId = process.env.REACT_APP_SPACE_ID;
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

// Debugging: Check if environment variables are being loaded
if (!spaceId || !accessToken) {
  console.error('ERROR: Space ID or Access Token is missing!');
  console.log('Loaded spaceId:', spaceId);
  console.log('Loaded accessToken:', accessToken);
  process.exit(1);
}

console.log('Space ID:', spaceId);
console.log('Access Token:', accessToken);

// Initialize Contentful client
const client = contentful.createClient({
  space: spaceId,
  accessToken: accessToken,
});

// Function to fetch all content
const fetchAllContent = async () => {
  let allEntries = [];
  let hasNextPage = true;
  let currentPage = 1;

  try {
    while (hasNextPage) {
      const response = await client.getEntries({
        skip: (currentPage - 1) * 1000, // Skip items based on page
        limit: 1000, // Fetch 1000 items per page (max allowed by Contentful)
      });

      allEntries = allEntries.concat(response.items);
      hasNextPage = response.total > allEntries.length;
      currentPage++;
    }

    // Generate a unique filename using the current date (e.g., contentful-backup-2025-02-06.json)
    const backupFileName = `contentful-backup-${moment().format('YYYY-MM-DD')}.json`;

    // Save the backup as a JSON file with the unique filename
    fs.writeFileSync(backupFileName, JSON.stringify(allEntries, null, 2));
    console.log(`Backup successfully created: ${backupFileName}`);

    // Call function to commit and push to GitHub
    pushToGitHub(backupFileName);
  } catch (error) {
    console.error('Error fetching content from Contentful:', error);
  }
};

// Function to commit and push the backup to GitHub
const pushToGitHub = (backupFileName) => {
  console.log('Pushing backup to GitHub...');

  // Run Git commands to commit and push the backup file to GitHub
  exec(`git add ${backupFileName}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error adding file to Git: ${stderr}`);
      return;
    }

    exec('git commit -m "Daily Contentful backup"', (err, stdout, stderr) => {
      if (err) {
        console.error(`Error committing changes: ${stderr}`);
        return;
      }

      exec('git push origin main', (err, stdout, stderr) => {
        if (err) {
          console.error(`Error pushing to GitHub: ${stderr}`);
          return;
        }

        console.log(`Backup successfully pushed to GitHub! File: ${backupFileName}`);
      });
    });
  });
};

// Schedule the backup job daily at midnight
cron.schedule('0 0 * * *', () => {
  console.log('Running the daily backup...');
  fetchAllContent(); // Fetch content and push to GitHub
});

console.log('Backup script is scheduled to run daily.');
