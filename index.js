#! /usr/bin/env node

const util = require('util')
const fs = require('fs')
const {blue, red} = require('chalk')
const dotenv = require('dotenv')
const exec = util.promisify(require('child_process').exec)
const [tableName, envFilePath] = process.argv.slice(2, 4)
const info = msg => console.info(blue(msg))
const error = err => console.info(red(err))


async function addToCredstash(key, value) {
  const cmd = `credstash -t="${tableName}" put "${key}" "${value}"`
  try {
    const { stdout, stderr } = await exec(cmd)
    info(stdout)
    error(stderr)
  } catch (e) {
    error(e)
  }
}

info(`Uploading credentials in ${envFilePath} to ${tableName}`)
const envVars = dotenv.parse(fs.readFileSync(envFilePath, 'utf8'))
Object.keys(envVars).map(key => addToCredstash(key, envVars[key]))
