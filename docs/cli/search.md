# clawpack search

Search the registry for agent bundles.

## Usage

```bash
clawpack search <query> [options]
```

## Options

| Flag | Description | Default |
|------|-------------|---------|
| `--limit <n>` | Maximum results | `10` |
| `-h, --help` | Show help | — |

## Examples

```bash
# Search for coding agents
clawpack search coding

# Search with limit
clawpack search "sales bot" --limit 5
```

## Output

Shows matching bundles with name, description, version, downloads, and stars.

## See Also

- [Browse on clawpack.io](https://clawpack.io/browse)
