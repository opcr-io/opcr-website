---
sidebar_label: Tutorial
---

# Tutorial

## Sign in

Sign in to your container registry. This example is written for `ghcr.io`. 

:::note
More detailed instructions on other registries can be found [here](/docs/cli/login).
:::

```bash
$ echo $PAT| policy login -s ghcr.io -u <github-account> --password-stdin
```

## CD into a directory with OPA policy source code

If you already have an OPA policy:

```bash
$ cd <directory that has an OPA project - rego files / data files>
```

Or, if you want to play with a sample OPA policy:

```bash
$ git clone https://github.com/aserto-demo/policy-peoplefinder
$ cd policy-peoplefinder
```

## Build the policy container image

```bash
$ policy build ./src -t <registry>/<your_organization>/peoplefinder:1.0.0


Created new image.
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9

Tagging image.
reference: ghcr.io/ogazitt/peoplefinder:1.0.0
```

## List the policy images

```bash
$ policy images

|          REPOSITORY          |  TAG  | SIZE  |  CREATED AT  |
|------------------------------|-------|-------|--------------|
| ghcr.io/ogazitt/peoplefinder | 1.0.0 | 555 B | 1 minute ago |
```

## Push the policy to ghcr.io

```bash
$ policy push ghcr.io/ogazitt/peoplefinder:1.0.0

Resolved ref [ghcr.io/ogazitt/peoplefinder:1.0.0].
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9

Pushed ref [ghcr.io/ogazitt/peoplefinder:1.0.0].
digest: sha256:05e6ed84d86f6a252e24f33cb12138d9193780f1d89a1b2ff14ced315fdf8481
```

## Tag the policy

```bash
$ policy tag ghcr.io/ogazitt/peoplefinder:1.0.0 ghcr.io/ogazitt/peoplefinder:latest

Tagging image.
reference: ghcr.io/ogazitt/peoplefinder:latest
```

Check out the new tag:

```bash
$ policy images

|          REPOSITORY          |  TAG   | SIZE  |  CREATED AT   |
|------------------------------|--------|-------|---------------|
| ghcr.io/ogazitt/peoplefinder | 1.0.0  | 555 B | 5 minutes ago |
| ghcr.io/ogazitt/peoplefinder | latest | 555 B | 5 minutes ago |
```

## Remove a policy from the local cache

```bash
$ policy rm ghcr.io/ogazitt/peoplefinder:1.0.0

Removed reference.
reference: ghcr.io/ogazitt/peoplefinder:1.0.0
```

It's gone!

```bash
$ policy images

|          REPOSITORY          |  TAG   | SIZE  |  CREATED AT   |
|------------------------------|--------|-------|---------------|
| ghcr.io/ogazitt/peoplefinder | latest | 555 B | 6 minutes ago |
```

## Pull the image back from the registry

```bash
$ policy pull ghcr.io/ogazitt/peoplefinder:1.0.0

Pulling.
ref: ghcr.io/ogazitt/peoplefinder:1.0.0

Pulled ref [ghcr.io/ogazitt/peoplefinder:1.0.0].
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9
```

It's back!

```bash
$ policy images

|          REPOSITORY          |  TAG   | SIZE  |  CREATED AT   |
|------------------------------|--------|-------|---------------|
| ghcr.io/ogazitt/peoplefinder | latest | 555 B | 7 minutes ago |
| ghcr.io/ogazitt/peoplefinder | 1.0.0  | 555 B | 7 minutes ago |
```

## Export a policy to a tarball

```bash
$ policy save ghcr.io/ogazitt/peoplefinder

Resolved ref [ghcr.io/ogazitt/peoplefinder:1.0.0].
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9
```

You should now have a `bundle.tar.gz` file in your directory.

## Sign and verify signatures

Issue these commands to generate a key pair, sign the policy image, and verify its signature using the public key:

```bash
$ docker login -u <GitHub-account> ghcr.io
$ cosign initialize
$ cosign generate-key-pair
$ cosign sign --key cosign.key ghcr.io/ogazitt/peoplefinder:1.0.0
$ cosign verify --key cosign.pub ghcr.io/ogazitt/peoplefinder:1.0.0
```

:::note
For more detailed instructions, see the [signing images](/docs/cli/sign) docs.
:::

## Run the read-eval-print loop for this policy version

```bash
$ policy repl ghcr.io/ogazitt/peoplefinder:1.0.0

Pulling.
ref: ghcr.io/ogazitt/peoplefinder:1.0.0

Pulled ref [ghcr.io/ogazitt/peoplefinder:1.0.0].
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9
running policy [ghcr.io/ogazitt/peoplefinder:1.0.0]
> data.system.bundles
{
  "/Users/ogazitt/.policy/policies-root/blobs/sha256/84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9": {
    "manifest": {
      "revision": "",
      "roots": [
        "peoplefinder"
      ]
    }
  }
}
>
```