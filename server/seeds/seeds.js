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

      const updatedProperty = await Property.findOneAndUpdate(
        { _id: property._id },
        {
          $addToSet: {
            manager: { _id: user._id }
          }
        }
      );
    }

    const users = await User.find();
    const reverseUsers = users.reverse();
    const properties = await Property.find();

    for (i = 0; i < reverseUsers.length; i++) {
      const tenantUpdate = await Property.findOneAndUpdate(
        { _id: properties[i]._id },
        {
          $addToSet: {
            tenants: { _id: reverseUsers[i]._id }
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
