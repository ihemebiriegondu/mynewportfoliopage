import { useEffect, useState } from 'react';
import { getAboutContent, saveAboutContent } from '../../services/portfolioService';
import { DEFAULT_ABOUT } from '../../constants/defaults';
import {
  cleanStringList,
  cleanTimeline,
} from '../../utils/contentHelpers';
import MediaUpload from '../../components/admin/MediaUpload';
import StringListEditor from '../../components/admin/StringListEditor';
import TimelineEditor from '../../components/admin/TimelineEditor';

function AdminAboutEditor({ onStatus }) {
  const [form, setForm] = useState(DEFAULT_ABOUT);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getAboutContent()
      .then(setForm)
      .catch(() => {
        onStatus(
          'Could not load about content. Add portfolio rules in Firebase Console.',
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
        languages: cleanStringList(form.languages),
        skills: cleanStringList(form.skills),
        interests: cleanStringList(form.interests),
        education: cleanTimeline(form.education),
        experiences: cleanTimeline(form.experiences),
      };
      await saveAboutContent(payload);
      setForm(payload);
      onStatus('About section saved.');
    } catch (error) {
      onStatus('Could not save about section.', true);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="admin-section-loading">Loading about content…</div>;
  }

  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <div>
          <p className="admin-section-eyebrow">Section</p>
          <h2>About</h2>
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
          <label className="admin-label">Display name</label>
          <input
            className="admin-input"
            value={form.name || ''}
            onChange={(event) => updateField('name', event.target.value)}
          />
        </div>
        <div className="admin-field">
          <label className="admin-label">Nationality</label>
          <input
            className="admin-input"
            value={form.nationality || ''}
            onChange={(event) => updateField('nationality', event.target.value)}
          />
        </div>
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
      </div>

      <MediaUpload
        label="About page photo"
        value={form.aboutImage || ''}
        onChange={(url) => updateField('aboutImage', url)}
      />

      <StringListEditor
        title="Languages"
        items={form.languages || []}
        onChange={(languages) => updateField('languages', languages)}
        placeholder="English"
        addLabel="Add language"
      />

      <StringListEditor
        title="Skills"
        items={form.skills || []}
        onChange={(skills) => updateField('skills', skills)}
        placeholder="React"
        addLabel="Add skill"
      />

      <StringListEditor
        title="Interests"
        items={form.interests || []}
        onChange={(interests) => updateField('interests', interests)}
        placeholder="Music"
        addLabel="Add interest"
      />

      <MediaUpload
        label="CV / Resume"
        value={form.cvUrl || ''}
        onChange={(url) => updateField('cvUrl', url)}
        accept="application/pdf,.pdf"
        previewType="file"
        hint="Upload a PDF. Visitors can download it from the About page."
      />

      <TimelineEditor
        title="Education"
        items={form.education || []}
        onChange={(education) => updateField('education', education)}
      />

      <TimelineEditor
        title="Experience"
        items={form.experiences || []}
        onChange={(experiences) => updateField('experiences', experiences)}
        allowBody
      />
    </div>
  );
}

export default AdminAboutEditor;
