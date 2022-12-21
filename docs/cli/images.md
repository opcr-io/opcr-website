---
sidebar_label: Listing images
---

# Listing images

Similar to the `docker images` command, the `policy` CLI allows you list local images:

```bash
policy images
```

## Options

`-r, --remote`: list images stored in a remote registry

`-e, --show-empty`: show policies with no images

## Example

```bash
$ policy images

|          REPOSITORY          |  TAG  | SIZE  |  CREATED AT  |
|------------------------------|-------|-------|--------------|
| ghcr.io/ogazitt/peoplefinder | 1.0.0 | 555 B | 1 minute ago |

$ policy images --remote

|          REPOSITORY          |  TAG  | 
|------------------------------|-------|
| ghcr.io/ogazitt/peoplefinder | 1.0.0 | 
```
