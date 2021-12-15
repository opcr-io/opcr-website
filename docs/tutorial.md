---
sidebar_label: Tutorial
---

# Tutorial

## Sign in

:::note
Before you sign in, you need to [create](/docs/opcr/create-account) an `opcr.io` account using your GitHub credentials.
:::

```bash
$ policy login -u <your GitHub account> -p <GitHub PAT>
```

## CD into a directory with OPA policy source code

If you already have an OPA policy:

```bash
$ cd <directory that has an OPA project - rego files / data files>
```

Or, if you want to play with a sample OPA policy:

```bash
$ git clone https://github.com/aserto-dev/policy-peoplefinder
$ cd policy-peoplefinder
```

## Build the policy container image

```bash
$ policy build ./src -t <your_organization>/peoplefinder:1.0.0


Created new image.
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9

Tagging image.
reference: omrigazitt1/peoplefinder:1.0.0
```

## List the policy images

```bash
$ policy images

|        REPOSITORY        |  TAG  | SIZE  |  CREATED AT  |
|--------------------------|-------|-------|--------------|
| omrigazitt1/peoplefinder | 1.0.0 | 555 B | 1 minute ago |
```

## Push the policy to opcr.io

```bash
$ policy push omrigazitt1/peoplefinder:1.0.0

Resolved ref [opcr.io/omrigazitt1/peoplefinder:1.0.0].
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9

Pushed ref [opcr.io/omrigazitt1/peoplefinder:1.0.0].
digest: sha256:05e6ed84d86f6a252e24f33cb12138d9193780f1d89a1b2ff14ced315fdf8481
```

## Tag the policy

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

## Remove a policy from the local cache

```bash
$ policy rm omrigazitt1/peoplefinder:1.0.0

Removed reference.
reference: omrigazitt1/peoplefinder:1.0.0
```

It's gone!

```bash
$ policy images

|        REPOSITORY        |  TAG   | SIZE  |  CREATED AT   |
|--------------------------|--------|-------|---------------|
| omrigazitt1/peoplefinder | latest | 555 B | 6 minutes ago |
```

## Pull the image back from the registry

```bash
$ policy pull omrigazitt1/peoplefinder:1.0.0

Pulling.
ref: omrigazitt1/peoplefinder:1.0.0

Pulled ref [opcr.io/omrigazitt1/peoplefinder:1.0.0].
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9
```

It's back!

```bash
$ policy images

|        REPOSITORY        |  TAG   | SIZE  |  CREATED AT   |
|--------------------------|--------|-------|---------------|
| omrigazitt1/peoplefinder | latest | 555 B | 7 minutes ago |
| omrigazitt1/peoplefinder | 1.0.0  | 555 B | 7 minutes ago |
```

## Export a policy to a tarball

```bash
$ policy save omrigazitt1/peoplefinder

Resolved ref [opcr.io/omrigazitt1/peoplefinder:1.0.0].
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9
```

You should now have a `bundle.tar.gz` file in your directory.

## Sign and verify signatures

Issue these commands to generate a key pair, sign the policy image, and verify its signature using the public key:

```bash
$ docker login -u <GitHub-account> opcr.io
$ cosign init
$ cosign generate-key-pair
$ cosign sign -key cosign.key opcr.io/omrigazitt1/peoplefinder:1.0.0
$ cosign verify -key cosign.pub opcr.io/omrigazitt1/peoplefinder:1.0.0
```

:::note
For more detailed instructions, see the [signing images](/docs/cli/sign) docs.
:::

## Run the read-eval-print loop for this policy version

```bash
$ policy repl omrigazitt1/peoplefinder:1.0.0

Pulling.
ref: omrigazitt1/peoplefinder:1.0.0

Pulled ref [opcr.io/omrigazitt1/peoplefinder:1.0.0].
digest: sha256:84dbd4e3b5572dd2f23c3c987c89443fdcb57af87d714ea296fc552192fb17e9
running policy [omrigazitt1/peoplefinder:1.0.0]
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