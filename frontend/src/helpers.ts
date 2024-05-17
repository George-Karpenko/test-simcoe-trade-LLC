export const allowedAlertVariants = [
  "success",
  "info",
  "warning",
  "error",
] as const;

const allowedBaseButtonVariants = [
  ...allowedAlertVariants,
  "secondary",
  "primary",
];

const allowedOutlineButtonVariants = allowedBaseButtonVariants.map(
  (value) => `outline-${value}` as const
);
export const allowedButtonVariants = [
  ...allowedBaseButtonVariants,
  ...allowedOutlineButtonVariants,
] as const;
