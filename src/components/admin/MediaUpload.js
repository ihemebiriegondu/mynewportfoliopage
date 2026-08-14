import { useRef, useState } from 'react';
import { uploadToCloudinary } from '../../services/cloudinary';

function MediaUpload({
  label,
  value,
  onChange,
  accept = 'image/*',
  hint,
  previewType = 'image',
}) {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFile = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');

    try {
      const url = await uploadToCloudinary(file);
      onChange(url);
    } catch (uploadError) {
      setError(uploadError.message);
    } finally {
      setUploading(false);
      event.target.value = '';
    }
  };

  return (
    <div className="admin-field">
      <label className="admin-label">{label}</label>
      {hint && <p className="admin-hint">{hint}</p>}

      <div className="admin-upload">
        <div className="admin-upload-preview">
          {value && previewType === 'image' ? (
            <img src={value} alt={`${label} preview`} />
          ) : value && previewType === 'file' ? (
            <div className="admin-upload-file">
              <span>CV uploaded</span>
              <a href={value} target="_blank" rel="noreferrer">
                View file
              </a>
            </div>
          ) : (
            <div className="admin-upload-empty">No file yet</div>
          )}
        </div>

        <div className="admin-upload-actions">
          <button
            type="button"
            className="admin-btn admin-btn--ghost"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
          >
            {uploading ? 'Uploading…' : value ? 'Replace' : 'Upload'}
          </button>
          {value && (
            <button
              type="button"
              className="admin-btn admin-btn--danger"
              onClick={() => onChange('')}
              disabled={uploading}
            >
              Remove
            </button>
          )}
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        hidden
        onChange={handleFile}
      />

      {error && <p className="admin-error">{error}</p>}
    </div>
  );
}

export default MediaUpload;
