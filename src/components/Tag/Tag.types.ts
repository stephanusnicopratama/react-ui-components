import { HTMLAttributes } from "react";

export type TagStatus = "success" | "failed" | "pending";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  status?: TagStatus;
}
