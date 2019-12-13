module.exports = {
  name: 'item-ui-item-list',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/item/ui-item-list',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
