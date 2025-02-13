export type TProject = {
  title: string;
  description: string;
  overview: string;
  image: string;
  gallery?: string[];
  coreFeatures: string[];
  technologies: string[];
  links: {
    live: string;
    github: {
      frontend: string;
      backend?: string;
    };
  };
};
