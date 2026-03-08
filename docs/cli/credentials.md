# clawpack credentials

Manage runtime credentials for running agents locally.

## Subcommands

### credentials set

```bash
clawpack credentials set
```

Interactive prompt for provider and API key. Stored at `~/.clawpack/credentials.json`.

### credentials show

```bash
clawpack credentials show
```

Display stored credentials (keys partially redacted).

### credentials clear

```bash
clawpack credentials clear
```

Remove all stored credentials.

## Security

Credentials are stored in plain text locally. They never leave your machine.

## See Also

- [Credentials guide](/guide/credentials)
- [`run`](/cli/run) — Uses stored credentials
- [`chat`](/cli/chat) — Uses stored credentials
