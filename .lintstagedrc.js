module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `yarn run lint --fix ${filenames
      .map((file) => `--file ${file}`)
      .join(' ')}`,
    `yarn run test --findRelatedTests ${filenames.join(' ')} -u`
  ]
}
