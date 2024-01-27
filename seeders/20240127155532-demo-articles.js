'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Articles', [{
        name: "Introduction to Ashtanga",
        slug: "introduction-to-ashtanga",
        image: "ashtanga.jpg",
        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna nisi, imperdiet ut dolor ut, lobortis finibus metus. Suspendisse nec neque erat. Fusce tortor lectus, tincidunt non ullamcorper non, tempor volutpat leo. Vivamus volutpat velit ac felis vulputate faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce at arcu accumsan, feugiat massa fermentum, efficitur tortor. Nullam aliquam, felis ac aliquam hendrerit, velit lacus sollicitudin nunc, id sagittis neque leo condimentum enim. Curabitur sed tincidunt risus. Donec sit amet sodales est. Nunc maximus massa non lorem vehicula egestas. Donec elementum et neque sit amet tincidunt.</p>",
        published: '2020-01-08 15:02:30',
        createdAt: new Date(),
        updatedAt: new Date(),
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: "Morning vinyasa flow routine",
        slug: "morning-vinyasa-flow-routine",
        image: "morning.jpg",
        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna nisi, imperdiet ut dolor ut, lobortis finibus metus. Suspendisse nec neque erat. Fusce tortor lectus, tincidunt non ullamcorper non, tempor volutpat leo. Vivamus volutpat velit ac felis vulputate faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce at arcu accumsan, feugiat massa fermentum, efficitur tortor. Nullam aliquam, felis ac aliquam hendrerit, velit lacus sollicitudin nunc, id sagittis neque leo condimentum enim. Curabitur sed tincidunt risus. Donec sit amet sodales est. Nunc maximus massa non lorem vehicula egestas. Donec elementum et neque sit amet tincidunt.</p>",
        published: '2020-04-14 15:02:41',
        createdAt: new Date(),
        updatedAt: new Date(),
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: "Secrets of a yoga teacher",
        slug: "secrets-of-a-yoga-teacher",
        image: "yoga-teacher.jpg",
        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna nisi, imperdiet ut dolor ut, lobortis finibus metus. Suspendisse nec neque erat. Fusce tortor lectus, tincidunt non ullamcorper non, tempor volutpat leo. Vivamus volutpat velit ac felis vulputate faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce at arcu accumsan, feugiat massa fermentum, efficitur tortor. Nullam aliquam, felis ac aliquam hendrerit, velit lacus sollicitudin nunc, id sagittis neque leo condimentum enim. Curabitur sed tincidunt risus. Donec sit amet sodales est. Nunc maximus massa non lorem vehicula egestas. Donec elementum et neque sit amet tincidunt.</p>",
        published: '2020-05-28 15:02:55',
        createdAt: new Date(),
        updatedAt: new Date(),
      }]),


    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Articles', null, {})
  }
};
