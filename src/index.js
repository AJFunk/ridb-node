import organization from './organization.js';

import axios from 'axios';

axios.defaults.headers.common['apikey'] = process.env.RIDB_KEY;
axios.defaults.baseURL = 'https://ridb.recreation.gov/api/v1/';

const Organization = organization();

const RIDB = {
  organization: Organization
};

export default RIDB;
