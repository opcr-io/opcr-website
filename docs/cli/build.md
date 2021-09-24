---
sidebar_label: Building images
---

# Building images

Much like building images with `docker`, the `policy` CLI allows you to build an image 
from the contents of a directory and tag that image with a name that consists of an 
organization name, a repository name, and a tag:

```bash
policy build <directory> -t <organization-name>/<repository-name>:<tag>
```

## Example

```bash
policy build . -t aserto/peoplefinder:1.0.0
```

