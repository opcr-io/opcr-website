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

:::caution Note
The policy CLI v0.2.0 changes the login credential management package, if you previously used policy CLI v0.1.x and have saved credentials, these will not be available in policy CLI v0.2.x.
:::

## Docker credential helpers

Since version v0.2.0, the login command uses the [docker credential helpers](https://github.com/docker/docker-credential-helpers) to keep your credentials secure.
To configure the policy CLI to use your prefered credential helper you will have to manually modify the policy *config.json* stored in your $HOME/.policy directory.

Example:
To use the credential manager on Windows:
1. You will need to install the [wincred](https://github.com/docker/docker-credential-helpers/releases/download/v0.7.0/docker-credential-wincred-v0.7.0.windows-amd64.exe) binary into a folder in your $PATH. 
2. You will need to edit the *config.json* to specify the credStore binary used:
```
{
	"auths": {},
	"credsStore": "wincred"
}
```
3. Now when you will login with policy CLI your Windows Credential Manager will keep the credentials secure.

To use the keychain on macOS(amd64):
1. You will need to install the [osxkeychain](https://github.com/docker/docker-credential-helpers/releases/download/v0.7.0/docker-credential-osxkeychain-v0.7.0.darwin-amd64) into a folder in your $PATH.
2. You will need to edit the *config.json* to specify the credStore binary:
```
{
        "auths": {},
        "credsStore": "osxkeychain"
}
```
3. Now when you will login with policy CLI your macOS KeyChain will keep the credentials secure.
