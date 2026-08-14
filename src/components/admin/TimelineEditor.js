function TimelineEditor({ title, items = [], onChange, allowBody = false }) {
  const updateItem = (index, field, value) => {
    const next = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    onChange(next);
  };

  const addItem = () => {
    onChange([
      ...items,
      { title: '', subTitle: '', text: allowBody ? '' : undefined },
    ]);
  };

  const removeItem = (index) => {
    onChange(items.filter((_, i) => i !== index));
  };

  return (
    <div className="admin-panel-block">
      <div className="admin-block-header">
        <h3>{title}</h3>
        <button type="button" className="admin-btn admin-btn--ghost" onClick={addItem}>
          Add entry
        </button>
      </div>

      {items.length === 0 && (
        <p className="admin-empty-note">No entries yet.</p>
      )}

      <div className="admin-stack">
        {items.map((item, index) => (
          <div key={`${title}-${index}`} className="admin-inline-card">
            <div className="admin-grid-2">
              <div className="admin-field">
                <label className="admin-label">Period / date</label>
                <input
                  className="admin-input"
                  value={item.title || ''}
                  onChange={(event) =>
                    updateItem(index, 'title', event.target.value)
                  }
                  placeholder="July 2025 - Present"
                />
              </div>
              <div className="admin-field">
                <label className="admin-label">Title</label>
                <input
                  className="admin-input"
                  value={item.subTitle || ''}
                  onChange={(event) =>
                    updateItem(index, 'subTitle', event.target.value)
                  }
                  placeholder="Frontend developer - Company"
                />
              </div>
            </div>

            {allowBody && (
              <div className="admin-field">
                <label className="admin-label">Description</label>
                <textarea
                  className="admin-textarea"
                  rows={4}
                  value={item.text || ''}
                  onChange={(event) =>
                    updateItem(index, 'text', event.target.value)
                  }
                />
              </div>
            )}

            <button
              type="button"
              className="admin-btn admin-btn--danger"
              onClick={() => removeItem(index)}
            >
              Remove entry
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelineEditor;
