# Next.js example

Minimal App Router app wired to the local `variations` package.

```bash
# from repo root
npm run build
npm --prefix examples/next install
npm --prefix examples/next run dev
```

Open [http://localhost:3000](http://localhost:3000).

Uses `NextVariationsProvider` from `variations/next` so `?var=` syncs through the App Router.
