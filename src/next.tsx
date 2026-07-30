"use client";

import { Suspense, useMemo, type ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  VariationsProvider,
  type VariationsProviderProps,
  type UrlSyncAdapter,
} from "variations";

/**
 * App Router–aware provider. Syncs `?var=` / `?s=` through `next/navigation`
 * instead of `history.replaceState`, so back/forward and shared links work.
 *
 * Includes a Suspense boundary (required by `useSearchParams`). The fallback
 * still mounts a `VariationsProvider` so controls/hooks keep working during
 * static prerender.
 */
export function NextVariationsProvider<TState = unknown>(
  props: VariationsProviderProps<TState>
): ReactNode {
  return (
    <Suspense
      fallback={
        <VariationsProvider
          {...props}
          disableQueryString
        />
      }
    >
      <NextVariationsProviderInner {...props} />
    </Suspense>
  );
}

function NextVariationsProviderInner<TState = unknown>({
  urlSync: _ignored,
  ...props
}: VariationsProviderProps<TState>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  const urlSync = useMemo<UrlSyncAdapter>(
    () => ({
      getQuery: () => queryString,
      setQuery: (query: string) => {
        const href = query ? `${pathname}?${query}` : pathname;
        router.replace(href, { scroll: false });
      },
    }),
    [router, pathname, queryString]
  );

  return (
    <VariationsProvider
      {...props}
      urlSync={urlSync}
    />
  );
}

export type { VariationsProviderProps, UrlSyncAdapter };
