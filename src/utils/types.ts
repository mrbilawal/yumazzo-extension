interface LanguageDetails {
  classes: string;
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
  flag: string;
  time: string,
  details: LanguageDetails;
  info: InfoItem[];
}
