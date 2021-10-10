---
sidebar_label: Removing images
---

# Removing images

To remove a tagged image:

```bash
policy rm <organization-name>/<repository-name>:<tag>
```

## Options

`-r, --remote`: remove an image from a remote registry

`-a, --all`: when remote is set, remove all tags and the policy reference

`-f, --force`: don't ask for confirmation

## Example

```bash
$ policy rm omrigazitt1/peoplefinder:1.0.0

Removed reference.
reference: omrigazitt1/peoplefinder:1.0.0
```

