module.exports = {
  name: 'item-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/item/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
