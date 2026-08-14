import { SOCIAL_PLATFORMS } from '../../constants/defaults';

function SocialLinksEditor({ links = [], onChange, title = 'Social links' }) {
  const updateLink = (index, field, value) => {
    const next = links.map((link, i) =>
      i === index ? { ...link, [field]: value } : link
    );
    onChange(next);
  };

  const addLink = () => {
    onChange([...links, { platform: 'github', url: '' }]);
  };

  const removeLink = (index) => {
    onChange(links.filter((_, i) => i !== index));
  };

  return (
    <div className="admin-panel-block">
      <div className="admin-block-header">
        <h3>{title}</h3>
        <button type="button" className="admin-btn admin-btn--ghost" onClick={addLink}>
          Add link
        </button>
      </div>

      {links.length === 0 && (
        <p className="admin-empty-note">No social links added yet.</p>
      )}

      <div className="admin-stack">
        {links.map((link, index) => (
          <div key={`social-${index}`} className="admin-inline-card">
            <div className="admin-grid-2">
              <div className="admin-field">
                <label className="admin-label">Platform</label>
                <select
                  className="admin-input"
                  value={link.platform || 'other'}
                  onChange={(event) =>
                    updateLink(index, 'platform', event.target.value)
                  }
                >
                  {SOCIAL_PLATFORMS.map((platform) => (
                    <option key={platform.value} value={platform.value}>
                      {platform.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="admin-field">
                <label className="admin-label">URL</label>
                <input
                  className="admin-input"
                  type="url"
                  value={link.url || ''}
                  onChange={(event) => updateLink(index, 'url', event.target.value)}
                  placeholder="https://"
                />
              </div>
            </div>
            <button
              type="button"
              className="admin-btn admin-btn--danger"
              onClick={() => removeLink(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialLinksEditor;
