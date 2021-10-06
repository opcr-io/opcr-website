---
sidebar_label: Pushing images
---

# Pushing images

Much like pushing images with `docker push`, the `policy` CLI allows you to push an image 
from your local filesystem to a policy registry (like `opcr.io`):

```bash
policy push <organization-name>/<repository-name>:<tag>
```

## Example

```bash
$ policy push omrigazitt1/peoplefinder:1.0.0

Resolved ref [opcr.io/omrigazitt1/peoplefinder:1.0.0].
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9

Pushed ref [opcr.io/omrigazitt1/peoplefinder:1.0.0].
digest: sha256:05e6ed84d86f6a252e24f33cb12138d9193780f1d89a1b2ff14ced315fdf8481
```
