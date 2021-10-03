---
sidebar_label: Read-eval-print loop
---

# Read-eval-print loop (REPL)

The `policy` CLI gives you a read-eval-print loop experience over a tagged policy image. 

```bash
policy run <organization-name>/<repository-name>:<tag>
```

## Commands

### input

You can set the `input` that will be evaluated by the policy to a JSON document:

```bash
>> input '{ "foo": "bar" }'

Input set.
```

### query

You can evaluate a query using the `query` command:

```bash
>> query data
```

## Example

```bash
$ policy run omrigazitt1/peoplefinder:1.0.0

Pulling.
ref: omrigazitt1/peoplefinder:1.0.0

Pulled ref [opcr.io/omrigazitt1/peoplefinder:1.0.0].
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9


Policy Interactive Shell (you can run 'help' for some pointers)

>> input '{ "foo": "bar" }'

Input set.
>> query input
[
  {
    "expressions": [
      {
        "value": {
          "foo": "bar"
        },
        "text": "input",
        "location": {
          "row": 1,
          "col": 1
        }
      }
    ]
  }
]
>> query "x = data.system.bundles"
[
  {
    "expressions": [
      {
        "value": true,
        "text": "x = data.system.bundles",
        "location": {
          "row": 1,
          "col": 1
        }
      }
    ],
    "bindings": {
      "x": {
        "/Users/ogazitt/.policy/policies-root/blobs/sha256/84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9": {
          "manifest": {
            "revision": "",
            "roots": [
              "peoplefinder"
            ]
          }
        }
      }
    }
  }
]
>>
```