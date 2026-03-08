# Push & Versioning

## Publishing

```bash
clawpack push
```

This bundles your current directory and publishes it to the registry. Make sure you have a valid `manifest.json`.

### First-time Setup

1. Create an account at [clawpack.io](https://clawpack.io)
2. Get your API key from the dashboard
3. Log in: `clawpack login`

### Options

```bash
# Publish under your username (default)
clawpack push

# Publish as private (only you can pull)
clawpack push --private

# Publish under an organization
clawpack push --org my-team

# Add a changelog message
clawpack push --changelog "Added new coding skill"

# Publish from a specific directory
clawpack push ./path/to/agent
```

### What Happens

1. Reads `manifest.json` for name, version, description
2. Bundles all files into a tarball (respects .gitignore)
3. Extracts README.md separately (for rendering on clawpack.io)
4. Uploads to the registry
5. Returns a checksum and install command

### Version Conflicts

You can't publish the same version twice. Bump the version in `manifest.json` before each push.

## Visibility

- **Public** (default): Anyone can pull your agent
- **Private** (`--private`): Only you (and org members) can pull

Change visibility on clawpack.io or re-push with the flag.
