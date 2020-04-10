const { packageJson, json, install, uninstall } = require('mrm-core');
const nanomerge = require('nanomerge')
const { difference } = require('lodash')

const overwrite = require('../utils/overwrite')
const hasDependency = require('../utils/hasDependency')

const baseConfig = require('./config/eslint-base')
const jsConfig = require('./config/eslint-js')
const tsConfig = require('./config/eslint-ts')
const reactConfig = require('./config/eslint-react')

const baseDependencies = ['eslint', 'eslint-plugin-import-helpers', 'eslint-plugin-unicorn']
const jsDependencies = ['babel-eslint']
const tsDependencies = ['@typescript-eslint/eslint-plugin', '@typescript-eslint/parser']
const reactDependencies = ['eslint-plugin-react', 'eslint-plugin-react-hooks']

function task() {
    const package = packageJson()
    
    const packageHasDependency = hasDependency(package)

    const hasTypeScript = packageHasDependency('typescript')
    const languageConfig =  hasTypeScript ? tsConfig : jsConfig
    const languageDependencies = hasTypeScript ? tsDependencies : jsDependencies

    let additionalConfig = {}
    const additionalDependencies = []

    const hasReact = packageHasDependency('react')
    if (hasReact) {
        additionalConfig = nanomerge(additionalConfig, reactConfig)
        additionalDependencies.push(...reactDependencies)
    }

    // generate config
    overwrite(json, '.eslintrc')
        .merge(baseConfig)
        .merge(languageConfig)
        .merge(additionalConfig)
        .save()

    // dependencies
    const allDependencies = [...jsDependencies, ...tsDependencies, ...reactDependencies]
    const installDependencies = [...baseDependencies, ...languageDependencies, ...additionalDependencies]

    const uninstallDependencies = difference(allDependencies, installDependencies)
    uninstall(uninstallDependencies)

    install(installDependencies);

    // scripts
    package
        .setScript('lint:code', 'eslint .')
        .save()
}

task.description = 'Sync ESLint config';

module.exports = task
