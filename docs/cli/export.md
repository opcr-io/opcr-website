---
sidebar_label: Exporting images
---

# Exporting images

Much like exporting images with `docker`, the `policy` CLI allows you to export an image to a tarball:

```bash
policy save <organization-name>/<repository-name>:<tag>
```

This command will save the policy to a file called `bundle.tar.gz` in the current directory.

## Example

```bash
$ policy save omrigazitt1/peoplefinder

Resolved ref [eng.openpolicyregistry.io/omrigazitt1/peoplefinder:1.0.0].
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9
```
