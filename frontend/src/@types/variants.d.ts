import { allowedAlertVariants, allowedButtonVariants } from "@/helpers";

export type ContextualAlertVariant = (typeof allowedAlertVariants)[number];

export type ContextualButtonVariant = (typeof allowedButtonVariants)[number];
