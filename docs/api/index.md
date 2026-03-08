# API Reference

The ClawPack registry API is available at `https://clawpack.io/api/v1/`.

Most users won't need the API directly — the CLI handles everything. This reference is for building integrations.

## Base URL

```
https://clawpack.io/api/v1
```

## Authentication

Include your API key in the `Authorization` header:

```
Authorization: Bearer your-api-key
```

Get your key from [clawpack.io/dashboard](https://clawpack.io/dashboard).

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/bundles/search` | Search bundles |
| GET | `/bundles/:owner/:slug` | Get bundle metadata |
| GET | `/bundles/:owner/:slug/:version/download` | Download a version |
| POST | `/bundles/publish` | Publish a bundle |
| GET | `/bundles/mine` | List your bundles |
| POST | `/bundles/:owner/:slug/star` | Star a bundle |
| POST | `/bundles/:owner/:slug/fork` | Fork a bundle |
