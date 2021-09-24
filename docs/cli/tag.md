---
sidebar_label: Tagging images
---

# Tagging images

Much like tagging images with `docker`, the `policy` CLI allows you to tag an existing image 
with a new tag:

```bash
policy tag <image-name> <organization-name>/<repository-name>:<tag>
```

## Example

```bash
policy tag aserto/peoplefinder:1.0.0 aserto/peoplefinder:latest
```
