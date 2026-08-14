import { useEffect, useState } from 'react';
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../../services/portfolioService';
import MediaUpload from '../../components/admin/MediaUpload';

const EMPTY_PROJECT = {
  Title: '',
  ProjectLanguages: '',
  previewLink: '',
  githubLink: '',
  DisplayImage: '',
  relatedImage1: '',
  relatedImage2: '',
  importance: 100,
};

function AdminProjectsEditor({ onStatus }) {
  const [projects, setProjects] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [form, setForm] = useState(EMPTY_PROJECT);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const loadProjects = async () => {
    const data = await getProjects();
    setProjects(data);
    return data;
  };

  useEffect(() => {
    loadProjects().finally(() => setLoading(false));
  }, []);

  const startNew = () => {
    setSelectedId(null);
    setForm({ ...EMPTY_PROJECT, importance: (projects.length + 1) * 10 });
  };

  const startEdit = (project) => {
    setSelectedId(project.id);
    setForm({
      Title: project.Title || '',
      ProjectLanguages: project.ProjectLanguages || '',
      previewLink: project.previewLink || '',
      githubLink: project.githubLink || '',
      DisplayImage: project.DisplayImage || '',
      relatedImage1: project.relatedImage1 || '',
      relatedImage2: project.relatedImage2 || '',
      importance: project.importance ?? 100,
    });
  };

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const payload = {
        ...form,
        importance: Number(form.importance) || 100,
      };

      if (selectedId) {
        await updateProject(selectedId, payload);
        onStatus('Project updated.');
      } else {
        const id = await createProject(payload);
        setSelectedId(id);
        onStatus('Project created.');
      }

      await loadProjects();
    } catch (error) {
      onStatus('Could not save project.', true);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedId) return;
    if (!window.confirm('Delete this project permanently?')) return;

    setSaving(true);
    try {
      await deleteProject(selectedId);
      setSelectedId(null);
      setForm(EMPTY_PROJECT);
      await loadProjects();
      onStatus('Project deleted.');
    } catch (error) {
      onStatus('Could not delete project.', true);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="admin-section-loading">Loading projects…</div>;
  }

  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <div>
          <p className="admin-section-eyebrow">Section</p>
          <h2>Projects</h2>
        </div>
        <button type="button" className="admin-btn admin-btn--ghost" onClick={startNew}>
          New project
        </button>
      </div>

      <div className="admin-projects-layout">
        <div className="admin-projects-list">
          {projects.length === 0 && (
            <p className="admin-empty-note">No projects yet.</p>
          )}
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              className={`admin-project-item${
                selectedId === project.id ? ' is-active' : ''
              }`}
              onClick={() => startEdit(project)}
            >
              <strong>{project.Title || 'Untitled project'}</strong>
              <span>{project.ProjectLanguages || 'No tech stack set'}</span>
            </button>
          ))}
        </div>

        <div className="admin-projects-form">
          <div className="admin-form admin-grid-2">
            <div className="admin-field">
              <label className="admin-label">Project name</label>
              <input
                className="admin-input"
                value={form.Title}
                onChange={(event) => updateField('Title', event.target.value)}
              />
            </div>
            <div className="admin-field">
              <label className="admin-label">Built with</label>
              <input
                className="admin-input"
                value={form.ProjectLanguages}
                onChange={(event) =>
                  updateField('ProjectLanguages', event.target.value)
                }
              />
            </div>
            <div className="admin-field">
              <label className="admin-label">Live preview URL</label>
              <input
                className="admin-input"
                type="url"
                value={form.previewLink}
                onChange={(event) => updateField('previewLink', event.target.value)}
              />
            </div>
            <div className="admin-field">
              <label className="admin-label">GitHub URL</label>
              <input
                className="admin-input"
                type="url"
                value={form.githubLink}
                onChange={(event) => updateField('githubLink', event.target.value)}
              />
            </div>
            <div className="admin-field">
              <label className="admin-label">Sort order (lower shows first)</label>
              <input
                className="admin-input"
                type="number"
                value={form.importance}
                onChange={(event) => updateField('importance', event.target.value)}
              />
            </div>
          </div>

          <MediaUpload
            label="Cover image"
            value={form.DisplayImage}
            onChange={(url) => updateField('DisplayImage', url)}
          />
          <MediaUpload
            label="Gallery image 2"
            value={form.relatedImage1}
            onChange={(url) => updateField('relatedImage1', url)}
          />
          <MediaUpload
            label="Gallery image 3"
            value={form.relatedImage2}
            onChange={(url) => updateField('relatedImage2', url)}
          />

          <div className="admin-form-actions">
            <button
              type="button"
              className="admin-btn admin-btn--primary"
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? 'Saving…' : selectedId ? 'Update project' : 'Create project'}
            </button>
            {selectedId && (
              <button
                type="button"
                className="admin-btn admin-btn--danger"
                onClick={handleDelete}
                disabled={saving}
              >
                Delete project
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProjectsEditor;
