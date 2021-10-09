---
sidebar_label: Read-eval-print loop
---

# Read-eval-print loop (REPL)

The `policy` CLI gives you a read-eval-print loop experience over a tagged policy image. It uses the `opa` evaluator under the covers.

```bash
policy repl <organization-name>/<repository-name>:<tag>
```

:::note
`policy repl` requires that you push your tagged image to an OCI-compliant registry. 
If you haven't yet, issue a `policy push` on your policy image.
:::

## Example

```bash
$ policy repl omrigazitt1/peoplefinder:1.0.0

Pulling.
ref: omrigazitt1/peoplefinder:1.0.0

Pulled ref [opcr.io/omrigazitt1/peoplefinder:1.0.0].
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9
running policy [omrigazitt1/peoplefinder:1.0.0]
> data.system.bundles
{
  "/Users/ogazitt/.policy/policies-root/blobs/sha256/84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9": {
    "manifest": {
      "revision": "",
      "roots": [
        "peoplefinder"
      ]
    }
  }
}
>
```