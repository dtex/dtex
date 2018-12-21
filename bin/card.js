#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const colors = {
  black: '30m',
  red: '31m',
  green: '32m',
  yellow: '33m',
  blue: '34m',
  purple: '35m',
  cyan: '36m',
  white: '37m',
}

const accent = (text) => {
  return `${style.accent}${text}\x1b[0m`
}

const bold = (text) => {
  return `\x1b[1m${text}\x1b[0m`
}

const style = {
  // Change accent color here
  accent: `\x1b[${colors.purple}`,
  
  // Change card width here
  divider: ''.padEnd(44, '_')

}

// Text definitions
const data = {
  name: 'Donovan Buck /',
  handle: 'dtex',
  work: 'Vice President at BrandExtract',
  twitter: 'https://twitter.com/dtex',
  github: 'https://github.com/dtex',
  linkedin: 'https://linkedin.com/in/dtex',
  web: 'https://dtex.us',
  npx: 'npx dtex',
  labelWork: '      Work:',
  labelTwitter: '   Twitter:',
  labelGitHub: '    GitHub:',
  labelLinkedIn: '  LinkedIn:',
  labelWeb: '       Web:',
  labelCard: '      Card:'
}

// Actual strings we're going to output
const output = [
  style.divider,
  '',
  `${data.name} ${accent(data.handle)}`,
  '',
  `${bold(data.labelWork)}  ${data.work}`,
  `${bold(data.labelTwitter)}  ${accent(data.twitter)}`,
  `${bold(data.labelGitHub)}  ${accent(data.github)}`,
  `${bold(data.labelLinkedIn)}  ${accent(data.linkedin)}`,
  `${bold(data.labelWeb)}  ${accent(data.web)}`,
  '',
  `${bold(data.labelCard)}  ${data.npx}`,
  style.divider,
  ''
]

console.log(output.join('\n'))


