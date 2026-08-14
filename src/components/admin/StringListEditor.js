function StringListEditor({
  title,
  items = [],
  onChange,
  placeholder = 'Add item',
  addLabel = 'Add item',
}) {
  const updateItem = (index, value) => {
    const next = items.map((item, i) => (i === index ? value : item));
    onChange(next);
  };

  const addItem = () => onChange([...items, '']);

  const removeItem = (index) => {
    onChange(items.filter((_, i) => i !== index));
  };

  return (
    <div className="admin-panel-block">
      <div className="admin-block-header">
        <h3>{title}</h3>
        <button type="button" className="admin-btn admin-btn--ghost" onClick={addItem}>
          {addLabel}
        </button>
      </div>

      {items.length === 0 && (
        <p className="admin-empty-note">Nothing here yet.</p>
      )}

      <div className="admin-stack">
        {items.map((item, index) => (
          <div key={`${title}-${index}`} className="admin-inline-row">
            <input
              className="admin-input"
              value={item}
              placeholder={placeholder}
              onChange={(event) => updateItem(index, event.target.value)}
            />
            <button
              type="button"
              className="admin-btn admin-btn--danger"
              onClick={() => removeItem(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StringListEditor;
