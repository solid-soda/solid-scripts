const { packageJson, deleteFiles } = require('mrm-core');

const clearConfigs = ({ files, packageJsonPath } = {}) => {
    if (Array.isArray(files) && files.length > 0) {
        deleteFiles(files)
    }

    if (packageJsonPath) {
        packageJson().unset(packageJsonPath)
    }
}

module.exports = clearConfigs