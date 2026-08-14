import { useEffect, useState } from 'react';
import { getContactContent, saveContactContent } from '../../services/portfolioService';
import { DEFAULT_CONTACT } from '../../constants/defaults';
import { cleanSocialLinks } from '../../utils/contentHelpers';
import SocialLinksEditor from '../../components/admin/SocialLinksEditor';

function AdminContactEditor({ onStatus }) {
  const [form, setForm] = useState(DEFAULT_CONTACT);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getContactContent()
      .then(setForm)
      .catch(() => {
        onStatus(
          'Could not load contact content. Add portfolio rules in Firebase Console.',
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
      await saveContactContent(payload);
      setForm(payload);
      onStatus('Contact section saved.');
    } catch (error) {
      onStatus('Could not save contact section.', true);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="admin-section-loading">Loading contact content…</div>;
  }

  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <div>
          <p className="admin-section-eyebrow">Section</p>
          <h2>Contact</h2>
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
          <label className="admin-label">Email</label>
          <input
            className="admin-input"
            type="email"
            value={form.email || ''}
            onChange={(event) => updateField('email', event.target.value)}
          />
        </div>
        <div className="admin-field">
          <label className="admin-label">Phone</label>
          <input
            className="admin-input"
            value={form.phone || ''}
            onChange={(event) => updateField('phone', event.target.value)}
          />
        </div>
        <div className="admin-field">
          <label className="admin-label">Location label</label>
          <input
            className="admin-input"
            value={form.location || ''}
            onChange={(event) => updateField('location', event.target.value)}
          />
        </div>
        <div className="admin-field">
          <label className="admin-label">Location link</label>
          <input
            className="admin-input"
            type="url"
            value={form.locationUrl || ''}
            onChange={(event) => updateField('locationUrl', event.target.value)}
            placeholder="Google Maps URL"
          />
        </div>
      </div>

      <SocialLinksEditor
        links={form.socialLinks || []}
        onChange={(links) => updateField('socialLinks', links)}
      />
    </div>
  );
}

export default AdminContactEditor;
