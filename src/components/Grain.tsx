export function Grain() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: '-50%',
        width: '200%',
        height: '200%',
        zIndex: 9998,
        pointerEvents: 'none',
        opacity: 0.055,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        animation: 'grain 0.6s steps(2) infinite',
      }}
    />
  );
}
