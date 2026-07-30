"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import type { VariationsControlsProps, VariationsPosition } from "./types";
import { useVariations, useVariationsState } from "./VariationsProvider";
import { buildShareUrl } from "./utils";

type GroupEntry = [string, { label: string; groupLabel: string }];

const POSITION_STYLE: Record<VariationsPosition, React.CSSProperties> = {
  "bottom-right": { right: 16, bottom: 16 },
  "bottom-left": { left: 16, bottom: 16 },
  "bottom-center": { left: "50%", bottom: 16, transform: "translateX(-50%)" },
  "top-right": { right: 16, top: 16 },
  "top-left": { left: 16, top: 16 },
  "top-center": { left: "50%", top: 16, transform: "translateX(-50%)" },
  "middle-right": { right: 16, top: "50%", transform: "translateY(-50%)" },
  "middle-left": { left: 16, top: "50%", transform: "translateY(-50%)" },
};

function VariationGroupRow({
  group,
  variations,
  activeIds,
  setActiveId,
  isMinimized,
  isFocused,
  onFocus,
}: {
  group: string;
  variations: GroupEntry[];
  activeIds: Map<string, string>;
  setActiveId: (group: string, id: string) => void;
  isMinimized: boolean;
  isFocused: boolean;
  onFocus: () => void;
}) {
  const groupLabel = variations[0]?.[1]?.groupLabel;
  const activeId = activeIds.get(group);

  return (
    <div
      className={`varx-group${isFocused ? " varx-group--focused" : ""}`}
      onClick={onFocus}
    >
      <div
        className="varx-group-title"
        title={groupLabel}
      >
        {groupLabel}
      </div>
      <select
        value={activeId || ""}
        onChange={(e) => setActiveId(group, e.target.value)}
        onFocus={onFocus}
        className="varx-select"
        tabIndex={isMinimized ? -1 : 0}
        title={variations.find(([id]) => id === activeId)?.[1]?.label || ""}
      >
        {variations.map(([id, { label }]) => (
          <option
            key={id}
            value={id}
            title={label}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

function LogoIcon({ size = 12 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
      <path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" />
      <path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" />
      <path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
    </svg>
  );
}

interface Props
  extends VariationsControlsProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {}

export function VariationsControls({
  position = "bottom-right",
  minimizedByDefault = false,
  enabled: enabledProp,
  className,
  style,
  ...props
}: Props) {
  const {
    activeIds,
    setActiveId,
    variations,
    enabled: providerEnabled,
  } = useVariations();
  const [state] = useVariationsState();

  const isEnabled = enabledProp ?? providerEnabled;
  const [isMinimized, setIsMinimized] = useState(minimizedByDefault);
  const [showCopied, setShowCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"variations" | "state">(
    "variations"
  );
  const [focusedGroupIndex, setFocusedGroupIndex] = useState(0);

  const variationGroups = useMemo(() => {
    const groups = new Map<string, GroupEntry[]>();
    Array.from(variations.entries()).forEach(([id, variation]) => {
      const { group, label: variationLabel, groupLabel } = variation;
      if (!groups.has(group)) groups.set(group, []);
      groups.get(group)!.push([id, { label: variationLabel, groupLabel }]);
    });
    return groups;
  }, [variations]);

  const orderedGroupIds = useMemo(() => {
    const ids: string[] = [];
    if (variationGroups.has("root")) ids.push("root");
    Array.from(activeIds.keys()).forEach((group) => {
      if (!ids.includes(group) && variationGroups.has(group)) ids.push(group);
    });
    Array.from(variationGroups.keys()).forEach((group) => {
      if (!ids.includes(group)) ids.push(group);
    });
    return ids;
  }, [variationGroups, activeIds]);

  const focusedGroupId =
    orderedGroupIds[
      Math.min(focusedGroupIndex, Math.max(orderedGroupIds.length - 1, 0))
    ] ?? null;

  const handleCopyCombo = useCallback(() => {
    const url = buildShareUrl({
      activeIds,
      state,
      includeState: state !== undefined,
    });
    navigator.clipboard.writeText(url).then(() => {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    });
  }, [activeIds, state]);

  const handleShuffle = useCallback(() => {
    orderedGroupIds.forEach((group) => {
      const options = variationGroups.get(group);
      if (!options || options.length === 0) return;
      const pick = options[Math.floor(Math.random() * options.length)][0];
      setActiveId(group, pick);
    });
  }, [orderedGroupIds, variationGroups, setActiveId]);

  const cycleFocused = useCallback(
    (delta: number) => {
      if (!focusedGroupId) return;
      const options = variationGroups.get(focusedGroupId);
      if (!options || options.length === 0) return;
      const current = activeIds.get(focusedGroupId);
      const index = Math.max(
        0,
        options.findIndex(([id]) => id === current)
      );
      const next = options[(index + delta + options.length) % options.length][0];
      setActiveId(focusedGroupId, next);
    },
    [focusedGroupId, variationGroups, activeIds, setActiveId]
  );

  // Keyboard shortcuts
  useEffect(() => {
    if (!isEnabled) return;

    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      // ⌥V — toggle panel
      if (
        e.code === "KeyV" &&
        e.altKey &&
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.metaKey
      ) {
        e.preventDefault();
        setIsMinimized((prev) => !prev);
        return;
      }

      if (isMinimized || typing) return;

      // ⌥S — shuffle
      if (
        e.code === "KeyS" &&
        e.altKey &&
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.metaKey
      ) {
        e.preventDefault();
        handleShuffle();
        return;
      }

      // ⌥C — copy combo
      if (
        e.code === "KeyC" &&
        e.altKey &&
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.metaKey
      ) {
        e.preventDefault();
        handleCopyCombo();
        return;
      }

      // [ / ] — move focus between groups
      if (e.key === "[" || e.key === "]") {
        e.preventDefault();
        setFocusedGroupIndex((prev) => {
          if (orderedGroupIds.length === 0) return 0;
          const delta = e.key === "]" ? 1 : -1;
          return (
            (prev + delta + orderedGroupIds.length) % orderedGroupIds.length
          );
        });
        return;
      }

      // ← / → — cycle focused group
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        if (e.altKey || e.metaKey || e.ctrlKey) return;
        e.preventDefault();
        cycleFocused(e.key === "ArrowRight" ? 1 : -1);
        return;
      }

      // 1–9 — pick nth option in focused group
      if (/^[1-9]$/.test(e.key) && !e.altKey && !e.metaKey && !e.ctrlKey) {
        if (!focusedGroupId) return;
        const options = variationGroups.get(focusedGroupId);
        if (!options) return;
        const index = Number(e.key) - 1;
        if (index < options.length) {
          e.preventDefault();
          setActiveId(focusedGroupId, options[index][0]);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [
    isEnabled,
    isMinimized,
    handleShuffle,
    handleCopyCombo,
    orderedGroupIds.length,
    focusedGroupId,
    variationGroups,
    setActiveId,
    cycleFocused,
  ]);

  if (!isEnabled) return null;

  const groupRows =
    orderedGroupIds.length === 0 ? (
      <div className="varx-empty">
        <div className="varx-empty-title">No Variations Found</div>
        <div className="varx-empty-text">
          Add a <code className="varx-code">{`<Variations>`}</code> component
        </div>
      </div>
    ) : (
      orderedGroupIds.map((group, index) => {
        const entries = variationGroups.get(group);
        if (!entries) return null;
        return (
          <VariationGroupRow
            key={group}
            group={group}
            variations={entries}
            activeIds={activeIds}
            setActiveId={setActiveId}
            isMinimized={isMinimized}
            isFocused={group === focusedGroupId}
            onFocus={() => setFocusedGroupIndex(index)}
          />
        );
      })
    );

  return (
    <div
      className={`varx-root${className ? ` ${className}` : ""}`}
      style={{ ...POSITION_STYLE[position], ...style }}
      {...props}
    >
      <div className={`varx-panel${isMinimized ? " varx-panel--minimized" : ""}`}>
        {isMinimized ? (
          <button
            type="button"
            className="varx-fab"
            onClick={() => setIsMinimized(false)}
            tabIndex={0}
            title="Open variations (⌥V)"
            aria-label="Open variations"
          >
            <LogoIcon size={18} />
          </button>
        ) : (
          <>
            <div className="varx-header">
              <div className="varx-header-left">
                <LogoIcon size={12} />
                <div className="varx-tabs">
                  <button
                    type="button"
                    className={`varx-tab${
                      activeTab === "variations" ? " varx-tab--active" : ""
                    }`}
                    onClick={() => setActiveTab("variations")}
                  >
                    Variations
                  </button>
                  <button
                    type="button"
                    className={`varx-tab${
                      activeTab === "state" ? " varx-tab--active" : ""
                    }`}
                    onClick={() => setActiveTab("state")}
                  >
                    State
                  </button>
                </div>
              </div>
              <div className="varx-header-actions">
                <button
                  type="button"
                  className="varx-icon-btn"
                  onClick={handleShuffle}
                  title="Shuffle all (⌥S)"
                  aria-label="Shuffle variations"
                  tabIndex={0}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <polyline points="16 3 21 3 21 8" />
                    <line
                      x1="4"
                      y1="20"
                      x2="21"
                      y2="3"
                    />
                    <polyline points="21 16 21 21 16 21" />
                    <line
                      x1="15"
                      y1="15"
                      x2="21"
                      y2="21"
                    />
                    <line
                      x1="4"
                      y1="4"
                      x2="9"
                      y2="9"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="varx-icon-btn"
                  onClick={handleCopyCombo}
                  title="Copy share link (⌥C)"
                  aria-label="Copy share link"
                  tabIndex={0}
                >
                  {showCopied ? (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                      <line
                        x1="8"
                        x2="16"
                        y1="12"
                        y2="12"
                      />
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  className="varx-close"
                  onClick={() => setIsMinimized(true)}
                  tabIndex={0}
                  aria-label="Minimize"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="varx-body">
              {activeTab === "variations" ? (
                <div className="varx-groups">
                  {groupRows}
                  {orderedGroupIds.length > 0 && (
                    <div className="varx-hint">
                      <kbd className="varx-kbd">[</kbd>
                      <kbd className="varx-kbd">]</kbd>
                      <span className="varx-hint-label">groups</span>
                      <span className="varx-hint-sep">·</span>
                      <kbd className="varx-kbd varx-kbd--arrow">←</kbd>
                      <kbd className="varx-kbd varx-kbd--arrow">→</kbd>
                      <span className="varx-hint-label">cycle</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="varx-state">
                  <StateEditor />
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <style>{VARX_STYLES}</style>
    </div>
  );
}

function StateEditor() {
  const [state, setState] = useVariationsState();
  return (
    <textarea
      value={JSON.stringify(state, null, 2)}
      onChange={(e) => {
        try {
          setState(JSON.parse(e.target.value));
        } catch {
          // ignore invalid JSON while typing
        }
      }}
      spellCheck={false}
      className="varx-textarea"
    />
  );
}

const VARX_STYLES = `
.varx-root {
  position: fixed;
  z-index: 2147483646;
  font-family: system-ui, -apple-system, sans-serif;
  box-sizing: border-box;
}
.varx-root *, .varx-root *::before, .varx-root *::after {
  box-sizing: border-box;
}
.varx-panel {
  width: 280px;
  max-height: calc(100vh - 32px);
  overflow: auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08);
  padding: 2px;
}
.varx-panel--minimized {
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 16px;
  overflow: hidden;
}
.varx-fab {
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.varx-fab:focus {
  outline: none;
  background: #111;
  color: #fff;
  border-radius: 4px;
}
.varx-header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(4px);
  z-index: 1;
}
.varx-header-left {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #999;
}
.varx-header-actions {
  display: flex;
  align-items: center;
  gap: 2px;
}
.varx-tabs {
  display: flex;
  gap: 8px;
}
.varx-tab {
  text-transform: uppercase;
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 10px;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  padding: 6px 0;
}
.varx-tab:hover { color: #000; }
.varx-tab:focus { outline: none; border-bottom-color: currentColor; }
.varx-tab--active { color: #000; }
.varx-icon-btn, .varx-close {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  padding: 0;
}
.varx-close {
  font-size: 16px;
  font-weight: 500;
  border-top-right-radius: 8px;
}
.varx-icon-btn:hover, .varx-close:hover { color: #111; }
.varx-icon-btn:focus, .varx-close:focus {
  outline: none;
  background: #111;
  color: #fff;
}
.varx-body { overflow: auto; }
.varx-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 10px;
  gap: 4px;
  overflow: hidden;
}
.varx-group:hover { background: rgba(0,0,0,0.03); }
.varx-group--focused {
  background: rgba(0,0,0,0.05);
  box-shadow: inset 2px 0 0 #111;
}
.varx-group-title {
  flex: 1;
  font-size: 11px;
  font-weight: 500;
  color: #888;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.varx-select {
  width: 100px;
  flex: 0 0 100px;
  padding: 4px 24px 4px 8px;
  font-size: 11px;
  color: #111;
  background: transparent;
  cursor: pointer;
  outline: none;
  appearance: none;
  border: none;
  border-radius: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 8px auto;
}
.varx-select:focus {
  background-color: #111;
  color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 8px auto;
}
.varx-hint {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  padding: 6px 10px 8px;
  font-size: 10px;
  color: #aaa;
  letter-spacing: 0.02em;
}
.varx-hint-label {
  margin-right: 2px;
}
.varx-hint-sep {
  margin: 0 4px;
  opacity: 0.5;
}
.varx-kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.1);
  background: rgba(0,0,0,0.04);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 10px;
  font-weight: 600;
  color: #666;
  line-height: 1;
}
.varx-kbd--arrow {
  font-size: 13px;
  font-weight: 500;
  padding: 0 4px;
}
.varx-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  text-align: center;
  gap: 4px;
}
.varx-empty-title {
  font-size: 13px;
  font-weight: 500;
  color: #666;
}
.varx-empty-text {
  font-size: 11px;
  color: #999;
}
.varx-code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  padding: 1px 4px;
  background: rgba(0,0,0,0.03);
  border-radius: 4px;
}
.varx-state { padding: 8px; }
.varx-textarea {
  width: 100%;
  max-height: 80vh;
  min-height: 200px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  line-height: 1.4;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background: rgba(0,0,0,0.03);
  color: #111;
  resize: vertical;
}
.varx-textarea:focus {
  outline: none;
  background: rgba(0,0,0,0.05);
}
@media (prefers-color-scheme: dark) {
  .varx-panel {
    background: rgb(28,28,30);
    box-shadow: 0 0 0 1px rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.4);
  }
  .varx-fab { color: #fff; }
  .varx-fab:focus { background: rgba(255,255,255,0.1); }
  .varx-header { background: rgba(28,28,30,0.9); }
  .varx-tab:hover, .varx-tab--active { color: #fff; }
  .varx-icon-btn:hover, .varx-close:hover { color: #fff; }
  .varx-icon-btn:focus, .varx-close:focus { background: #fff; color: #111; }
  .varx-group:hover { background: rgba(255,255,255,0.05); }
  .varx-group--focused {
    background: rgba(255,255,255,0.08);
    box-shadow: inset 2px 0 0 #fff;
  }
  .varx-group-title { color: #999; }
  .varx-select {
    color: #fff;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  }
  .varx-select option { background: rgb(28,28,30); color: #fff; }
  .varx-select:focus {
    background-color: #fff;
    color: #111;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='%23111111' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  }
  .varx-empty-title { color: #999; }
  .varx-empty-text { color: #666; }
  .varx-code { background: rgba(255,255,255,0.1); }
  .varx-textarea {
    background: rgba(255,255,255,0.05);
    color: #fff;
  }
  .varx-textarea:focus { background: rgba(255,255,255,0.1); }
  .varx-hint { color: #666; }
  .varx-kbd {
    border-color: rgba(255,255,255,0.14);
    background: rgba(255,255,255,0.06);
    color: #bbb;
  }
}
`;
