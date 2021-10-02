---
sidebar_label: Login
---

# Login to opcr.io

Much like the `docker login` command, the `policy` CLI requires you to login to an OCIv2-compliant 
registry.  To sign into the `opcr.io` registry:

```bash
policy login -u <GitHub account> -p <GitHub PAT>
```

This assumes that you've [created](/docs/opcr/create-account) an `opcr.io` account using your GitHub account name.