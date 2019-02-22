#!/usr/bin/env node
const path = require('path')
const spawn = require('cross-spawn')

const script = process.argv[2]

const projectPath = process.cwd()

const functionScripts = ['lint', 'pretty']
const processScripts = ['cz']

if (functionScripts.includes(script)) {
  const context = {
    projectPath,
  }

  const { status } = require(path.join('../scripts', script))(context)
  process.exit(status)
}

if (processScripts.includes(script)) {
  const result = spawn.sync(
    'node',
    [require.resolve(path.join('../scripts', script)), projectPath],
    { stdio: 'inherit' }
  )
  process.exit(result.status)
}

console.log(`Unknown script "${script}".`)
process.exit(1)
