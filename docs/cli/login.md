---
sidebar_label: Sign in
---

# Sign in 

Just like with `docker login`, the `policy` CLI requires you to sign in to an OCIv2-compliant registry.  

```bash
echo $PAT | policy login -s <server> -u <username> --password-stdin
```

## Options

`-s <server>`: container registry address

`-u <username>`: username / account

`-p <password>`: password or a PAT

`--password-stdin`: read the password from `stdin`

## AWS Elastic Container Registry

AWS ECR credentials to authenticate can be obtained using the AWS CLI command `aws ecr get-login-password`. 

```bash
aws ecr get-login-password |policy login -s <org>.dkr.ecr.<region>.amazonaws.com -u AWS --password-stdin
```

Create a new policy repository:
```bash
aws ecr create-repository --repository-name <my-policy-name>
```

This will return a URI to push policy images to.

## GitHub Container Registry

To sign in to the `ghcr.io` registry, use your GitHub account, and a GitHub personal access token (PAT) as your password which contains the appropriate scopes - for example, `repo` (required), `read:org` (for organizations), `write:packages`, and `delete:packages`.

```bash
echo $PAT | policy login -s ghcr.io -u <username> --password-stdin
```

:::note
You can create a GitHub PAT on this [page](https://github.com/settings/tokens).
:::

## Docker Hub

You can use your password or a PAT to login to Docker Hub:

```bash
echo $PAT | policy login -s registry-1.docker.io -u <username> --password-stdin
```

## Google Container Registry

Follow the steps to authenticate to GCP [here](https://cloud.google.com/container-registry/docs/advanced-authentication#json-key). 

For example, create a JSON key file for a service account using the following command:

```bash
gcloud iam service-accounts keys create keyfile.json --iam-account [NAME]@[PROJECT_ID].iam.gserviceaccount.com
```

Then login using `policy` the same way you would login to `docker`:

```bash
cat KEY-FILE | policy login -s gcr.io -u _json_key --password-stdin 
```
