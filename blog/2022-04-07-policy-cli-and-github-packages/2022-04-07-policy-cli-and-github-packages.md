---
slug: policy-cli-and-github-packages
title: The Policy CLI and Github Packages
authors: [daniel]
tags: [policy, github]
---

Today, we are happy to announce that the Policy CLI can interact directly with Github Packages (GHCR)!

GitHub Packages is a platform that allows you to host and maintain packages and containers.  The Policy CLI is a tool built by Aserto that can be used for building, versioning, and publishing your authorization policies. It uses OCI standards to manage artifacts, and the [Open Policy Agent (OPA)](https://github.com/open-policy-agent/opa) to compile and run (For more instructions for downloading and using the Policy CLI head to our [documentation](https://www.openpolicyregistry.io/docs/cli/download/)).

You can now use the Policy CLI to manage your policy images with GHCR as well as the Open Container Registry and the Aserto Container Registry. In this post, we’ll walk through using the Policy CLI with GHCR.

## Login
To log in to the Policy CLI using your Github Packages credentials, use the following command:

```sh
policy login -s ghcr.io -u <username>
```

This command will ask for the password, you can use your Github PAT to authenticate to GHCR if you have it enabled for your account. After authentication, the CLI will offer to set this server as your default registry. We recommend you set it as the default to make usage easier for the next couple of commands.

## Push a policy image
If you already have an image in your local registry that you want to push to GHCR you will need to first tag the image correctly before pushing. The structure of the image label is as follows:

`<org>/<repo>:<tag>`

Example:

Your local registry contains a built image that was tagged `john/myapp:rbac`.
If you want to push this same image from your local registry to `ghcr.io`, so you should tag this image with the command:

```sh
policy tag john/myapp:rbac ghcr.io/<myusername_or_org>/myapp:rbac
```

After tagging your image, you can push it to `ghcr.io` using the command:

```sh
policy push ghcr.io/<myusername_or_org>/myapp:rbac
```

## Removing an image from your local storage
Following the example mentioned above, if you want to remove this image from your local storage you can use the command:

```sh
policy rm ghcr.io/<myusername_or_org>/myapp:rbac
```

## Pulling a policy image
Once you have a container package with your authorization policy, you can pull the image using the following command:

```sh
policy pull ghcr.io/<myusername_or_org>/myapp:rbac
```

## Ensure your image is working
To check whether your pulled image is working as intended you can use the following command to open an interactive OPA shell:

```sh
policy repl ghcr.io/<myusername_or_org>/myapp:rbac
```

## Check the remote images available
The following command will fetch the container packages stored in ghcr.io and will display a table with the available images:

```sh
policy remote images -o <myusername_or_org>
```

## Removing an upstream repository
GHCR has a couple of limitations regarding package removal that need to be taken into consideration:

- the newest tag pushed cannot be removed unless removing the entire package (you can use `policy rm -r -a <image>`).
- to be able to remove a package your login credentials (PAT) will need to have the delete:package permissions

Assuming you want to remove the image mentioned in the example above, you can run the following command to remove the container image:

```sh
policy rm -r -a ghcr.io/<myusername_or_org>/myapp:rbac
```

## Changing visibility
Although the CLI contains a command to change the visibility of an upstream image, at the moment GHCR does **not** allow this operation through an API. Currently, we recommend using the web UI to change a package’s visibility.
