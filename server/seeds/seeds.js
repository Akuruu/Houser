const db = require('../config/connection');
const { User, Property } = require('../models');
const userSeeds = require('./userData.json');

const propertySeeds = require('./propertyData.json');

db.once('open', async () => {
  try {
    await Property.deleteMany({});
    await User.deleteMany({});

    for (let i = 0; i < userSeeds.length; i++) {
      const user = await User.create(userSeeds[i]);

      const property = await Property.create(propertySeeds[i]);

      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        {
          $addToSet: {
            properties: { _id: property._id }
          }
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
