interface ExperienceExternalLink {
  text: string;
  url: string;
}

export interface Experience {
  companyName: string;
  companyUrl: string;
  title: string;
  date: string;
  descriptions: string[];
  tags: string[];
  externalLinks?: ExperienceExternalLink[];
}
