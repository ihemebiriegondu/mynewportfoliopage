import { useEffect, useState } from 'react';
import { getHomeContent, saveHomeContent } from '../../services/portfolioService';
import { DEFAULT_HOME } from '../../constants/defaults';
import { cleanSocialLinks } from '../../utils/contentHelpers';
import MediaUpload from '../../components/admin/MediaUpload';
import SocialLinksEditor from '../../components/admin/SocialLinksEditor';

function AdminHomeEditor({ onStatus }) {
  const [form, setForm] = useState(DEFAULT_HOME);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getHomeContent()
      .then(setForm)
      .catch(() => {
        onStatus(
          'Could not load home content. Add portfolio rules in Firebase Console.',
          true
        );
      })
      .finally(() => setLoading(false));
  }, [onStatus]);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const payload = {
        ...form,
        socialLinks: cleanSocialLinks(form.socialLinks),
      };
      await saveHomeContent(payload);
      setForm(payload);
      onStatus('Home section saved.');
    } catch (error) {
      onStatus('Could not save home section.', true);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="admin-section-loading">Loading home content…</div>;
  }

  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <div>
          <p className="admin-section-eyebrow">Section</p>
          <h2>Home</h2>
        </div>
        <button
          type="button"
          className="admin-btn admin-btn--primary"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? 'Saving…' : 'Save changes'}
        </button>
      </div>

      <div className="admin-form admin-grid-2">
        <div className="admin-field">
          <label className="admin-label">Full name</label>
          <input
            className="admin-input"
            value={form.name || ''}
            onChange={(event) => updateField('name', event.target.value)}
          />
        </div>
        <div className="admin-field">
          <label className="admin-label">Job title</label>
          <input
            className="admin-input"
            value={form.jobTitle || ''}
            onChange={(event) => updateField('jobTitle', event.target.value)}
          />
        </div>
      </div>

      <div className="admin-field">
        <label className="admin-label">Hero description</label>
        <textarea
          className="admin-textarea"
          rows={5}
          value={form.description || ''}
          onChange={(event) => updateField('description', event.target.value)}
        />
      </div>

      <div className="admin-field">
        <label className="admin-label">Hire me link</label>
        <input
          className="admin-input"
          type="url"
          value={form.hireMeLink || ''}
          onChange={(event) => updateField('hireMeLink', event.target.value)}
        />
      </div>

      <MediaUpload
        label="Hero image"
        value={form.heroImage || ''}
        onChange={(url) => updateField('heroImage', url)}
      />

      <SocialLinksEditor
        links={form.socialLinks || []}
        onChange={(links) => updateField('socialLinks', links)}
      />
    </div>
  );
}

export default AdminHomeEditor;
