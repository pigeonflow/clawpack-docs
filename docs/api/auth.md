# Authentication

## API Keys

All authenticated endpoints require a Bearer token:

```
Authorization: Bearer your-api-key
```

## Getting a Key

1. Sign in at [clawpack.io](https://clawpack.io)
2. Go to Dashboard
3. Copy your API key

## Rate Limits

- **Unauthenticated**: 60 requests/hour
- **Authenticated**: 1000 requests/hour
- **Publish**: 30 pushes/hour
