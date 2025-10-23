'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/components/Header.module.css';

interface SearchResult {
  label: string;
  href: string;
  category: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchResults: SearchResult[];
  searchQuery: string;
  onSearch: (query: string) => void;
}

export default function SearchModal({ 
  isOpen, 
  onClose, 
  searchResults, 
  searchQuery, 
  onSearch 
}: SearchModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.searchOverlay} onClick={onClose}>
      <div className={styles.searchModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.searchHeader}>
          <h3>Поиск услуг</h3>
          <button className={styles.searchClose} onClick={onClose}>
            ✕
          </button>
        </div>
        
        <div className={styles.searchitem}>
          <form 
            role="search" 
            className={styles.searchform}
            onSubmit={(e) => e.preventDefault()}
          >
            <div style={{ position: 'relative' }}>
              <label className={styles.screenReaderText} htmlFor="s">
                Найти:
              </label>
              <input 
                type="text" 
                value={searchQuery} 
                onChange={(e) => onSearch(e.target.value)}
                name="s" 
                id="s"
                placeholder="Введите запрос..."
                autoFocus
              />
              <div className={`${styles.livesearchResults} ${searchQuery.length >= 3 || searchQuery.length > 0 ? styles.shown : ''}`}>
                {searchQuery.length < 3 ? (
                  <div className={styles.livesearchNotfound}>
                    Поиск начнётся после ввода 3-х символов
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className={styles.resultsContainer}>
                    {searchResults.map((result, index) => (
                      <a
                        key={index}
                        href={result.href}
                        className={styles.searchResultItem}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                      >
                        <div className={styles.resultLabel}>{result.label}</div>
                        <div className={styles.resultCategory}>{result.category}</div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className={styles.livesearchNotfound}>
                    Ничего не найдено
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
