# Credentials

Store provider credentials (API keys) for running agents locally.

## Set Credentials

```bash
clawpack credentials set
```

Interactive prompt asks for provider and API key. Stored locally at `~/.clawpack/credentials.json`.

## Show Credentials

```bash
clawpack credentials show
```

Displays stored credentials (keys are partially redacted).

## Clear Credentials

```bash
clawpack credentials clear
```

Removes all stored credentials.

## How Credentials Are Used

When you `clawpack run` or `clawpack chat`, the CLI passes stored credentials to OpenClaw. You can also override per-command:

```bash
clawpack run owner/agent --provider anthropic --api-key sk-ant-...
```

## Security

Credentials are stored in plain text at `~/.clawpack/credentials.json`. They never leave your machine — they're only passed to your local OpenClaw gateway.
