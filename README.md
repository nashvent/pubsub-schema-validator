# Validator Pub/Sub Schema
## Get started
```
npm i
touch samples.json
touch schema.json
```

## Setting
Add schema in schema.json
```
{
    "type": "record",
    "name": "NewSchema",
    "fields": [
      {
        "name": "name",
        "type" : "string",
        "doc" : "Name field is a string"
      }
    ]
}
```

Add samples in samples.json
```
[
    {
        "name": "I'm valid"
    },
    {
        "name": "I'm valid to"
    },
    {
        "name": {
            "msg": "I'm invalid"
        }
    },
    {
        "name": 1
    }
]
```

## Execute
```
node validator.js
```