'use client';

import { useState, useRef } from 'react';
import styles from './TemplateManager.module.css';

interface AlbumTemplate {
  id: string;
  name: string;
  thumbnail: string;
  pages: number;
  layout: 'grid' | 'masonry' | 'timeline';
  theme: 'classic' | 'modern' | 'vintage' | 'minimal';
  isActive: boolean;
  createdAt: string;
  createdBy: string;
}

const mockTemplates: AlbumTemplate[] = [
  {
    id: 'classic-grid',
    name: 'Классическая сетка',
    thumbnail: '/images/templates/classic-grid.jpg',
    pages: 20,
    layout: 'grid',
    theme: 'classic',
    isActive: true,
    createdAt: '2024-01-15',
    createdBy: 'Дизайнер 1'
  },
  {
    id: 'modern-masonry',
    name: 'Современная кладка',
    thumbnail: '/images/templates/modern-masonry.jpg',
    pages: 25,
    layout: 'masonry',
    theme: 'modern',
    isActive: true,
    createdAt: '2024-01-20',
    createdBy: 'Дизайнер 2'
  },
  {
    id: 'vintage-timeline',
    name: 'Винтажная хронология',
    thumbnail: '/images/templates/vintage-timeline.jpg',
    pages: 30,
    layout: 'timeline',
    theme: 'vintage',
    isActive: false,
    createdAt: '2024-01-10',
    createdBy: 'Дизайнер 1'
  }
];

