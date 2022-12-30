---
slug: goodbye-open-policy-registry-hello-open-policy-containers
title: Goodbye Open Policy Registry, Hello Open Policy Containers!
authors: [omri]
tags: [policy, opcr]
---

**tl;dr**: [Open Policy Containers](https://www.openpolicycontainers.com) (OPCR) is now a [CNCF Sandbox project](https://landscape.cncf.io/?selected=open-policy-containers), and it’s time to sunset the Open Policy Registry!

## Context

A little over a year ago, we created the OPCR project to bridge the gap between [Open Policy Agent](https://www.openpolicyagent.org) and the [Open Container Initiative](https://opencontainers.org). We wanted to be able to build OPA policies into immutable images, which can be tagged, versioned, and signed just like any OCI image.

OPCR consisted of three initiatives:
* [policy](https://github.com/opcr-io/policy), an open source CLI modeled after docker, that can build, tag, push, and pull policy images
* [Open Policy Registry](https://www.openpolicyregistry.io), a container registry which could function as the “reference implementation” of a policy registry
* Upstream work in the OPA project which allows OPA to consume policy images from any OCI-compliant registry (including the Open Policy Registry)

## Progress

We’re excited to report that in December 2022, the CNCF has accepted OPCR, and specifically the policy CLI, as a [Sandbox project](https://landscape.cncf.io/?selected=open-policy-containers)! ✅

Back in May 2022, the OPA project accepted our [contribution](https://github.com/open-policy-agent/opa/pull/4558) of (3), and now OPA can natively consume images built with the policy CLI! ✅ ✅

Finally, as more registries have added support for OCI v2 artifacts, including AWS ECR, Docker Hub, GitHub Container Registry, and Google Container Registry, we decided that maintaining a purpose-built registry for policy images is no longer necessary.

Therefore, we’re planning on retiring the Open Policy Registry (currently hosted at opcr.io) on January 31, 2023.

## Migration plan

The [opcr.io](https://opcr.io) domain, as well as the github opcr-io organization, will transfer to the CNCF, and will host the Open Policy Containers project (now focused entirely on the policy CLI).

Moving from opcr.io to gcr.io, ghcr.io, or any other OCI v2-compliant container registry is straightforward - please reach out to us in the community slack if you need any help!

For example, to move your content from opcr.io to ghcr.io: 

```bash
echo $PAT | policy login -s ghcr.io -u <username> -–password-stdin
policy pull opcr.io/<account>/<policy-name>:<tag>
policy tag opcr.io/<account>/<policy-name>:<tag> ghcr.io/<account>/<policy-name>:<tag>
policy push ghcr.io/<account>/<policy-name>:<tag>
```

For Aserto users, we will continue to maintain the Aserto Policy Registry (registry.prod.aserto.com), and you can continue to use the policy CLI with that registry.

## Conclusion

We're excited how far we've come over the last year in getting OPA to natively consume policies packaged as OCI images. If you have any feedback or requests, don't hesitate to open an [issue](https://github.com/opcr-io/policy/issues/new)!

![opcr](/img/logo.png)
