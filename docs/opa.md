---
sidebar_label: OPA Config
---

# Referencing an image from OPA Config

:::note
The [OPA docs](https://www.openpolicyagent.org/docs/latest/configuration/#using-private-image-from-oci-repositories) are the definitive source for how to configure OPA to download OCI images.
:::

## Example: ghcr.io

To set up `ghcr.io` as an [OPA service](https://www.openpolicyagent.org/docs/latest/configuration/#example-1), you can use the following OPA config:

```yaml
services:
  ghcr-registry:
    url: https://ghcr.io
    type: oci

bundles:
  authz:
    service: ghcr-registry
    resource: ghcr.io/${ORGANIZATION}/${REPOSITORY}:${TAG}
    persist: true
    polling:
      min_delay_seconds: 60
      max_delay_seconds: 120

persistence_directory: ${PERSISTENCE_PATH}
```

To access private images, you'll need to provide credentials for the `ghcr-registry` service:

```yaml
services:
  ghcr-registry:
    url: https://ghcr.io
    type: oci
    credentials:
      bearer:
        scheme: "Bearer"
        token: "<PAT>"
```

For registries that only support basic authentication, you can pass the credentials as follows:

```yaml
    credentials:
      bearer:
        scheme: "Basic"
        token: "<username>:<password>"
```
