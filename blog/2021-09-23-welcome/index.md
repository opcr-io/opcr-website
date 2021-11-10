---
slug: welcome
title: Welcome to the Open Policy Registry project!
authors: [vlad, gert, omri]
tags: [opr, hello, opcr]
---

## A brief history

When we first started using [OPA](https://openpolicyagent.org), we were impressed with how 
flexible it is as a general-purpose decision engine. We were familiar with using it for 
infrastructure scenarios (like k8s admission control), but thought we could extend its use 
to application and API authorization scenarios.

<!--truncate-->

One thing we missed, though, is the ability to interact with policy bundles in the same way that 
we interact with docker images.

## Enter the policy CLI

We modeled the `policy` CLI on `docker` - a familiar pattern to most developers. With the `policy` 
CLI, you can *build*, *tag*, *push*, and *pull* policy images just like you do with `docker`.

## opcr.io

By representing policy images as OCIv2 containers, you can push and pull them into any OCIv2-compatible 
registry. But we thought it would be useful to have a container registry that would focus 
exclusively on policies as a container image type. 

We built `opcr.io` as a container registry for round-tripping policy image containers.

## Bringing together three CNCF ecosystems

We believe that as a "meta-project", OPCR brings together three existing CNCF ecosystems, and makes them "better together":

* OPA: Today, OPA’s packaging format is a tarball. Using the OCI container format to package OPA policies allows developers to tag, version, add metadata, and sign layers of a policy, much like they can any OCI container.
* Sigstore/cosign: Using cosign to sign and verify signatures for OPCR container layers brings this value to the OPA ecosystem.
* OCI: formalizing a media type for OPA containers creates another valuable use-case for the OCIv2 image format.

## We'd love your feedback

We'd love to hear from you! Tweet / DM us at @openpolicyreg or find us in our [Slack](https://join.slack.com/t/asertocommunity/shared_invite/zt-yjvq8kwy-M_wtwFO35I9ToJiHg1Tutg)!

## Happy hacking!

![opcr](/img/logo.png)
