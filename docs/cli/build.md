---
sidebar_label: Building images
---

# Building images

Similar to building images with `docker build`, the `policy` CLI allows you to build an image 
from the contents of a directory and tag that image with a name that consists of an 
organization name, a repository name, and a tag:

```bash
policy build <directory> -t <registry>/<organization-name>/<repository-name>:<tag>
```

Your current directory should contain an OPA bundle manifest, and rego files that make
up a policy.

## Example

```bash
$ policy build . -t ghcr.io/ogazitt/peoplefinder:1.0.0


Created new image.
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9

Tagging image.
reference: ghcr.io/ogazitt/peoplefinder:1.0.0
```

Note: The tag is optional. If omitted, the image is created as default:latest, which does not follow the accepted OCI format `<registry>/<organization-name>/<repository-name>:<tag>`, to prevent pushing the image to a registry without an appropriate tag.

```bash
$ policy build .


Created new image.
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9

Tagging image.
reference: ghcr.io/default:latest
```
