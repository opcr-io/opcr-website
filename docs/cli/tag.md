---
sidebar_label: Tagging images
---

# Tagging images

Just like tagging images with `docker tag`, the `policy` CLI allows you to tag an existing image 
with a new tag:

```bash
policy tag <image-name> <organization-name>/<repository-name>:<tag>
```

## Example

```bash
$ policy tag omrigazitt1/peoplefinder:1.0.0 omrigazitt1/peoplefinder:latest

Tagging image.
reference: omrigazitt1/peoplefinder:latest
```

Check out the new tag:

```bash
$ policy images

|        REPOSITORY        |  TAG   | SIZE  |  CREATED AT   |
|--------------------------|--------|-------|---------------|
| omrigazitt1/peoplefinder | 1.0.0  | 555 B | 5 minutes ago |
| omrigazitt1/peoplefinder | latest | 555 B | 5 minutes ago |
```