"use client";
import React, { useState } from "react";
import { VariationsPosition } from "./types";
import { useVariations } from "./VariationsProvider";

interface VariationsControlsProps {
  position?: VariationsPosition;
}

const VariationGroup = ({
  group,
  variations,
  activeIds,
  setActiveId,
  isMinimized,
}: {
  group: string;
  variations: Array<[string, { label: string; groupLabel: string }]>;
  activeIds: Map<string, string>;
  setActiveId: (group: string, id: string) => void;
  isMinimized: boolean;
}) => {
  const groupLabel = variations[0]?.[1]?.groupLabel;
  const activeId = activeIds.get(group);

  return (
    <div className="variation-group">
      <div
        className="variation-title"
        title={groupLabel}
      >
        {groupLabel}
      </div>
      <div className="variations-selects">
        <select
          value={activeId || ""}
          onChange={(e) => {
            setActiveId(group, e.target.value);
          }}
          className="variation-select"
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
      <style jsx>{`
        .variation-group {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0 0 0 10px;
          gap: 4px;
          overflow: hidden;
        }
        .variation-group:last-child {
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }
        .variation-group:hover {
          background: rgba(0, 0, 0, 0.03);
        }

        .variation-title {
          flex: 1;
          font-size: 11px;
          font-weight: 500;
          color: #888;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        .variations-selects {
          display: flex;
          gap: 8px;
        }

        .variation-select {
          width: 100px;
          flex: 1 0 50px;
          padding: 4px 24px 4px 8px;
          font-size: 11px;
          color: #111;
          background: transparent;
          cursor: pointer;
          outline: none;
          appearance: none;
          border-radius: 4px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 8px center;
          background-size: 8px auto;
          transition: border-color 0.1s ease;
        }

        .variation-select option {
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .variation-select:focus {
          background: rgba(0, 0, 0, 1);
          color: #ffffff;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 8px center;
          background-size: 8px auto;
        }

        @media (prefers-color-scheme: dark) {
          .variation-group:hover {
            background: rgba(255, 255, 255, 0.05);
          }

          .variation-title {
            color: #999;
          }

          .variation-select {
            color: #fff;
            background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          }

          .variation-select option {
            background: rgb(28, 28, 30);
            color: #fff;
          }

          .variation-select:focus {
            background-color: #ffffff;
            color: #111;
            background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='%23111111' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          }
        }
      `}</style>
    </div>
  );
};

