---
sidebar_position: 1
---

# Introduction

The **Open Policy Containers** project makes it easy to build Open Policy Agent policies into OCI images. 

A policy that is packaged as an OCI image can be tagged just like any container image. It can also be signed using tools like `cosign`.

To get started you need two things:
* The `policy` CLI, which is used to manage policy images, and is modeled after `docker`
* A container registry that supports pulling and pushing artifacts of the OCI media type (`application/vnd.oci.image.config.v1+json`)

Container registries that `policy` has been tested with include:
* AWS Elastic Container Registry (`ecr.amazonaws.com`)
* Docker Hub (`registry-1.docker.io`)
* GitHub Container Registry (`ghcr.io`)
* Google Container Registry (`gcr.io`)
* Open Policy Container Registry (`opcr.io`)

## Getting Started

### Download the CLI

To get started, you'll need to [download](/docs/cli/download) the `policy` CLI.

### Tutorial

Follow our 5 minute [tutorial](/docs/tutorial) to get a flavor for what `policy` can do for you.
