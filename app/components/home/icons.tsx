import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function IconFrame({
  children,
  className = "h-6 w-6",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

export function ParkingIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M7 20V4h6a4 4 0 0 1 0 8H7" />
    </IconFrame>
  );
}

export function CostIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M12 4v16" />
      <path d="M16 7.5c0-1.66-1.79-3-4-3s-4 1.34-4 3 1.79 3 4 3 4 1.34 4 3-1.79 3-4 3-4-1.34-4-3" />
    </IconFrame>
  );
}

export function CompactIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <rect height="12" rx="2" width="12" x="6" y="6" />
      <path d="M10 10h4v4h-4z" />
    </IconFrame>
  );
}

export function CommuteIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M5 16V9l7-5 7 5v7" />
      <path d="M9 20v-4h6v4" />
    </IconFrame>
  );
}

export function SizeIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M6 12h12" />
      <path d="m9 9-3 3 3 3" />
      <path d="m15 9 3 3-3 3" />
    </IconFrame>
  );
}

export function EfficiencyIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M12 4c4.42 0 8 2.69 8 6s-3.58 6-8 6-8-2.69-8-6 3.58-6 8-6Z" />
      <path d="m12 10 4-3" />
      <path d="M12 10v6" />
    </IconFrame>
  );
}

export function ManeuverabilityIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v6" />
      <path d="M21 12h-6" />
      <path d="M12 21v-6" />
      <path d="M3 12h6" />
    </IconFrame>
  );
}

export function MaintenanceIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="m14.5 6.5 3 3" />
      <path d="M4 20l6.5-6.5" />
      <path d="M15 4a3 3 0 0 0-3 3l-7 7a2.83 2.83 0 1 0 4 4l7-7a3 3 0 0 0 3-3" />
    </IconFrame>
  );
}

export function SafetyIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M12 3 6 5.5v5.5c0 4 2.56 7.73 6 9 3.44-1.27 6-5 6-9V5.5L12 3Z" />
      <path d="m9.5 12 1.8 1.8 3.2-3.6" />
    </IconFrame>
  );
}

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="m15 18-6-6 6-6" />
    </IconFrame>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="m9 18 6-6-6-6" />
    </IconFrame>
  );
}
