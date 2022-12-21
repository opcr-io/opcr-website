---
sidebar_label: Pushing images
---

# Pushing images

Much like pushing images with `docker push`, the `policy` CLI allows you to push an image 
from your local filesystem to a policy registry (like `ghcr.io`):

```bash
policy push <registry>/<organization-name>/<repository-name>:<tag>
```

## Example

```bash
$ policy push ghcr.io/ogazitt/peoplefinder:1.0.0

Resolved ref [ghcr.io/ogazitt/peoplefinder:1.0.0].
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9

Pushed ref [ghcr.io/ogazitt/peoplefinder:1.0.0].
digest: sha256:05e6ed84d86f6a252e24f33cb12138d9193780f1d89a1b2ff14ced315fdf8481
```
