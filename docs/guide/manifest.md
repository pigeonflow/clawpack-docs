# Manifest Format

Every ClawPack agent needs a `manifest.json` in its root directory.

## Required Fields

```json
{
  "name": "my-agent",
  "version": "1.0.0",
  "description": "A short description of what this agent does"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Agent name (lowercase, hyphens ok) |
| `version` | string | Semver version (e.g. `1.0.0`, `0.2.1`) |
| `description` | string | One-line description |

## Optional Fields

```json
{
  "name": "my-agent",
  "version": "1.0.0",
  "description": "A helpful coding assistant",
  "tags": ["coding", "assistant", "typescript"],
  "author": "yourusername",
  "license": "MIT",
  "homepage": "https://github.com/you/my-agent",
  "repository": "https://github.com/you/my-agent"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `tags` | string[] | Searchable tags (also used for category filtering on clawpack.io) |
| `author` | string | Author name or username |
| `license` | string | License identifier (e.g. `MIT`, `Apache-2.0`) |
| `homepage` | string | Project homepage URL |
| `repository` | string | Source code URL |

## Tags & Categories

Tags are freeform, but these map to categories on the browse page:

| Tag | Category |
|-----|----------|
| `coding` | 💻 Coding |
| `sales` | 💼 Sales |
| `support` | 🎧 Support |
| `creative` | 🎨 Creative |
| `research` | 🔬 Research |
| `devops` | ⚙️ DevOps |
| `assistant` | 🤖 Assistant |

Include at least one of these for your agent to appear in category filters.

## Versioning

ClawPack uses [semver](https://semver.org/). Bump the version in manifest.json before each `clawpack push`.

- **Patch** (1.0.0 → 1.0.1): Bug fixes, minor tweaks
- **Minor** (1.0.0 → 1.1.0): New features, new skills
- **Major** (1.0.0 → 2.0.0): Breaking changes, complete rework

## What Gets Bundled

Everything in the directory except:
- `node_modules/`
- `.git/`
- Files matching `.gitignore` patterns

Your README.md is extracted separately and rendered on the bundle's page.
