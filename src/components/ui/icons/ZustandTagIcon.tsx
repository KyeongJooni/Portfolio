import { forwardRef } from 'react';

type ZustandTagIconProps = React.SVGProps<SVGSVGElement> & {
  size?: string | number;
  title?: string;
  color?: string;
};

const ZustandTagIcon = forwardRef<SVGSVGElement, ZustandTagIconProps>(
  ({ size = 24, title = 'Zustand', color = '#7A5030', ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        role="img"
        aria-label={title}
        {...props}
      >
        {title ? <title>{title}</title> : null}
        <circle cx="7.5" cy="7.5" r="3.2" fill={color} />
        <circle cx="16.5" cy="7.5" r="3.2" fill={color} />
        <ellipse cx="12" cy="13.5" rx="7.5" ry="6.2" fill={color} />
        <circle cx="9.4" cy="12.7" r="1.05" fill="#FFFFFF" />
        <circle cx="14.6" cy="12.7" r="1.05" fill="#FFFFFF" />
        <ellipse cx="12" cy="15.5" rx="2.2" ry="1.5" fill="#FFFFFF" />
        <path
          d="M10.7 16.8c.6.6 1.1.8 1.3.8s.7-.2 1.3-.8"
          stroke="#7A5030"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

ZustandTagIcon.displayName = 'ZustandTagIcon';

export default ZustandTagIcon;
