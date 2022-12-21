---
sidebar_label: Signing images
---

# Signing images

You can sign images and verify signatures with `cosign`.

To install `cosign` on a Mac or Linux system:

```bash
brew install cosign
```

## Example

Since `cosign` uses `docker` under the hood, you have to sign in to your registry using `docker`. For example, to use `ghcr.io`, use your GitHub personal access token (PAT) as your password.

```bash
$ echo $PAT | docker login -u <GitHub-account> ghcr.io --password-stdin
Login Succeeded
```

### Initialize cosign

Initialize `cosign` and create a key pair:

```bash
$ cosign initialize
$ cosign generate-key-pair
cosign generate-key-pair
Enter password for private key: Enter again:
Private key written to cosign.key
Public key written to cosign.pub
```

### Signing an image

:::note
You can only sign images that have been pushed to an OCI-compliant registry. 
If you haven't yet, issue a `policy push` on your policy image before signing it.
:::

Sign the container image using the private key:

```bash
$ cosign sign --key cosign.key ghcr.io/ogazitt/peoplefinder:1.0.0
Enter password for private key: Pushing signature to: ghcr.io/ogazitt/peoplefinder:sha256-05e6ed84d86f6a252e24f33cb12138d9193780f1d89a1b2ff14ced315fdf8481.sig
```

### Verifying the signature

Verify the signature using the public key:

```bash
$ cosign verify --key cosign.pub ghcr.io/ogazitt/peoplefinder:1.0.0

Verification for ghcr.io/ogazitt/peoplefinder:1.0.0 --
The following checks were performed on each of these signatures:
  - The cosign claims were validated
  - The signatures were verified against the specified public key
  - Any certificates were verified against the Fulcio roots.

[{"critical":{"identity":{"docker-reference":"ghcr.io/ogazitt/peoplefinder"},"image":{"docker-manifest-digest":"sha256:05e6ed84d86f6a252e24f33cb12138d9193780f1d89a1b2ff14ced315fdf8481"},"type":"cosign container image signature"},"optional":null}]
```
