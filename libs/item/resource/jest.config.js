module.exports = {
  name: 'item-resource',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/item/resource',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
