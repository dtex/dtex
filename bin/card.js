#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const style = {
  reset: '\x1b[0m',
  accent: '\x1b[35m',
  bold: '\x1b[1m',
  divider: '_____________________________________________',
  newline: '\n'
}

const accent = (text) => {
  return `${style.accent}${text}${style.reset}`
}

const bold = (text) => {
  return `${style.bold}${text}${style.reset}`
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
  labelCard: '      Card:',
  disclaimer: [
    'Thank you for trusting my npx card. It is not',
    'as pretty as some others but it has zero',
    'dependencies.'
  ]
}

// Actual strings we're going to output
const output = [
  '',
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
  '',
  style.divider,
  ''
]

console.log(output.join('\n') + style.newline)
