# Next.js example

Minimal App Router app wired to the local `variations` package.

```bash
# from repo root
npm run build
npm --prefix examples/next install
npm --prefix examples/next run dev -- -p 3456
```

Open [http://localhost:3456](http://localhost:3456).

Uses `NextVariationsProvider` from `variations/next` so `?var=` syncs through the App Router.
