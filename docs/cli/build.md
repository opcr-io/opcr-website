---
sidebar_label: Building images
---

# Building images

Similar to building images with `docker build`, the `policy` CLI allows you to build an image 
from the contents of a directory and tag that image with a name that consists of an 
organization name, a repository name, and a tag:

```bash
policy build <directory> -t <organization-name>/<repository-name>:<tag>
```

Your current directory should contain an OPA bundle manifest, and rego files that make
up a policy.

## Example

```bash
$ policy build . -t omrigazitt1/peoplefinder:1.0.0


Created new image.
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9

Tagging image.
reference: omrigazitt1/peoplefinder:1.0.0
```
