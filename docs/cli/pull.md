---
sidebar_label: Pulling images
---

# Pulling images

Similar to pulling images with `docker pull`, the `policy` CLI allows you to pull an image 
from a policy registry (like `opcr.io`) to your local machine:

```bash
policy pull <organization-name>/<repository-name>:<tag>
```

## Example

```bash
$ policy pull omrigazitt1/peoplefinder:1.0.0

Pulling.
ref: omrigazitt1/peoplefinder:1.0.0

Pulled ref [opcr.io/omrigazitt1/peoplefinder:1.0.0].
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9
```
