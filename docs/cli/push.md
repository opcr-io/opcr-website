---
sidebar_label: Pushing images
---

# Pushing images

Much like pushing images with `docker`, the `policy` CLI allows you to push an image 
from your local filesystem to a policy registry (like `opcr.io`):

```bash
policy push <organization-name>/<repository-name>:<tag>
```

## Example

```bash
policy push aserto/peoplefinder:1.0.0
```
