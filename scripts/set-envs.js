
const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/environments/environment.ts';

const production = process.env['PRODUCTION'] ?? false;
const rescountriesApiUrl = process.env['RESCOUNTRIES_API_URL'];

if (!rescountriesApiUrl) {
  throw new Error('RESCOUNTRIES_API_URL is not set');
}


const envFileContent = `
export const environment = {
  production: ${production},
  rescountriesApiUrl: "${rescountriesApiUrl}",
};
`;


mkdirSync('./src/environments', { recursive: true });

writeFileSync(targetPath, envFileContent);
