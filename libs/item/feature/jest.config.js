module.exports = {
  name: 'item-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/item/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
