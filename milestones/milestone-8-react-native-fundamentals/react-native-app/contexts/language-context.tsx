import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Platform } from 'react-native';

export type Language = 'en' | 'es' | 'fr';

type Copy = {
  appLabel: string;
  homeTitle: string;
  homeAccent: string;
  homeSubtitle: string;
  pickerLabel: string;
  pickerDescription: string;
  savedPreference: string;
};

type LanguageContextValue = {
  copy: Copy;
  isReady: boolean;
  language: Language;
  isPersisted: boolean;
  setLanguage: (nextLanguage: Language) => Promise<void>;
  supportedLanguages: { code: Language; label: string }[];
};

const LANGUAGE_STORAGE_KEY = 'user-language-preference';
let memoryLanguagePreference: Language | null = null;

const SUPPORTED_LANGUAGES: LanguageContextValue['supportedLanguages'] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Espanol' },
  { code: 'fr', label: 'Francais' },
];

const COPY: Record<Language, Copy> = {
  en: {
    appLabel: 'Portfolio',
    homeTitle: 'Lysander Uy',
    homeAccent: 'Developer',
    homeSubtitle:
      'Full Stack Developer and Mobile App Developer crafting clean, production-ready digital products.',
    pickerLabel: 'Language',
    pickerDescription: 'Choose the language used in this sample component.',
    savedPreference: 'Your selection is saved on this device.',
  },
  es: {
    appLabel: 'Portafolio',
    homeTitle: 'Lysander Uy',
    homeAccent: 'Desarrollador',
    homeSubtitle:
      'Desarrollador full stack y de apps moviles que crea productos digitales limpios y listos para produccion.',
    pickerLabel: 'Idioma',
    pickerDescription: 'Elige el idioma usado en este componente de ejemplo.',
    savedPreference: 'Tu seleccion se guarda en este dispositivo.',
  },
  fr: {
    appLabel: 'Portfolio',
    homeTitle: 'Lysander Uy',
    homeAccent: 'Developpeur',
    homeSubtitle:
      'Developpeur full stack et mobile qui concoit des produits numeriques propres et prets pour la production.',
    pickerLabel: 'Langue',
    pickerDescription: 'Choisissez la langue utilisee dans ce composant exemple.',
    savedPreference: 'Votre choix est enregistre sur cet appareil.',
  },
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isReady, setIsReady] = useState(false);
  const [isPersisted, setIsPersisted] = useState(true);

  useEffect(() => {
    const loadLanguagePreference = async () => {
      try {
        const storedLanguage = await readStoredLanguage();
        if (storedLanguage && isLanguage(storedLanguage)) {
          setLanguageState(storedLanguage);
        }
      } catch {
        setIsPersisted(false);
      } finally {
        setIsReady(true);
      }
    };

    void loadLanguagePreference();
  }, []);

  const setLanguage = async (nextLanguage: Language) => {
    setLanguageState(nextLanguage);

    try {
      await writeStoredLanguage(nextLanguage);
      setIsPersisted(true);
    } catch {
      memoryLanguagePreference = nextLanguage;
      setIsPersisted(false);
    }
  };

  const value = useMemo(
    () => ({
      copy: COPY[language],
      isReady,
      isPersisted,
      language,
      setLanguage,
      supportedLanguages: SUPPORTED_LANGUAGES,
    }),
    [isPersisted, isReady, language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}

function isLanguage(value: string): value is Language {
  return SUPPORTED_LANGUAGES.some((language) => language.code === value);
}

async function readStoredLanguage() {
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  }

  try {
    return await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return memoryLanguagePreference;
  }
}

async function writeStoredLanguage(language: Language) {
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    return;
  }

  await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  memoryLanguagePreference = language;
}
