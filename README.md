# Vault OAuth on a custom domain

> Host the Vault OAuth redirect URI on a custom domain

## Usage

To deploy this sample, click the **Deploy** button, and [configure your domain in Vercel](https://vercel.com/docs/concepts/projects/custom-domains).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fapideck-samples%2Fvault-callback)

## Description

When you set up OAuth connectors for use with Apideck, you have to configure the Apideck Vault redirect URI (https://unify.apideck.com/vault/callback).

Some OAuth connectors, such as Google Drive, require that the OAuth redirect URI is hosted on a domain that you own.

This sample project helps you deploy a redirect to https://unify.apideck.com/vault/callback on your custom domain. The redirect will be available as https://mycustom.domain/api/callback.
