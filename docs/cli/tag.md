---
sidebar_label: Tagging images
---

# Tagging images

Just like tagging images with `docker tag`, the `policy` CLI allows you to tag an existing image 
with a new tag:

```bash
policy tag <image-name> <registry>/<organization-name>/<repository-name>:<tag>
```

## Example

```bash
$ policy tag ghcr.io/ogazitt/peoplefinder:1.0.0 ghcr.io/ogazitt/peoplefinder:latest

Tagging image.
reference: ghcr.io/ogazitt/peoplefinder:latest
```

Check out the new tag:

```bash
$ policy images

|          REPOSITORY          |  TAG   | SIZE  |  CREATED AT   |
|------------------------------|--------|-------|---------------|
| ghcr.io/ogazitt/peoplefinder | 1.0.0  | 555 B | 5 minutes ago |
| ghcr.io/ogazitt/peoplefinder | latest | 555 B | 5 minutes ago |
```