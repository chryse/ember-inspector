module.exports = [
  'tmp',
  // The below is commented because we are unable to block while building
  // which would result in errors if we refresh quickly

  // 'dist_chrome/images',
  // 'dist_chrome/ember_debug',
  // 'dist_chrome/vendor',

  'dist_firefox/data/images',
  'dist_firefox/data/ember_debug',
  'dist_firefox/data/vendor'
];
