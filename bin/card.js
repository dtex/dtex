#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

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
const newline = '\n'
const divider = '\n_____________________________________________\n\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = divider + heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding + divider + data.disclaimer.join('\n') + newline

console.log(output)
