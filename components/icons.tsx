type IconProps = {
  className?: string;
};

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServiceIcon({
  name,
  className
}: {
  name: "events" | "representation" | "contact" | "sales" | "logistics" | "compliance";
  className?: string;
}) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  const paths = {
    events: (
      <>
        <rect x="4" y="6" width="16" height="14" rx="2" {...shared} />
        <path d="M8 3V9M16 3V9M4 11H20" {...shared} />
      </>
    ),
    representation: (
      <>
        <path d="M4 19V8L12 4L20 8V19" {...shared} />
        <path d="M9 19V13H15V19" {...shared} />
      </>
    ),
    contact: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" {...shared} />
        <path d="M7 9H17M7 13H13" {...shared} />
      </>
    ),
    sales: (
      <>
        <path d="M5 18L10 13L13 16L19 9" {...shared} />
        <path d="M15 9H19V13" {...shared} />
      </>
    ),
    logistics: (
      <>
        <path d="M3 7H14V17H3z" {...shared} />
        <path d="M14 10H18L21 13V17H14" {...shared} />
        <circle cx="8" cy="18" r="2" {...shared} />
        <circle cx="17" cy="18" r="2" {...shared} />
      </>
    ),
    compliance: (
      <>
        <path d="M7 4H17V20L12 17L7 20V4Z" {...shared} />
        <path d="M10 10L11.5 11.5L15 8" {...shared} />
      </>
    )
  };

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
