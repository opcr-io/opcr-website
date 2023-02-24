---
sidebar_label: Creating a Policy
title: Creating a policy using the policy CLI
description: How to create a policy using the policy CLI
---

# Creating a Policy

Policies are authored in a declarative language called [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/). You can get started quickly by using a template.

## Templates

To list the available templates, use the `policy templates list` command:

```bash
policy templates list

Fetching templates .

  NAME             KIND    DESCRIPTION
  github           cicd    GitHub policy CI/CD template.
  gitlab           cicd    GitLab policy CI/CD template.
  policy-template  policy  Minimal policy template.
```

## Applying a policy template

To create a new policy, use the `policy templates apply` command:

```bash
policy templates apply policy-template

Processing template 'policy-template' .

Generating files

The template 'policy-template' was created successfully.
```

This will generate a minimal "hello world" policy.

```bash
tree .
.
├── README.md
└── src
    └── policies
        └── hello-rego.rego

2 directories, 2 files
```

You can create a git repository for these files by using `git init`.

## Adding a CI template

To add GitHub or GitLab CI to the repository, apply a CI template. Note that the defaults are supplied if you've already done a `policy login` to log in to a registry, and made it your default policy registry.

```bash
policy templates apply github

Processing template 'github' .

  #  SERVER
  1  ghcr.io

> Select server#: 1

> server (ghcr.io):

> user (ogazitt):

> secret name (TOKEN):

> org/repo: ogazitt/policy-template

Generating files .

The template 'github' was created successfully.
```

This command generates a GitHub workflow to build, tag, and push a policy image based on a new tag event that is pushed to GitHub.

```
tree .github
.github
├── config.yaml
└── workflows
    └── build-release-policy.yaml

1 directory, 2 files
```

The `.github/config.yaml` file contains the parameters to the workflow:
```yaml
server: ghcr.io
username: ogazitt
repo: ogazitt/policy-template
```

The `secret name` that was provided (by default, `TOKEN`) refers to a GitHub secret that contains a key (e.g. a PAT with the correct scopes) to push the built, tagged image to the policy registry.

For example, for `ghcr.io`, the PAT needs to have the `repo` and `write:packages` scopes.

For the Aserto Policy Registry, this should be the API key that can be found in the Console under the Aserto Policy Registry connection.

## Automated policy-as-code workflow

You now have a policy-as-code workflow - simply make changes in the policy, commit and tag a release, push the tags, and your policy image will be built, tagged, and pushed to the registry you configured.

## Manual workflow

You can also use the `policy` CLI to manually [build](/docs/cli/build), [tag](/docs/cli/tag) and [push](/docs/cli/push) the policy to a policy registry.
