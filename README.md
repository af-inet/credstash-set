# credstash-set

Load credentials into your credstash tables from an env file.

```bash
npm install -g credstash-set
```
## Usage

```
cs-set :credstash-tablename :path-to-env-file
```

Example:

.env:
```
environment=production
foo=bar
```

Upload with:
```bash
cs-set secrets ./env
```
