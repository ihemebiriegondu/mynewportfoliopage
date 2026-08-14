import { useEffect, useState } from 'react';
import {
  getHomeContent,
  getAboutContent,
  getContactContent,
} from '../services/portfolioService';
import {
  DEFAULT_HOME,
  DEFAULT_ABOUT,
  DEFAULT_CONTACT,
} from '../constants/defaults';

const FETCHERS = {
  home: getHomeContent,
  about: getAboutContent,
  contact: getContactContent,
};

const DEFAULTS = {
  home: DEFAULT_HOME,
  about: DEFAULT_ABOUT,
  contact: DEFAULT_CONTACT,
};

export function usePortfolioSection(section) {
  const [data, setData] = useState(DEFAULTS[section]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    FETCHERS[section]()
      .then((result) => {
        if (active) {
          setData(result);
          setError(null);
        }
      })
      .catch((fetchError) => {
        if (active) {
          console.error(fetchError);
          setError(fetchError);
          setData(DEFAULTS[section]);
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [section]);

  return { data, loading, error, setData };
}
