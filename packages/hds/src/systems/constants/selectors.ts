export const rawStatusSelectors = {
  enabled: ':not(:disabled):not([aria-disabled="true"])',
  disabled: ':disabled',
  ariaDisabled: '[aria-disabled="true"]',
};

export const statusSelectors = {
  enabled: `&${rawStatusSelectors.enabled}`,
  disabled: `&${rawStatusSelectors.disabled},&${rawStatusSelectors.ariaDisabled}`,
} as const;