export default function TemplateManager() {
  const [templates, setTemplates] = useState<AlbumTemplate[]>(mockTemplates);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<AlbumTemplate | null>(null);
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Фильтрация шаблонов
  const filteredTemplates = templates.filter(template => {
    const matchesFilter = filter === 'all' || 
      (filter === 'active' && template.isActive) || 
      (filter === 'inactive' && !template.isActive);
    
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.theme.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.layout.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  // Добавление нового шаблона
  const handleAddTemplate = (templateData: Partial<AlbumTemplate>) => {
    const newTemplate: AlbumTemplate = {
      id: `template-${Date.now()}`,
      name: templateData.name || 'Новый шаблон',
      thumbnail: templateData.thumbnail || '/images/templates/default.jpg',
      pages: templateData.pages || 20,
      layout: templateData.layout || 'grid',
      theme: templateData.theme || 'classic',
      isActive: true,
      createdAt: new Date().toISOString().split('T')[0],
      createdBy: 'Текущий пользователь'
    };

    setTemplates(prev => [...prev, newTemplate]);
    setShowAddForm(false);
  };

  // Редактирование шаблона
  const handleEditTemplate = (templateId: string, updates: Partial<AlbumTemplate>) => {
    setTemplates(prev => prev.map(template => 
      template.id === templateId ? { ...template, ...updates } : template
    ));
    setEditingTemplate(null);
  };

  // Удаление шаблона
  const handleDeleteTemplate = (templateId: string) => {
    if (confirm('Вы уверены, что хотите удалить этот шаблон?')) {
      setTemplates(prev => prev.filter(template => template.id !== templateId));
    }
  };

  // Переключение статуса шаблона
  const toggleTemplateStatus = (templateId: string) => {
    setTemplates(prev => prev.map(template => 
      template.id === templateId ? { ...template, isActive: !template.isActive } : template
    ));
  };

  // Загрузка изображения шаблона
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        // Здесь можно сохранить изображение и получить URL
        console.log('Загружено изображение:', event.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.templateManager}>
      <div className={styles.managerHeader}>
        <h3 className={styles.sectionTitle}>Управление шаблонами</h3>
        <p className={styles.sectionDescription}>
          Создавайте и управляйте шаблонами для фотоальбомов
        </p>
      </div>

      {/* Панель управления */}
      <div className={styles.controlsPanel}>
        <div className={styles.searchAndFilter}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Поиск шаблонов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <span className={styles.searchIcon}>🔍</span>
          </div>
          
          <div className={styles.filterButtons}>
            <button 
              className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
              onClick={() => setFilter('all')}
            >
              Все ({templates.length})
            </button>
            <button 
              className={`${styles.filterButton} ${filter === 'active' ? styles.active : ''}`}
              onClick={() => setFilter('active')}
            >
              Активные ({templates.filter(t => t.isActive).length})
            </button>
            <button 
              className={`${styles.filterButton} ${filter === 'inactive' ? styles.active : ''}`}
              onClick={() => setFilter('inactive')}
            >
              Неактивные ({templates.filter(t => !t.isActive).length})
            </button>
          </div>
        </div>

        <button 
          className={styles.addButton}
          onClick={() => setShowAddForm(true)}
        >
          <span className={styles.addIcon}>+</span>
          Добавить шаблон
        </button>
      </div>

      {/* Список шаблонов */}
      <div className={styles.templatesList}>
        {filteredTemplates.map((template) => (
          <div key={template.id} className={styles.templateCard}>
            <div className={styles.templateThumbnail}>
              <img src={template.thumbnail} alt={template.name} />
              <div className={styles.templateStatus}>
                <span className={`${styles.statusBadge} ${template.isActive ? styles.active : styles.inactive}`}>
                  {template.isActive ? 'Активен' : 'Неактивен'}
                </span>
              </div>
            </div>
            
            <div className={styles.templateInfo}>
              <h4 className={styles.templateName}>{template.name}</h4>
              <div className={styles.templateMeta}>
                <span className={styles.metaItem}>
                  <strong>Страниц:</strong> {template.pages}
                </span>
                <span className={styles.metaItem}>
                  <strong>Макет:</strong> {template.layout}
                </span>
                <span className={styles.metaItem}>
                  <strong>Тема:</strong> {template.theme}
                </span>
                <span className={styles.metaItem}>
                  <strong>Создан:</strong> {template.createdAt}
                </span>
                <span className={styles.metaItem}>
                  <strong>Автор:</strong> {template.createdBy}
                </span>
              </div>
            </div>

            <div className={styles.templateActions}>
              <button 
                className={styles.actionButton}
                onClick={() => setEditingTemplate(template)}
              >
                ✏️ Редактировать
              </button>
              <button 
                className={styles.actionButton}
                onClick={() => toggleTemplateStatus(template.id)}
              >
                {template.isActive ? '⏸️ Деактивировать' : '▶️ Активировать'}
              </button>
              <button 
                className={styles.actionButton}
                onClick={() => handleDeleteTemplate(template.id)}
              >
                🗑️ Удалить
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Форма добавления шаблона */}
      {showAddForm && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h4>Добавить новый шаблон</h4>
              <button 
                className={styles.closeButton}
                onClick={() => setShowAddForm(false)}
              >
                ✕
              </button>
            </div>
            
            <div className={styles.formContent}>
              <div className={styles.formGroup}>
                <label>Название шаблона</label>
                <input type="text" placeholder="Введите название" />
              </div>
              
              <div className={styles.formGroup}>
                <label>Изображение шаблона</label>
                <div className={styles.imageUpload}>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className={styles.hiddenInput}
                  />
                  <button 
                    className={styles.uploadButton}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Выбрать изображение
                  </button>
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Количество страниц</label>
                  <input type="number" min="10" max="100" defaultValue="20" />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Макет</label>
                  <select>
                    <option value="grid">Сетка</option>
                    <option value="masonry">Кладка</option>
                    <option value="timeline">Хронология</option>
                  </select>
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label>Тема</label>
                <select>
                  <option value="classic">Классическая</option>
                  <option value="modern">Современная</option>
                  <option value="vintage">Винтажная</option>
                  <option value="minimal">Минималистичная</option>
                </select>
              </div>
            </div>
            
            <div className={styles.modalActions}>
              <button 
                className={styles.cancelButton}
                onClick={() => setShowAddForm(false)}
              >
                Отмена
              </button>
              <button 
                className={styles.saveButton}
                onClick={() => handleAddTemplate({})}
              >
                Сохранить шаблон
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Форма редактирования шаблона */}
      {editingTemplate && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h4>Редактировать шаблон</h4>
              <button 
                className={styles.closeButton}
                onClick={() => setEditingTemplate(null)}
              >
                ✕
              </button>
            </div>
            
            <div className={styles.formContent}>
              <div className={styles.formGroup}>
                <label>Название шаблона</label>
                <input 
                  type="text" 
                  defaultValue={editingTemplate.name}
                />
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Количество страниц</label>
                  <input 
                    type="number" 
                    min="10" 
                    max="100" 
                    defaultValue={editingTemplate.pages}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Макет</label>
                  <select defaultValue={editingTemplate.layout}>
                    <option value="grid">Сетка</option>
                    <option value="masonry">Кладка</option>
                    <option value="timeline">Хронология</option>
                  </select>
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label>Тема</label>
                <select defaultValue={editingTemplate.theme}>
                  <option value="classic">Классическая</option>
                  <option value="modern">Современная</option>
                  <option value="vintage">Винтажная</option>
                  <option value="minimal">Минималистичная</option>
                </select>
              </div>
            </div>
            
            <div className={styles.modalActions}>
              <button 
                className={styles.cancelButton}
                onClick={() => setEditingTemplate(null)}
              >
                Отмена
              </button>
              <button 
                className={styles.saveButton}
                onClick={() => handleEditTemplate(editingTemplate.id, {})}
              >
                Сохранить изменения
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
