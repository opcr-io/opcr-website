---
sidebar_label: Topaz Config
---

# Referencing an image from Topaz Config

[Topaz](https://topaz.sh) uses OPA as a library, so configuring Topaz to download an OCI image works exactly the same way as it does for OPA.

For Topaz, the OPA configuration is placed in a `opa:` section in the Topaz config file.

## Example: ghcr.io

To set up `ghcr.io` as the source for the policy image that Topaz will retrieve, you can use the following Topaz config:

```yaml
opa:
  instance_id: "-"
  graceful_shutdown_period_seconds: 2
  local_bundles:
    paths: []
    skip_verification: true
  config:
    services:
      ghcr-registry:
        url: https://ghcr.io
        type: oci
        response_header_timeout_seconds: 5
    bundles:
      policy-todo:
        service: ghcr-registry
        resource: "ghcr.io/aserto-policies/policy-todo-rebac:latest"
        persist: false
        config:
          polling:
            min_delay_seconds: 60
            max_delay_seconds: 120
```

To access private images, you'll need to provide credentials for the `ghcr-registry` service:

```yaml
opa:
  instance_id: "-"
  graceful_shutdown_period_seconds: 2
  local_bundles:
    paths: []
    skip_verification: true
  config:
    services:
      ghcr-registry:
        url: https://ghcr.io
        type: oci
        response_header_timeout_seconds: 5
        credentials:
          bearer:
            scheme: "Bearer"
            token: "<PAT>"
    bundles:
      policy-todo:
        service: ghcr-registry
        resource: ghcr.io/${ORGANIZATION}/${REPOSITORY}:${TAG}
        persist: false
        config:
          polling:
            min_delay_seconds: 60
            max_delay_seconds: 120
```

For registries that only support basic authentication, you can pass the credentials as follows:

```yaml
    credentials:
      bearer:
        scheme: "Basic"
        token: "<username>:<password>"
```
