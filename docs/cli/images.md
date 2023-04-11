---
sidebar_label: Listing images
---

# Listing images

Similar to the `docker images` command, the `policy` CLI allows you list local images:

```bash
policy images
```

## Options

`-e, --show-empty`: show policies with no images

## Example

```bash
$ policy images

|          REPOSITORY          |  TAG  | SIZE  |  CREATED AT  |
|------------------------------|-------|-------|--------------|
| ghcr.io/ogazitt/peoplefinder | 1.0.0 | 555 B | 1 minute ago |
```
