# Bundles API

## Search Bundles

```
GET /api/v1/bundles/search?q=coding&limit=10&sort=downloads&tags=coding
```

### Parameters

| Param | Type | Description |
|-------|------|-------------|
| `q` | string | Search query |
| `limit` | number | Max results (default: 10) |
| `sort` | string | Sort by: `recent`, `stars`, `downloads` |
| `tags` | string | Filter by tag |

### Response

```json
{
  "bundles": [
    {
      "owner": "agentebox",
      "slug": "shipwright",
      "description": "Full-stack coding agent",
      "version": "2.2.0",
      "downloads": 150,
      "stars": 12,
      "tags": ["coding", "developer"],
      "created_at": "2026-03-01T..."
    }
  ]
}
```

## Get Bundle

```
GET /api/v1/bundles/:owner/:slug
```

Returns full metadata including readme, all versions, stats.

## Download

```
GET /api/v1/bundles/:owner/:slug/:version/download
```

Returns a redirect URL to the tarball. Use `latest` for the newest version.

## Publish

```
POST /api/v1/bundles/publish
Content-Type: multipart/form-data
Authorization: Bearer <token>
```

Multipart body with the tarball and metadata.
