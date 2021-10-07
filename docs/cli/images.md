---
sidebar_label: Listing images
---

# Listing images

Similar to the `docker images` command, the `policy` CLI allows you list local images:

```bash
policy images
```

You can also list remote images with the `--remote` flag.

## Example

```bash
$ policy images

|        REPOSITORY        |  TAG  | SIZE  |  CREATED AT  |
|--------------------------|-------|-------|--------------|
| omrigazitt1/peoplefinder | 1.0.0 | 555 B | 1 minute ago |

$ policy images --remote

|        REPOSITORY        |  TAG  | 
|--------------------------|-------|
| omrigazitt1/peoplefinder | 1.0.0 | 
```
