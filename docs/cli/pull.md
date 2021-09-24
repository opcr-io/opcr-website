---
sidebar_label: Pulling images
---

# Pulling images

Much like pulling images with `docker`, the `policy` CLI allows you to pull an image 
from a policy registry (like `opcr.io`) to your local machine:

```bash
policy pull <organization-name>/<repository-name>:<tag>
```

## Example

```bash
policy pull aserto/peoplefinder:1.0.0
```
