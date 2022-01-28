export type Project = {
  frontmatter: {
    index: number;
    title: string;
    live: string;
    github: string;
    gif: string;
  };
  html: string;
};

export type Bio = {
  html: string;
};

export type Skill = {
  name: string;
  icon: string;
  id: string;
};
