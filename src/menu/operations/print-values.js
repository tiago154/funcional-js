module.exports = values => values.length ?
    console.log(`\n${JSON.stringify(values, null, 4)}\n`) :
    console.log('\nDados não localizados\n');