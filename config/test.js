/**
 * Configuration file to be used while running tests
 */
require('dotenv').config()
module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  AUTH_V2_URL: process.env.AUTH_V2_URL,
  AUTH_V2_CLIENT_ID: process.env.AUTH_V2_CLIENT_ID,
  AUTH_V3_URL: process.env.AUTH_V3_URL,
  MOCK_API_PORT: process.env.MOCK_API_PORT || 4000,
  ADMIN_CREDENTIALS_USERNAME: process.env.ADMIN_CREDENTIALS_USERNAME,
  ADMIN_CREDENTIALS_PASSWORD: process.env.ADMIN_CREDENTIALS_PASSWORD,
  MANAGER_CREDENTIALS_USERNAME: process.env.MANAGER_CREDENTIALS_USERNAME,
  MANAGER_CREDENTIALS_PASSWORD: process.env.MANAGER_CREDENTIALS_PASSWORD,
  COPILOT_CREDENTIALS_USERNAME: process.env.COPILOT_CREDENTIALS_USERNAME,
  COPILOT_CREDENTIALS_PASSWORD: process.env.COPILOT_CREDENTIALS_PASSWORD,
  USER_CREDENTIALS_USERNAME: process.env.USER_CREDENTIALS_USERNAME,
  USER_CREDENTIALS_PASSWORD: process.env.USER_CREDENTIALS_PASSWORD,
  WAIT_TIME: 6000,
  AUTOMATED_TESTING_REPORTERS_FORMAT: process.env.AUTOMATED_TESTING_REPORTERS_FORMAT
    ? process.env.AUTOMATED_TESTING_REPORTERS_FORMAT.split(',')
    : ['cli', 'html'],
  AUTOMATED_TESTING_NAME_PREFIX: process.env.AUTOMATED_TESTING_NAME_PREFIX || 'POSTMANE2E-',
  S3_ENDPOINT: process.env.S3_ENDPOINT || 'http://localhost:9000',
  API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000',
  BUSAPI_URL: process.env.BUSAPI_URL || 'http://localhost:4000/v5',
  TAGS: {
    TAGS_BASE_URL: process.env.TAGS_BASE_URL || 'http://localhost:4000',
    TAGS_API_VERSION: process.env.TAGS_API_VERSION || '/v3',
    TAGS_FILTER: process.env.TAGS_FILTER || '/tags'
  }

}
