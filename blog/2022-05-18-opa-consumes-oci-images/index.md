---
slug: opa-consumes-oci-images
title: OPA natively consumes OCI images
authors: [daniel]
tags: [policy, opa]
---

The Open Policy agent can be configured to consume policy bundles from remote HTTP servers, including support for AWS S3, Google Cloud Storage, and Azure Blog Storage.

As of version `v0.40.0`, OPA can now consume policy bundles packaged as OCI images. This allows building and tagging OPA policies just like docker containers, including using tools like [`cosign`](https://github.com/sigstore/cosign) to sign those images and verify the signatures.

OCI images can be built using the [`policy`](https://github.com/opcr-io/policy) CLI, part of the Open Policy Containers project.

Read on for more details!

<!--truncate-->

## Step 1: Using policy CLI to build and publish a policy image

The [policy CLI](/docs/cli/download) tool can be easily used to build and push a policy to a remote OCI registry using just two simple commands:
- `policy build <path_to_src> -t <org>/<repo>:<tag>`
- `policy push <registry>/<org>/<repo>:<tag>`

A full tutorial is available [here](/docs/tutorial).

## Step 2: Prepare your OPA configuration
The [services configuration documentation for OPA](https://www.openpolicyagent.org/docs/latest/configuration/#services) now includes a parameter defined as type to allow users to configure OCI compatible service registries. 
 
Example of using a public policy image configuration with the bundle plugin from [Open Policy Registry](https://openpolicyregistry.io/):
```
config.yaml
---
services:
  open-policy-registry:
    url: https://opcr.io
    type: oci

bundles:
  authz:
    service: open-policy-registry
    resource: opcr.io/aserto-templates/peoplefinder-rbac:1.0.0
    persist: true
    polling:
      min_delay_seconds: 3
      max_delay_seconds: 5

persistence_directory: /tmp/opa
```
## Step 3: Start an OPA instance
Example of running an OPA instance from the command line using the [opa CLI](https://www.openpolicyagent.org/docs/edge/cli/): 
`opa run -c config.yaml`
Once the interactive terminal starts you will receive a log message that your configured plugin will download the OCI image from the configured registry and it will allow you to check the policy. 
