---
sidebar_label: Login
---

# Login to opcr.io

Just like with `docker login`, the `policy` CLI requires you to login to an OCIv2-compliant 
registry.  To sign into the `opcr.io` registry:

```bash
policy login -u <GitHub-account> -p <GitHub-PAT>
```

:::note
This assumes that you've [created](/docs/opcr/create-account) an `opcr.io` account using your GitHub account.
:::