module.exports = {
  name: 'item-ui-search-bar',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/item/ui-search-bar',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
