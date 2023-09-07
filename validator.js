const avro = require('avro-js');
const typeForValidation = avro.parse('./schema.json');
const fs = require('fs');
const samples = JSON.parse(fs.readFileSync('./samples.json', 'utf8'));

for(let idx in samples){
    console.log(`-----------------------------------------------------`);
    console.log(`Status of sample #${ Number(idx) + 1}`);
    console.log(`-----------------------------------------------------`);
    const status = typeForValidation.isValid(samples[idx], {
        errorHook(path, any, type) {
            console.error(`'${any}' is not a valid value (of type ${type}) for '${path.join(".")}'`)
        }
    })
    if(status){
        console.log('Sample is valid!');
    }
    console.log('\n');
}