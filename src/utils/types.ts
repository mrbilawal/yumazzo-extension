interface LanguageDetails {
  icon: string;
  difficulty: string;
  description: string;
}

interface InfoItem {
  heading: string;
  className: string[];
  text: string[];
}

export interface Language {
  title: string;
  details: LanguageDetails;
  info: InfoItem[];
}
