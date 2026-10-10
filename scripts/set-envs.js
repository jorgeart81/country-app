const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/environments/environment.ts';

const production = process.env['PRODUCTION'] ?? false;
// Angular client URL (defaults to /api for proxy usage)
const appApiUrl = process.env['APP_API_URL'] || process.env['RESCOUNTRIES_API_URL'] || '/api';

// 1. Generate Angular environment variables
const envFileContent = `
export const environment = {
  production: ${production},
  rescountriesApiUrl: "${appApiUrl}",
};
`;

mkdirSync('./src/environments', { recursive: true });
writeFileSync(targetPath, envFileContent);
console.log('✓ environment.ts generated successfully');
