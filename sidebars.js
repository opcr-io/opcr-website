module.exports = {
  // do not auto-generates a sidebar from the docs folder structure
  //sidebar: [{type: 'autogenerated', dirName: '.'}],

  // create a sidebar manually
  sidebar: [
    'intro',
    'tutorial',
    'opa',
    'topaz',
    {
      type: 'category',
      label: 'CLI Reference',
      items: [
        'cli/download',
        'cli/login',
        'cli/create',
        'cli/build',
        'cli/images',
        'cli/tag',
        'cli/push',
        'cli/pull',
        'cli/rm',
        'cli/export',
        'cli/repl',
        'cli/sign',
      ],
    }, 
  ],
}