const db = require('../config/connection');
const {  } = require('../models');

const Data = require('./Data.json');

db.once('open', async () => {
  await .deleteMany({});

  const t = await .insertMany(Data);

  console.log(' seeded!');
  process.exit(0);
});
