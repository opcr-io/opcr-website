---
slug: welcome
title: Welcome
authors: [vlad, gert, omri]
tags: [opr, hello, opcr]
---

# Welcome to the Open Policy Registry project!

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
exclusively on policies as a content type. 

We built `opcr.io` as a container registry for round-tripping policy image containers.