export function VariationsControls({
  position = "bottom-right",
}: VariationsControlsProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const { activeIds, setActiveId, variations } = useVariations();

  // Group variations by group
  const variationGroups = React.useMemo(() => {
    const groups = new Map<
      string,
      Array<[string, { label: string; groupLabel: string }]>
    >();

    Array.from(variations.entries()).forEach(([id, variation]) => {
      const { group, label: variationLabel, groupLabel } = variation;
      if (!groups.has(group)) {
        groups.set(group, []);
      }
      groups.get(group)!.push([id, { label: variationLabel, groupLabel }]);
    });
    return groups;
  }, [variations]);

  // Render variation groups based on active IDs
  const renderVariationGroups = () => {
    const groups: React.ReactElement[] = [];
    const processedGroups = new Set<string>();

    // First add root variations
    if (variationGroups.has("root-variations")) {
      const variations = variationGroups.get("root-variations")!;
      groups.push(
        <VariationGroup
          key="root-variations"
          group="root-variations"
          variations={variations}
          activeIds={activeIds}
          setActiveId={setActiveId}
          isMinimized={isMinimized}
        />
      );
      processedGroups.add("root-variations");
    }

    // Then add all other groups that have active IDs
    Array.from(activeIds.entries()).forEach(([group]) => {
      if (!processedGroups.has(group) && variationGroups.has(group)) {
        const variations = variationGroups.get(group)!;
        groups.push(
          <VariationGroup
            key={group}
            group={group}
            variations={variations}
            activeIds={activeIds}
            setActiveId={setActiveId}
            isMinimized={isMinimized}
          />
        );
        processedGroups.add(group);
      }
    });

    if (groups.length === 0) {
      return (
        <div className="variations-empty">
          <div className="variations-empty-title">No Variations Found</div>
          <div className="variations-empty-text">
            Add a <code>{`<Variations>`}</code> component!
          </div>
          <style jsx>{`
            .variations-empty {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 20px 16px;
              text-align: center;
              gap: 4px;
            }

            .variations-empty-title {
              font-size: 13px;
              font-weight: 500;
              color: #666;
            }
            .variations-empty-text {
              font-size: 11px;
              color: #999;
            }
            code {
              font-family: var(--font-geist-mono);
              font-size: 11px;
              padding: 1px 4px;
              background: rgba(0, 0, 0, 0.03);
              border-radius: 4px;
            }
            @media (prefers-color-scheme: dark) {
              .variations-empty-title {
                color: #999;
              }
              .variations-empty-text {
                color: #666;
              }
              code {
                background: rgba(255, 255, 255, 0.1);
              }
            }
          `}</style>
        </div>
      );
    }

    return groups;
  };

  const allGroups = renderVariationGroups();

  // Add keyboard shortcut handler
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.code === "KeyV" &&
        e.altKey &&
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.metaKey
      ) {
        e.preventDefault(); // Prevent any default alt+v behavior
        setIsMinimized((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="variations-controls-container">
      <div className={`variations-controls ${isMinimized ? "minimized" : ""}`}>
        {isMinimized ? (
          <button
            className="variations-circle"
            onClick={() => setIsMinimized(false)}
            tabIndex={isMinimized ? 0 : -1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
              <path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" />
              <path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" />
              <path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
            </svg>
          </button>
        ) : (
          <>
            <div className="variations-header">
              <div className="variations-header-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  style={{
                    marginRight: "6px",
                    position: "relative",
                  }}
                >
                  <path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
                  <path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" />
                  <path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" />
                  <path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
                </svg>
                Variations
              </div>
              <button
                className="variations-header-toggle"
                onClick={() => setIsMinimized(true)}
                tabIndex={isMinimized ? -1 : 0}
              >
                ×
              </button>
            </div>

            <div className="variation-groups">{allGroups}</div>
          </>
        )}
      </div>
      <style jsx>{`
        .variations-controls {
          font-family: system-ui, -apple-system, sans-serif;
          position: fixed;
          ${position.includes("right")
            ? "right: 16px;"
            : position.includes("center")
            ? "left: 50%; transform: translateX(-50%);"
            : "left: 16px;"}
          ${position.includes("bottom")
            ? "bottom: 16px;"
            : position.includes("middle")
            ? "top: 50%; transform: translateY(-50%);"
            : "top: 16px;"}
          ${position.includes("middle") && position.includes("right")
            ? "transform: translateY(-50%);"
            : ""}
          ${position.includes("middle") && position.includes("left")
            ? "transform: translateY(-50%);"
            : ""}
          ${position.includes("center") && position.includes("bottom")
            ? "transform: translateX(-50%);"
            : ""}
          ${position.includes("center") && position.includes("top")
            ? "transform: translateX(-50%);"
            : ""}
          width: 280px;
          height: auto;
          max-height: calc(100vh - 32px);
          z-index: 100;
          background: rgba(255, 255, 255);
          border-radius: 10px;
          overflow: auto;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05),
            0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
          padding: 0;
        }

        .variations-controls.minimized {
          width: 32px;
          height: 32px;
          padding: 0;
          border-radius: 16px;
          background: white;
          ${position.includes("right")
            ? "right: 16px;"
            : position.includes("center")
            ? "left: 50%; transform: translateX(-50%);"
            : "left: 16px;"}
          ${position.includes("bottom")
            ? "bottom: 16px;"
            : position.includes("middle")
            ? "top: 50%; transform: translateY(-50%);"
            : "top: 16px;"}
          ${position.includes("middle") && position.includes("right")
            ? "transform: translateY(-50%);"
            : ""}
          ${position.includes("middle") && position.includes("left")
            ? "transform: translateY(-50%);"
            : ""}
          ${position.includes("center") && position.includes("bottom")
            ? "transform: translateX(-50%);"
            : ""}
          ${position.includes("center") && position.includes("top")
            ? "transform: translateX(-50%);"
            : ""}
        }

        .variations-circle {
          width: 32px;
          height: 32px;
          padding: 0;
          border: none;
          background: none;
          color: #666;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .variations-circle:focus {
          background: rgba(0, 0, 0, 1);
          color: #ffffff;
          border-radius: 4px;
          outline: none;
        }

        .variations-header {
          background: rgba(255, 255, 255, 0.6);
          position: sticky;
          top: 0;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 2px 2px 0 10px;
          backdrop-filter: blur(4px);
        }

        .variations-header-title {
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          line-height: 12px;
          font-weight: 700;
          color: #999;
          display: flex;
          align-items: center;
        }

        .variations-header-toggle {
          background: none;
          border: none;
          color: #999;
          cursor: pointer;
          font-size: 16px;
          line-height: 0px;
          font-weight: 500;
          padding: 0;
          padding-bottom: 2px;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 2px;
          border-top-right-radius: 8px;
        }
        .variations-header-toggle:hover {
          color: #111111;
        }
        .variations-header-toggle:focus {
          background: #111111;
          color: #ffffff;
          outline: none;
        }

        .variation-groups {
          display: flex;
          flex-direction: column;
          padding: 2px;
        }

        @media (prefers-color-scheme: dark) {
          .variations-controls {
            background: rgba(28, 28, 30, 1);
            box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2),
              0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3);
          }

          .variations-controls.minimized {
            background: rgb(28, 28, 30);
          }

          .variations-circle {
            color: #fff;
          }

          .variations-circle:focus {
            background: rgba(255, 255, 255, 0.1);
            color: #ffffff;
            border-radius: 4px;
            outline: none;
          }

          .variations-header {
            background: rgba(28, 28, 30, 0.9);
          }

          .variations-header-toggle {
            color: #999;
          }
          .variations-header-toggle:hover {
            color: #ffffff;
          }
          .variations-header-toggle:focus {
            background: white;
            color: #111111;
          }
        }
      `}</style>
    </div>
  );
}
