---
sidebar_label: Sign in
---

# Sign in to opcr.io

:::note
This assumes that you've [created](/docs/opcr/create-account) an `opcr.io` account using your GitHub account.
:::

Just like with `docker login`, the `policy` CLI requires you to sign in to an OCIv2-compliant registry.  To sign in to the `opcr.io` registry, use the GitHub account 
you registered with, and a GitHub personal access token (PAT) as your password.

:::note
You can create a GitHub PAT on this [page](https://github.com/settings/tokens).
:::

```bash
policy login -u <GitHub-account> -p <GitHub-PAT>
```


## Options

`-u <GitHub-account>`: specify the GitHub account as the OPCR user

`-p <GitHub-PAT>`: specify a GitHub personal access token (PAT) as the OPCR password

`--password-stdin`: read the password from `stdin`

## Example

```bash
echo $GITHUB_PAT | policy login -u ogazitt --password-stdin
```
