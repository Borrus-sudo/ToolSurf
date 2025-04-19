export const ArrowRight = ({ className = "", color = "white" }: { className?: string; color?: string }) => (
  <svg
    width="120"
    height="60"
    viewBox="0 0 120 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`hand-drawn-arrow ${className}`}
  >
    <path
      d="M5.5 30.5C19.5 28.5 47.5 25.5 75.5 28.5C103.5 31.5 107 40 107 40"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M95 30C98.5 33.5 105.5 38.5 107 40C108.5 41.5 104 47.5 101 50"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

export const ArrowDown = ({ className = "", color = "white" }: { className?: string; color?: string }) => (
  <svg
    width="60"
    height="120"
    viewBox="0 0 60 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`hand-drawn-arrow ${className}`}
  >
    <path
      d="M30.5 5.5C28.5 19.5 25.5 47.5 28.5 75.5C31.5 103.5 40 107 40 107"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M30 95C33.5 98.5 38.5 105.5 40 107C41.5 108.5 47.5 104 50 101"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

export const ArrowCurved = ({ className = "", color = "white" }: { className?: string; color?: string }) => (
  <svg
    width="150"
    height="100"
    viewBox="0 0 150 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`hand-drawn-arrow ${className}`}
  >
    <path
      d="M10 80C20 60 50 20 90 15C130 10 140 40 140 40"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M125 30C130 33 138 38 140 40C142 42 138 48 135 50"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)
