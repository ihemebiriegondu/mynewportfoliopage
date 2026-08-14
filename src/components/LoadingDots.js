function LoadingDots({ label = 'Loading projects' }) {
  return (
    <div className="projects-loading-state" role="status" aria-live="polite">
      <div className="loading-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="loading-dots-label">{label}</p>
    </div>
  );
}

export default LoadingDots;
